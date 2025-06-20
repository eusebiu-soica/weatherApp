import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Icon } from "./Icons";

interface RadioButtonProps {
    selected: boolean;
    onPress: () => void;
}

export function RadioButton({ selected, onPress }: RadioButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.radioButton, selected && styles.selected]}>
            {selected && <Icon name="check" size={14} strokeWidth={4} color="rgba(67, 135, 237, 1)" />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    selected: {
        backgroundColor: "white",
        borderColor: "white",
    },
});