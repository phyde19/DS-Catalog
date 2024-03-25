import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { theme } from "@/theme";
import SideNavLayout from "@/app/ui/layout/SideNavLayout";
import HeaderLayout from "./ui/layout/HeaderLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider 
          theme={theme}
          defaultColorScheme="light"
        >
            <HeaderLayout>{ children }</HeaderLayout>
          </MantineProvider>
      </body>
    </html>
  );
}
