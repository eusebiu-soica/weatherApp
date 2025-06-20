import React from "react";
import { View, ActivityIndicator, Text, StyleSheet, Platform } from "react-native";
import { useLoading } from "./LoadingContext";
import { Card } from "./Card";
import { useTranslation } from "react-i18next";

export const LoadingIndicator = () => {
    const { isLoading } = useLoading();
    const { t } = useTranslation();

    if (!isLoading) return null;

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <Card style={{ width: '100%', gap: 0, position: 'relative' }}>
                    <Card.Body
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 25,
                            paddingBottom: 0,
                            marginBottom: 0,
                        }}
                    >
                        <ActivityIndicator size="large" color="rgba(67, 135, 237, 1)" />
                        <Text style={styles.text}>{t('loading')}</Text>
                    </Card.Body>
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    container: {
        width: "100%",
        alignItems: "center",
        padding: 20
    },
    text: {
        fontFamily: Platform.OS === "web" ? "inherit" : "Jost_500Medium",
        fontSize: 16,
        color: "#333",
    },
});

export default LoadingIndicator;