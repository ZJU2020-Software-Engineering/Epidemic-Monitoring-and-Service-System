## 注意事项

1. EntryDisplay里我用上了Cache，经测试没问题，是可以从Cache中拿到值的，对应的Cache的set在App.js里，那里我设置了‘account’ ‘user name’ ‘address’ 三个属性。
2. 整合的时候，进入页面（app.js) 后要马上判断当前用户是商家还是个人（具体方法我建议先Cache.set，再Cache.get），根据这个值来条件地选择显示商家菜单还是个人菜单
3. 在DataBaseClient和DataBaseServer中我把志愿者模块的内容添加到了两个文件的最后，有用注释隔开，其中DataBaseClient因为出现了一个同名同功能函数getTenantInfo，我把你们的给注释掉了，但是不影响结果
4. 基础模块数据库里userinfo的类型字段是用于判断账户类型是商家还是个人的，不能用于判断是否是志愿者。是否是志愿者要根据我们的tenant表的vid字段来判断，如果vid为None，说明该用户不是志愿者。**希望能修改志愿者模块中用到这个的部分。**
5. 数据库方面有需要可以联系我，另外，**volunteerTaken这个表的定义请发给我**，我方便建表和修改

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