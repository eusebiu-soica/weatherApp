import React, { useState, useEffect, useRef } from "react";
import { Text, View, TextInput, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { SavedLocations } from "./saved-locations";
import { Icon } from "./Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LocationProps {
    redirectFunction: { push: (path: string) => void };
    location?: any;
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

const DEBOUNCE_DELAY = 500;

export function Location({ redirectFunction, location }: LocationProps) {
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<City[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!searchText) {
            setSearchResults([]);
            return;
        }

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=72b1445623d947fb800102148220106&q=${searchText}`);
                const data: City[] = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error("Error searching cities:", error);
                setSearchResults([]);
            }
        }, DEBOUNCE_DELAY);

        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, [searchText]);

    const handleCityPress = async (city: City) => {
        try {
            console.log('yrktfyltuodlgu')
            let savedLocations: City[] = [];
            const savedLocationsString = Platform.OS === 'web' ? localStorage.getItem('savedLocations') : await AsyncStorage.getItem('savedLocations');
            if (savedLocationsString) {
                savedLocations = JSON.parse(savedLocationsString) || [];
            }

            if (!savedLocations.some(loc => loc.id === city.id)) {
                savedLocations.push(city);
            }

            const savedLocationsStringified = JSON.stringify(savedLocations);
            if (Platform.OS === 'web') {
                localStorage.setItem('currentLocation', JSON.stringify(city));
                localStorage.setItem('savedLocations', savedLocationsStringified);
                localStorage.setItem('locationChanged', 'true');
            } else {
                await AsyncStorage.setItem('currentLocation', JSON.stringify(city));
                await AsyncStorage.setItem('savedLocations', savedLocationsStringified);
                await AsyncStorage.setItem('locationChanged', 'true');
            }

            redirectFunction.push('/');
        } catch (error) {
            console.error("Error saving location:", error);
        }
    };

    return (
        <View style={{ padding: 20, paddingTop: 10 }}>
            <View style={styles.searchContainer}>
                <Text style={styles.searchIcon}>
                    <Icon name="search" size={20} color="#878686" />
                </Text>
                <TextInput
                    placeholder={t('searchLocation')}
                    style={styles.inputStyle}
                    placeholderTextColor={'#878686'}
                    value={searchText}
                    onChangeText={setSearchText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>
            {searchResults.length > 0 ? (
                <View style={styles.searchResultsContainer}>
                    {searchResults.map(city =>

                        (Platform.OS === 'web') ? (
                        <div key={city.id} style={styles.cityItem} onClick={() => handleCityPress(city)}>
                            <div style={styles.cityText}>{city.name}, {city.region}, {city.country}</div>
                        </div>) : (
                            <TouchableOpacity key={city.id} style={styles.cityItem} onPress={() => handleCityPress(city)}>
                                <Text style={styles.cityText}>{city.name}, {city.region}, {city.country}</Text>
                            </TouchableOpacity>

                        )


                    )}
                </View>
            ) : (
                <View style={{ marginTop: 25 }}>
                    <SavedLocations redirectFunction={redirectFunction} locationExpo={location} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        position: 'relative',
        justifyContent: 'center',
    },
    searchIcon: {
        position: 'absolute',
        left: 15,
    },
    inputStyle: {
        borderWidth: 1,
        padding: 13,
        paddingLeft: 45,
        borderRadius: 15,
        borderColor: "#ccc",
        fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
        fontSize: 16,
    },
    text: {
        left: 10,
        fontSize: 16,
        marginTop: 20,
        fontWeight: "500",
        fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
        color: '#878686'
    },
    searchResultsContainer: {
        marginTop: 10,
    },
    cityItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    cityText: {
        fontSize: 16,
        fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
    }
});
