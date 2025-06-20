import React, { memo, useMemo } from "react";
import { Platform, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Icon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";
import { roundValue } from "./utils";

export interface TodayProps {
    currentData: any;
    location: any;
    style?: StyleProp<ViewStyle>;
    isWhite?: boolean;
    onNavigate?: (path: string) => void;
}

const TodayComponent = ({ style, isWhite, currentData, location, onNavigate }: TodayProps) => {
    const { themeValues } = useTheme();
    const { t } = useTranslation();


    const textColor = useMemo(() => isWhite ? themeValues.colors.white : themeValues.colors.textColor1, [isWhite, themeValues.colors]);

    return (
        <View style={[styles.container, style]}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => onNavigate?.('./locations')}>
                    <View style={styles.location}>
                        <Icon name="map-pin" size={18} strokeWidth={2.5} color={textColor} />
                        <Text
                            style={{
                                fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_500Medium',
                                fontSize: 20,
                                color: textColor,
                                // textShadowColor: 'rgba(0, 0, 0, 0.2)',
                                // textShadowOffset: { width: 2, height: 2 },
                                // textShadowRadius: 2,
                                ...(Platform.OS === 'web' ? { fontWeight: "500" } : {}),
                            }}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {`${location.name}, ${location.country}`}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate?.('./settings')} style={{ padding: 10 }}>
                    <Icon name="settings" size={22} color={textColor} />
                </TouchableOpacity>
            </View>

            <View style={styles.infoContainer}>
                <Text
                    style={[
                        styles.infoDegree,
                        {
                            color: textColor,
                            textShadowColor: 'rgba(0, 0, 0, 0.3)',
                            textShadowOffset: { width: 2, height: 2 },
                            textShadowRadius: 2,
                            ...(Platform.OS === 'web' ? { fontWeight: "600" } : {}),
                        },
                    ]}
                >{`${roundValue(currentData.temp_c)}°`}</Text>
                <View style={[styles.info]}>
                    <View>
                        <Text
                            style={{
                                color: textColor,
                                fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_500Medium',
                                fontSize: 20,
                                textShadowColor: 'rgba(0, 0, 0, 0.2)',
                                textShadowOffset: { width: 2, height: 2 },
                                textShadowRadius: 2,
                                textAlign: 'center',
                                lineHeight: 40,
                               
                                ...(Platform.OS === 'web' ? { fontWeight: "500" } : {}),
                            }}
                        >
                            {t(
                                currentData.condition.code === 1000
                                    ? `1000.${currentData.is_day ? 'day' : 'night'}`
                                    : `${currentData.condition.code}`
                            )}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                color: textColor,
                                fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_500Medium',
                                fontSize: 18,
                                textShadowColor: 'rgba(0, 0, 0, 0.2)',
                                textShadowOffset: { width: 2, height: 2 },
                                textShadowRadius: 2,
                                ...(Platform.OS === 'web' ? { fontWeight: "500" } : {}),
                            }}
                        >
                            {`${t('feels_like')} ${Math.floor(currentData.feelslike_c)}°`}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export const Today = memo(TodayComponent);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 30,
        paddingTop: Platform.OS === 'web' ? 24 : 70,
    },
    menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        gap: 6,
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
    },
    infoDegree: {
        fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_700Bold',
        fontSize: 90,
    },
    info: {
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10
    },
});