import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { HourlyForecast } from "./hourly-forecast";
import { useTheme } from "./ThemeProvider";
import { Platform } from "react-native";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface HourlyForecastComponentProps {
    style?: StyleProp<ViewStyle>
    hoursData: any
    nextHoursData: any
}


export function HourlyForecastComponent({ style, hoursData, nextHoursData }: HourlyForecastComponentProps) {
    const { themeValues } = useTheme();
    const { t } = useTranslation();
    return (
        <>
            <Text style={{
                fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                 fontWeight: Platform.OS === 'web' ? '500' : 'normal',
                color: themeValues.colors.textColor1,
                fontSize: 22,
                marginTop: 50,
                marginLeft: 15,
                marginBottom: 24
            }}>{t('hourly_forecast')}</Text>
            <HourlyForecast isSmall={false} haveActiveHour={true} style={style} hourlyData={hoursData} nextHourlyData={nextHoursData} />
        </>
    )
}