import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export interface CardSectionProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export function Card({ children, style }: CardProps) {
    return <View style={[styles.container, style]}>{children}</View>;
}

Card.Header = function CardHeader({ children, style }: CardSectionProps) {
    return <View style={[styles.header, style]}>{children}</View>;
};

Card.Body = function CardBody({ children, style }: CardSectionProps) {
    return <View style={[styles.body, style]}>{children}</View>;
};

Card.Footer = function CardFooter({ children, style }: CardSectionProps) {
    return <View style={[styles.footer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 30,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '48%',
        flexGrow: 1,

    },
    header: {
        display: 'flex'
    },
    body: {
        width: '100%',
    },
    footer: {
        display: 'flex',
        width: '100%',
    },
});
