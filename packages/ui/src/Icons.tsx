import React from "react";

import Svg, { Path, Circle, Defs, Stop, LinearGradient, Line, Rect, G, FeFlood, FeBlend, FeGaussianBlur, FeColorMatrix, Filter, FeOffset, FeComposite } from "react-native-svg";

export interface IconProps {
  name: string
  color?: string;
  strokeWidth?: number;
  size?: number
}


export function Icon({ name, color = "#000", size = 24, strokeWidth = 2 }: IconProps) {
  const icons: any = {
    "settings": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <Circle cx="12" cy="12" r="3" />
      </Svg>

    ),
    "arrow-down": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12 5v14" />
        <Path d="m19 12-7 7-7-7" />
      </Svg>
    ),
    "arrow-up": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="m5 12 7-7 7 7" />
        <Path d="M12 19V5" />
      </Svg>
    ),
    "chevron-down": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="m6 9 6 6 6-6" />
      </Svg>
    ),
    "chevron-up": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="m18 15-6-6-6 6" />
      </Svg>
    ),
    "umbrella": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
        <Path d="M12 12v8a2 2 0 0 0 4 0" />
        <Path d="M12 2v1" />
      </Svg>
    ),
    "sun-simple": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Circle cx="12" cy="12" r="4" />
        <Path d="M12 2v2" />
        <Path d="M12 20v2" />
        <Path d="m4.93 4.93 1.41 1.41" />
        <Path d="m17.66 17.66 1.41 1.41" />
        <Path d="M2 12h2" />
        <Path d="M20 12h2" />
        <Path d="m6.34 17.66-1.41 1.41" />
        <Path d="m19.07 4.93-1.41 1.41" />
      </Svg>
    ),
    "map-pin": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <Circle cx="12" cy="10" r="3" />
      </Svg>
    ),
    "humidity": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <Path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </Svg>
    ),
    "wind": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
        <Path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
        <Path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
      </Svg>
    ),
    "air-pressure": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12 14l4-4" />
        <Path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </Svg>
    ),
    "visibility": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <Circle cx="12" cy="12" r="3" />
      </Svg>
    ),
    "air-quality": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
        <Path d="M12 12v.01" />
      </Svg>
    ),
    "clock-indicator": (
      <Svg width={size} height={size} viewBox="0 0 55 28" fill="none">
        <Path d="M1 26.4819L53.2297 1.9999" stroke="#325169" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
        <Circle cx="41" cy="8" r="8" fill="white" />
        <Circle cx="41" cy="8" r="6.5" stroke="#325169" strokeOpacity="0.8" strokeWidth="3" />
      </Svg>
    ),
    "sunrise": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
        <Path d="M12 2v8" />
        <Path d="m4.93 10.93 1.41 1.41" />
        <Path d="M2 18h2" />
        <Path d="M20 18h2" />
        <Path d="m19.07 10.93-1.41 1.41" />
        <Path d="M22 22H2" />
        <Path d="m8 6 4-4 4 4" />
        <Path d="M16 18a4 4 0 0 0-8 0" />
      </Svg>
    ),
    "sunset": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M12 10V2" />
        <Path d="m4.93 10.93 1.41 1.41" />
        <Path d="M2 18h2" />
        <Path d="M20 18h2" />
        <Path d="m19.07 10.93-1.41 1.41" />

        <Path d="M22 22H2" />
        <Path d="m16 6-4 4-4-4" />
        <Path d="M16 18a4 4 0 0 0-8 0" />
      </Svg>
    ),
    "dot": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Circle cx="12.1" cy="12.1" r="1" />
      </Svg>
    ),
    "check": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M20 6L9 17l-5-5" />
      </Svg>
    ),
    "search": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Circle cx="11" cy="11" r="8" />
        <Path d="m21 21-4.3-4.3" />
      </Svg>
    ),
    "trash": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Path d="M3 6h18" />
        <Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <Line x1="10" x2="10" y1="11" y2="17" />
        <Line x1="14" x2="14" y1="11" y2="17" />
      </Svg>
    ),
    "city": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <Path d="M9 22v-4h6v4" />
        <Path d="M8 6h.01" />
        <Path d="M16 6h.01" />
        <Path d="M12 6h.01" />
        <Path d="M12 10h.01" />
        <Path d="M12 14h.01" />
        <Path d="M16 10h.01" />
        <Path d="M16 14h.01" />
        <Path d="M8 10h.01" />
        <Path d="M8 14h.01" />
      </Svg>
    ),
    "gps": (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <Line x1="2" x2="5" y1="12" y2="12" />
        <Line x1="19" x2="22" y1="12" y2="12" />
        <Line x1="12" x2="12" y1="2" y2="5" />
        <Line x1="12" x2="12" y1="19" y2="22" />
        <Circle cx="12" cy="12" r="7" />
        <Circle cx="12" cy="12" r="3" />
      </Svg>
    ),
    "sun": (
      <Svg width={size} height={size} viewBox="0 0 39 39" fill="none">
        <Path d="M19.1999 27.4664C23.7102 27.4664 27.3665 23.81 27.3665 19.2997C27.3665 14.7894 23.7102 11.1331 19.1999 11.1331C14.6895 11.1331 11.0332 14.7894 11.0332 19.2997C11.0332 23.81 14.6895 27.4664 19.1999 27.4664Z" fill="url(#paint0_linear_118_111)" stroke="#F8AF18" strokeWidth="0.5" strokeMiterlimit="10" />
        <Path d="M19.1997 6.62993V1.79993V6.62993ZM19.1997 36.7999V31.9699V36.7999ZM28.1597 10.3399L31.5742 6.92548L28.1597 10.3399ZM6.82526 31.6744L10.2397 28.2599L6.82526 31.6744ZM10.2397 10.371L6.82526 6.95659L10.2397 10.371ZM31.5742 31.6744L28.1597 28.2599L31.5742 31.6744ZM6.52971 19.2999H1.69971H6.52971ZM36.6997 19.2999H31.8697H36.6997Z" fill="url(#paint1_linear_118_111)" />
        <Path d="M19.1997 6.62993V1.79993M19.1997 36.7999V31.9699M28.1597 10.3399L31.5742 6.92548M6.82526 31.6744L10.2397 28.2599M10.2397 10.371L6.82526 6.95659M31.5742 31.6744L28.1597 28.2599M6.52971 19.2999H1.69971M36.6997 19.2999H31.8697" stroke="#FBBF24" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
        <Defs>
          <LinearGradient id="paint0_linear_118_111" x1="15.1165" y1="12.2297" x2="23.2832" y2="26.3697" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FFEDBF" />
            <Stop offset="0.464" stopColor="#FBBF24" />
            <Stop offset="1" stopColor="#F59E0B" />
          </LinearGradient>
          <LinearGradient id="paint1_linear_118_111" x1="10.4497" y1="4.14993" x2="27.9497" y2="34.4499" gradientUnits="userSpaceOnUse">
            <Stop stopColor="#FFEDBF" />
            <Stop offset="0.464" stopColor="#FBBF24" />
            <Stop offset="1" stopColor="#F59E0B" />
          </LinearGradient>
        </Defs>
      </Svg>
    ),

    "drop": (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <Path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </Svg>
    ),

    "snow": (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="m10 20-1.25-2.5L6 18" />
        <Path d="M10 4 8.75 6.5 6 6" />
        <Path d="m14 20 1.25-2.5L18 18" />
        <Path d="m14 4 1.25 2.5L18 6" />
        <Path d="m17 21-3-6h-4" />
        <Path d="m17 3-3 6 1.5 3" />
        <Path d="M2 12h6.5L10 9" />
        <Path d="m20 10-1.5 2 1.5 2" />
        <Path d="M22 12h-6.5L14 15" />
        <Path d="m4 10 1.5 2L4 14" />
        <Path d="m7 21 3-6-1.5-3" />
        <Path d="m7 3 3 6h4" />
      </Svg>
    )
  };

  return icons[name] || null;
}
