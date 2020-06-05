/**
 * 需要安装以下依赖：
 * npm install @react-navigation/native --save
 * npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
 * npm install @react-navigation/material-bottom-tabs react-native-paper --save
 * npm install @react-navigation/stack --save
 * npm install react-native-vector-icons --save
 * npm install react-native-action-button --save
 * npm install react-native-ultimate-listview --save
 * npm install react-native-modal-dropdown --save
 */

import * as React from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	AsyncStorage,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import HomePageTab from "./HomePageTab";
import SearchPage from "./SearchPage";
import { getToken } from "./utls";
import AddPost from "./addPost";
import PostDetail from "./postDetail";
import mailCreate from './mailCreate';

const Stack = createStackNavigator();

function MySearchComponent() {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={(event) => {
				navigation.navigate("Search");
			}}
			activeOpacity={0.7}
		>
			{/* 这里调整搜索图标的style，不建议修改height和width，修改color可以改变图标的颜色 */}
			<View
				style={{
					height: 44,
					width: 44,
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Feather name="search" color="#CFCFCF" size={30} />
			</View>
		</TouchableOpacity>
	);
}

export default function HomePage() {
	const [username, changeUsername] = React.useState("");
	const [userID, changeUserID] = React.useState("");

	let token = getToken();
	token.then(function (result) {
		let [username, password, userID] = result.split('&')
		changeUsername(username)
		changeUserID(userID)
	})

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="SearchPage">
				<Stack.Screen
					name="HomePageStack"
					component={HomePageTab}
					options={{
						title: "健康论坛",
						headerStyle: {
							height: 64,
						},
						headerRight: () => <MySearchComponent />,
					}}
				/>
				<Stack.Screen name="Search" component={SearchPage} />
				<Stack.Screen
					name="PostDetail"
					initialParams={{ username: username, userID: userID }}
					component={PostDetail}
				/>
				<Stack.Screen
					name="PostPage"
					initialParams={{ username: username, userID: userID }}
					component={AddPost} />
				<Stack.Screen
					name="mailCreate"
					initialParams={{ username: username, userID: userID }}
					component={mailCreate} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	/**
	 * 这里是UI，保证各个页面的UI在这里修改
	 */
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontStyle: "italic",
		color: "red",
		backgroundColor: "#AEEEEE",
		height: 24,
		textAlignVertical: "center",
		textAlign: "center",
	},
	post: {
		flexDirection: "column",
		height: 300,
		backgroundColor: "#DCDCDC",
		paddingLeft: 10,
		paddingRight: 10,
	},
	poster: {
		fontSize: 24,
		fontWeight: "bold",
		fontStyle: "italic",
		color: "#1E90FF",
	},
	postHeader: {
		height: 60,
		fontSize: 36,
		paddingTop: 20,
	},
	postContent: {
		fontSize: 24,
		height: 180,
	},
	postDate: {
		height: 20,
		fontSize: 16,
		textAlignVertical: "center",
	},
	postView: {
		height: 25,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	select: {
		height: 18,
		flexDirection: "row",
		justifyContent: "flex-end",
		paddingEnd: 20,
	},
	selectItem: {
		height: 18,
		alignItems: "center",
	},
	selectText: {
		fontSize: 14,
		marginTop: 2,
	},
});
