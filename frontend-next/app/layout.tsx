import type { Metadata } from "next";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Ryan Klivansky Portfolio",
  description: "Portfolio website for Ryan Klivansky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="font-Inter_Tight">
        <MantineProvider>
          <ThemeProvider attribute="class">
            {children}
          </ThemeProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
