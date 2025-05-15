import { TouchableOpacity, View, Text } from "react-native";
import { useThemeContext } from "./theme-provider";

export default function ThemeToggle() {
	const { setTheme } = useThemeContext();

	return (
		<View className="flex-row space-x-2 p-4 gap-2">
			<TouchableOpacity
				onPress={() => {
					setTheme("light");
				}}
				className="px-4 py-2 rounded-lg bg-blue-500"
			>
				<Text className="text-white">Light</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					setTheme("dark");
				}}
				className="px-4 py-2 rounded-lg bg-blue-500"
			>
				<Text className="text-white">Dark</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					setTheme("system");
				}}
				className="px-4 py-2 rounded-lg bg-blue-500"
			>
				<Text className="text-white">System</Text>
			</TouchableOpacity>
		</View>
	);
}
