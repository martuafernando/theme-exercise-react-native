import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext({
	theme: "light",
	setTheme: (newTheme: "dark" | "light" | "system") => {},
});

export default function ThemeProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const [themeState, setThemeState] = useState("system");
	const { setColorScheme } = useColorScheme();

	useEffect(() => {
		const setInitialTheme = async () => {
			try {
				const savedTheme = await AsyncStorage.getItem("theme");
				const initialTheme =
					savedTheme === "system" ||
					savedTheme === "light" ||
					savedTheme === "dark"
						? savedTheme
						: "system";
				setThemeState(initialTheme);

				if (initialTheme === "system") {
					const currentTheme = Appearance.getColorScheme();
					setColorScheme(currentTheme ?? "light");
				} else {
					setColorScheme(initialTheme);
				}
			} catch (e) {
				console.error(e);
				const currentTheme = Appearance.getColorScheme();
				setColorScheme(currentTheme ?? "light");
			}
		};

		setInitialTheme();
	}, [setColorScheme]);

	const setTheme = useCallback(
		async (newTheme: "dark" | "light" | "system") => {
			try {
				await AsyncStorage.setItem("theme", newTheme);
				setThemeState(newTheme);

				if (newTheme === "system") {
					const currentTheme = Appearance.getColorScheme();
					setColorScheme(currentTheme ?? "light");
				} else {
					setColorScheme(newTheme);
				}
			} catch (e) {
				console.error(e);
			}
		},
		[setColorScheme],
	);

	useEffect(() => {
		const subscription = Appearance.addChangeListener(({ colorScheme }) => {
			if (themeState === "system") {
				setColorScheme(colorScheme ?? "light");
			}
		});

		return () => subscription.remove();
	}, [setColorScheme, themeState]);

	const theme = themeState;

	const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
};
