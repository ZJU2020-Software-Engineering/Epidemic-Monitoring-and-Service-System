### 个人用户主界面

本目录下为个人用户主界面相关代码。主要部分为各个校区食堂拥挤情况图表以及其他子模块页面入口。

#### 包含文件：

1. App.js （项目入口）

2. NumberDisplay.js （食堂拥挤情况部分代码）

3. EntryDisplay.js （子模块页面入口）

#### 添加依赖：

```bash
npm install react-native-tab-view
npm install @ant-design/react-native  --save
npm install react-native-elements
npm install react-native-paper
expo install react-native-gesture-handler react-native-reanimated
```

或者：

```bash
yarn add react-native-tab-view
yarn add @ant-design/react-native
yarn add react-native-elements
yarn add react-native-paper
expo install react-native-gesture-handler react-native-reanimated
```

#### 提供其他页面入口：

1. 个人中心入口:  App.js line:59
2. 配送服务入口：EntryDisplay.js line:33
3. 志愿认证入口:  EntryDisplay.js line:36
4. 志愿报名入口：EntryDisplay.js line:39