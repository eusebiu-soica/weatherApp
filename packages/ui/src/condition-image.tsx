import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import Svg, { Path, Circle, Defs, Stop, LinearGradient, G, Rect, ClipPath } from "react-native-svg";

export interface ConditionsProps {
    name: string;
    width?: string | number;
    height?: string | number;
    style?: StyleProp<ViewStyle>
}

export function Condition({ name, width, height, style }: ConditionsProps) {
    const image: any = {
        "foggy": (
            <Svg width={width} height={height} style={style} viewBox="0 0 84 84" fill="none" >
                <G clipPath="url(#clip0_2_2)">
                    <Rect width="84" height="84" fill="url(#paint0_linear_2_2)" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M90.7425 48.5057C90.7425 48.5057 78.8305 40.9646 69.8332 40.9646C57.9318 40.9646 49.9746 51.2493 40.3475 51.2493C29.1276 51.2493 27.7157 48.2774 21.424 48.2774C12.5317 48.2774 0.795189 53.8502 -5.39436 51.8389C-10.3892 50.2158 -16.4024 46.9375 -16.4024 46.9375V74.4648L90.7425 76.1193V48.5057Z" fill="url(#paint1_linear_2_2)" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M-14.6365 66.8971C-14.6365 66.8971 -14.0933 49.5787 -1.77952 46.8708C8.98668 45.2604 17.2872 57.7596 26.9142 57.7596C38.1341 57.7596 43.4218 50.5057 54.3152 50.5057C62.2603 50.5057 70.0186 56.8123 80.838 54.6262C104.87 49.7706 92.5084 48.9375 92.5084 48.9375V76.4648L-14.6365 78.1193V66.8971Z" fill="url(#paint2_linear_2_2)" />
                    <Path fillRule="evenodd" clipRule="evenodd" d="M-3 68.1811C-3 68.1811 2.2389 61.3112 6.35036 60.6196C10.4618 59.928 12.7374 66.6247 12.7374 66.6247C12.7374 66.6247 14.6623 66.3318 15.7079 66.6247C16.7534 66.9177 17.5813 68.1811 17.5813 68.1811C17.5813 68.1811 18.913 64.1457 24.4426 64.1457C29.9723 64.1457 32.7816 69.5975 32.7816 69.5975C32.7816 69.5975 34.6222 68.1811 36.539 68.1811C38.4558 68.1811 40.6255 69.5975 40.6255 69.5975C40.6255 69.5975 41.9795 64.1457 47.6926 64.1457C53.4058 64.1457 55.8428 68.7723 55.8428 68.7723C55.8428 68.7723 58.1512 67.3512 60.3941 67.3512C62.637 67.3512 65.3136 68.7723 65.3136 68.7723C65.3136 68.7723 66.0646 64.2837 69.4056 61.6381C72.7466 58.9925 80.021 60.6196 80.021 60.6196L84 62.6633V84H-3V68.1811Z" fill="url(#paint3_linear_2_2)" />
                    <Circle cx="52" cy="20" r="7" fill="#FEFFCA" />
                </G>
                <Defs>
                    <LinearGradient id="paint0_linear_2_2" x1="0" y1="0" x2="0" y2="84" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#A2E9FF" />
                        <Stop offset="0.552083" stopColor="#DDFDFF" />
                    </LinearGradient>
                    <LinearGradient id="paint1_linear_2_2" x1="90.7425" y1="40.9646" x2="90.7425" y2="76.1193" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#AAF3FA" />
                        <Stop offset="1" stopColor="#D5FAFD" />
                    </LinearGradient>
                    <LinearGradient id="paint2_linear_2_2" x1="-14.6365" y1="46.7275" x2="-14.6365" y2="78.1193" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#7EDEE7" />
                        <Stop offset="1" stopColor="#B5F1F5" />
                    </LinearGradient>
                    <LinearGradient id="paint3_linear_2_2" x1="-3" y1="60" x2="-3" y2="84" gradientUnits="userSpaceOnUse">
                        <Stop stopColor="#4297A8" />
                        <Stop offset="1" stopColor="#77C8D3" />
                    </LinearGradient>
                    <ClipPath id="clip0_2_2">
                        <Rect width="84" height="84" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
        ),
    }

    return image[name] || null;
}
