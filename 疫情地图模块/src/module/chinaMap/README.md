# chinaMap


## chinaDiagram
使用 react-native-paper 的 DataTable 完成, 使用前确保安装 react-native-paper (yarn add react-native-paper)

翻过部分包，没有找到比较合适的支持排序的表格，于是借用DataTable完成，DataTable只提供一个表格。
我们给表头每个项写了一个onclick属性——mysort(attr_num, attr_name)
其中，attr_num是某一项的数据,比如说是new_confirm,新增确诊各省的数量。我们根据这个数组进行排序,将index结果存储在idx中，idx又是目前componet的state，所以会刷新表格为按照idx的顺序。
attr_name 用于控制这次排序是升序还是降序。

要使用这个表格，只需将random部分替换后从后端得到的数据即可。






## numberDisplay
确保安装了Ant-Design包（yarn add  @ant-design/react-native或者npm install @ant-design/react-native --save），如果使用yarn安装发现无法引入成功，可以将开头的

```javascript
import Button from '@ant-design/react-native/lib/button';
import Grid from '@ant-design/react-native/lib/grid';
import Flex from '@ant-design/react-native/lib/flex';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Tag from '@ant-design/react-native/lib/tag';
```

改成

```javascript
import {Button,Grid,Flex,WingBlank,Tag} from '@ant-design/react-native';
```

# chinaProvince
与全国地图用例一致，需要从echarts index目录修改导入对应对应省份的地图

