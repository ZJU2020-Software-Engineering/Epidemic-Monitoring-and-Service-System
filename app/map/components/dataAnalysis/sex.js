import React, { Component } from 'react';
import { View, Dimensions } from 'react-native'
import { ECharts } from "react-native-echarts-wrapper";
import {axios} from './App.js';
import {server_config} from '../../config'

var confirmed=[{name:'男性', value:0 }, 
	           {name:'女性', value:0 }];
var deadth=[{name:'男性', value:0 }, 
	           {name:'女性', value:0 }];


export default class Sex extends Component{

	options = {
	    tooltip : {
	            trigger: 'item',
	            formatter: "{b} : {c} "
	        },
		title: [{
	        subtext: `数据来源：意大利国家卫生院`,
	        left: '60%',
	        //top: '10%',
	        textAlign: 'center'
	    }, {
	        subtext: '确诊病例性别比',
	        left: '50%',
	        top: '40%',
	        textAlign: 'center',
			subtextStyle: {
					color: 'black',
							fontWeight :'bold'
			}
	    }, {
	        subtext: '死亡病例性别比',
	        left: '50%',
	        top: '80%',
	        textAlign: 'center',
			subtextStyle: {
					color: 'black',
							fontWeight :'bold'
			}
	    }],
	    series: [
	        {
	            type: 'pie',
	            radius: '25%',
	            center: ['50%', '30%'],
	            data: confirmed,
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
	        {
	            type: 'pie',
	            radius: '25%',
	            center: ['50%', '70%'],
	            data: deadth,
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
		     .post(`${server_config.backend_url}/${server_config.GetAnalysis.gender}`,{})
		     .then((res)=>{
		        var data=res.data.message[0];
				//console.log(data);
				confirmed[0].value=data.confirmedRatio;
				confirmed[1].value=100-confirmed[0].value;
				deadth[0].value=data.deathRatio;
				deadth[1].value=100-deadth[0].value;
				// console.log(confirmed);
				// console.log(deadth);
		    });

			
		return(
		  <View style={{height: 400}}>
		      <ECharts
		         option={this.options}
		         backgroundColor="white"
		      />
		  </View>
		);
	}
}
