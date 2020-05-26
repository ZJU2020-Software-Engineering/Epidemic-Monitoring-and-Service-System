## 待配送订单列表

* 实现的功能

  * 待配送订单列表，重点信息呈现：起始点，终点，配送时间限制
  * 订单详情页面，订单详细信息+完成配送按钮

* 需要安装的包

  yarn add react-native-animatable

  yarn add react-native-gesture-handler

  yarn add react-native-gesture-handler

  yarn add react-navigation-stack

  yarn add react-navigation

* 说明

  * 订单详情页面的按钮目前是将订单详情页面的配送显示状态直接改成“已送达”，由于未知数据库接口，还没有涉及改动数据库中配送状态字段的操作
  
* 调用方式

  * 直接调用封装好的 OrderToSendList
