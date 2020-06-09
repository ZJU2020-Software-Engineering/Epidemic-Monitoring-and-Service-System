import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import {axios} from './App.js'
import dateTansfer,{year} from './date.js';
import {server_config} from '../../config'

var t=new Date();
var today=dateTansfer(t);
//获取现存确诊人数最多的五个国家
export var countries=[];

//获取前十国家新增确诊人数
var num=[];

export default class WorldBar extends Component {
  option = {
    title: {
        text: '',
		top:'8%',
		left:'center'
    },
    tooltip: {
        trigger: 'axis'
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
        axisLabel: {
		  interval:0,
          rotate:50  
        },		
        data: countries
    },
    yAxis: {
		type: 'value'
    },
    series: [
        {
            type: 'bar',
            data: num
        }]
  };
 
  render() {
    var t=new Date();
    var today=dateTansfer(t);
	//console.log(today);
	axios
         .post(`${server_config.backend_url}/${server_config.GetWorld.url}`,{"Return":"topTen","Data":today})
         .then((res)=>{
            var data=res.data.message;
            // console.log('topten')
            // console.log(data);
            for(var i=0;i<data.length;i++){
              countries[i]=data[i].country;
              num[i]=data[i].confirmedNumber;
		      	}
            // console.log(num);
            // console.log(countries);
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
    height:250
  }
});
