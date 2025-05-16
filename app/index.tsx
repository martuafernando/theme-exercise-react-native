import { Redirect } from "expo-router";
import { getAccessToken } from "lib/auth";
import { useEffect, useState } from "react";

export default function Index() {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const getToken = async () => {
			const currentToken = await getAccessToken();
			setToken(currentToken);
		};

		getToken();
	}, []);

	return <Redirect href={token ? "/main" : "/auth/login"} />;
}
