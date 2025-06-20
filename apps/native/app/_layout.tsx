import React, { useEffect, useState } from 'react';
import { LoadingProvider, SettingsProvider, ThemeProvider, useTheme } from "@repo/ui";
import { router, Stack, useNavigationContainerRef } from "expo-router";
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const navigationRef = useNavigationContainerRef();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {

    const checkFirstVisit = async () => {
      try {
        const hasVisitedGetStarted = await AsyncStorage.getItem('hasVisitedGetStarted');

        if (isReady && !hasVisitedGetStarted) {
          router.replace('/get-started');
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };


    checkFirstVisit();
  }, [isReady]);

  useEffect(() => {
    const unsubscribe = navigationRef.addListener("state", () => {
      setIsReady(true);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <LoadingProvider>
      <SettingsProvider>
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: 'fade',
              contentStyle: { backgroundColor: '#fff' }
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="get-started" />
            <Stack.Screen 
              name="settings"
              options={{
                title: t('Settings'),
                headerShown: true,
                headerShadowVisible: false,
                headerStyle: { backgroundColor: 'rgba(156, 193, 220, 0.17)'},
                contentStyle: { backgroundColor: 'rgba(156, 193, 220, 0.17)'}

              }}
            />
            <Stack.Screen 
              name="locations"
              options={{
                title: t('Locations'),
                headerShown: true,
                headerShadowVisible: false,
                headerStyle: { backgroundColor: 'rgba(156, 193, 220, 0.17)'},
                contentStyle: { backgroundColor: 'rgba(156, 193, 220, 0.17)'}

              }}
            />
          </Stack>
        </ThemeProvider>
      </SettingsProvider>
    </LoadingProvider>
  );
}