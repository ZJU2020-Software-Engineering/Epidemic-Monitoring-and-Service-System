## 文件说明 ##
**code**:

main.py,crawler.py，user.py  

**输出文件**：  
   
   foreignFile.json保存外国疫情数据表单

   ChinaFile.json保存中国城市疫情数据表单

**输入文件(可以不需要)**
   
   最初运行爬虫程序时，如果没有输入文件，则不更新表单中的“新增数据”，设为初始值0。运行后第二日之后会每日更新表单中的“新增数据”。

   如果最运行爬虫时有输入文件，程序在首日就能根据输入文件的数据更新表单中的“新增数据”。

   如果有输入文件，应为昨日表单文件。输入文件名同输出文件名 “foreignFile.json"，"ChinaFile.json",输出后覆盖原文件。

## 配置与操作 ##



1. **需要安装的pthon库**：bs4，requests
2. **（可选）输入文件准备**：
若有前日输入文件，放置在当前文件夹下，中国昨日表单命名为"ChinaFile.json"，外国昨日表单文件命名为""ChinaFile.json""
3. **运行** 运行main.py, 保持运行，每24小时将更新一次数据文件
4. **输出** 输出 foreignFile.json保存外国疫情数据表单，ChinaFile.json保存中国城市疫情数据表单
  
## 实现功能 ##
运行时每日更新数据foreignFile.json和ChinaFile.json

**数据格式**

- ChinaFile.json
`
       [{ "Date": "2020-04-08",
        "Country": "中国",
        "increaseDiagnosis": 0,
        "increaseDeath": 0,
        "increaseCure": 0,
        "increaseSuspected": 0,
        "totalDiagnosis": 83189,
        "totalDeath": 3342,
        "totalCure": 77627,
        "totalSuspected": 0,
        "extanceDiagnosis": 2220,
        "extanceSuspected": 0,
        "id": 0},
         {...},
         ...]`

- foreignFile.json
    `
    [{
        "Date": "2020-04-08",
        "Province": "黑龙江",
        "City": "七台河",
        "increaseDiagnosis": 0,
        "increaseDeath": 0,
        "increaseCure": 0,
        "increaseSuspected": 0,
        "totalDiagnosis": 17,
        "totalDeath": 0,
        "totalCure": 17,
        "totalSuspected": 0,
        "extanceDiagnosis": 0,
        "extanceSuspected": 0,
        "id": 230900
    },
    {...},
    ...]`
## 维护说明 ##
通过Crawler类从丁香医生实时疫情网站爬取相关信息。
[https://ncov.dxy.cn/ncovh5/view/pneumonia](https://ncov.dxy.cn/ncovh5/view/pneumonia)

- abroad_parser(self, abroad_information)处理外国信息
- area_parser(self, area_information)处理
- 在run(self)中修改爬取数据的时间间隔，注意保持“新增数据”每日更新