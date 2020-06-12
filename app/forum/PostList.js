import React, { Component, useState, useRef } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button'
import { useNavigation } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import { getPostDateAsync } from './utls';
import UserPage from './user';
import mailList from './mailList';
import { AppLoading } from 'expo';


export default function Post({ navigation }) {

	const [isReady, setReady] = useState(false);
	const [data, setData] = useState(null);
	const [refresh, setRefresh] = useState(false);

	let postDate = getPostDateAsync(0, 20);

	if (!isReady || refresh) {
		postDate.then((value) => {
			console.log(value)
			setData(value)
			setReady(true)
			setRefresh(false)
		})
	}

	function _formatDateString(str) {
		return str.split('T')[0]
	}

	function _formatType(str) {
		const type = ["普通", "公告"];
		return type[str]
	}

	if (isReady) {
		return (
			<View style={styles.container}>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={(event) => { navigation.navigate('PostDetail', { post_id: item.id }) }}
							activeOpacity={0.7}
						>
							<View style={styles.post}>
								<Text style={styles.postHeader}>
									{item.title}
								</Text>
								<Text style={styles.postBody}>
									{_formatType(item.type) + ' ' + _formatDateString(item.update_date) + ' by ' + item.user_name}
								</Text>
							</View>
						</TouchableOpacity>
					)
					}
					refreshing={refresh}
					onRefresh={() => {
						setRefresh(true);
					}}
				/>
			</View>
		)
	}
	else {
		return (<AppLoading />);
	}
}

const styles = StyleSheet.create({
	/**
	 * 这里是UI，保证各个页面的UI在这里修改
	 */
	container: {
		flex: 1,
	},
	cell: {
		borderBottomWidth: 1,
		borderColor: '#f8f8f8',
	},
	text: {
		fontSize: 18,
		fontStyle: 'italic',
		color: 'red',
		backgroundColor: '#FFFFFF',
		height: 24,
		textAlignVertical: 'center',
		textAlign: 'center',
	},
	post: {
		flexDirection: 'column',
		height: 85,
		backgroundColor: '#FFFFFF',
		paddingLeft: 10,
		paddingRight: 10,
		borderBottomWidth: 1,
		borderColor: '#E8E8E8',
	},
	postHeader: {
		height: 60,
		fontSize: 20,
		fontWeight: "bold",
		paddingBottom: 10,
		paddingTop: 10,
	},
	postBody: {
		height: 30,
		fontSize: 12,
	},
	select: {  //下拉列表在homePage中的style
		height: 18,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingEnd: 20,
	},
	selectItem: { //下拉列表的每一行的style
		height: 18,
		alignItems: 'center',
	},
	selectText: { //下拉列表中每一行中的文本的style
		fontSize: 14,
		marginTop: 2,
	},
	icon: {
		margin: 5
	}
});
