# **配置说明** #

## express ##

**创建express项目,将map_sever.js放置于项目中**

- cd myapp
- npm init
- npm install express --save
- node map_sever.js

## crawler ##

1. **需要安装的pthon库**：bs4，requests
2. **需要文件**：将user.py,ChinaCrawler.py, ForeignCrawler.py,CountryList.py放置于文件夹下
2. **运行** 运行main.py, 保持运行，每30min将更新一次数据

  
# **数据说明** #
## 输出说明 ##
爬虫时控制台输出存取的数据，存取的结果等

china表示开始存取中国数据，foreign表示开始存取外国数据

successfully crawed表示一次存取成功，休眠等待第二次更新存取

## 数据格式  ##

- China
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

- foreign
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
        "extanceSuspected": 0
    },
    {...},
    ...]`

- 省份总数据记录，城市名与省份名皆为该省份名
   ` Data : 2020-3-28
				Province : 浙江
				City : 浙江
				increaseDiagnosis : 
				increaseDeath : 
				increaseCure : 
				increaseSuspected : 
				totalDiagnosis : 
				totalDeath : 
				totalCure : 
				totalSuspected : 
				extanceDiagnosis: 
				extanceSuspected: `


## 数据说明 ##
国内数据通过ChinaCrawler类从丁香医生实时疫情网站爬取相关信息。
[https://ncov.dxy.cn/ncovh5/view/pneumonia](https://ncov.dxy.cn/ncovh5/view/pneumonia)

国外数据通过ForeignCrawler类从约翰霍普金斯大学统计网站获取数据
[https://coronavirus.jhu.edu/map.html](https://coronavirus.jhu.edu/map.html)


- 每30分钟从网站重新爬取数据并更新数据库中的数据，据观察，网站数据基本两小时之内会更新，



- 其中，疑似人数已经停止维护，所以数据库中存储默认值-10000


- 新增人数中，新增人数通过与前一日存储数据相减得到，如果前一日未存储，则为默认值-10000

- 北京卫健委未明确大部分治愈与死亡病例的分区归属，因此北京市下辖分区的现存确诊暂无法获取，**无法获取的数据值为-10000**
