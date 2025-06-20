import React, { useState, useEffect, useRef } from "react";
import { TouchableOpacity, Animated, StyleSheet, StyleProp, ViewStyle, View, LayoutChangeEvent } from "react-native";
import { Card } from "./Card";

export interface AccordeonProps {
    trigger: React.ReactNode;
    items: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onExpandChange?: (expanded: boolean) => void;
}

export function Accordeon({ trigger, items, style, onExpandChange }: AccordeonProps) {
    const [expanded, setExpanded] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;
    const contentHeight = useRef(0);

    useEffect(() => {
        Animated.timing(heightAnim, {
            toValue: expanded ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();

        if (onExpandChange) {
            onExpandChange(expanded);
        }
    }, [expanded]);

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    const animatedHeight = heightAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 240],
    });

    // const handleContentLayout = (event: LayoutChangeEvent) => {
    //     contentHeight.current = event.nativeEvent.layout.height;
    // };

    return (
        <Card style={[styles.accordeon, style]}>
            <Card.Body>
                <TouchableOpacity onPress={toggleExpand}>{trigger}</TouchableOpacity>
                <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
                    <View>
                        {items}
                    </View>
                </Animated.View>
            </Card.Body>
        </Card>
    );
}

const styles = StyleSheet.create({
    accordeon: {
        width: '100%',
        borderRadius: 30,
        gap: 0,
    },
});