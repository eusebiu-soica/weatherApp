import React from "react";
import { Platform, Text, View, TouchableOpacity, Linking } from "react-native";
import { useTheme } from "./ThemeProvider";
// import Link from 'next/link';

export function Copyright() {
    const { themeValues } = useTheme();

    const handlePress = () => {
        Linking.openURL("https://www.weatherapi.com");
    };

    return (
        <View style={{ paddingTop: 28, paddingBottom: 15, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5, alignItems: 'center' }}>
            {Platform.OS === 'web' ? (
                <>
                    <span style={{
                        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                        color: themeValues.colors.textColor2,
                        fontSize: 16,
                        textDecoration: 'none'
                    }}>Powered by {' '}</span>
                    {/* <Link href="https://www.weatherapi.com/" legacyBehavior passHref>
                        <a style={{
                            fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
                            color: themeValues.colors.textColor2,
                            fontSize: 16,
                            textDecoration: 'none',
                            textDecorationLine: 'underline'
                        }}>
                            WeatherAPI.com
                        </a>
                    </Link> */}
                </>
            ) : (
                <>
                    <Text style={{
                        fontFamily: "Jost_500Medium",
                        color: themeValues.colors.textColor2,
                        fontSize: 16
                    }}> Powered by</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={{
                            fontFamily: "Jost_500Medium",
                            color: themeValues.colors.textColor2,
                            fontSize: 16,
                            textDecorationLine: 'underline'

                        }}>
                            WeatherAPI.com
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}