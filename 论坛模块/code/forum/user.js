import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { AuthContext } from './App';
import { getToken } from './utls';


export default function UserPage() {
	const { signOut } = React.useContext(AuthContext);
	const [isReady, changeReady] = React.useState(false);
	const [username, changeUsername] = React.useState('unknown');

	let token = getToken();
	token.then(function (result) {
		changeUsername(result)
		changeReady(true)
	})

	if (isReady) {
		return (
			<View style={styles.container}>
				<Text>username: {username}</Text>
				<Button title="SignOut" onPress={() => signOut()}></Button>
			</View>
		)
	}
	else {
		return (<AppLoading />)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	background: {
		flex: 1
	}
});