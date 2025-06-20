"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { themes, ThemeType } from './themes';

const ThemeContext = createContext<{
  theme: ThemeType;
  toggleTheme: () => void;
  themeValues: typeof themes.light;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        toggleTheme,
        themeValues: themes[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}