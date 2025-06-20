import React, { useState } from "react";
import { Text, View, StyleSheet, Platform, Image } from "react-native";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { Button, useLoading, useTheme } from "@repo/ui";
import { StatusBar } from "expo-status-bar";

export default function GetStarted() {
    const router = useRouter();
    const { themeValues } = useTheme();
    const [error, setError] = useState<string | null>(null);
    const { trackPromise } = useLoading();

    const handleGetStarted = async () => {
        try {
            await trackPromise(
                (async () => {
                const { status } = await Location.requestForegroundPermissionsAsync();

                await AsyncStorage.setItem('hasVisitedGetStarted', 'true');

                if (status !== 'granted') {
                    router.replace('/locations');
                } else {
                    const location = await Location.getCurrentPositionAsync({});
                    router.replace('/');
                }
            })()
        );
        } catch (err) {
            setError('Nu am putut obține permisiunile necesare');
            router.replace('/locations');
            console.error(err);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: themeValues.colors.background }]}>
            <StatusBar style="auto" />
            <View style={styles.imageContainer}>
                <View style={styles.imgSet}>
                    <Image source={require('@repo/ui/assets/cold.png')} style={{ width: 110, height: 110 }} />
                    <Image source={require('@repo/ui/assets/foggy.png')} style={{ width: 110, height: 110 }} />
                </View>
                <View style={styles.imgSet}>
                    <Image source={require('@repo/ui/assets/hot.png')} style={{ width: 110, height: 110 }} />
                    <Image source={require('@repo/ui/assets/snow.png')} style={{ width: 110, height: 110 }} />
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: themeValues.colors.textColor1 }]}>
                    Bun venit la Wedly
                </Text>
                <Text style={[styles.description, { color: themeValues.colors.textColor2 }]}>
                    Vremea, simplu și rapid! Prognoze precise, actualizări în timp real și informații detaliate despre condițiile meteo din orice locație.
                </Text>
                {error && (
                    <Text style={styles.error}>{error}</Text>
                )}
            </View>
            <Button onClick={handleGetStarted}>Începe</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_600SemiBold',
        marginBottom: 20,
    },
    description: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_400Regular',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    error: {
        color: 'red',
        marginTop: 10,
        fontFamily: Platform.OS === 'web' ? 'inherit' : 'Jost_400Regular',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    imageContainer: {
        display: 'flex',
        gap: 5,
        paddingTop: 130
    },
    imgSet: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
});