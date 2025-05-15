import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Register() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleSignUp = async () => {
		router.replace("/auth/login");
	};

	const handleSignIn = () => {
		// Navigasi ke halaman signup
		router.push("/auth/login");
	};

	return (
		<View className="px-6 justify-center">
			<Text className="text-3xl font-bold text-gray-900 mt-[67px] font-circular-bold w-64 mb-8">
				Glad to meet you again!
			</Text>

			<View className="space-y-4">
				<TextInput
					className="w-full h-14 mb-4 px-4 bg-gray-50 rounded-xl text-base text-gray-900"
					placeholder="Your Full Name"
					placeholderTextColor="#9ca3af"
					value={fullName}
					onChangeText={setFullName}
				/>

				<TextInput
					className="w-full h-14 mb-4 px-4 bg-gray-50 rounded-xl text-base text-gray-900"
					placeholder="Your Email"
					placeholderTextColor="#9ca3af"
					value={email}
					onChangeText={setEmail}
				/>

				<View className="flex-row items-center">
					<TextInput
						className="w-full h-14 mb-8 px-4 bg-gray-50 bg-opacity-10 rounded-xl text-base text-gray-900"
						placeholder="Enter your password"
						placeholderTextColor={"#9ca3af"}
						value={password}
						onChangeText={setPassword}
						secureTextEntry={!showPassword}
					/>
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
						className="absolute right-4 bottom-1/2"
					>
						{showPassword && <Ionicons name="eye-off" size={24} color="gray" />}
						{!showPassword && <Ionicons name="eye" size={24} color="gray" />}
					</TouchableOpacity>
				</View>
				{!!error && (
					<Text className="text-red-500 text-center mb-2">{error}</Text>
				)}

				<TouchableOpacity
					className="w-full h-14 bg-emerald-900 rounded-xl items-center justify-center"
					onPress={handleSignUp}
					disabled={loading}
				>
					{loading ? (
						<ActivityIndicator color="#fff" />
					) : (
						<Text className="text-white font-semibold text-[16px]">
							Register
						</Text>
					)}
				</TouchableOpacity>

				<TouchableOpacity
					className="w-full rounded-xl items-center justify-center mt-6"
					onPress={handleSignIn}
				>
					<Text className="font-bold text-emerald-900">Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
