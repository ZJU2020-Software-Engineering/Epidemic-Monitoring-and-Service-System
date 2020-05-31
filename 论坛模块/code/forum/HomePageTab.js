import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HomePageList from './HomeListView'
import { Feather } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button'
import { useNavigation } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
import { getPostDateAsync } from './utls';
import UserPage from './user';
import {mailList} from './mail'

const Tab = createMaterialBottomTabNavigator();

class Home extends React.Component {

	// 这里是主页

	constructor(props) {
		super(props);
		this.state = {
			networkErr: 0, //0:无异常 1:网路异常 2:超时
			selectMode: 0,
			showSelect: false,
			refreshed: true,
		}
	}

	_getData = async (mode = 0, postNum = 10) => {
		let timeThreshold = new Promise((resolve, reject) => {
			setTimeout(() => {
				reject(2);
			}, 1000);  //设置10s的超时阈值
		});

		let errDetect = 0;
		let postDate = await Promise.race([timeThreshold, getPostDateAsync(mode, postNum)])
			.then((value) => {
				return value;
			})
			.catch((err) => {
				errDetect = err;
				this.setState({ networkErr: err });
				return [];
			});

		if (errDetect != 0)
			return ([]);
		else
			return (postDate);
	}

	_onFetch = async (page = 1, startFetch, abortFetch) => {
		try {
			let pageLimit = 10; //设置一页显示的条目数
			let rowData = [];

			rowData = await this._getData(this.state.selectMode, pageLimit);
			//开始提取数据
			console.log(`数据获取完毕-${page}`);
			console.log(rowData);
			startFetch(rowData, pageLimit);
			if (!this.state.refreshed) this.setState({ refreshed: true });
		} catch (err) {
			//err为网络参数
			abortFetch(); //停止
		}
	}

	_refresh = async () => {
		console.log('开始刷新');
		try {
			let rowData = [];

			rowData = await this._getData(this.state.selectMode, 5);
			console.log(rowData);
			console.log(this.listView.state.dataSource);
			let newData = rowData.concat(this.listView.state.dataSource);
			this.listView.updateDataSource(newData);
			this.setState({ refreshed: true });
		} catch (err) {
			console.log('刷新时发生网络异常');
		}
	}

	_emptyView = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					{this.state.networkErr == 2 ? '网络好像延时很高哦' :
						this.state.networkErr == 1 ? '网络好像出现了故障' :
							'没有找到任何内容'}
				</Text>
			</View>
		);
	}

	//刚开始获取数据时显示的内容
	_renderPaginationFetchingView = () => {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>正在获取数据</Text>
			</View>
		);
	}

	_renderItem = (item, index) => {
		return (
			<TouchableOpacity
				onPress={(event) => { this.props.navigation.navigate('PostDetail', { post_id: item.post_id }) }}
				activeOpacity={0.7}
			>
				<View style={styles.post}>
					<Text style={styles.postHeader}>
						{`#${item.post_type}# ${item.post_title}`}
					</Text>
					<Text style={styles.postDate}>
						{this._formatDateString(item.time_stamp)}
					</Text>
					<Text style={styles.postContent}>
						<Text style={styles.poster}>{`${item.user_name}:`}</Text>
						{item.content}
					</Text>
					<View style={styles.postView}>
						<Feather name='eye' color='black' size={styles.postView.height - 5} />
						<Text style={{ height: styles.postView.height, paddingLeft: 5, fontSize: styles.postView.height - 5 }}>{item.views}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	_formatDateString = (timestamp) => {
		let time = new Date(timestamp);
		return (`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`);
	}

	_renderSeperator = () => {
		return (
			<View style={{ height: 1, backgroundColor: '#E6E6FA' }}></View>
		);
	}

	_renderSelectRow = (option, index, isSelected) => {
		return (
			<View style={{ ...styles.selectItem, backgroundColor: isSelected ? '#D3D3D3' : '#FFFFFF' }}>
				<Text style={{ ...styles.selectText, fontWeight: isSelected ? 'bold' : 'normal' }}>{option}</Text>
			</View>
		);
	}

	_adjustFrame = (option) => {
		console.log(option);
		option.height = 56;
		option.width = 50; //建议与textStyle里的width一起改
		return option;
	}

	_onDropdownWillShow = () => {
		this.setState({ showSelect: true });
		return true;
	}

	_onDropdownWillHide = () => {
		this.setState({ showSelect: false });
		return true;
	}

	_onSelected = (index, value) => {
		this._onSelectModeChange(index);
		return true;
	}

	_onSelectModeChange = (mode) => {
		if (this.state.selectMode != mode) {
			if (this.state.refreshed) {
				if (this.state.selectMode == 0) {
					this._oldData = this.listView.state.dataSource;
				}
				this.setState({ refreshed: false });
			}
			if (mode == 0) { //全部
				this.listView.updateDataSource(this._oldData);
			}
			else if (mode == 1) { //公告
				let selectedData = [];
				if (this._oldData === undefined) {
					this.listView.updateDataSource(selectedData);
				}
				else {
					this._oldData.map((value, index, arr) => {
						if (value.post_type == '公告')
							selectedData.push(value)
					});
					this.listView.updateDataSource(selectedData);
				}
			}
			else { //水贴
				let selectedData = [];
				if (this._oldData === undefined) {
					this.listView.updateDataSource(selectedData);
				}
				else {
					this._oldData.map((value, index, arr) => {
						if (value.post_type == '水贴')
							selectedData.push(value)
					});
					this.listView.updateDataSource(selectedData);
				}
			}
		}
		this.setState({ selectMode: mode });
	}
	//这里图标所在View的大小与外层大小一致 
	render() {
		return (
			<>
				<View style={styles.select}>
					<Text>{this.state.selectMode}</Text>
					<ModalDropdown
						defaultIndex={0}
						defaultValue={'全部'}
						options={['全部', '公告', '水贴']}
						style={{ height: 18, width: 50 }}
						textStyle={{ textAlign: 'center', fontSize: 18 }}
						adjustFrame={this._adjustFrame}
						renderRow={this._renderSelectRow}
						onDropdownWillHide={this._onDropdownWillHide}
						onDropdownWillShow={this._onDropdownWillShow}
						onSelect={this._onSelected}
					></ModalDropdown>
					<View style={{ flexDirection: 'column', justifyContent: 'center', height: 18, width: 18 }}>
						<Feather name={this.state.showSelect ? 'chevron-down' : 'chevron-up'} size={14} color='black' />
					</View>
				</View>
				<HomePageList
					ref={(ref) => this.listView = ref}
					keyExtractor={(item, index) => `${item.post_id}-${index}`}
					getItemLayout={(data, index) => ({
						length: styles.post.height,
						offset: (styles.post.height + 1) * index,
						index
					})}
					onFetch={this._onFetch}
					item={this._renderItem}
					emptyView={this._emptyView}
					separator={this._renderSeperator}
					refreshableMode='advanced'
					refreshableTitlePull='下拉刷新'
					refreshableTitleRelease='松手刷新'
					refreshableTitleRefreshing='正在加载。。。'
					displayDate={true}
					refresh={this._refresh}
				/>
				<MyPostComponent userInfo={{ ...this.props.route.params }} />
			</>
		);
	}
}



function HomePageTab({ navigation, route }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#ffffff"
			inactiveColor='#D3D3D3'
			shifting={true}
			sceneAnimationEnabled={true}
			backBehavior='initialRoute'
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: '首页',
					tabBarColor: '#1E90FF',
					tabBarIcon: ({ focused, color }) => (
						<Feather name='home' color={color} size={26} />
					),
					tabBarColor: '#1E90FF'
				}}
				/* 这里将用户的信息传入到页面中 */
				initialParams={route.params} />
			<Tab.Screen
				name='UserPage'
				/* 这里的component在整合是替换成需要的个人中心页面 */
				component={UserPage}
				options={{
					tabBarLabel: '个人中心',
					tabBarIcon: ({ color, focused }) => (
						<Feather name="user" color={focused ? '#D3D3D3' : color} size={26} />
					),
					tabBarColor: '#FFFFFF',
				}}
				/* 这里将用户的信息传入到页面中 */
				initialParams={route.params} />
			<Tab.Screen
				name='Mail'
				/* 这里的component在整合是替换成需要的站内信页面 */
				component={mailList}
				options={{
					tabBarLabel: '站内信',
					tabBarIcon: ({ color }) => (
						<Feather name="mail" color={color} size={26} />
					),
					tabBarColor: '#FF0000'
				}}
				/* 这里将用户的信息传入到页面中 */
				initialParams={route.params} />
		</Tab.Navigator>
	);
}


function Mail({ navigation, route }) {
    /**
     * 这里是站内信
     */

	return (
		<View style={styles.container}>
			<Text style={styles.text}>这是站内信页面</Text>
		</View>
	);
}

function MyPostComponent({ userInfo }) {
	const navigation = useNavigation();
	return (
		<ActionButton
			size={40}
			buttonColor='rgba(255,140,0,1)'  //这里可以修改发布按钮的底色
			offsetX={30}
			offsetY={30}
			onPressIn={(event) => { navigation.navigate('PostPage', { ...userInfo }) }}
			renderIcon={() => (<Feather name='plus' color='#ffffff' size={40} />)}
		>
		</ActionButton>
	);
}


const styles = StyleSheet.create({
	/**
	 * 这里是UI，保证各个页面的UI在这里修改
	 */
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontStyle: 'italic',
		color: 'red',
		backgroundColor: '#AEEEEE',
		height: 24,
		textAlignVertical: 'center',
		textAlign: 'center',
	},
	post: {
		flexDirection: 'column',
		height: 300,
		backgroundColor: '#DCDCDC',
		paddingLeft: 10,
		paddingRight: 10,
	},
	poster: {
		fontSize: 24,
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#1E90FF'
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
		textAlignVertical: 'center',
	},
	postView: {
		height: 25,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
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
});

export default HomePageTab;