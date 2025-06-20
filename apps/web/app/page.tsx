"use client"

import { Today, DaySummary, HourlyForecastComponent, NextDays, TodayForecastDetails, roundValue, LoadingComponent } from "@repo/ui"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "../styles/index.module.css"
import { useEffect, useMemo, useState } from "react"

export default function Web() {
  const WEATHER_STORAGE_KEY = "weatherData"
  const WEATHER_TIMESTAMP_KEY = "weatherTimestamp"
  const TWENTY_MINUTES = 0 * 60 * 1000

  const useWeatherData = () => {
    const [weatherData, setWeatherData] = useState<any>(() => {
      // Initialize with cached data immediately if available
      const savedData = localStorage.getItem(WEATHER_STORAGE_KEY)
      if (savedData) {
        return JSON.parse(savedData)
      }
      return null
    })


    const LOCATION_PERMISSION_KEY = "locationPermission";
    const fetchWeatherData = async () => {
      // localStorage.removeItem('savedLocations')
      try {
        const fromCurrentGPS = localStorage.getItem("fromCurrentGPS");
        let apiUrl = "https://7ebb9482-9577-4cf6-8ce1-07ac39c355ab.mock.pstmn.io/forecast.json?key=72b1445623d947fb800102148220106&q=Arad&days=5&aqi=yes&alerts=yes";
    
        if (fromCurrentGPS === "true") {
          if (!navigator.geolocation) {
            console.log("Geolocation is not supported by this browser.");
            return;
          }
    
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              console.log("User location:", latitude, longitude);
    
              const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=72b1445623d947fb800102148220106&q=${latitude},${longitude}&days=5&aqi=yes&alerts=yes&lang=ro`;
    
              try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                localStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(data));
                localStorage.setItem(WEATHER_TIMESTAMP_KEY, Date.now().toString());
                setWeatherData(data);
              } catch (error) {
                console.error("Error fetching weather data:", error);
              }
            },
            (error) => {
              console.error("Error getting location:", error.message);
            }
          );
    
          return; // Ieșim pentru că datele vor fi preluate asincron
        }
        else{
          let location: any = localStorage.getItem('currentLocation');
          const { lat, lon } = location ? JSON.parse(location) : { lat: 46.1667, lon: 21.3167 };
          apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=72b1445623d947fb800102148220106&q=${lat},${lon}&days=5&aqi=yes&alerts=yes&lang=ro`;
        }
    
        // Fetch implicit pentru locația presetată (Arad)
        const response = await fetch(apiUrl);
        const data = await response.json();
        localStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(data));
        localStorage.setItem(WEATHER_TIMESTAMP_KEY, Date.now().toString());
        setWeatherData(data);
        console.log("Weather data fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    useEffect(() => {
      const savedTimestamp = localStorage.getItem(WEATHER_TIMESTAMP_KEY)

      // Check if we need to refresh the data
      if (!savedTimestamp || Date.now() - Number.parseInt(savedTimestamp, 10) >= TWENTY_MINUTES) {
        fetchWeatherData()
      }
    }, [])

    return weatherData
  }

  const router = useRouter()

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

  const weatherData = useWeatherData()
  const memoizedWeatherData = useMemo(() => weatherData, [weatherData])

  if (!memoizedWeatherData) {
    return (
      <LoadingComponent />
    )
  }

  const { location, current, forecast } = memoizedWeatherData

  const daySummary: any = {
    mintemp_c: forecast.forecastday[0].day.mintemp_c,
    maxtemp_c: forecast.forecastday[0].day.maxtemp_c,
    daily_chance_of_rain: forecast.forecastday[0].day.daily_chance_of_rain,
    uv: current.uv,
  }

  const data = [
    {
      property: "Wind",
      value: roundValue(forecast.forecastday[0].day.maxwind_kph) + " km/h",
      icon: "wind",
    },
    {
      property: "Humidity",
      value: roundValue(forecast.forecastday[0].day.avghumidity) + "%",
      icon: "humidity",
    },
    {
      property: "Air pressure",
      value: roundValue(current.pressure_mb) + " mm Hg",
      icon: "air-pressure",
    },
    {
      property: "Visibility",
      value: roundValue(forecast.forecastday[0].day.avgvis_km) + " km",
      icon: "visibility",
    },
  ]

  return (
    <>
      <div className={styles.containerApp}>
        <div className={styles.leftContainer}>
          <div className={styles.todayData}>
            <Image
              src={conditions_map[current?.condition?.code]?.image[current.is_day ? "day" : "night"]}
              alt="Weather condition image"
              className={styles.imageCond}
            />
            <Today currentData={current} onNavigate={router.push} location={location} isWhite />
            <div className={styles.summary}>
              <DaySummary data={daySummary} isSmallElement={false}/>
            </div>
          </div>
          <div>
            <div className={styles.hourlyForecast}>
              <HourlyForecastComponent style={{ marginTop: 24 }} hoursData={forecast.forecastday[0].hour} nextHoursData={forecast.forecastday[1].hour} />
            </div>
          </div>
        </div>
        <div className={styles.middleContainer}>
          <NextDays dayForecastData={forecast.forecastday} />
        </div>
        <div className={styles.rightContainer}>
          <TodayForecastDetails data={data} astro={forecast.forecastday[0].astro} aqi={current.air_quality.pm2_5} />
        </div>
        {/* <Copyright /> */}
      </div>
    </>
  )
}

