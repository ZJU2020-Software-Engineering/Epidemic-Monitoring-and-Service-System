import React, { Component } from "react";
import {ScrollView, Text, View,Dimensions,StyleSheet} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { ECharts } from "react-native-echarts-wrapper";
import _ from 'lodash';
import Rose from './roseChart.js';
import Worldline from './line.js';
import WorldBar from './bar.js';
import Age from './age.js';
import {Sexdata,SexrenderCharts} from './sex.js';

// export default class DataAnalysis extends React.Component{
// 	render(){
// 		return Analysis();
// 	}
// }
export default function Analysis() {
   
  const initialLayout = { width: Dimensions.get('window').width };
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(_.map(Sexdata, country => ({
      key: country.countryKey,
      title: country.countryName,
  })));
  
  const renderScene = SceneMap(_.reduce(Sexdata, function(map, country) {
      map[country.countryKey] = () => SexrenderCharts(country);
      return map;
  }, {}));
  
  return (
     <ScrollView style={styles.SrollContainer}>
      	        <View style={{height: 50, flexDirection: 'row'}}>
      	                <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
      	                <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}> 全国无新增确诊天数</Text>
      	        </View>
      			<Rose />
				
				<View style={styles.departline}>
				        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
				        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>各国新增确诊人数</Text>
				</View>
      			<Worldline />
				
				<View style={styles.departline}>
				        <View style={{width: 15, height: 50, backgroundColor: '#FF8C00'}} />
						<View style={{width: 20, height: 50, backgroundColor: "white"}} />
				        <Text style={{fontSize:20, fontWeight: 'bold',textAlignVertical:'center'}}>新增确诊人数TOP10国家</Text>
				</View>
      			<WorldBar />
				
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
				<View style={{height:300}}>
				   <TabView
				       navigationState={{ index, routes }}
				       renderScene={renderScene}
				       onIndexChange={setIndex}
				       initialLayout={initialLayout}					
                       tabBarPosition='bottom'
					   renderTabBar={props =>
					      <TabBar
					            {...props}
					            style={{ backgroundColor: 'gray' }}
                
					                            //activeColor={'#4a79e0'}
					                            //inactiveColor={'#666666'}
					
					      />
				       }
				   />
				</View>
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



