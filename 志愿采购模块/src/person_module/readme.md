**需要导入的依赖：**

```
react-native-tab-view
@ant-design/react-native
react-native-elements
react-native-paper
react-native-gesture-handler 
react-native-reanimated
react-native-animatable 
react-navigation
react-navigation-stack
react-navigation-tabs
react-native-table-component
react-native-keyboard-aware-scroll-view
react-native-tab-view
```

个人模块需要的server是DatabaseServer.js，而在具体文件中客户端连接server的url需要在：DatabaseClient、itemDisplay、itemList三个文件中同时修改。（这个会在这周整合到DatabaseClient一个文件里）

**值得注意的事情：**

本文件夹下的Cache.js可以实现在界面之间的数据传递（静态），一些运行时缓存的数据可以放在里面，如使用者的id、账密等。基本的函数有

set(key,value), 设置某个数据的值，这个值只能是一个字符串（如果想传递复杂的数据，可以用JSON.parse将其转换为字符串）。

get(key), 通过某个key找到该数据的值，返回一个字符串，如果没有key对应，则返回false。

delete(key)，将某个数据删除。

例如，在某个界面可以用Cache.set('account','123')来设置账号是123，在另一个界面可以通过Cache.get('account')来获得账号的名称。（剩下的带item的函数是为了处理购物车逻辑所写的。）
