import React, { Component, useState } from 'react';
import { FlatList, Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { host, port } from "./utls";
import { AppLoading } from 'expo';
import ImgCell from './ImgCell'


export default function PostDetail({ navigation}) {
	const [refresh, setRefresh] = useState(false);
	let post_id = navigation.getParam('post_id','Can not get post_id')
	let user_id = navigation.getParam('userID','Can not get userID')
    let username = navigation.getParam('username','Can not get username')
	const [post_content, setPost_content] = useState(null);
	const [replies, setReplies] = useState(null);
	const [reply_content, setReply_content] = useState('');
	const [isReady, changeReady] = useState(false)
	function _keyExtractor(item, index) { item.floor_num; }

	//请求帖子详情的数据
	let url = host + ':' + port + '/forum/post/detail'
	if (!isReady || refresh) {
		fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
				"Content-Type": 'application/json',
			},
			body: JSON.stringify({ post_id: post_id, user_id: user_id })
		}).then((response) => {
			console.log('get detail')
			return response.json();
		}).then((json) => {
			console.log(json)
			setPost_content(json.post)
			setReplies(json.replies)
			setReply_content('')
			changeReady(true)
			setRefresh(false)
		})
			.catch((error) => { console.error(error) })
	}

	//flatlist头部组件帖子内容
	function _header() {
		return (
			<View style={{ flex: 1, flexDirection: 'column', paddingBottom: 20 }}>
				<Text style={styles.title_text}>
					{post_content.title}
				</Text>
				<View style={styles.content_container}>
					<Text style={styles.author_text}>
						{post_content.user_name}
					</Text>
					<View style={{ paddingRight: 25 }}>

					</View>
				</View>
				<Text style={styles.item}>
					{post_content.content}
				</Text>
				<ImgCell url={host + ":" + port + '/public/' + post_content.img_url} />
				<View style={styles.button_view}>
					<View style={{ padding: 15 }}>

					</View>
					<View style={{ padding: 15 }}>

					</View>
					<View style={{ padding: 15 }}>

					</View>
				</View>
				<Text>{post_content.time_stamp}  回复:{post_content.reply_num} </Text>
			</View>
		)
	}

	//flatlist显示回复内容
	if (isReady) {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.flatlist}>
					<FlatList
						data={replies}
						keyExtractor={_keyExtractor}
						renderItem={({ item }) => <View style={{ paddingBottom: 10 }}>
							<Text style={styles.reply_user}>{item.level}楼: {item.user_name}  {item.reference ? <Text>回复  {item.reference_name}</Text> : ""}  </Text>
							<Text fontSize={10} >{item.time_stamp}</Text>
							<Text style={styles.replies}>{item.content}</Text>
							<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 25 }}>
			
								<View style={{ paddingLeft: 30 }}>
			
								</View>
							</View>
						</View>}
						ListHeaderComponent={_header}
						refreshing={refresh}
						onRefresh={() => {
							setRefresh(true);
						}}              //下拉刷新
					/>
				</View>

				<View style={styles.input}>
					<TextInput style={{ justifyContent: 'flex-end' }}
						multiline={true}
						placeholder='输入回复内容'
						onChangeText={reply_content => setReply_content(reply_content)}
						value={reply_content}
					/>
					<View style={{ paddingRight: 10 }}>
						<Button title='回复楼主' onPress={() => {
							if (reply_content == '') {
								alert('回复内容为空')
							}
							else {
								let url = host + ':' + port + '/forum/reply/create'
								fetch(url, {
									method: 'POST',
									headers: {
										"Accept": "application/json",
										"Content-Type": 'application/json',
										"Connection": "close",
									},
									body: JSON.stringify({ username: username, user_id: user_id, content: reply_content, post_id: post_id, reference: 0, reference_id: 0, reference_name: '', level: post_content.reply_num + 1 }),
								}).then((response) => response.json()).then((json) => {
									if (json.state == 'Y') {
										alert('回复成功')
									}
									else {
										alert("回复失败")
									}
									setRefresh(true)
								})
									.catch((error) => { console.error(error) })

							}
						}} />
					</View>
				</View>
			</View>

		);
	}
	else {
		return (<AppLoading />)
	}
}


const styles = StyleSheet.create({
	content_container: {
		paddingTop: 25,
		paddingBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button_delete: {
		paddingLeft: 100,
	},
	title_view: {
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#27b5ee',
	},
	button_view: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		paddingRight: 10,
		paddingBottom: 10
	},
	title_text: {
		paddingTop: 10,
		fontSize: 28,
	},
	author_text: {

		fontSize: 20,
	},
	flatlist: {
		paddingTop: 10,
		paddingLeft: 10,
		flex: 1
	},
	item: {
		paddingTop: 10,
		fontSize: 18,
	},
	reply_user:
	{
		fontSize: 18,
		paddingBottom: 10
	},
	replies: {
		paddingBottom: 10,
		fontSize: 18
	},
	input: {
		flexDirection: 'row',
		paddingTop: 20,
		justifyContent: 'space-between'
	}
});