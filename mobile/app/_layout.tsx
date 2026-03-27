import { DarkTheme, ThemeProvider, useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {
    useEffect(() => {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor("#00000000");
    }, []);

    return (
        <ThemeProvider key={"privider"} value={DarkTheme}>
            <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
    );
}
