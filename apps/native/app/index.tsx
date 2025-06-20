"use client"

import { useCallback, useEffect, useState } from "react"
import { SafeAreaView, RefreshControl, StyleSheet, View, ScrollView, Image, Dimensions, Text, ActivityIndicator, Platform } from "react-native"
import { StatusBar } from "expo-status-bar"
import * as Location from 'expo-location';

import {
  useTheme,
  Copyright,
  DaySummary,
  TodayForecastDetails,
  NextDays,
  HourlyForecastComponent,
  Today,
  roundValue,
  Card,
  LoadingComponent,
  useLoading,
} from "@repo/ui"
import { useFonts } from "expo-font"
import {
  Jost_400Regular,
  Jost_700Bold,
  Jost_600SemiBold,
  Jost_500Medium,
  Jost_800ExtraBold,
} from "@expo-google-fonts/jost"
import { SplashScreen, useRouter } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage"

const WEATHER_STORAGE_KEY = "weatherData"
const WEATHER_TIMESTAMP_KEY = "weatherTimestamp"
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds

SplashScreen.preventAutoHideAsync();


function ThemedApp() {
  const router = useRouter()
  const { trackPromise } = useLoading()
  const { themeValues } = useTheme()
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_700Bold, Jost_600SemiBold, Jost_500Medium, Jost_800ExtraBold })

  // Initialize with null, but we'll try to load from AsyncStorage immediately
  const [weatherData, setWeatherData] = useState<any>(null)
  const [refreshing, setRefreshing] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)

  // Fetch weather data from API

  const LOCATION_PERMISSION_KEY = "locationPermission";

  // Fetch weather data from API
  const fetchWeatherData = async () => {
    try {
      await trackPromise(
        (async () => {
          const fromCurrentGPS = await AsyncStorage.getItem("fromCurrentGPS");
          let apiUrl = "https://7ebb9482-9577-4cf6-8ce1-07ac39c355ab.mock.pstmn.io/forecast.json?key=72b1445623d947fb800102148220106&q=Arad&days=5&aqi=yes&alerts=yes";

          if (fromCurrentGPS === "true") {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              console.log('Permission to access location was denied');
              return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            console.log(location.coords)
            apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=72b1445623d947fb800102148220106&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes&lang=ro`;
          } else {
            let location: any = await AsyncStorage.getItem('currentLocation');
            const { lat, lon } = location ? JSON.parse(location) : { lat: 46.1667, lon: 21.3167 };
            apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=72b1445623d947fb800102148220106&q=${lat},${lon}&days=5&aqi=yes&alerts=yes&lang=ro`;

          }

          const response = await fetch(apiUrl);
          const data = await response.json();
          await AsyncStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(data));
          await AsyncStorage.setItem(WEATHER_TIMESTAMP_KEY, Date.now().toString());
          setWeatherData(data);

        })()
      )

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  // Load weather data from local storage or fetch from API
  const loadWeatherData = async () => {
    try {
      // Try to get cached data first
      const savedData = await AsyncStorage.getItem(WEATHER_STORAGE_KEY)
      const savedTimestamp = await AsyncStorage.getItem(WEATHER_TIMESTAMP_KEY)

      if (savedData) {
        // Set the cached data immediately
        setWeatherData(JSON.parse(savedData))
        setIsInitializing(false)

        // Check if we need to refresh in the background
        if (!savedTimestamp || Date.now() - Number.parseInt(savedTimestamp, 10) >= CACHE_DURATION) {
          // Fetch new data in the background if cache is expired
          fetchWeatherData()
        }
      } else {
        // No cached data, fetch new data
        await fetchWeatherData()
        setIsInitializing(false)
      }
    } catch (error) {
      console.error("Error loading weather data:", error)
      setIsInitializing(false)
    }
  }

  // Refresh handler
  const onRefresh = useCallback(async () => {
    try {
      const savedTimestamp = await AsyncStorage.getItem(WEATHER_TIMESTAMP_KEY)
      if (!savedTimestamp || Date.now() - Number.parseInt(savedTimestamp, 10) >= CACHE_DURATION) {
        fetchWeatherData()
      }
      setRefreshing(true)
      await fetchWeatherData()
      setRefreshing(false)

    } catch (error) { console.log(error) }
  }, [])

  useEffect(() => {
    const prepareApp = async () => {
      await loadWeatherData();
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  useEffect(() => {
    const checkLocationChange = async () => {
      try {
        const locationChanged = Platform.OS === 'web'
          ? localStorage.getItem('locationChanged')
          : await AsyncStorage.getItem('locationChanged');

        if (locationChanged === 'true') {
          // Reîncarcă datele meteo
          await fetchWeatherData();

          // Resetează flag-ul
          if (Platform.OS === 'web') {
            localStorage.setItem('locationChanged', 'false');
          } else {
            await AsyncStorage.setItem('locationChanged', 'false');
          }
        }
      } catch (error) {
        console.error("Error checking location change:", error);
      }
    };

    checkLocationChange();
  }, []);

  if (!fontsLoaded || !weatherData) {
    return <LoadingComponent />;
  }


  const { width } = Dimensions.get("window")
  const isTablet = width >= 768

  // if (!weatherData) {
  //   return (<LoadingComponent />)
  // }
  const { location, current, forecast } = weatherData

  const conditions_map: any = {
    "1000": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Clear/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Clear/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1003": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Cloudy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Cloudy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1006": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Cloudy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Cloudy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1009": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Cloudy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Cloudy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1030": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Foggy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Foggy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1063": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1066": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1069": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1072": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1087": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Thunder/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Thunder/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1114": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1117": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Thunder/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Thunder/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1135": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Foggy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Foggy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1147": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Foggy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Foggy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1150": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1153": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1168": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1171": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1180": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1183": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1186": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1189": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1192": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1195": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1198": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1201": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1204": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1207": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1210": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1213": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1216": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1219": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1222": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1225": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1237": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1240": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1243": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1246": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Rainy/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Rainy/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1249": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1252": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1255": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1258": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1261": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1264": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1273": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Thunder/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Thunder/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1276": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Thunder/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Thunder/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1279": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
    "1282": {
      image: {
        day: require("@repo/ui/assets/weather-conditions/Day/Snow/1.png"),
        night: require("@repo/ui/assets/weather-conditions/Night/Snow/1.png"),
      },
      icon: {
        day: 1,
        night: 2,
      },
    },
  }

  const daySummary = {
    mintemp_c: forecast.forecastday[0].day.mintemp_c,
    maxtemp_c: forecast.forecastday[0].day.maxtemp_c,
    daily_chance_of_rain: forecast.forecastday[0].day.daily_chance_of_rain,
    uv: current.uv,
  }

  const detailsData = [
    {
      property: "Wind",
      value: `${roundValue(forecast.forecastday[0].day.maxwind_kph)} km/h`,
      icon: "wind",
    },
    {
      property: "Humidity",
      value: `${roundValue(forecast.forecastday[0].day.avghumidity)}%`,
      icon: "humidity",
    },
    {
      property: "Air pressure",
      value: `${roundValue(current.pressure_mb)} mm Hg`,
      icon: "air-pressure",
    },
    {
      property: "Visibility",
      value: `${roundValue(forecast.forecastday[0].day.avgvis_km)} km`,
      icon: "visibility",
    },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeValues.colors.background }}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {/* Background Image and Today Component */}
        <View style={{ width: "100%", height: 400 }}>
          <Image
            source={conditions_map[current?.condition?.code]?.image[current.is_day ? "day" : "night"]}
            style={{ width: "100%", height: "100%", position: "absolute", opacity: 1 }}
          />
          <Today currentData={current} onNavigate={router.push} location={location} isWhite />
        </View>

        {/* Main Content */}
        <View style={{ ...styles.container, paddingHorizontal: isTablet ? 120 : 15 }}>
          <View style={{ marginTop: 40, marginHorizontal: 15 }}>
            <DaySummary isSmallElement={false} data={daySummary} />
          </View>
          <HourlyForecastComponent style={{}} hoursData={forecast.forecastday[0].hour} nextHoursData={forecast.forecastday[1].hour} />
          <NextDays dayForecastData={forecast.forecastday} />
          <TodayForecastDetails
            data={detailsData}
            astro={forecast.forecastday[0].astro}
            aqi={current.air_quality.pm2_5}
          />
          <StatusBar style="auto" />
          <Copyright />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default function Native() {
  return <ThemedApp />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    marginTop: -120,
  },
})

