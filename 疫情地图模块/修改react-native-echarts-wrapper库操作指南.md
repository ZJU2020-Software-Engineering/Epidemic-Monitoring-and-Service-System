### 修改react-native-echarts-wrapper库操作以及调用echart 地图

* 问题：直接导入react-native-echarts-wrapper库中的中国地图，只能显示南海诸岛部分。

* 暂时的解决方法

  * step1: 在**node_modules**文件夹中找到**react-native-echarts-wrapper**文件夹

  * step2: 打开**react-native-echarts-wrapper/src/index.js**

    目录结构：

    ![image-20200331211706595](C:%5CUsers%5Cde'l'l%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200331211706595.png)

    添加语句：

    ```html
    <script src="https://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>
    ```

    ![image-20200331211807425](C:%5CUsers%5Cde'l'l%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200331211807425.png)

* 如果要引入省市地图，也是同理  比如引入浙江省地图，就加上

```html
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/zhejiang.js"></script>
```

![image-20200404204156344](image-20200404204156344.png)

* 各省市js文件名

  ![image-20200404204917956](image-20200404204917956.png)

  ![image-20200404204951900](image-20200404204951900.png)

* 调用echart写地图option的时候要注意的一点是属性**series**的**mapType**参数要写中文，比如

  ![image-20200404204445709](image-20200404204445709.png)