### 生成订单：

这个 repo 本身是个从购物车到订单生成的逻辑实现，具体调用的函数是 DatabaseClient 中的 InsertOrder，创建订单的函数请看 https://github.com/ZJU2020-Software-Engineering/Epidemic-Monitoring-and-Service-System/blob/44810fd0f1862e3759f6d8029d2fe1d2928f7a14/%E5%BF%97%E6%84%BF%E9%87%87%E8%B4%AD%E6%A8%A1%E5%9D%97/src/user_order_module/ItemList.js#L77-L96

### 更新状态：

更新状态分两种情况，更新为 ready 或 arrived，注意到已经在相应模块中有实现：

ready：https://github.com/ZJU2020-Software-Engineering/Epidemic-Monitoring-and-Service-System/blob/370a994007500ee3a12741fcb1be59b5b3b5497c/%E5%BF%97%E6%84%BF%E9%87%87%E8%B4%AD%E6%A8%A1%E5%9D%97/src/person_module/DatabaseServer.js#L404

arrived：https://github.com/ZJU2020-Software-Engineering/Epidemic-Monitoring-and-Service-System/blob/28b4e1477887c9ed66ebef9a25f201a88ca4bbd1/%E5%BF%97%E6%84%BF%E9%87%87%E8%B4%AD%E6%A8%A1%E5%9D%97/src/VolunteerModule/DatabaseServer.js#L277

### 订单分配：

我们存的是地址而不是经纬度，那按距离分配实际上是无法实现的。一般来说按距离分配要记下经纬度，然后如果是 MySQL 的话根据经纬度计算距离去查询，如果是 MongoDB 有更好的支持。目前的数据库设计方式除非容忍 O(N^2) 的高复杂度与百度地图 API 取地址的低精确度，否则无法实现按距离分配志愿者，

这边建议等数据库志愿者主键稳定后，随机产生志愿者 ID。
