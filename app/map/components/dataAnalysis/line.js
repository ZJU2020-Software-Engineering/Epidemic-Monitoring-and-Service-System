import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import dateTansfer,{year} from './date.js';
import axios from 'axios'
// import {countries} from './bar.js';
import {server_config} from '../../config'
import time from '../tools/time'

//日期


// var beginDate=new Date(2020,4,27);
// while(t>=beginDate){
// 	//console.log(t);
// 	days.unshift(dateTansfer(t));
// 	t=new Date(t.getTime()-3600*24*1000);
// }
// console.log(countries)

//获取前五国家累计确诊人数数据
var first=[28179, 24197, 21929,28179, 24197, 21929,28179, 24197, 21929];//, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,10000,2000];
var second=[19694, 18508, 20803,19694, 18508, 20803,19694, 18508, 20803];//, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,50000,20000];
var third=[8849, 8894, 9434,8849, 8894, 9434,8849, 8894, 9434];//, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,20000,15000];
var forth=[4038, 3964, 7812,4038, 3964, 7812,4038, 3964, 7812];//, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33004, 30090, 33000, 32000,30000,30060];
var fifth=[2532, 0, 5084,2532, 0, 5084,2532, 0, 5084];//, 20934, 12900, 13030, 10320,20820, 10932, 10901, 10934, 12090, 10330, 13020,10820, 10932, 10901, 10934, 12090, 13030, 10320,10820, 10932, 10901, 10934, 11290, 13030, 13020,100000,12000
diagnosedNum=[];
diagnosedNum[0]=first;
diagnosedNum[1]=second;
diagnosedNum[2]=third;
diagnosedNum[3]=forth;
diagnosedNum[4]=fifth;

export default class Worldline extends Component {
    // diagnosedNum = Array(5);
    days=[];
    conf_num=[];
    countries=[];
    lineoption = {
        tooltip: {
            trigger: 'axis'
        },
        dataZoom: [
                {   // 这个dataZoom组件，默认控制x轴。
                    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                    start: 0,      // 左边在 10% 的位置。
                    end: 100         // 右边在 60% 的位置。
                },
                {   // 这个dataZoom组件，也控制x轴。
                    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                    start: 0,      // 左边在 10% 的位置。
                    end: 100         // 右边在 60% 的位置。
                }
        ],
        legend: {
            data: [],
            top:'0%'
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '5%',
            top: '18%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {  
               rotate:40  
            },
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:"",
                type: 'line',
                smooth: true,
                data: []
            },
            {
                name:"",
                type: 'line',
                smooth: true,
                data: []
            },
            {
                name:"",
                type: 'line',
                smooth: true,
                data: []
            },
            {
                name:"",
                type: 'line',
                smooth: true,
                data: []
            },
            {
                name:"",
                type: 'line',
                smooth: true,
                data: []
            }
        ]
      };
    constructor(props){
        super(props);
        var today = time.formatDate(new Date(new Date().getTime() - 6*60*60*1000 - 60*60*1000*24*1), 'yyyy-MM-dd');
        console.log('开始构造')
        axios
        .post(`${server_config.backend_url}/${server_config.GetWorld.url}`,{"Return":`${server_config.GetAnalysis.line}`,"Data":today})
        .then((res)=>{
            data=res.data.message;
        var lastcountry = "";
        for(var i=0;i<data.length;lastcountry=data[i].country,i++){
            if(data[i].country != lastcountry ){
                this.conf_num[data[i].country] = Array()
                this.conf_num[data[i].country].push(data[i].confirmedNumber)
                lastcountry = data[i].country;
                // console.log(data[i])
                // console.log(data[i].country)
                // console.log(this.conf_num[data[i].country])
            }else{
                this.conf_num[data[i].country].push(data[i].confirmedNumber)
                lastcountry = data[i].country
                // console.log(lastcountry)
                // console.log(this.conf_num[data[i].country])
                // console.log(this.conf_num)
            }
        }
        // console.log(this.conf_num['英国'])
        
        var beginDate=new Date("2020-05-24");
        //console.log(beginDate,new Date(new Date().getTime()-3600*24*1000));
        while(beginDate<=new Date(new Date().getTime()-3600*24*1000)){
            //console.log(t);
	        this.days.unshift(dateTansfer(beginDate));
            beginDate=new Date(beginDate.getTime()+3600*24*1000*1);
            //console.log("??")
            //console.log(this.days)
        }
        //console.log('time')
        //console.log(this.days)
        this.days = this.days.reverse();
        this.countries = Object.keys(this.conf_num);
        this.lineoption.legend.data = this.countries
        this.lineoption.xAxis.data = this.days
        console.log(this.lineoption.xAxis.data)
        for(var i =0;i<5;i++){
            this.lineoption.series[i].name = this.countries[i]
            // console.log(Object.keys(this.conf_num))
            //console.log(this.countries[i])
            this.lineoption.series[i].data = this.conf_num[this.countries[i]].reverse();
            //console.log(this.conf_num[this.countries[i]])
        }
       });
    }
  render() {
    //   console.log(this.conf_num['英国'])
    //   console.log(this.lineoption.series[0].data)
      console.log('进入render')
    return (
      <View style={styles.chartContainer}>
        <ECharts option={this.lineoption} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  chartContainer: {
    height: 300
  }
});
