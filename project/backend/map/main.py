from ChinaCrawler import ChinaCrawler
from ForeignCrawler import ForeignCrawler
import time

if __name__ == '__main__':


    while True:
        # try:
        foreign = ForeignCrawler()
        foreign.crawler()
        china=ChinaCrawler()
        china.crawler()
        # 爬取新数据
        time.sleep(60 * 30)  # 30分钟更新数据
    # except BaseException:
    # continue
