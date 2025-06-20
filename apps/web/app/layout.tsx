"use client";
import { LoadingProvider, SettingsProvider, ThemeProvider, useSettings, useTheme } from "@repo/ui";

import '../styles/index.module.css'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })
function Body({ children }: { children: React.ReactNode }) {
  const { themeValues } = useTheme();


  return (
    <div className={jost.className} style={{ background: themeValues.colors.background, height: '100vh', overflowX: 'hidden' }}>
      {children}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { language } = useSettings();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Wedly - App Forecast</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>

        <LoadingProvider>
          <SettingsProvider key={language}>
            <ThemeProvider>
              <Body>{children}</Body>
            </ThemeProvider>
          </SettingsProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
