
import React, { useEffect, useRef } from "react";
import { Platform, Text, View, Animated } from "react-native";
import Svg, { Circle, Defs, Path, LinearGradient, Stop } from "react-native-svg";
import { useTheme } from "./ThemeProvider";
import { Card } from "./Card";
import { Icon } from "./Icons";
import { useTranslation } from "react-i18next";

export interface AirQualityProps {
    value: number;
}



export function AirQuality({ value }: AirQualityProps) {
    const { themeValues } = useTheme();
    const { t } = useTranslation()
    const minAQI = 0, maxAQI = 250;
    const aqi = value;
    const minAngle = -30, maxAngle = 255;
    const angle = aqi < 250 ? ((aqi - minAQI) / (maxAQI - minAQI)) * (maxAngle - minAngle) + minAngle : maxAngle;
    const rotation = useRef(new Animated.Value(minAngle)).current;

    const getAQICategory = (aqi: number) => {
        if (aqi >= 0 && aqi <= 12) return t('good');
        else if (aqi >= 13 && aqi <= 35) return t('moderate');
        else if (aqi >= 36 && aqi <= 55) return t('unhealthy_sensitive');
        else if (aqi >= 56 && aqi <= 150) return t('unhealthy');
        else if (aqi >= 151 && aqi <= 250) return t('very_unhealthy');
        else return t('hazardous');
    };
    useEffect(() => {
        Animated.timing(rotation, {
            toValue: angle,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [angle]);

    const rotate = rotation.interpolate({
        inputRange: [minAngle, maxAngle],
        outputRange: [`${minAngle}deg`, `${maxAngle}deg`],
    });



    const infoText = getAQICategory(aqi);

    return (
        <Card key='Air' style={{ minHeight: 100, gap: 30, width: '100%' }} >
            <Card.Header style={{ display: 'flex', justifyContent: "space-between", flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{
                    fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                    color: themeValues.colors.textColor1,
                    fontSize: 16,
                    fontWeight: Platform.OS === 'web' ? '500' : 'normal'
                }}>{t('air_quality_index')}</Text>
                <Icon name='air-quality' color="rgba(50, 81, 105, 0.7)" size={20} />
            </Card.Header>
            <Card.Body >
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: 10, paddingBottom: 10 }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Svg width={Platform.OS === 'web' ? '100%' : '250'} height="220" viewBox="0 0 250 220" fill="none" >
                            <Path d="M48.669 216.668C46.4502 219.312 42.4958 219.668 39.9658 217.32C22.7052 201.3 10.2875 180.696 4.20741 157.858C-2.40973 133.003 -1.19828 106.711 7.67651 82.5699C16.5513 58.4285 32.6573 37.6125 53.7977 22.9613C74.9381 8.31011 100.083 0.53711 125.804 0.702536C151.524 0.867963 176.568 8.96376 197.518 23.8857C218.468 38.8075 234.305 59.829 242.869 84.0826C251.432 108.336 252.305 134.641 245.369 159.409C238.996 182.167 226.314 202.61 208.849 218.406C206.289 220.721 202.339 220.315 200.155 217.642V217.642C197.97 214.969 198.379 211.045 200.926 208.715C216.406 194.557 227.652 176.319 233.332 156.038C239.575 133.747 238.789 110.073 231.082 88.2443C223.375 66.4161 209.121 47.4968 190.266 34.0671C171.411 20.6374 148.872 13.3512 125.724 13.2023C102.575 13.0534 79.9443 20.0491 60.9179 33.2352C41.8916 46.4212 27.3962 65.1556 19.4089 86.8829C11.4215 108.61 10.3312 132.273 16.2867 154.642C21.705 174.995 32.7155 193.376 48.0124 207.732C50.5294 210.094 50.8877 214.024 48.669 216.668V216.668Z" fill="url(#paint0_linear_0_1)" />
                            <Path d="M65.1858 195.374C50.6979 183.217 40.313 166.887 35.4474 148.611C30.5819 130.335 31.4727 111.003 37.9983 93.2522C44.5238 75.5011 56.3665 60.1953 71.9109 49.4223C87.4553 38.6494 105.945 32.934 124.857 33.0556C143.769 33.1772 162.183 39.13 177.588 50.102C192.992 61.074 204.637 76.5309 210.934 94.3645C217.23 112.198 217.872 131.54 212.772 149.752C207.672 167.964 197.078 184.159 182.435 196.128" stroke="#325169" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="16" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 8" />
                            <Defs>
                                <LinearGradient id="paint0_linear_0_1" x1="-12.5" y1="177.906" x2="289.5" y2="192.5" gradientUnits="userSpaceOnUse">
                                    <Stop stopColor="#CCFEF7" stopOpacity="0.8" />
                                    <Stop offset="0.356" stopColor="#5C8AAE" stopOpacity="0.7" />
                                    <Stop offset="1" stopColor="#325169" />
                                </LinearGradient>
                            </Defs>
                        </Svg>

                        <Animated.View style={{ position: 'absolute', margin: 'auto', top: '43%', transform: [{ rotate }], width: 55, height: 55, justifyContent: "center", alignItems: 'center' }}>
                            <Svg width="100%" height="28" viewBox="0 0 55 28" fill="none" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', position: 'relative', left: -14, top: 6 }}>
                                <Path d="M1 26.4819L53.2297 1.9999" stroke="#325169" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
                                <Circle cx="41" cy="8" r="8" fill="white" />
                                <Circle cx="41" cy="8" r="6.5" stroke="#325169" strokeOpacity="0.8" strokeWidth="3" />
                            </Svg>
                        </Animated.View>
                    </View>
                    <Text style={{ fontWeight: "600", fontSize: 40, fontFamily: Platform.OS === "web" ? "inherit" : 'Jost_600SemiBold', color: themeValues.colors.textColor1, marginTop: -25 }}>{aqi}</Text>
                    <Text style={{ top: 8, margin: 'auto', fontFamily: Platform.OS === "web" ? 'inherit' : 'Jost_500Medium', fontSize: 17, fontWeight: "500", textAlign: 'center', color: 'rgba(50, 81, 105, 0.7)' }}>{infoText}</Text>
                </View>
            </Card.Body>
        </Card>
    );
}
