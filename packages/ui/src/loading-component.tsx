import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { Card } from './Card';
import { useTheme } from './ThemeProvider';
export function LoadingComponent() {
    const { themeValues } = useTheme();
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeValues.colors.background
        }}>
            <Card style={{
                height: 200,
                width: 200,
                alignSelf: 'center',
                flexGrow: 0,
                flexShrink: 0
            }}>
                <Card.Body style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator size="large" color="rgba(67, 135, 237, 1)" />
                </Card.Body>
            </Card>
        </SafeAreaView>
    )
}