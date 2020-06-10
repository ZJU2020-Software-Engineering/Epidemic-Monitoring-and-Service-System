import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { getToken } from './utls';


export default function UserPage({ navigation }) {
	let user_id = navigation.getParam('userID', 'Can not get userID')
	let user_name = navigation.getParam('username', 'Can not get username')

	return (
		<View style={styles.container}>
			<Text>username: {user_name}</Text>
		</View>
	)

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