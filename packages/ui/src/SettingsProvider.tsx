"use client"

import React from "react"
import { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react"
import i18n from "i18next"
import { I18nextProvider, initReactI18next } from "react-i18next"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useLoading } from "./LoadingProvider"

// Pre-define all language resources
const resources = {
  en: {
    translation: {
      hello: "Hello",
      welcome: "Welcome",
      minimum: "Minimum",
      maximum: "Maximum",
      rainfall: "Rainfall",
      uv: "UV",
      feels_like: "Feels like",
      sunrise: "Sunrise",
      sunset: "Sunset",
      next_x_days: "Next 5 Days",
      hourly_forecast: "Hourly Forecast",
      today_forecast_details: "Today Forecast Details",
      Wind: "Wind",
      Humidity: "Humidity",
      'Air pressure': "Air Pressure",
      Visibility: "Visibility",
      air_quality_index: "Air Quality Index",
      good: "Good",
      moderate: "Moderate",
      unhealthy_sensitive: "Unhealthy for Sensitive Groups",
      unhealthy: "Unhealthy",
      very_unhealthy: "Very Unhealthy",
      hazardous: "Hazardous",
      Settings: "Settings",
      Locations: "Locations",
      celsius: "°C",
      fahrenheit: "°F",
      kmh: "km/h",
      mph: "mph",
      units: "Units",
      Language: "Language",
      Speed: "Visibility/Wind",
      "Temperature Unit": "Temperature",
      copy: 'All rights reserved!',
      searchLocation: 'Search location...',
      savedLocations: 'Saved locations',
      manage: 'Manage',
      done: 'Done',
      loading: 'Loading...',
      gpsLocation: 'Current GPS Location',
      notSavedLocations: 'No saved locations.',
      today: 'Today',
      now: 'Now',
      '1000.day': 'Sunny',
      '1000.night': 'Clear night',
      '1003': 'Partly cloudy',
      '1006': 'Cloudy',
      '1009': 'Overcast',
      '1030': 'Mist',
      '1063': 'Patchy rain possible',
      '1066': 'Patchy snow possible',
      '1069': 'Patchy sleet possible',
      '1072': 'Patchy freezing drizzle possible',
      '1087': 'Thundery outbreaks possible',
      '1114': 'Blowing snow',
      '1117': 'Blizzard',
      '1135': 'Fog',
      '1147': 'Freezing fog',
      '1150': 'Patchy light drizzle',
      '1153': 'Light drizzle',
      '1168': 'Freezing drizzle',
      '1171': 'Heavy freezing drizzle',
      '1180': 'Patchy light rain',
      '1183': 'Light rain',
      '1186': 'Moderate rain at times',
      '1189': 'Moderate rain',
      '1192': 'Heavy rain at times',
      '1195': 'Heavy rain',
      '1198': 'Light freezing rain',
      '1201': 'Moderate or heavy freezing rain',
      '1204': 'Light sleet',
      '1207': 'Moderate or heavy sleet',
      '1210': 'Patchy light snow',
      '1213': 'Light snow',
      '1216': 'Patchy moderate snow',
      '1219': 'Moderate snow',
      '1222': 'Patchy heavy snow',
      '1225': 'Heavy snow',
      '1237': 'Ice pellets',
      '1240': 'Light rain shower',
      '1243': 'Moderate or heavy rain shower',
      '1246': 'Torrential rain shower',
      '1249': 'Light sleet showers',
      '1252': 'Moderate or heavy sleet showers',
      '1255': 'Light snow showers',
      '1258': 'Moderate or heavy snow showers',
      '1261': 'Light showers of ice pellets',
      '1264': 'Moderate or heavy showers of ice pellets',
      '1273': 'Patchy light rain with thunder',
      '1276': 'Moderate or heavy rain with thunder',
      '1279': 'Patchy light snow with thunder',
      '1282': 'Moderate or heavy snow with thunder'
    },
  },
  ro: {
    translation: {
      hello: "Bună",
      welcome: "Bine ai venit",
      minimum: "Minim",
      maximum: "Maxim",
      rainfall: "Ploaie",
      uv: "UV",
      feels_like: "Se simte ca",
      sunrise: "Răsărit",
      sunset: "Apus",
      next_x_days: "Următoarele 5 zile",
      hourly_forecast: "Prognoza pe ore",
      today_forecast_details: "Detalii prognoză pentru astazi",
      Wind: "Vânt",
      Humidity: "Umiditate",
      'Air pressure': "Presiune aer",
      Visibility: "Vizibilitate",
      air_quality_index: "Indice Calitate Aer",
      good: "Bun",
      moderate: "Moderat",
      unhealthy_sensitive: "Nesănătos pentru grupuri sensibile",
      unhealthy: "Nesănătos",
      very_unhealthy: "Foarte nesănătos",
      hazardous: "Periculos",
      Settings: "Setări",
      Locations: "Locații",
      celsius: "°C",
      fahrenheit: "°F",
      kmh: "km/h",
      mph: "mph",
      units: "Unități",
      Language: "Limba aplicației",
      Speed: "Vizibilitate/Vânt",
      "Temperature Unit": "Temperatură",
      copy: 'Toate drepturile rezervate!',
      searchLocation: 'Caută locație...',
      savedLocations: 'Locații salvate',
      manage: 'Gestionează',
      done: 'Gata',
      loading: 'Se încarcă...',
      gpsLocation: 'Locația GPS curentă',
      notSavedLocations: 'Nu există locații salvate.',
      today: 'Astăzi',
      now: 'Acum',
      '1000.day': 'Însorit',   
      '1000.night': 'Noapte senină',
      '1003': 'Parțial noros',
      '1006': 'Noros',
      '1009': 'Cer acoperit',
      '1030': 'Ceață',
      '1063': 'Ploi pe porţiuni în apropiere',
      '1066': 'Ninsori pe porţiuni în apropiere',
      '1069': 'Lapoviță pe porţiuni în apropiere',
      '1072': 'Burniță şi polei pe porţiuni în apropiere',
      '1087': 'Tunete în apropiere',
      '1114': 'Ninsoare viscolită',
      '1117': 'Viscol',
      '1135': 'Ceață densă',
      '1147': 'Chiciură',
      '1150': 'Burniță uşoară pe porțiuni',
      '1153': 'Burniță uşoară',
      '1168': 'Burniță înghețată',
      '1171': 'Burniță înghețată în cantităţi însemnate',
      '1180': 'Ploi uşoare pe alocuri',
      '1183': 'Ploi uşoare',
      '1186': 'Ploi moderate uneori',
      '1189': 'Ploi moderate',
      '1192': 'Ploaie torențială uneori',
      '1195': 'Ploaie torențială',
      '1198': 'Ploaie înghețată în cantităţi mici',
      '1201': 'Ploaie înghețată în cantităţi mari şi moderate',
      '1204': 'Lapoviță în cantităţi mici',
      '1207': 'Lapoviță în cantităţi mari şi moderate',
      '1210': 'Ninsori în cantităţi mici pe alocuri',
      '1213': 'Ninsori în cantităţi mici',
      '1216': 'Ninsori moderate pe alocuri',
      '1219': 'Ninsori moderate',
      '1222': 'Ninsori în cantităţi mari pe alocuri',
      '1225': 'Ninsori în cantităţi însemnate',
      '1237': 'Grindină',
      '1240': 'Ploi uşoare şi de scurtă durată',
      '1243': 'Ploi de scurtă durată moderate sau în cantităţi însemnate',
      '1246': 'Ploaie torențială de scurtă durată',
      '1249': 'Lapoviță de scurtă durată în cantităţi mici',
      '1252': 'Lapoviță de scurtă durată în cantităţi mari şi moderate',
      '1255': 'Ninsori de scurtă durată în cantităţi mici',
      '1258': 'Ninsori de scurtă durată în cantităţi mari şi moderate',
      '1261': 'Ploi în cantităţi mici însoţite de grindină',
      '1264': 'Ploi în cantităţi mari şi moderate însoțite de grindină',
      '1273': 'Ploi în cantităţi mici pe porțiuni însoțite de tunete',
      '1276': 'Ploi în cantităţi mari şi moderate pe porțiuni însoțite de tunete',
      '1279': 'Ninsori în cantităţi mici pe porțiuni însoțite de tunete',
      '1282': 'Ninsori în cantităţi mari şi moderate pe porțiuni însoțite de tunete'

    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "ro",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false,
  },
  load: "all",
  lowerCaseLng: false,
  keySeparator: false,
  nsSeparator: false,
})

const SettingsContext = createContext({
  language: i18n.language,
  temperatureUnit: "C",
  speedUnit: "km/h",
  setLanguage: async (lng: "en" | "ro") => { },
  setTemperatureUnit: async (unit: "C" | "F") => { },
  setSpeedUnit: async (unit: "km/h" | "mph") => { },
})

const settingsCache = {
  language: "ro",
  temperatureUnit: "C",
  speedUnit: "km/h",
}

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [language, setLanguage] = useState(settingsCache.language)
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">(settingsCache.temperatureUnit as "C" | "F")
  const [speedUnit, setSpeedUnit] = useState<"km/h" | "mph">(settingsCache.speedUnit as "km/h" | "mph")
  const { trackPromise } = useLoading()
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const [storedLanguage, storedTempUnit, storedSpeedUnit] = await Promise.all([
          AsyncStorage.getItem("language"),
          AsyncStorage.getItem("temperatureUnit"),
          AsyncStorage.getItem("speedUnit"),
        ])

        if (storedLanguage) {
          settingsCache.language = storedLanguage as "en" | "ro"
          i18n.changeLanguage(storedLanguage)
          setLanguage(storedLanguage as "en" | "ro")
        }

        if (storedTempUnit) {
          settingsCache.temperatureUnit = storedTempUnit
          setTemperatureUnit(storedTempUnit as "C" | "F")
        }

        if (storedSpeedUnit) {
          settingsCache.speedUnit = storedSpeedUnit
          setSpeedUnit(storedSpeedUnit as "km/h" | "mph")
        }
      } catch (error) {
        console.error("Failed to load settings:", error)
      } finally {
        setIsInitialized(true)
      }
    }

    loadSettings()
  }, [])

  const changeLanguage = useCallback(
    (lng: "en" | "ro") => {
      if (language !== lng) {
        return trackPromise(
          new Promise<void>((resolve) => {
            console.log("Language change started...");
            setTimeout(() => {
              setLanguage(lng);
              i18n.changeLanguage(lng).then(() => {
                settingsCache.language = lng;
                AsyncStorage.setItem("language", lng)
                  .catch((error) => console.error("Failed to save language setting:", error))
                  .finally(() => {
                    console.log("Language change completed");
                    resolve();
                  });
              });
            }, 1);
          })
        );
      }
      return Promise.resolve();
    },
    [language]
  );




  const changeTemperatureUnit = useCallback(async (unit: "C" | "F") => {
    setTemperatureUnit(unit)
    settingsCache.temperatureUnit = unit

    AsyncStorage.setItem("temperatureUnit", unit).catch((error) => {
      console.error("Failed to save temperature unit setting:", error)
    })
  }, [])

  const changeSpeedUnit = useCallback(async (unit: "km/h" | "mph") => {
    setSpeedUnit(unit)
    settingsCache.speedUnit = unit

    AsyncStorage.setItem("speedUnit", unit).catch((error) => {
      console.error("Failed to save speed unit setting:", error)
    })
  }, [])

  const contextValue = useMemo(
    () => ({
      language,
      temperatureUnit,
      speedUnit,
      setLanguage: changeLanguage,
      setTemperatureUnit: changeTemperatureUnit,
      setSpeedUnit: changeSpeedUnit,
    }),
    [language, temperatureUnit, speedUnit, changeLanguage, changeTemperatureUnit, changeSpeedUnit],
  )

  if (!isInitialized) {
    return null
  }

  return (
    <SettingsContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)

