import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Card } from './Card';
import { Icon } from './Icons';
import { AirQuality } from './AirQualityIndicator';
import { AstroLineup } from './AstroLineup';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';
import { roundValue } from './utils';

interface ForecastDetails {
    data: Object[],
    astro: any
    aqi: any
}

export function TodayForecastDetails({ data, astro, aqi }: ForecastDetails) {
    const { themeValues } = useTheme();
    const { t } = useTranslation()
    return (
        <>
            <Text style={{
                fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                color: themeValues.colors.textColor1,
                fontSize: 22,
                marginTop: 50,
                marginLeft: 15,
                fontWeight: Platform.OS === 'web' ? '500' : 'normal'
            }}>{t('today_forecast_details')}</Text>

            <View style={[styles.weatherDetails, { flexWrap: Platform.OS === 'web' ? 'nowrap' : 'wrap', width: Platform.OS === 'web' ? '65%' : '100%' }]}>

                <View style={{ display: 'flex', flexDirection: Platform.OS === 'web' ? 'column' : 'row', flexWrap: Platform.OS === 'web' ? 'nowrap' : 'wrap', gap: 14 }}>

                    {
                        data.map((item: any) => {
                            return (
                                <Card key={item.property} style={{ minHeight: 100, minWidth: Platform.OS === 'web' ? 170 : 'auto' }} >
                                    <Card.Header style={{ display: 'flex', justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{
                                            fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                                            color: themeValues.colors.textColor1,
                                            fontSize: 16,
                                            fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                                        }}>{t(item.property)}</Text>
                                        <Icon name={item.icon} color="rgba(50, 81, 105, 0.7)" size={20} />
                                    </Card.Header>
                                    <Card.Body style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
                                        <Text style={{ fontWeight: '600', marginTop: Platform.OS === 'web'? 10 : 0, fontSize: 20, fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_600SemiBold', color: themeValues.colors.textColor1, }}>{item.value}</Text>
                                    </Card.Body>
                                </Card>

                            )
                        })
                    }
                </View>
                <View style={{ display: 'flex', gap: 14, width: '100%' }}>
                    <AstroLineup style={{ width: '100%' }} astro={astro} />
                    <AirQuality value={roundValue(aqi)} />
                </View>

            </View></>
    )
}

const styles = StyleSheet.create({

    weatherDetails: {
        width: '100%',
        display: 'flex',
        gap: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        marginTop: 40
    }
})