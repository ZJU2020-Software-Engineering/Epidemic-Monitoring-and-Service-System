### 修改react-native-echarts-wrapper库操作

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

    <script src="https://gallery.echartsjs.com/dep/echarts/map/js/china.js"></script>

