import React ,{ Component } from 'react';
import { View } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import {axios} from './App.js'
import {server_config} from '../../config'

var deathData=[];
var cureData=[];
export default class Age extends Component{

	option = {
	  tooltip : {
	          trigger: 'item',
	          formatter: "{b} : {c} "
	      },
	  title: [
	  {
	    subtext: `数据来源:中华流行病学报告`,
	    left: 'right',
	    top: 0,
	  },{
           subtext: '治愈病例年龄比',
           left: '50%',
           top: '45%',
           textAlign: 'center',
		   subtextStyle: {
		   		color: 'black',
				fontWeight :'bold'
		   }
       }, {
           subtext: '死亡病例年龄比',
           left: '50%',
           top: '90%',
           textAlign: 'center',
		   subtextStyle: {
				color: 'black',
				fontWeight :'bold'
		   }
       }],
	  series: [
	    //治愈病例
		{
	      type: 'pie',
	      radius: '25%',
	      center: ['50%', '32%'],
	      data: cureData,
	      animation: true,
	      label: {
	        position: 'outer',
	        alignTo: 'none',
	        bleedMargin: 5,
	        formatter: '{b}',
	      },
	      left: 0,
	      right: '66.6667%',
	      top: 0,
	      bottom: 0
	    },
		//死亡病例
		{
            type: 'pie',
            radius: '25%',
            center: ['50%', '80%'],
            data: deathData,
            animation: false,
            label: {
                position: 'outer',
                alignTo: 'none',
                bleedMargin: 5,
                formatter: '{b}',
            },
            left: '66.6667%',
            right: 0,
            top: 0,
            bottom: 0
           }
		]
	};
	render(){		
		axios
			//  .post("http://192.168.1.7:8081/request/map/Age/select",{})
			.post(`${server_config.backend_url}/${server_config.GetAnalysis.age}`,{})
		     .then((res)=>{
		        var data=res.data.message;
				var deadSum=0;
				var cureSum=0;
				//console.log(data);
				for(var i=0;i<data.length;i++){
				   deathData.push({"name":data[i].ageRange+'+',"value":data[i].deathToll});
				   cureData.push({"name":data[i].ageRange+'+',"value":data[i].cureNumber});
				   deadSum+=data[i].deathToll;
				   cureSum+=data[i].cureNumber;
				}
				for(var i=0;i<data.length;i++){
					deathData[i].value=(deathData[i].value/deadSum*100).toFixed(2);
					cureData[i].value=(cureData[i].value/cureSum*100).toFixed(2);
				}
				console.log(deathData);
				console.log(cureData);
		    });
			/*.catch(function (error) {
			    console.log(error);
			});*/
			
		return(
		  <View style={{height: 400}}>
		      <ECharts
		         option={this.option}
		         backgroundColor="white"
		      />
		  </View>
		);
	}
}
