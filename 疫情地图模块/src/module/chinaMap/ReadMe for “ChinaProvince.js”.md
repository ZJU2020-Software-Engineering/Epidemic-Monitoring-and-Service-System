## ReadMe for “ChinaProvince.js” 

本文件包含了以下几个省的地图：

陕西、台湾、青海、云南、甘肃、广西、内蒙古、贵州

含有一个可以生成echarts地图的option的函数optionX，整合的时候可以统一使用这个optionX函数生成风格统一的地图格式。

需要的软件包：react-native-echarts-wrapper 和 react-native-tab-view（建议使用yarn add添加而非npm）；引入时需要在项目的node_modules/react-native-echarts-wrapper/src/index.js的<head>块内添加以下内容：
  
```
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/guizhou.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/yunnan.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/shanxi1.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/gansu.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/qinghai.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/taiwan.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/neimenggu.js"></script>
<script src="https://gallery.echartsjs.com/dep/echarts/map/js/province/guangxi.js"></script>
```

台湾省的地级行政区划在echarts中数据缺失，所以只能显示整个省的数据
