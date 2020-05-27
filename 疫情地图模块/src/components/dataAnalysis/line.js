import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

//获取现存确诊人数最多的五个国家
var countries=[];
countries[0]="美国";
countries[1]="英国";
countries[2]="意大利";
countries[3]="中国";
countries[4]="日本";
//获取近30日日期数组
//获取日期字符串
function dateTansfer(date){
	var s="";
	year=date.getFullYear();
	if(date.getMonth()+1<10) s+="0";
	s+=date.getMonth()+1+"-";
	if(date.getDate()<10) s+="0";
	s+=date.getDate();
	
	return s;	
}
var days=[];
var t=new Date();
var year=t.getFullYear();//当前年份
for(var i=0;i<30;i++){
	//console.log(t);
	days.unshift(dateTansfer(t));
	t=new Date(t.getTime()-3600*24*1000);
}

//获取前五国家累计确诊人数数据
var first=[12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,12000, 13200, 10100, 13400, 9000, 23000, 21000,10000,2000];
var second=[22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,22000, 18200, 19100, 23400, 29000, 33000, 31000,50000,20000];
var third=[15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,15000, 23200, 20100, 15400, 19000, 33000, 41000,20000,15000];
var forth=[32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33400, 34000, 33000, 32000,32000, 33200, 30100, 33004, 30090, 33000, 32000,30000,30060];
var fifth=[42000, 29032, 20901, 20934, 12900, 13030, 10320,20820, 10932, 10901, 10934, 12090, 10330, 13020,10820, 10932, 10901, 10934, 12090, 13030, 10320,10820, 10932, 10901, 10934, 11290, 13030, 13020,100000,12000];
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
		top:'10%'
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