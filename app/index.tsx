import { Redirect } from "expo-router";
import { getAccessToken } from "lib/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
	const [token, setToken] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getToken = async () => {
			const currentToken = await getAccessToken();
			setToken(currentToken);
			setLoading(false);
		};

		getToken();
	}, []);

	if (loading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return <Redirect href={token ? "/main" : "/auth/login"} />;
}
