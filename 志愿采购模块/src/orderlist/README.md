### 订单列表

本目录下为商家端的订单列表。分为当前订单（没有完成配送）列表和历史订单（已完成配送）列表两个页面。当前订单列表中每一项后面有确认打包完成的按钮。

##### 在本项目目录中添加依赖：

```bash
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

##### 安装相关库:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @ant-design/react-native --save
```
或者

```bash
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add @ant-design/react-native
```

##### 说明：

1. 项目包括入口文件App.js以及同一层级的CurrentOrder.js和HistoryOrder.js。
2. 考虑到和订单类的交互，没有进行数据库操作。
3. react-navigation 使用的版本是5.x，无法兼容低版本API。