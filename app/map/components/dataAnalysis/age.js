import React ,{ Component } from 'react';
import { View } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";

const data = {
  china: {
    countryKey: 'china',
    countryName: '中国',
    source: '中华流行病学报告',
    confirmed: [{
      name: '0-10',
      value: 0.9
    }, {
      name: '10-20',
      value: 1.2
    },
{
      name: '20-30',
      value: 8.1
    },
{
      name: '30-40',
      value: 17.0
    },
    {
      name: '40-50',
      value: 19.2
    },
{
      name: '50-60',
      value: 22.4
    },
{
      name: '60-70',
      value: 19.2
    },
{
      name: '70-80',
      value: 8.8
    },
{
      name: '>80',
      value: 3.2
    },
]
  }
};

export default class Age extends Component{
	option = {
	  title: [/*{
	    text: ``,
	    top: '15%',
	    left: '50%',
	    textAlign: 'center',
	  }, */
	  {
	    subtext: `数据来源:${data.china.source}`,
	    left: 'right',
	    top: 0
	   // textAlign: 'right'
	  },/* {
	    subtext: '确诊年龄比',
	    left: '50%',
	    top: '50%',
	    textAlign: 'center'
	  }*/],
	  series: [
	    {
	      type: 'pie',
	      radius: '50%',
	      center: ['50%', '50%'],
	      data: data.china.confirmed,
	      animation: false,
	      label: {
	        position: 'outer',
	        alignTo: 'none',
	        bleedMargin: 5,
	        formatter: '{b}: {c}%',
	      },
	      left: 0,
	      right: '66.6667%',
	      top: 0,
	      bottom: 0
	    }]
	};
	render(){
		return(
		  <View style={{height: 200}}>
		      <ECharts
		         option={this.option}
		         backgroundColor="white"
		      />
		  </View>
		);
	}
}
