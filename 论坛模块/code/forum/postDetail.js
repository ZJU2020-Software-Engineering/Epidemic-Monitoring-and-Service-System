import React, { Component, useState } from 'react';
import { FlatList, Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function PostDetail({ navigation, route }) {
	const [refresh, setRefresh] = useState(false);
	console.log(route.params)
	let postID= route.params.post_id;
	console.log(postID)
	//模拟的数据
	let user_id = { 'user_id': '123456' }
	let post_id = { 'post_id': '20200504112233123456' };
	const [post_content, setPost_content] = useState(null);
	const [replies, setReplies] = useState(null);
	const [reply_content, setReply_content] = useState('');
	let reply_floor = { 'floor_num': '', 'post_id': '20200504112233123456' };
	let reply_reply =
		{ 'post_id': '20200504112233123456', 'reply_content': reply_content, 'reply_layer': '', 'user_id': '123456', 'user_name': '用户1' };
	let reply_post =
		{ 'post_id': '20200504112233123456', 'reply_content': reply_content, 'reply_layer': null, 'user_id': '123456', 'user_name': '用户1' };
	_keyExtractor = (item, index) => item.floor_num;

	//请求帖子详情的数据
	/*
	fetch('/forum/post/detail', {
		method: 'POST',
		headers: {
			"Accept": "application/json",
			"Content-Type": 'application/json',
			"Connection": "close",
		},
		body: JSON.stringify(post_id),
	}).then((response) => {
		return response.json();
	}).then((json) => {
		setPost_content(json.post)
		setReplies(json.replies)
	})
		.catch((error) => { console.error(error) })
		*/

	//测试用的数据，实际链接后端时换成 post_content 和 replies
	let post_contenttest = {
		'title': '标题1', 'type': 'normal', 'user_id': '123456', 'user_name': '用户1', 'content': '帖子内容1', 'view_num': 1, 'reply_num': 2, 'floor_num': 3,
		'favor_num': 0, 'dislike_num': 0, 'time_stamp': '2020-05-05 19:00:01'
	};
	let repliestest = [
		{ 'floor_num': '1', 'reply_content': '回复1', 'reply_layer': null, 'user_id': '123456', 'user_name': '用户1', 'time_stamp': '2020-05-05 19:00:01' }
		, { 'floor_num': '2', 'reply_content': '回复2', 'reply_layer': '用户1', 'user_id': '234567', 'user_name': '用户2', 'time_stamp': '2020-05-05 19:00:02' }
		, { 'floor_num': '3', 'reply_content': '回复2', 'reply_layer': '用户1', 'user_id': '234567', 'user_name': '用户2', 'time_stamp': '2020-05-05 19:00:02' }
		, { 'floor_num': '4', 'reply_content': '回复2', 'reply_layer': '用户1', 'user_id': '234567', 'user_name': '用户2', 'time_stamp': '2020-05-05 19:00:02' }
		, { 'floor_num': '5', 'reply_content': '回复2', 'reply_layer': '用户1', 'user_id': '234567', 'user_name': '用户2', 'time_stamp': '2020-05-05 19:00:02' }]

	//flatlist头部组件帖子内容
	_header = function () {
		return (
			<View style={{ flex: 1, flexDirection: 'column', paddingBottom: 20 }}>

				<Text style={styles.title_text}>
					{post_contenttest.title}
				</Text>
				<View style={styles.content_container}>
					<Text style={styles.author_text}>
						{post_contenttest.user_name}
					</Text>
					<View style={{ paddingRight: 25 }}>
						<Button title='删除' onPress={() => {
							if ((user_id.user_id == post_contenttest.user_id) || (user_id.user_id == '管理员id')) {
								fetch('/forum/post/delete', {
									method: 'POST',
									headers: {
										"Accept": "application/json",
										"Content-Type": 'application/json',
										"Connection": "close",
									},
									body: JSON.stringify(post_id),
								}).then((response) => response.json())
								.catch((error) => { console.error(error) })
								alert('删除帖子成功')
								navigation.goBack()
							}
							else {
								alert('无法删除非本人帖子')
							}
						}} />

					</View>
				</View>
				<Text style={styles.item}>
					{post_contenttest.content}
				</Text>
				<View style={styles.butten_view}>
					<View style={{ padding: 15 }}>
						<Button title='赞' onPress={() => {
							fetch('/forum/post/favor', {
								method: 'POST',
								headers: {
									"Accept": "application/json",
									"Content-Type": 'application/json',
									"Connection": "close",
								},
								body: JSON.stringify(post_id, user_id),
							}).then((response) => response.json())
								.then((json) => {
									alert(json.messege)
								})
								.catch((error) => { console.error(error) })
						}} />
					</View>
					<View style={{ padding: 15 }}>
						<Button title='踩' onPress={() => {
							fetch('/forum/post/dislike', {
								method: 'POST',
								headers: {
									"Accept": "application/json",
									"Content-Type": 'application/json',
									"Connection": "close",
								},
								body: JSON.stringify(post_id, user_id),
							}).then((response) => response.json())
								.then((json) => {
									alert(json.messege)
								})
								.catch((error) => { console.error(error) })
						}} />
					</View>
					<View style={{ padding: 15 }}>
						<Button title='收藏' onPress={() => {
							fetch('/forum/post/collect', {
								method: 'POST',
								headers: {
									"Accept": "application/json",
									"Content-Type": 'application/json',
									"Connection": "close",
								},
								body: JSON.stringify(post_id, user_id),
							}).then((response) => response.json())
								.then((json) => {
									alert(json.messege)
								})
								.catch((error) => { console.error(error) })
						}} />
					</View>
				</View>
				<Text>{post_contenttest.time_stamp}  回复:{post_contenttest.reply_num}  赞:{post_contenttest.favor_num}  踩:{post_contenttest.dislike_num}</Text>
			</View>
		)
	}

	//flatlist显示回复内容
	return (
		<View style={{ flex: 1 }}>

			<View style={styles.flatlist}>

				<FlatList
					data={repliestest}
					keyExtractor={this._keyExtractor}
					renderItem={({ item }) => <View style={{ paddingBottom: 10 }}>
						<Text style={styles.reply_user}>{item.floor_num}楼: {item.user_name}  {item.reply_layer ? <Text>回复  {item.reply_layer}</Text> : ""}  </Text>
						<Text fontSize={10} >{item.time_stamp}</Text>
						<Text style={styles.replies}>{item.reply_content}</Text>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 25 }}>

							<Button title='删除' onPress={() => {
								if ((user_id.user_id == item.user_id) || (user_id.user_id == '管理员id')) {
									reply_floor.floor_num = item.floor_num
									fetch('/forum/reply/delete', {
										method: 'POST',
										headers: {
											"Accept": "application/json",
											"Content-Type": 'application/json',
											"Connection": "close",
										},
										body: JSON.stringify(reply_floor),
									}).then((response) => response.json())
										.catch((error) => { console.error(error) })
								}
								else {
									alert('无法删除非本人回复')
								}
							}} />
							<View style={{ paddingLeft: 30 }}>
								<Button title='回复' onPress={() => {
									if (reply_content == '') {
										alert('回复内容为空')
									}
									else {
									reply_reply.reply_layer = item.user_name;
										fetch('/forum/reply/create', {
											method: 'POST',
											headers: {
												"Accept": "application/json",
												"Content-Type": 'application/json',
												"Connection": "close",
											},
											body: JSON.stringify(reply_reply),
										}).then((response) => response.json())
											.catch((error) => { console.error(error) })
									}

								}} />
							</View>
						</View>
					</View>}
					ListHeaderComponent={this._header}
					refreshing={refresh}
					onRefresh={() => {
						setRefresh(true);
						fetch('/forum/post/detail', {
							method: 'POST',
							headers: {
								"Accept": "application/json",
								"Content-Type": 'application/json',
								"Connection": "close",
							},
							body: JSON.stringify(post_id),
						}).then((response) => {
							return response.json();
						}).then((json) => {
							setPost_content(json.post)
							setReplies(json.replies)
						})
							.catch((error) => { console.error(error) })
						setRefresh(false);
					}}              //下拉刷新
				/>
			</View>


			<View style={styles.input}>
				<TextInput style={{ justifyContent: 'flex-end' }}
					multiline={true}
					placeholder='输入回复内容'
					onChangeText={reply_content => setReply_content(reply_content)} />
				<View style={{ paddingRight: 10 }}>
					<Button title='回复楼主' onPress={() => {
						if (reply_content == '') {
							alert('回复内容为空')
						}
						else {
							fetch('/forum/reply/create', {
								method: 'POST',
								headers: {
									"Accept": "application/json",
									"Content-Type": 'application/json',
									"Connection": "close",
								},
								body: JSON.stringify(reply_post),
							}).then((response) => response.json())
								.catch((error) => { console.error(error) })
						}
					}} />
				</View>
			</View>
		</View>

	);
}


const styles = StyleSheet.create({
	content_container: {
		paddingTop: 25,
		paddingBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	buttun_delete: {
		paddingLeft: 100,
	},
	title_view: {
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#27b5ee',
	},
	butten_view: {
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