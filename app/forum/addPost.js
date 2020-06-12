import React, { Component, useState } from "react";
import {
	Button,
	View,
	Text,
	TextInput,
	StyleSheet,
	AsyncStorage,
	KeyboardAvoidingView,
	Keyboard,
	TouchableOpacity,
	Image,
	ScrollView
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { host, port, makeFetch } from "./utls";
import ImgCell from './ImgCell'

export default function AddPost({ navigation }) {
	console.log('addpost')
	const [post_title, setPost_title] = useState("");
	const [post_content, setPost_content] = useState("");
	const [img, setImg] = useState("");

	let userID = navigation.getParam('userID', 'Can not get userID')
	let username = navigation.getParam('username', 'Can not get username')

	let openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
		if (permissionResult.granted === false) {
			alert("请允许相机权限");
			return;
		}
		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		if (pickerResult.cancelled === true) {
			return;
		}
		setImg(pickerResult.uri);
	}
	return (
		<View style={{ flex: 1, flexDirection: "column" }}>
			<TouchableOpacity
				onPress={() => { Keyboard.dismiss(); }} >
				<ScrollView>
					<TextInput
						style={{ marginTop: 50, marginBottom: 50 }}
						multiline={true}
						placeholder="输入帖子标题"
						onChangeText={(post_title) => setPost_title(post_title)}
					/>
					<TextInput
						style={{ paddingTop: 50, paddingBottom: 50 }}
						multiline={true}
						placeholder="输入帖子内容"
						onChangeText={(post_content) => setPost_content(post_content)}
					/>
					<ImgCell url={img} />
					<Button
						title="选择照片或拍照"
						onPress={openImagePickerAsync}
					/>
					<Button
						title="发布"
						onPress={async () => {
							if (post_title == "") {
								alert("标题为空");
							} else if (post_content == "") {
								alert("内容为空");
							}
							else {
								let formData = new FormData();
								let file_name = ''
								if (img != '') {
									file_name = 'image-' + Date.now() + '-' + username.replace(/\s*/g, "") + '.jpeg'
									let file = { uri: img, type: 'multipart/form-data', name: file_name }
									formData.append("file", file)
								}
								formData.append('post_title', post_title)
								formData.append('post_type', 0)
								formData.append('user_id', userID)
								formData.append('user_name', username)
								formData.append('post_content', post_content)
								formData.append('img_url', file_name)
								console.log(formData)
								fetch(host + ":" + 8003 + "/forum/post/imgUpload", {
									method: 'POST',
									headers: {
										'Content-Type': 'multipart/form-data',
									},
									body: formData,
								}).then((response) => response.json())
									.then((response) => {
										console.log(response)
										if (response.state == 'Y') {
											alert("创建帖子成功");
											navigation.goBack();
										}
										else {
											alert("创建帖子失败");
											navigation.goBack();
										}
									})
							}
						}}
					/>
				</ScrollView>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
	title_view: {
		flexDirection: "row",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#27b5ee",
	},
	title_text: {
		fontSize: 20,
		color: "white",
	},
	list: {
		flex: 1,
		paddingTop: 22,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
	},
	thumbnail: {
		width: 300,
		height: 300,
		resizeMode: "contain"
	}
});
