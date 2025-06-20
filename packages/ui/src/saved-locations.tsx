import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "./radio-button";
import { useTheme } from "./ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "./Icons";
import { useTranslation } from "react-i18next";
import { useLoading } from "./LoadingProvider";

interface SavedLocationsProps {
    redirectFunction: any;
    locationExpo?: any;
}

interface City {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
}

export function SavedLocations({ redirectFunction, locationExpo }: SavedLocationsProps) {
    const [selectedLocation, setSelectedLocation] = useState<City | null>(null);
    const [locations, setLocations] = useState<City[]>([]);
    const [isManaging, setIsManaging] = useState(false);
    const { themeValues } = useTheme();
    const { t } = useTranslation();
    const { trackPromise } = useLoading();

    useEffect(() => {
        const loadLocations = async () => {
            let storedLocations, currentLocation, currentGPSLocation, fromCurrentGPS;

            if (Platform.OS === "web") {
                storedLocations = localStorage.getItem("savedLocations");
                currentLocation = localStorage.getItem("currentLocation");
                currentGPSLocation = localStorage.getItem("currentGPSLocation");
                fromCurrentGPS = localStorage.getItem("fromCurrentGPS");
            } else {
                storedLocations = await AsyncStorage.getItem("savedLocations");
                currentLocation = await AsyncStorage.getItem("currentLocation");
                currentGPSLocation = await AsyncStorage.getItem("currentGPSLocation");
                fromCurrentGPS = await AsyncStorage.getItem("fromCurrentGPS");
            }

            if (storedLocations) {
                setLocations(JSON.parse(storedLocations));
            }

            const isFromGPS = fromCurrentGPS === 'true';

            if (isFromGPS && currentGPSLocation) {
                setSelectedLocation(JSON.parse(currentGPSLocation));
            } else if (!isFromGPS && currentLocation) {
                setSelectedLocation(JSON.parse(currentLocation));
            }
        };

        loadLocations();
    }, []);

    const handleDelete = async (locationId: number) => {
        await trackPromise(
            (async () => {
                const updatedLocations = locations.filter(location => location.id !== locationId);
                setLocations(updatedLocations);

                if (Platform.OS === "web") {
                    localStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
                } else {
                    await AsyncStorage.setItem("savedLocations", JSON.stringify(updatedLocations));
                }
            })()
        );
    };

    const handleManage = () => {
        setIsManaging(!isManaging);
    };

    const handleSelectLocation = async (location: City) => {
        await trackPromise(
            (async () => {
                setSelectedLocation(location);

                if (Platform.OS === "web") {
                    localStorage.setItem("currentLocation", JSON.stringify(location));
                    localStorage.setItem("fromCurrentGPS", 'false');
                    localStorage.setItem("locationChanged", 'true');
                } else {
                    await AsyncStorage.setItem("currentLocation", JSON.stringify(location));
                    await AsyncStorage.setItem("fromCurrentGPS", 'false');
                    await AsyncStorage.setItem("locationChanged", 'true');
                }

                redirectFunction.push("/");
                redirectFunction.replace("/");
            })()
        );
    };

    const handleSelectCurrentLocation = async () => {
        try {
            await trackPromise(
                (async () => {
                    if (Platform.OS === "web") {
                        if (!navigator.geolocation) {
                            console.log("Geolocation is not supported by this browser.");
                            return;
                        }

                        navigator.geolocation.getCurrentPosition(
                            async (position) => {
                                const { latitude, longitude } = position.coords;
                                const cityName = `(${latitude}, ${longitude})`;

                                const currentLocation = { id: -1, name: cityName, lat: latitude, lon: longitude } as City;
                                setSelectedLocation(currentLocation);

                                localStorage.setItem("currentGPSLocation", JSON.stringify(currentLocation));
                                localStorage.setItem("fromCurrentGPS", 'true');

                                redirectFunction.push("/");
                                redirectFunction.replace("/");
                            },
                            (error) => console.error("Error getting location: ", error),
                            { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
                        );
                    } else {
                        const { status } = await locationExpo.requestForegroundPermissionsAsync();
                        if (status !== 'granted') {
                            console.log('Permission to access location was denied');
                            return;
                        }

                        const locationData = await locationExpo.getCurrentPositionAsync({});
                        const { latitude, longitude } = locationData.coords;
                        const cityName = `(${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;

                        const currentLocation = { id: -1, name: cityName, lat: latitude, lon: longitude } as City;
                        setSelectedLocation(currentLocation);

                        await AsyncStorage.setItem("currentGPSLocation", JSON.stringify(currentLocation));
                        await AsyncStorage.setItem("fromCurrentGPS", 'true');

                        redirectFunction.push("/");
                        redirectFunction.replace("/");
                    }
                })()
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSelectCurrentLocation}>
                <Card style={{ width: "100%", borderRadius: 20, padding: 22, backgroundColor: selectedLocation?.id !== undefined && selectedLocation.id === -1 ? "rgba(67, 135, 237, 1)" : "white" }}>
                    <Card.Body style={styles.body}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 13 }}>
                            <Icon name='gps' size={20} color={selectedLocation?.id !== undefined && selectedLocation.id === -1 ? themeValues.colors.white : themeValues.colors.textColor2} />
                            <Text style={[styles.text, { color: selectedLocation?.id !== undefined && selectedLocation.id === -1 ? themeValues.colors.white : themeValues.colors.textColor1 }]}>{t('gpsLocation')}</Text>
                        </View>
                        {selectedLocation?.id !== undefined && selectedLocation.id === -1 && <RadioButton selected={selectedLocation?.id !== undefined && selectedLocation.id === -1} onPress={() => handleSelectLocation(selectedLocation)} />}
                    </Card.Body>
                </Card>
            </TouchableOpacity>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10, marginTop: 15 }}>
                <Text style={[styles.title, { color: themeValues.colors.textColor2 }]}>{t('savedLocations')}</Text>
                <TouchableOpacity style={styles.manageCity} onPress={handleManage}><Text style={[styles.manageCity, { color: themeValues.colors.textColor1 }]}>{isManaging ? t('done') : t('manage')}</Text></TouchableOpacity>
            </View>
            {locations.length > 0 ? (locations.map((location) => (
                <View key={location.id} style={styles.locationContainer}>
                    <TouchableOpacity onPress={() => handleSelectLocation(location)} style={{ flex: 1 }}>
                        <Card style={{ width: "100%", borderRadius: 20, padding: 22, backgroundColor: selectedLocation?.id === location.id ? "rgba(67, 135, 237, 1)" : "white" }}>
                            <Card.Body style={styles.body}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 13, flex: 1 }}>
                                    <Icon
                                        name='city'
                                        size={20}
                                        color={selectedLocation?.id === location.id ? themeValues.colors.white : themeValues.colors.textColor2}
                                    />
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: selectedLocation?.id === location.id ? themeValues.colors.white : themeValues.colors.textColor1,
                                                flexShrink: 1
                                            }
                                        ]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {`${location.name}, ${location.region.length>0 ? `${location.region}, `: '' }${location.country}`}
                                    </Text>
                                </View>

                                {isManaging && selectedLocation?.id !== location.id ? (
                                    <TouchableOpacity onPress={() => handleDelete(location.id)} style={styles.deleteButton}>
                                        <Icon name="trash" size={20} color={themeValues.colors.textColor1} />
                                    </TouchableOpacity>
                                ) : (
                                    selectedLocation?.id === location.id && (
                                        <RadioButton selected onPress={() => handleSelectLocation(location)} />
                                    )
                                )}
                            </Card.Body>

                        </Card>
                    </TouchableOpacity>
                </View>
            ))) : (
                <View style={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginTop: 160 }} >
                    <Text style={[styles.manageCity, { fontSize: 18, color: themeValues.colors.textColor1 }]}>{t('notSavedLocations')}</Text>

                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    title: {
        fontSize: 17,
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_500Medium",
    },
    body: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 17,
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_500Medium",
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    manageCity: {
        backgroundColor: 'transparent',
        fontSize: 16,
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_500Medium",
    },
    currentLocationButton: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
    },
    currentLocationText: {
        fontSize: 16,
        fontFamily: Platform.OS === 'web' ? 'inherit' : "Jost_500Medium",
    }
});