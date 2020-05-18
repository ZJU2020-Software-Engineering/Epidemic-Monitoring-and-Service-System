## 功能 ##
显示已参与志愿者活动列表，显示当前活动状态（已完成/未开始/即将开始/已开始）

每五分钟检查志愿活动，如果两小时内某志愿活动即将开始，弹出提醒并更新状态

## 说明 ##

合并了已完成活动与已报名活动的显示，用状态加以区分

当前未连接数据库

接口：

个人参与的活动信息

 `Activity=[{
	id:0,
	title:"食堂指引",
	time: "2020-05-17 10:00:00",
	address:"玉泉食堂",
	type:"执勤",
	state:"未开始"
},...]` 
 

## 配置 ##
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-web
- expo install @react-navigation/native
- expo install @react-navigation/stack
- expo install @ant-design/react-native
- app.js,ActivityList.js,DetailScreen.js放置于当前目录下
- expo start


## 运行结果 ##
![](test.jpg)
