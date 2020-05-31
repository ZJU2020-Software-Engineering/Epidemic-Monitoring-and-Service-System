import React, { useContext, useState, useRef, Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Alert,
} from "react-native";
import { host, port, makeFetch, httpRequest } from "./utls";
import { AuthContext } from "./App";

export default function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const userRef = useRef();
	const passRef = useRef();

	const { signIn } = useContext(AuthContext);

	return (
		<TouchableOpacity
			activeOpacity={0.75}
			style={styles.background}
			onPress={() => {
				userRef.current.blur();
				passRef.current.blur();
			}}
		>
			<View style={styles.container}>
				<TextInput
					placeholder="Username"
					value={username}
					onChangeText={setUsername}
					ref={userRef}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={setPassword}
					ref={passRef}
					secureTextEntry
				/>
				<Button
					title="Sign in"
					onPress={async function () {
						console.log(username, password);
						url = host + ":" + port + "/forum/login";
						data = { username: username, password: password };
						//response = await makeFetch(url, 'POST',data)
						response = { state: "success", userID:'123' };
						console.log(response);
						if (response["state"] == "success") {
							let userID = response["userID"];
							return signIn({ username, password, userID});
						} else {
							return Alert.alert("Error message", "Login failed");
						}
					}}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	background: {
		flex: 1,
	},
});
