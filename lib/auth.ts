import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";

export const getAccessToken = async () => {
	try {
		return await SecureStore.getItemAsync(TOKEN_KEY);
	} catch (error) {
		console.error("Error while getting token", error);
		return null;
	}
};

export const setAccessToken = async (token: string) => {
	try {
		await SecureStore.setItemAsync(TOKEN_KEY, token);
	} catch (error) {
		console.error("Error while saving token", error);
		return null;
	}
};

export const removeAccessToken = async () => {
	try {
		await SecureStore.deleteItemAsync(TOKEN_KEY);
	} catch (error) {
		console.error("Error while removing token", error);
	}
};
