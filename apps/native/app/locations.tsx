import React from "react";
import { useRouter } from "expo-router";
import { Location } from "@repo/ui";
import { StatusBar } from "expo-status-bar";

import * as LocationExpo from 'expo-location';

interface Location {
  id: number;
  name: string;
  country: string;
}

const mockLocations: Location[] = [
  { id: 1, name: "New York", country: "USA" },
  { id: 2, name: "London", country: "UK" },
  { id: 3, name: "Tokyo", country: "Japan" },
  { id: 4, name: "Paris", country: "France" },
];

export default function LocationPage() {
  const router = useRouter();


  return (
    <>
      <Location redirectFunction={router} location={LocationExpo} />
      <StatusBar style="auto" />
    </>
  );
}