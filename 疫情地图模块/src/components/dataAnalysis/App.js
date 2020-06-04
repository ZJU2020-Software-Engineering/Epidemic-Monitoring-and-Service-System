import React, { Component } from "react";
import {ScrollView, Text, View,Dimensions,StyleSheet} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { ECharts } from "react-native-echarts-wrapper";
import _ from 'lodash';
import Rose from './roseChart.js';
import Worldline from './line.js';
import WorldBar from './bar.js';
import Age from './age.js';
import Sex from './sex.js';

export var axios = require('axios');
 
export default function analysis() {
   
  return (
     <ScrollView style={styles.SrollContainer}>
      	        <View style={{height: 50, flexDirection: 'row'}}>
      	                <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
      	                <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}> 全国无新增确诊天数</Text>
      	        </View>
      			<Rose />
								
				<View style={{height: 50,flexDirection: 'row',marginTop:0}}>
				        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
				        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>新增确诊人数TOP10国家</Text>
				</View>
      			<WorldBar />
				
				<View style={styles.departline}>
				        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
				        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>各国新增确诊人数</Text>
				</View>
				<Worldline />
				
      			<View style={styles.departline}>
      			        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
      			        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>中国新冠肺炎病例患病年龄比</Text>
      			</View>
				<Age />
				
				<View style={styles.departline}>
				        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
				        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>新冠肺炎病例性别比</Text>
				</View>
				<Sex />
				
      </ScrollView>
	  
  );
  
}

const styles = StyleSheet.create({
  SrollContainer:{
	  marginHorizontal:5,
	  marginTop:40
  },
  departline:{
	  marginTop:30,
	  height: 50, 
	  flexDirection: 'row'
  }
});



