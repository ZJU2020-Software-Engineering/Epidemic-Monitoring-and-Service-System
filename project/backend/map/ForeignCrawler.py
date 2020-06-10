import requests
import json
import datetime
import socket
import time

from CountryList import Countrylist
class ForeignCrawler:
    def __init__(self):
        #获取当前ip
        hostname = socket.gethostname()
        self.ip = socket.gethostbyname(hostname)
        # 爬虫
        self.session = requests.session()
        self.crawl_timestamp = int()
        self.date = datetime.datetime.now().strftime('%Y-%m-%d')
        self.yesterday=(datetime.date.today()- datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        self.ForeignMap=[]

    # 爬取信息
    def crawler(self):
        while True:
            # 若爬取间隔过短，连接时需要更新用户信息
            self.session.headers.update(
                {
                    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362",
                    'Origin': 'https: // www.arcgis.com',
                    'Referer': 'https: // www.arcgis.com / apps / opsdashboard / index.html',
                    'Host': 'services9.arcgis.com'
                }
            )
            self.crawl_timestamp = int(time.time() * 1000)
            # 连接
            try:
                r = self.session.get(url="https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=Deaths%3E0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Deaths%20desc&outSR=102100&resultOffset=0&resultRecordCount=200&resultType=standard&cacheHint=true")
            except requests.exceptions.ChunkedEncodingError:
                continue
            list=json.loads(r.text)["features"]
            print(list)
            if list:
                self.abroad_parser(list)

            # 重新获取
            if not list:
                time.sleep(3)
                continue
            break

        print('Global Successfully crawled.')


    #国外信息
    def abroad_parser(self, list):
        for item in list:
            if item["attributes"]['Country_Region'] in Countrylist.keys():
                name=Countrylist[item["attributes"]['Country_Region']]
            else :
                name=item["attributes"]['Country_Region']
                print(name)

            self.ForeignMap.append({
                "Data": self.date,
                "Country": name,
                "increaseDiagnosis": 0,
                "increaseDeath": 0,
                "increaseCure": 0,
                "increaseSuspected": 0,
                "totalDiagnosis": item["attributes"]["Confirmed"],
                "totalDeath": item["attributes"]['Deaths'],
                "totalCure": item["attributes"]['Recovered'],
                "totalSuspected": 0,
                "extanceDiagnosis": item["attributes"]['Active'],
                "extanceSuspected": 0,
                "Return": None
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
            checkQuery = {
                "Data": item["Data"],
                "Country": item['Country'],
                "Return": 'singleCountry'
            }
            LastQuery = {
                "Data": self.yesterday,
                "Country": item['Country'],
                "Return": 'singleCountry'
            }

            # 每日新增数目
            # Diagnosis
            data = (json.dumps(LastQuery, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/select',
                                     data=data, headers=headers)
            last = json.loads(checkres.content)
            print(last['result'], last['message'])

            if last['result'] == 'Y' and 'extance' in last['message'].keys() and last['message']['extance']!=None and item['extanceDiagnosis']!=None:
                item['increaseDiagnosis']=item['extanceDiagnosis']-last['message']['extance']['confirmedNumber']
                print("increaseDiagnosis:", item['increaseDiagnosis'])
            if last['result'] == 'Y' and 'total' in last['message'].keys() and last['message']['total'] != None:
                if item['totalDeath']!=None and last['message']['total']['deathToll']!=None:
                   item['increaseDeath'] = item['totalDeath'] - last['message']['total']['deathToll']
                   print("increaseDeath:", item['increaseDeath'])
                if item['totalCure']!=None and last['message']['total']['cureNumber']!=None:
                   item['increaseCure'] = item['totalCure'] - last['message']['total']['cureNumber']
                   print("increaseCure:", item['increaseCure'])
            
            print(item)

            # 查询数据是否存在
            data = (json.dumps(checkQuery, ensure_ascii=False)).encode('utf-8')
            checkres = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/select',
                                     data=data, headers=headers)
            result = json.loads(checkres.content)

            # total
            item["Return"] = 'total'
            country = json.dumps(item, ensure_ascii=False)
            if result['result'] == 'Y' and 'total' in result['message'].keys() and result['message']['total']!=None:
                # update
                print("update total")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/update', data=country.encode('utf-8'),
                                    headers=headers)
            else:
                # insert
                print("insert total")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/insert',
                                    data=country.encode('utf-8'),
                                    headers=headers)
            print(res.text)

            # increase
            item["Return"] = 'newAddtion'
            country = json.dumps(item, ensure_ascii=False)
            if result['result'] == 'Y' and 'newAddtion' in result['message'].keys() and result['message'][
                'newAddtion'] != None:
                # update
                print("update increase")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/update',
                                    data=country.encode('utf-8'),
                                    headers=headers)
            else:
                # insert
                print("insert increase")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/insert',
                                    data=country.encode('utf-8'),
                                    headers=headers)
            print(res.text)

            # exsisting
            item["Return"] = 'extance'
            country = json.dumps(item, ensure_ascii=False)
            if result['result'] == 'Y' and 'extance' in result['message'].keys() and result['message']['extance'] != None:
                # update
                print("update existance")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/update', data=country.encode('utf-8'),
                                    headers=headers)
            else:
                # insert
                print("insert")
                res = requests.post(url='http://182.92.243.158:8001/request/map/foreignMap/insert',
                                    data=country.encode('utf-8'),
                                    headers=headers)
            print(res.text)


        """
        # 写入
        foreignFile = json.dumps(self.ForeignMap, indent=4, ensure_ascii=False)
        with open('foreignFile.json', 'w', encoding='utf-8') as json_file:
                json_file.write(foreignFile)
        """







