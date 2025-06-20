import { Platform } from "react-native";

export function convertTo24HourFormat(time: string): string {
  const [timePart, modifier] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function roundValue(value: number): number {
  return Math.round(value);
}

export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const kmhToMph = (kmh: number): number => {
  return kmh * 0.621371;
};

export const extractIconCode = (iconUrl: string) => {
  return iconUrl.split("/").pop()?.replace(".png", "") || null;
};

