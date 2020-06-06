import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import dateTansfer,{year} from './date.js';
import {axios} from './App.js';
import {countries} from './bar.js';
import {server_config} from '../../config'

//日期
var begin='2020-05-27';//展示开始日期
var days=[];
var t=new Date();
var today=dateTansfer(t);
var beginDate=new Date(2020,4,27);
while(t>=beginDate){
	//console.log(t);
	days.unshift(dateTansfer(t));
	t=new Date(t.getTime()-3600*24*1000);
	//t=new Date(t.getTime()-3600*24*1000);
}

//获取前五国家累计确诊人数数据
var first=[28179, 24197, 21929,28179, 24197, 21929,28179, 24197, 21929];//, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,10000,2000];
var second=[19694, 18508, 20803,19694, 18508, 20803,19694, 18508, 20803];//, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,50000,20000];
var third=[8849, 8894, 9434,8849, 8894, 9434,8849, 8894, 9434];//, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,20000,15000];
var forth=[4038, 3964, 7812,4038, 3964, 7812,4038, 3964, 7812];//, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33004, 30090, 33000, 32000,30000,30060];
var fifth=[2532, 0, 5084,2532, 0, 5084,2532, 0, 5084];//, 20934, 12900, 13030, 10320,20820, 10932, 10901, 10934, 12090, 10330, 13020,10820, 10932, 10901, 10934, 12090, 13030, 10320,10820, 10932, 10901, 10934, 11290, 13030, 13020,100000,12000
var diagnosedNum=[];
diagnosedNum[0]=first;
diagnosedNum[1]=second;
diagnosedNum[2]=third;
diagnosedNum[3]=forth;
diagnosedNum[4]=fifth;

export default class Worldline extends Component {
  option = {
    /*title: {
        text: '',
		top:'4%',
		left:'center'
    },*/
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
        data: countries,
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
        data: days
    },
    yAxis: {
		type: 'value'
    },
    series: [
        {
            name: countries[0],
            type: 'line',
			smooth: true,
            data: diagnosedNum[0]
        },
        {
            name: countries[1],
            type: 'line',
			smooth: true,
            data: diagnosedNum[1]
        },
        {
            name: countries[2],
            type: 'line',
			smooth: true,
            data: diagnosedNum[2]
        },
        {
            name: countries[3],
            type: 'line',
			smooth: true,
            data: diagnosedNum[3]
        },
        {
            name: countries[4],
            type: 'line',
			smooth: true,
            data: diagnosedNum[4]
        }
    ]
  };
 
  render() {
	axios
	     .post("http://192.168.1.7:8081/request/map/foreignMap/select",{"Return":"topFive","Data":today,"Begin":begin})
	     .then((res)=>{
	        var data=res.data.message;
			//console.log(data);
			for(var i=0;i<data.length;i++){
				countries[i]=data[i].country;
			}
			console.log(countries);
	    });
	
	
    return (
      <View style={styles.chartContainer}>
        <ECharts option={this.option} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  chartContainer: {
    height: 300
  }
});
