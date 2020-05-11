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
countries[5]="葡萄牙";
countries[6]="西班牙";
countries[7]="德国";
countries[8]="法国";
countries[9]="韩国";

//获取前十国家新增确诊人数
var num=[4330,3700,3500,2000,1985,1750,1002,500,200,180];

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