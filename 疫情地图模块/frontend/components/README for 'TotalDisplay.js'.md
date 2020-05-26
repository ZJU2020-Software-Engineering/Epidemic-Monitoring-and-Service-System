### README for 'TotalDisplay.js'

- 更新了NumberDisplay.js，整合的同学如果原来用到了NumberDisplay.js的话请更新一下，接口还是一样的，只不过将原来的一段主函数拆分成几个小的函数了，更方便灵活
- TotalDisplay需要安装的包（请使用yarn安装）：
  - @ant-design/react-native
  - react-native-table-component
- 展示数据的表可以排序，点击表头即可按照当前项目降序排序（如果需要升序的话请修改TotalDisplay.sortByAttr函数）