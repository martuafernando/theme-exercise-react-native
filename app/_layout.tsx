import { useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { loadFonts } from "../lib/font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import ThemeProvider from "components/theme-provider";
import Toast from "react-native-toast-message";

export default function RootLayout() {
	useEffect(() => {
		async function prepare() {
			try {
				await loadFonts();
			} catch (e) {
				console.warn(e);
			}
		}

		prepare();
	}, []);

	return (
		<>
			<View style={{ flex: 1 }}>
				<SafeAreaProvider>
					<SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
						<StatusBar style="dark" />
						<ThemeProvider>
							<Stack
								screenOptions={{
									headerShown: false,
									statusBarBackgroundColor: "#fff",
									statusBarStyle: "dark",
									contentStyle: {
										backgroundColor: "#f2f2f2",
									},
								}}
							/>
						</ThemeProvider>
					</SafeAreaView>
				</SafeAreaProvider>
			</View>
			<Toast />
		</>
	);
}
