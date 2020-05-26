from bs4 import BeautifulSoup
import requests
import random
from user import user
import time
import re
import json
import datetime
import socket
import copy

class Crawler:
    def __init__(self):
        #获取当前ip
        hostname = socket.gethostname()
        self.ip = socket.gethostbyname(hostname)
        # 爬虫
        self.session = requests.session()
        self.crawl_timestamp = int()
        self.date = datetime.datetime.now().strftime('%Y-%m-%d')
        self.yesterday=(datetime.date.today()- datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        self.ChinaMap=[]
        self.ForeignMap=[]


    # 更新
    def run(self):
        # self.age(); #提交年龄数据
        # self.sex(); #提交性别数据

        while True:
            #try:
                self.crawler()
                # 爬取新数据
                time.sleep(60 * 30)  # 30分钟更新数据
            #except BaseException:
                #continue

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
                #省份总信息
                self.ChinaMap.append({
                    "Data": self.date,
                    "Province": area['provinceShortName'],
                    "City": area['provinceShortName'],
                    "increaseDiagnosis": 0,
                    "increaseDeath": 0,
                    "increaseCure": 0,
                    "increaseSuspected": 0,
                    "totalDiagnosis": area['confirmedCount'],
                    "totalDeath": area['deadCount'],
                    "totalCure": area['curedCount'],
                    "totalSuspected": area['suspectedCount'],
                    "extanceDiagnosis": area['currentConfirmedCount'],
                    "extanceSuspected": 0,
                    "id": area['locationId']
                })
                #城市
                for city in area[ 'cities']:
                    t={
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
                    }
                    #北京卫健委未明确大部分治愈与死亡病例的分区归属，因此北京市下辖分区的现存确诊暂无法获取
                    if t["Province"]=="北京":
                        t["extanceDiagnosis"]=-2

                    self.ChinaMap.append(t)
        #print(self.ChinaMap)


        # 提交
        headers = {
            "content-type": "application/json; charset=UTF-8",
            "user-agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0'
        };
        print("China")
        for item in self.ChinaMap:
            # 查询数据
            checkExisit = {
                "Data": item["Data"],
                "City": item['City'],
                "Return": 'extanceDiagnosis'
            }
            checkTotal = {
                "Data": item["Data"],
                "City": item['City'],
                "Return": 'totalDiagnosis'
            }
            checkInc = {
                "Data": item["Data"],
                "City": item['City'],
                "Return": 'increaseDiagnosis'
            }
            LastDiagnosis={
                "Data": self.yesterday,
                "City": item['City'],
                "Return": 'extanceDiagnosis'
            }
            LastDeath={
                "Data": self.yesterday,
                "City": item['City'],
                "Return": 'totalDeath'
            }
            LastCure = {
                "Data": self.yesterday,
                "City": item['City'],
                "Return": 'totalCure'
            }

            # 每日新增数目
            # Diagnosis
            data = (json.dumps(LastDiagnosis, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                     data=data, headers=headers)
            last=json.loads(checkres.content)
            print(last['result'], last['message'])
            if last['result'] == 'Y' and last['message']!=None:
                item['increaseDiagnosis']=item['extanceDiagnosis']-last['message']
                print("increaseDiagnosis:",item['increaseDiagnosis'])

            #dead
            data = (json.dumps(LastDeath, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                     data=data, headers=headers)
            last = json.loads(checkres.content)
            print(last['result'], last['message'])
            if last['result'] == 'Y' and last['message'] != None:
                item['increaseDeath'] = item['totalDeath'] - last['message']
                print("increaseDeath:",  item['increaseDeath'])

            #cure
            data = (json.dumps(LastCure, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                     data=data, headers=headers)
            last = json.loads(checkres.content)
            print(last['result'], last['message'])
            if last['result'] == 'Y' and last['message'] != None:
                item['increaseCure'] = item['totalCure'] - last['message']
                print("increaseCure:", item['increaseCure'])

            print(item)
            item1 = copy.deepcopy(item)
            item2 = copy.deepcopy(item)
            item3 = copy.deepcopy(item)

            #total
            item1["increaseDiagnosis"]=-1
            item1["extanceDiagnosis"] = -1
            city1 = json.dumps(item1, ensure_ascii=False)
            data = (json.dumps(checkTotal, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                   data=data,headers=headers)
            totalres=json.loads(checkres.content)
            print(totalres['result'],totalres['message'])
            if totalres['result']=='Y' and totalres['message']:
                #update
                print("update total")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/update', data=city1.encode('utf-8'),
                                    headers=headers)
            elif totalres['result'] == 'N':
                #insert
                print("insert total")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/insert', data=city1.encode('utf-8'),
                                                headers=headers)
            print(res.text)


            #increase
            item2["totalDiagnosis"] = -1
            item2["extanceDiagnosis"] = -1
            city2 = json.dumps(item2, ensure_ascii=False)
            data = (json.dumps(checkInc, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                     data=data, headers=headers)
            incRes = json.loads(checkres.content)
            print(incRes['result'], incRes['message'])
            if incRes['result'] == 'Y':
                # update
                print("update increase")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/update', data=city2.encode('utf-8'),
                                    headers=headers)
            elif incRes['result'] == 'N':
                # insert
                print("insert increase")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/insert', data=city2.encode('utf-8'),
                                    headers=headers)
            print(res.text)

            #exsisting
            item3["increaseDiagnosis"] = -1
            item3["totalDiagnosis"] = -1
            city3 = json.dumps(item3, ensure_ascii=False)
            data = (json.dumps(checkExisit, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/select',
                                     data=data, headers=headers)
            exiRes = json.loads(checkres.content)
            print(exiRes['result'], exiRes['message'])
            if exiRes['result'] == 'Y':
                # update
                print("update")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/update', data=city3.encode('utf-8'),
                                    headers=headers)
            elif exiRes['result'] == 'N':
                # insert
                print("insert")
                res = requests.post(url='http://127.0.0.1:8081/request/map/chinaMap/insert', data=city3.encode('utf-8'),
                                    headers=headers)
            print(res.text)


        # 写入
        """ChinaFile = json.dumps(self.ChinaMap, indent=4, ensure_ascii=False)
        with open('ChinaFile.json', 'w', encoding='utf-8') as json_file:
            json_file.write(ChinaFile)
        print("China success")
        """

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
                "Data": self.date,
                "Country": country['provinceName'],
                "increaseDiagnosis": country["incrVo"]["currentConfirmedIncr"],
                "increaseDeath": country["incrVo"]["deadIncr"],
                "increaseCure": country["incrVo"]["curedIncr"],
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

        #提交
        headers = {
            "content-type": "application/json; charset=UTF-8",
            "user-agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0'
        }
        print("foreign")
        for item in self.ForeignMap:
            # 查询数据
            checkExisit = {
                "Data": item["Data"],
                "Country": item['Country'],
                "Return": 'extanceDiagnosis'
            }
            checkTotal = {
                "Data": item["Data"],
                "Country": item['Country'],
                "Return": 'totalDiagnosis'
            }
            checkInc = {
                "Data": item["Data"],
                "Country": item['Country'],
                "Return": 'increaseDiagnosis'
            }

            print(item)
            item1 = item
            item2 = item
            item3 = item
            item1 = copy.deepcopy(item)
            item2 = copy.deepcopy(item)
            item3 = copy.deepcopy(item)

            # total
            item1["increaseDiagnosis"] = -1
            item1["extanceDiagnosis"] = -1
            country1 = json.dumps(item1, ensure_ascii=False)
            data = (json.dumps(checkTotal, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/select',
                                     data=data, headers=headers)
            totalres = json.loads(checkres.content)
            print(totalres['result'], totalres['message'])
            if totalres['result'] == 'Y' and totalres['message']:
                # update
                print("update total")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/update', data=country1.encode('utf-8'),
                                    headers=headers)
            elif totalres['result'] == 'N':
                # insert
                print("insert total")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/insert',
                                    data=country1.encode('utf-8'),
                                    headers=headers)
            print(res.text)

            # increase
            item2["totalDiagnosis"] = -1
            item2["extanceDiagnosis"] = -1
            country2 = json.dumps(item2, ensure_ascii=False)
            data = (json.dumps(checkInc, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/select',
                                     data=data, headers=headers)
            incRes = json.loads(checkres.content)
            print(incRes['result'], incRes['message'])
            if incRes['result'] == 'Y':
                # update
                print("update increase")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/update', data=country2.encode('utf-8'),
                                    headers=headers)
            elif incRes['result'] == 'N':
                # insert
                print("insert increase")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/insert', data=country2.encode('utf-8'),
                                    headers=headers)
            print(res.text)

            # exsisting
            item3["increaseDiagnosis"] = -1
            item3["totalDiagnosis"] = -1
            country3 = json.dumps(item3, ensure_ascii=False)
            data = (json.dumps(checkExisit, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/select',
                                     data=data, headers=headers)
            exiRes = json.loads(checkres.content)
            print(exiRes['result'], exiRes['message'])
            if exiRes['result'] == 'Y':
                # update
                print("update existance")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/update', data=country3.encode('utf-8'),
                                    headers=headers)
            elif exiRes['result'] == 'N':
                # insert
                print("insert")
                res = requests.post(url='http://127.0.0.1:8081/request/map/foreignMap/insert',
                                    data=country3.encode('utf-8'),
                                    headers=headers)
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
        data={"ratioCure":0.587,
              "ratioDeath":0.708}   #男性占比
        headers = {
            "content-type": "application/json; charset=UTF-8",
            "user-agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0'
        };
        sex=json.dumps(data,ensure_ascii=False)
        res = requests.post(url='http://127.0.0.1:8081/request/map/Gender/insert', data=sex,headers=headers)
        print("sex:")
        print(res.text)



