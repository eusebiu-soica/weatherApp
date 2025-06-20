import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Card } from './Card';
import { Icon } from './Icons';
import { useTheme } from './ThemeProvider';
import { DayForecast } from './day-forecast';
import { useTranslation } from 'react-i18next';

interface NextDaysProps {
    dayForecastData: Object[]
}

export function NextDays({ dayForecastData }: NextDaysProps) {
    const { themeValues } = useTheme();
    const { t } = useTranslation()
    // console.log(dayForecastData)
    return (
        <>
            <Text style={{
                fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                color: themeValues.colors.textColor1,
                fontSize: 22,
                marginTop: 30,
                marginLeft: 15,
                fontWeight: Platform.OS === 'web' ? '500' : 'normal'
            }}>{t('next_x_days')}</Text>

            <View style={{ marginTop: 40, gap: 10 }}>
                {dayForecastData.map((item: any, index) => {
                    return <DayForecast key={index} forecast={item} />
                })}
            </View></>
    )
}