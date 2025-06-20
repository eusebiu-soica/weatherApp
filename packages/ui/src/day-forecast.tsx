import React, { memo, useState } from "react";
import { useWindowDimensions, StyleSheet, Text, View, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { enUS, ro } from "date-fns/locale";
import { Accordeon } from "./Accordeon";
import { Card } from "./Card";
import { Icon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { HourlyForecast } from "./hourly-forecast";
import { DaySummary } from "./day-summary";
import { Locale } from "date-fns";
import { IconCondition } from "./Icon-conditions";
import { extractIconCode, roundValue } from "./utils";


const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Trigger = memo(({ forecast, isExpanded, themeValues, t, displayDay, dayNumber, monthShort }: {forecast: any, isExpanded: boolean, themeValues: any, t: any, displayDay: any, dayNumber: any, monthShort: any}) => (
    <Card style={[{ width: "100%", padding: 0 }]}>
        <Card.Body style={styles.details}>
            <View style={styles.left}>
                <IconCondition isDay name={extractIconCode(forecast.day.condition.icon)} size={32} />
                <View style={styles.forecastText}>
                    <Text style={[styles.textDate, { color: themeValues.colors.textColor1 }]}>
                        {dayNumber == new Date().getDate() ? t('today') :capitalize(displayDay)}, {dayNumber} {capitalize(monthShort)}
                    </Text>
                    <View style={[styles.textCondition]}>
                        <Text style={{ color: themeValues.colors.textColor2, flexWrap: 'wrap', width: 'auto', maxWidth: 170 }}>{t(
                                forecast.day.condition.code === 1000
                                    ? '1000.day'
                                    : `${forecast.day.condition.code}`
                            )}</Text>
                        <Icon name={isExpanded ? "chevron-up" : "chevron-down"} size={18} color={themeValues.colors.textColor2} />
                    </View>
                </View>
            </View>
            <View style={styles.right}>
                <View style={styles.degree}>
                    <Icon name="arrow-down" size={15} color={themeValues.colors.textColor3} strokeWidth={2.5} />
                    <Text style={[styles.textDegree, { color: themeValues.colors.textColor1 }]}>{roundValue(forecast.day.mintemp_c)}°</Text>
                </View>
                <View style={styles.degree}>
                    <Icon name="arrow-up" size={15} color={themeValues.colors.textColor3} strokeWidth={2.5} />
                    <Text style={[styles.textDegree, { color: themeValues.colors.textColor1 }]}>{roundValue(forecast.day.maxtemp_c)}°</Text>
                </View>
            </View>
        </Card.Body>
    </Card>
));

const Items = memo(({ forecast }: {forecast: any}) => (
    <View style={styles.items}>
        <DaySummary isSmallElement={true} data={{
            daily_chance_of_rain: forecast.day.daily_chance_of_rain,
            maxwind_kph: forecast.day.maxwind_kph,
            uv: forecast.day.uv,
            astro: {
                sunrise: forecast.astro.sunrise,
                sunset: forecast.astro.sunset
            }
        }} />
        <HourlyForecast isSmall={true} style={{ marginLeft: -10 }} hourlyData={forecast.hour} />
    </View>
));

export const DayForecast = memo(({ forecast }: {forecast: any}) => {
    const { themeValues } = useTheme();
    const { width } = useWindowDimensions();
    const { t, i18n } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandChange = (expanded: boolean) => {
        setIsExpanded(expanded);
    };

   

    const isSmallScreen = width < 375;

    const localeMap: Record<string, Locale> = {
        en: enUS,
        ro: ro
    };
    const locale = localeMap[i18n.language] || enUS;
    const dateObj = parseISO(forecast.date);
    const dayFull = format(dateObj, "EEEE", { locale });
    const dayShort = format(dateObj, "EEE", { locale });
    const monthShort = format(dateObj, "MMM", { locale });
    const dayNumber = format(dateObj, "dd");

    const displayDay = isSmallScreen ? dayShort : dayFull;

    return (
        <Accordeon trigger={<Trigger forecast={forecast} isExpanded={isExpanded} themeValues={themeValues} t={t} displayDay={displayDay} dayNumber={dayNumber} monthShort={monthShort} />} style={isExpanded && styles.shadow} items={<Items forecast={forecast} />} onExpandChange={handleExpandChange} />
    );
});

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    right: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
    forecastText: {
        flexDirection: "column",
        gap: 6,
    },
    textDate: {
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_600SemiBold",
        fontSize: 18,
        fontWeight: Platform.OS === 'web' ? '600' : 'normal'
    },
    textCondition: {
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_400Regular",
        fontSize: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 6,
        fontWeight: Platform.OS === 'web' ? '400' : 'normal'
    },
    degree: {
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
    },
    textDegree: {
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_500Medium",
        fontSize: 18,
        fontWeight: Platform.OS === 'web' ? '500' : 'normal'
    },
    items: {
        backgroundColor: "#fff",
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        paddingBottom: 5,
        marginTop: 18,
        gap: 0,
        position: "relative",
    },
    shadow: {
        shadowColor: Platform.OS === 'web'? 'rgba(156, 193, 220, 0.54)' : "rgb(156, 193, 220)",
        shadowOffset: { width: 0, height:Platform.OS === 'web'? 5 : 10 },
        shadowOpacity: 1,
        shadowRadius:Platform.OS === 'web'? 5 :  17,
        elevation:Platform.OS === 'web'? 5 :  15,
    },
});
