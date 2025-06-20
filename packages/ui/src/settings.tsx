import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";
import { useSettings } from "./SettingsProvider";

export function SettingsComponent() {
  const { t } = useTranslation();
  const { themeValues } = useTheme();

  const { temperatureUnit, setTemperatureUnit, speedUnit, setSpeedUnit, language, setLanguage } = useSettings();

  const renderOption = (label: any, options: any, selected: any, onSelect: any) => (
    <View style={styles.settingRow}>
      <Text style={[styles.settingLabel]}>{t(label)}</Text>
      <View style={styles.buttonGroup}>
        {options.map((option: any) => (
          <TouchableOpacity
            key={option.value}
            style={[styles.optionButton, selected === option.value && styles.selectedButton]}
            onPress={() => onSelect(option.value)}
          >
            <Text style={[styles.optionText, selected === option.value && styles.selectedText]}>
              {t(option.label)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (

    <View style={{ top: 25, height: '95%' }}>
      <Text style={[styles.units]}>{t('units')}</Text>
      <View style={styles.container}>
        {renderOption(
          "Temperature Unit",
          [
            { label: "fahrenheit", value: "F" },
            { label: "celsius", value: "C" }
          ],
          temperatureUnit,
          setTemperatureUnit
        )}

        <View style={styles.divider}></View>

        {renderOption(
          "Speed",
          [
            { label: "mph", value: "mph" },
            { label: "kmh", value: "km/h" }
          ],
          speedUnit,
          setSpeedUnit
        )}
      </View>

      <View style={[styles.container, { marginTop: 0 }]}>


        <View style={styles.settingRow}>
          <Text style={[styles.settingLabel]}>{t('Language')}</Text>
          <View style={styles.buttonGroup}>
            {/* {options.map((option: any) => ( */}
            <TouchableOpacity
              key='en'
              style={[styles.optionButton, language === 'en' && styles.selectedButton]}
              onPress={() => setLanguage('en')}
            >
              <Text style={[styles.optionText, language === 'en' && styles.selectedText]}>EN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              key='ro'
              style={[styles.optionButton, language === 'ro' && styles.selectedButton]}
              onPress={() => setLanguage('ro')}
            >
              <Text style={[styles.optionText, language === 'ro' && styles.selectedText]}>RO</Text>
            </TouchableOpacity>
            {/* ))} */}
          </View>
        </View>
      </View>

      {/* <TouchableOpacity>
        <View style={[styles.container, { marginTop: 0 }]}>
          <Text style={styles.settingLabel}>Feedback</Text>
        </View>
      </TouchableOpacity> */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: themeValues.colors.textColor3 }]}>© {new Date().getFullYear()} Wedly. {t('copy')}</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#f2f2f2'

  },
  units: {
    left: 35,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
    color: '#878686'
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: '#292929',
    fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium'
  },
  buttonGroup: {
    flexDirection: "row",
  },
  optionButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 10,
  },
  optionButtonLang: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 10,
  },
  selectedButton: {
    backgroundColor: 'rgba(67, 135, 237, 1)',
    borderColor: 'rgba(67, 135, 237, 1)',
  },

  optionText: {
    fontSize: 14,
    fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
    color: '#292929'

  },
  selectedText: {
    color: "white",
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: Platform.OS == 'web' ? 'inherit' : 'Jost_500Medium',
  }
});
