from bs4 import BeautifulSoup
import requests
import random
from user import user
import time
import re
import json
import datetime
import socket

class Crawler:
    def __init__(self):
        #获取当前ip
        hostname = socket.gethostname()
        self.ip = socket.gethostbyname(hostname)
        # 爬虫
        self.session = requests.session()
        self.crawl_timestamp = int()
        self.date = datetime.datetime.now().strftime('%Y-%m-%d')
        self.ChinaMap=[]
        self.ForeignMap=[]
        self.hasYesterdayChina=0  # 默认没有昨日数据
        self.hasYesterdayForeign = 0
        # 初始时获取昨日数据
        try:
            lastChinaFile=open("ChinaFile.json" , 'r', encoding='utf-8')
            self.ChinaLast = json.load(lastChinaFile)
        except OSError:
            self.ChinaLast=[]

        try:
            lastForeignFile=open("foreignFile.json", 'r', encoding='utf-8')
            self.ForeignLast = json.load(lastForeignFile)
        except OSError:
            self.ForeignLast=[]

        # print(self.ChinaLast)
        # print(self.ForeignLast)
        # 判断昨日数据是否存在、可用
        oneday=datetime.timedelta(days=1)
        yesterday=datetime.date.today()-oneday
        if len(self.ChinaLast)!=0 and self.ChinaLast[0]["Date"]==yesterday.strftime('%Y-%m-%d'):
            # 昨日中国数据有效
            self.hasYesterdayChina=1
        if len(self.ForeignLast)!=0 and self.ForeignLast[0]["Date"]==yesterday.strftime('%Y-%m-%d'):
            # 昨日外国数据有效
            self.hasYesterdayForeign=1
        # 排序
        self.ChinaLast.sort(key=lambda city: city["City"])
        self.ForeignLast.sort(key=lambda country: country['id'])

    # 更新
    def run(self):
        self.age(); #提交年龄数据
        self.sex(); #提交性别数据

        while True:
            self.crawler()
            # 将今日数据保存到昨日数据中
            self.ForeignLast=self.ForeignMap
            self.ChinaLast=self.ChinaMap
            self.hasYesterdayChina=1
            self.hasYesterdayForeign=1
            # 爬取新数据
            time.sleep(60 * 60 * 24)  # 24小时更新数据

    # 爬取信息
    def crawler(self):
        while True:
            # 若爬取间隔过短，连接时需要更新用户信息
            self.session.headers.update(
                {
                    'user-agent': random.choice(user)
                }
            )
            self.crawl_timestamp = int(time.time() * 1000)
            # 连接
            try:
                r = self.session.get(url='https://ncov.dxy.cn/ncovh5/view/pneumonia')
            except requests.exceptions.ChunkedEncodingError:
                continue
            soup = BeautifulSoup(r.content, 'html.parser')

            area_information = re.search(r'\[(.*)\]', str(soup.find('script', attrs={'id': 'getAreaStat'})))
            if area_information:
                self.area_parser(area_information=area_information)

            abroad_information = re.search(r'\[(.*)\]',
                                           str(soup.find('script', attrs={'id': 'getListByCountryTypeService2true'})))
            if abroad_information:
                self.abroad_parser(abroad_information=abroad_information)

            # 重新获取
            if not area_information or not abroad_information:
                time.sleep(3)
                continue
            break

        print('Successfully crawled.')

    # 国内信息
    def area_parser(self, area_information):
        area_information = json.loads(area_information.group(0))
        # print(area_information)
        for area in area_information:
            if len(area['cities']) == 0:
                #直辖市或地区
                self.ChinaMap.append({
                    "Data": self.date,
                    "Province": area[ 'provinceShortName'],
                    "City": area[  'provinceShortName'],
                    "increaseDiagnosis":0,
                    "increaseDeath":0,
                    "increaseCure":0,
                    "increaseSuspected":0,
                    "totalDiagnosis":area['confirmedCount'],
                    "totalDeath":area['deadCount'],
                    "totalCure":area[ 'curedCount'],
                    "totalSuspected":area['suspectedCount'],
                    "extanceDiagnosis":area['currentConfirmedCount'],
                    "extanceSuspected":0,
                    "id":area[ 'locationId']
                })
                continue
            else:
                for city in area[ 'cities']:
                    self.ChinaMap.append({
                        "Data": self.date,
                        "Province": area['provinceShortName'],
                        "City": city['cityName'],
                        "increaseDiagnosis": 0,
                        "increaseDeath": 0,
                        "increaseCure": 0,
                        "increaseSuspected": 0,
                        "totalDiagnosis": city['confirmedCount'],
                        "totalDeath": city['deadCount'],
                        "totalCure": city['curedCount'],
                        "totalSuspected": city['suspectedCount'],
                        "extanceDiagnosis": city['currentConfirmedCount'],
                        "extanceSuspected": 0,
                        "id": city['locationId']
                    })
        #print(self.ChinaMap)
        # 每日增加数目
        self.ChinaMap.sort(key=lambda city: city["City"])
        i=0
        j=0
        while self.hasYesterdayChina!=0 and i<len(self.ChinaMap) and j<len(self.ChinaLast):
            # 更新
            if self.ChinaMap[i]["City"] ==self.ChinaLast[j]["City"]:
               self.ChinaMap[i]['increaseDiagnosis']=self.ChinaMap[i]['totalDiagnosis']-self.ChinaLast[j]['totalDiagnosis']
               self.ChinaMap[i]["increaseDeath"] = self.ChinaMap[i]["totalDeath"] - self.ChinaLast[j]["totalDeath"]
               self.ChinaMap[i]["increaseCure"] = self.ChinaMap[i][ "totalCure"] - self.ChinaLast[j][ "totalCure"]
               self.ChinaMap[i]["increaseSuspected"] = self.ChinaMap[i]["totalSuspected"] - self.ChinaLast[j]["totalSuspected"]
               i=i+1
               j=j+1
            elif self.ChinaMap[i]["City"] <self.ChinaLast[j]["City"]:
                i=i+1
            elif self.ChinaMap[i]["City"] > self.ChinaLast[j]["City"]:
                j=j+1

        # 提交
        print("China")
        for item in self.ChinaMap:
            city=json.dumps(item,ensure_ascii=False)
            res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/insert', data=city)
            print(res.text)

        # 写入
        ChinaFile = json.dumps(self.ChinaMap, indent=4, ensure_ascii=False)
        with open('ChinaFile.json', 'w', encoding='utf-8') as json_file:
            json_file.write(ChinaFile)
        print("China success")

    #国外信息
    def abroad_parser(self, abroad_information):
        countries = json.loads(abroad_information.group(0))
        # print(countries)
        for country in countries:
            # print(country['locationId'])
            # 中国没有id,补全
            if country['provinceName']=="中国":
                country["id"]=0

            self.ForeignMap.append({
                "Date": self.date,
                "Country": country['provinceName'],
                "increaseDiagnosis": 0,
                "increaseDeath": 0,
                "increaseCure": 0,
                "increaseSuspected": 0,
                "totalDiagnosis": country['confirmedCount'],
                "totalDeath": country['deadCount'],
                "totalCure": country['curedCount'],
                "totalSuspected": country['suspectedCount'],
                "extanceDiagnosis": country['currentConfirmedCount'],
                "extanceSuspected": 0,
                "id": country['id']
            })
        # print(self.ForeignMap)

        # 每日增加数目
        self.ForeignMap.sort(key=lambda country: country['id'])
        i = 0
        j = 0
        while self.hasYesterdayForeign!=0 and i < len(self.ForeignMap) and j < len(self.ForeignLast):
        # 更新
            if self.ForeignMap[i]['id'] == self.ForeignLast[j]['id']:
                self.ForeignMap[i]['increaseDiagnosis'] = self.ForeignMap[i]['totalDiagnosis'] - self.ForeignLast[j]['totalDiagnosis']
                self.ForeignMap[i]["increaseDeath"] = self.ForeignMap[i]["totalDeath"] - self.ForeignLast[j]["totalDeath"]
                self.ForeignMap[i]["increaseCure"] = self.ForeignMap[i]["totalCure"] - self.ForeignLast[j]["totalCure"]
                self.ForeignMap[i]["increaseSuspected"] = self.ForeignMap[i]["totalSuspected"] - self.ForeignLast[j]["totalSuspected"]
                i = i + 1
                j = j + 1
            elif self.ForeignMap[i]['id'] < self.ForeignLast[j]['id']:
                i = i + 1
            elif self.ForeignMap[i]['id'] > self.ForeignLast[j]['id']:
                j = j + 1

        #提交
        print("foreign")
        for item in self.ForeignMap:
            country =json.dumps(item,ensure_ascii=False)
            #data = country.encode('utf-8')
            res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/insert', data=country)
            print(res.text)

        # 写入
        foreignFile = json.dumps(self.ForeignMap, indent=4, ensure_ascii=False)
        with open('foreignFile.json', 'w', encoding='utf-8') as json_file:
                json_file.write(foreignFile)

        print("Foreign success")

    #提交年龄数据
    def age(self):
        data=[
            {"Age": 0, "totalCure":205,"totalDeath":0},
            {"Age": 10, "totalCure":270, "totalDeath":0},
            {"Age": 20, "totalCure":1374, "totalDeath":0},
            {"Age": 30, "totalCure":2525, "totalDeath":9},
            {"Age": 40, "totalCure":4396, "totalDeath":25},
            {"Age": 50, "totalCure":6834, "totalDeath":83},
            {"Age": 60, "totalCure":6337, "totalDeath":312},
            {"Age": 70, "totalCure":7121, "totalDeath":1090},
            {"Age": 80, "totalCure":5352, "totalDeath":1243},
            {"Age": 90, "totalCure":1115, "totalDeath":285}
        ]
        headers = {
            "content-type": "application/json; charset=UTF-8",
            "user-agent":'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0'
        };
        for item in data:
            age = json.dumps(item, ensure_ascii=False)
            # data = age.encode('utf-8')
            res = requests.post(url='http://127.0.0.1:8081/request/map/Age/insert', data=age, headers=headers)
            print(age)
            print(res.text)




    # 提交性别数据
    def sex(self):
        data={'ratioCure':0.587,
              'ratioDeath':0.708}   #男性占比
        sex=json.dumps(data,ensure_ascii=False)
        res = requests.post(url='http://127.0.0.1:8081/request/map/Gender/insert', data=sex)
        print("sex:")
        print(res.text)


