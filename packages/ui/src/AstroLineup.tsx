
import React, { useEffect, useRef } from "react";
import { Card } from "./Card";
import { Animated, Platform, StyleProp, Text, View, ViewStyle } from "react-native";
import { Icon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { convertTo24HourFormat } from "./utils";
import { useTranslation } from "react-i18next";

export interface AstroProps {
    astro: {
        sunrise: string,
        sunset: string,
    };
    style?: StyleProp<ViewStyle>
}



function getSunPosition(sunrise: string, sunset: string) {
    const currentTime = new Date();
    function timeToMinutes(timeString: string) {
        const [hours, minutes] = timeString.split(":").map(Number);
        return hours * 60 + minutes;
    }

    const sunriseMinutes = timeToMinutes(sunrise);
    const sunsetMinutes = timeToMinutes(sunset);
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

    const x = (currentMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes);

    return Math.max(0, Math.min(1, x));
}

export function AstroLineup({ style, astro }: AstroProps) {
    const { themeValues } = useTheme();
    const { t } = useTranslation();


    const sunPosition = getSunPosition(
        convertTo24HourFormat(astro.sunrise),
        convertTo24HourFormat(astro.sunset)
    );

    const animatedFlex = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedFlex, {
            toValue: sunPosition,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    }, [sunPosition]);

    return (
        <Card style={[style, { gap: Platform.OS === 'web' ? 10 : 5 }]}>
            <Card.Header style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="sunrise" size={22} color={themeValues.colors.textColor1} />
                    <Text style={{
                        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                        color: themeValues.colors.textColor2,
                        fontSize: 16,
                        fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                    }}>{t('sunrise')}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="sunset" size={22} color={themeValues.colors.textColor1} />
                    <Text
                        style={{
                            fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                            color: themeValues.colors.textColor2,
                            fontSize: 16,
                            fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                        }}>{t('sunset')}</Text>
                </View>

            </Card.Header>


            <Card.Body style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <Animated.View style={{
                    flex: animatedFlex,
                    height: 7,
                    borderRadius: 100,
                    backgroundColor: 'rgba(50, 81, 105, 0.3)'
                }} />
                <View style={{ padding: 8, backgroundColor: themeValues.colors.white, borderRadius: 100 }}>
                    <Icon name="sun" size={30} />
                </View>
                <Animated.View style={{
                    flex: animatedFlex.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    }),
                    height: 7,
                    borderRadius: 100,
                    backgroundColor: themeValues.colors.textColor1
                }} />
            </Card.Body>


            <Card.Footer style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                <Text style={{
                    fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                    color: themeValues.colors.textColor1,
                    fontSize: 16,
                    fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                }}>{convertTo24HourFormat(astro.sunrise)}</Text>

                <Text
                    style={{
                        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                        color: themeValues.colors.textColor1,
                        fontSize: 16,
                        fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                    }}>{convertTo24HourFormat(astro.sunset)}</Text>
            </Card.Footer>
        </Card>
    )
}