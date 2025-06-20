"use client"
import React from "react"
import { Card } from "./Card"
import { Platform, ScrollView, type StyleProp, StyleSheet, Text, View, type ViewStyle } from "react-native"
import { Icon } from "./Icons"
import { useTheme } from "./ThemeProvider"
import { IconCondition } from "./Icon-conditions"
import { extractIconCode } from "./utils"
import { useTranslation } from "react-i18next"

// Interface for the hourly data item
export interface HourlyDataItem {
    time_epoch: number
    time: string
    temp_c: number
    is_day: number
    condition: {
        text: string
        icon: string
        code: number
    }
    chance_of_rain: number
    chance_of_snow: number
}

export interface HourlyForecastProps {
    style?: StyleProp<ViewStyle>
    isSmall?: boolean
    haveActiveHour?: boolean
    hourlyData?: HourlyDataItem[],
    nextHourlyData?: HourlyDataItem[],

}

interface HourProps {
    active?: boolean
    isSmallElement?: boolean
    hourData?: HourlyDataItem
}
const now = new Date();
const formattedNow = `${now.getHours().toString().padStart(2, '0')}:00`;

export function HourlyForecast({ style, isSmall, haveActiveHour, hourlyData, nextHourlyData }: HourlyForecastProps) {
    const { themeValues } = useTheme();
    const { t } = useTranslation()

    const Hour = ({ active, isSmallElement, hourData }: HourProps) => {
        const iconSize = isSmallElement ? 24 : 36

        // If hourData is provided, use it; otherwise, use default values
        const time = hourData ? hourData.time.split(" ")[1].substring(0, 5) : "11:00"
        const temp = hourData ? Math.round(hourData.temp_c) : 24
        const conditionCode = hourData ? extractIconCode(hourData.condition.icon) : '386'
        const isDay = hourData?.is_day == 1 ? true : false
        const chanceOfRain = hourData ? hourData.chance_of_rain : 0
        const chanceOfSnow = hourData ? hourData.chance_of_snow : 0


        // Determine if we should show precipitation chance
        const showPrecipitation = chanceOfRain > 0 || chanceOfSnow > 0
        const precipChance = Math.max(chanceOfRain, chanceOfSnow)
        const precipType = chanceOfRain >= chanceOfSnow ? "drop" : "snow"

        return (
            <Card style={[styles.container, active && styles.active]}>
                <Card.Body style={[styles.hour, { gap: isSmallElement ? 10 : 20 }]}>
                    <Text
                        style={[
                            styles.hourText,
                            {
                                color: active ? themeValues.colors.textColor4 : themeValues.colors.textColor2,
                                fontSize: isSmallElement ? 12 : 14,
                            },
                        ]}
                    >
                        {time === formattedNow && !isSmallElement ? t("now") : time}
                    </Text>
                    <IconCondition name={conditionCode} size={iconSize} isDay={isDay} />
                    <Text
                        style={[
                            styles.degreeText,
                            {
                                color: active ? themeValues.colors.white : themeValues.colors.textColor1,
                                fontSize: isSmallElement ? 16 : 18,
                            },
                        ]}
                    >
                        {`${temp}°`}
                    </Text>

                    {showPrecipitation && !isSmall && (
                        <View style={styles.chance}>
                            <Icon
                                name={precipType}
                                size={12}
                                color={active ? themeValues.colors.white : themeValues.colors.textBlue}
                            />
                            <Text
                                style={[
                                    styles.changeText,
                                    { color: active ? themeValues.colors.white : themeValues.colors.textBlue },
                                ]}
                            >
                                {precipChance}%
                            </Text>
                        </View>
                    )}
                </Card.Body>
            </Card>
        )
    }

    const currentHour = new Date().getHours()

    let hoursToRender: (HourlyDataItem | undefined)[] = []

    if (isSmall) {
        // If isSmall is true, use the provided hourlyData or a default array of 24 items
        hoursToRender = hourlyData || Array.from({ length: 24 }, (_, i) => undefined)
    } else {
        // If isSmall is false, combine today's and tomorrow's hourly data
        if (hourlyData && nextHourlyData) {
            const todayRemainingHours = hourlyData.slice(currentHour)
            const tomorrowFirstHours = nextHourlyData.slice(0, 24 - todayRemainingHours.length)
            hoursToRender = [...todayRemainingHours, ...tomorrowFirstHours]
        } else {
            hoursToRender = Array.from({ length: 24 }, (_, i) => undefined)
        }
    }

    return (
        <ScrollView horizontal={true} style={style} showsHorizontalScrollIndicator={false}>
            {hoursToRender.map((hourData, index) => (
                <Hour
                    key={hourData ? `Hour_${hourData.time_epoch}` : `Hour_${index}`}
                    isSmallElement={isSmall}
                    active={hourData?.time.split(" ")[1].substring(0, 5) === formattedNow && haveActiveHour}
                    hourData={hourData}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "auto",
        backgroundColor: "transparent",
        borderRadius: 25,
        marginBottom: 15,
    },
    hour: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    active: {
        backgroundColor: "rgba(67, 135, 237, 1)",
        shadowColor: Platform.OS === "web" ? "rgba(67, 135, 237, 0.14)" : "rgba(67, 135, 237, 0.79)",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 6,
    },
    hourText: {
        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_600SemiBold",
        fontWeight: Platform.OS === "web" ? "600" : "normal",
    },
    degreeText: {
        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_600SemiBold",
        fontWeight: Platform.OS === "web" ? "600" : "normal",
    },
    chance: {
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        gap: 3,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    changeText: {
        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_400Regular",
        fontWeight: Platform.OS === "web" ? "400" : "normal",
        fontSize: 12,
    },
})