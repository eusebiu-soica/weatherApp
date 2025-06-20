import React from "react";
import { Card } from "./Card";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { convertTo24HourFormat, roundValue } from "./utils";
import { useTranslation } from "react-i18next";

export interface DaySummaryProps {
    isSmallElement?: boolean,
    data: {
        mintemp_c?: number,
        maxtemp_c?: number,
        maxwind_kph?: number,
        daily_chance_of_rain?: number,
        uv?: number,
        astro?: {
            sunrise?: string,
            sunset?: string
        },
    }
}

export function DaySummary({ isSmallElement, data }: DaySummaryProps) {
    const { mintemp_c, maxtemp_c, maxwind_kph, daily_chance_of_rain, uv, astro} = data
    const { themeValues } = useTheme();
    const { t } = useTranslation();
    return (
        <Card style={[!isSmallElement && styles.shadow, { width: '100%', backgroundColor: isSmallElement ? themeValues.colors.backgroundCard : themeValues.colors.white }]}>
            <Card.Body >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[styles.scrollContainer, { paddingHorizontal: isSmallElement ? 0 : 11 }]}
                >

                    {mintemp_c && (
                        <View style={styles.elementContainer}>
                            <Icon name="arrow-down" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{roundValue(mintemp_c)}°</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('minimum')}</Text>
                        </View>
                    )}
                    {maxtemp_c && (
                        <View style={styles.elementContainer}>
                            <Icon name="arrow-up" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{roundValue(maxtemp_c)}°</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('maximum')}</Text>
                        </View>
                    )}
                    {typeof daily_chance_of_rain === 'number' && (
                        <View style={styles.elementContainer}>
                            <Icon name="umbrella" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{roundValue(daily_chance_of_rain)}%</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('rainfall')}</Text>
                        </View>
                    )}
                    {maxwind_kph && (
                        <View style={styles.elementContainer}>
                            <Icon name="wind" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{roundValue(maxwind_kph)}km/h</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('Wind')}</Text>
                        </View>
                    )}
                    {typeof uv === 'number' && (
                        <View style={styles.elementContainer}>
                            <Icon name="sun-simple" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{roundValue(uv)}</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('uv')}</Text>
                        </View>
                    )}
                    {astro?.sunrise && (
                        <View style={styles.elementContainer}>
                            <Icon name="sunrise" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{convertTo24HourFormat(astro.sunrise)}</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('sunrise')}</Text>
                        </View>
                    )}
                    {astro?.sunset && (
                        <View style={styles.elementContainer}>
                            <Icon name="sunset" size={isSmallElement ? 18 : 24} color={themeValues.colors.textColor1} />
                            <Text style={[styles.text, { fontSize: isSmallElement ? 16 : 18, color: themeValues.colors.textColor1 }]}>{convertTo24HourFormat(astro?.sunset)}</Text>
                            <Text style={[styles.text, { fontSize: isSmallElement ? 12 : 14, color: themeValues.colors.textColor2 }]}>{t('sunset')}</Text>
                        </View>
                    )}
                </ScrollView>

            </Card.Body>
        </Card>
    )

}

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexGrow: 1,
        gap: 20,
    },
    elementContainer: {
        display: 'flex',
        gap: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_500Medium',
        fontWeight: Platform.OS === 'web' ? "500" : "normal"
    },
    shadow: {
        shadowColor: Platform.OS === 'web' ? "rgba(156, 193, 220, 0.18)" : "rgb(156, 193, 220)",
        shadowOffset: { width: 5, height: 14 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 24,
    }
})