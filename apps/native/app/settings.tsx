import React from "react"
import { SettingsComponent } from "@repo/ui"
import { StatusBar } from "expo-status-bar"
export default function Settings() {
  return (
    <>
      <SettingsComponent />
      <StatusBar style="auto" />
    </>
  )
}