import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";


export interface ButtonProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: (event: GestureResponderEvent) => void;
}
export interface ButtonText {
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>;
}

export function Button({ children, style, onClick }: ButtonProps) {
  // const [fontLoaded] = useFonts({ Jost_400Regular })
  // if (!fontLoaded) return null;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onClick && onClick}>
      <Button.Text>
        {children}
      </Button.Text>
    </TouchableOpacity>
  );
}

Button.Text = function ButtonText({ children, style }: ButtonText) {
  return (<Text style={[styles.text, style]}>{children}</Text>)
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    backgroundColor: "#2f80ed",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    fontFamily:  Platform.OS === "web" ? "inherit" : "Jost_500Medium", 
  },
});
