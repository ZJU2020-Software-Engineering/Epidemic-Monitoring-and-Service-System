import React, { Component } from 'react';
import { View, Dimensions } from 'react-native'
import { ECharts } from "react-native-echarts-wrapper";
import { TabView, SceneMap } from 'react-native-tab-view';
import _ from 'lodash';


export const Sexdata = {
    china: {
        countryKey: 'china',
        countryName: '中国',
        source: '世界卫生组织-中国联合专家组报告',
        confirmed: [{
            name: '男性',
            value: 51.1
        }, {
            name: '女性',
            value: 48.9
        }],
        deceased: [{
            name: '男性',
            value: 63.7
        }, {
            name: '女性',
            value: 36.3
        }]
    },
    italy: {
        countryKey: 'italy',
        countryName: '意大利',
        source: '意大利国家卫生院',
        confirmed: [{
            name: '男性',
            value: 58.7
        }, {
            name: '女性',
            value: 41.3
        }],
        deceased: [{
            name: '男性',
            value: 70.8
        }, {
            name: '女性',
            value: 29.2
        }]
    },
    southKorea: {
        countryKey: 'southKorea',
        countryName: '韩国',
        source: '韩国疾病管理本部',
        confirmed: [{
            name: '男性',
            value: 38.49
        }, {
            name: '女性',
            value: 61.51
        }],
        deceased: [{
            name: '男性',
            value: 54.26
        }, {
            name: '女性',
            value: 45.74
        }]
    }
};

export const SexrenderCharts = countryData => {
   const options = {
       title: [/*{
           text: `${countryData.countryName}新冠肺炎病例性别比`,
           top: '5%',
           left: '50%',
           textAlign: 'center',
       },*/ {
           subtext: `数据来源：${countryData.source}`,
           left: '60%',
           //top: '10%',
           textAlign: 'center'
       }, {
           subtext: '确诊性别比',
           left: '50%',
           top: '40%',
           textAlign: 'center'
       }, {
           subtext: '死亡性别比',
           left: '50%',
           top: '80%',
           textAlign: 'center'
       }],
       series: [
           {
               type: 'pie',
               radius: '25%',
               center: ['50%', '30%'],
               data: countryData.confirmed,
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
           },
           {
               type: 'pie',
               radius: '25%',
               center: ['50%', '70%'],
               data: countryData.deceased,
               animation: false,
               label: {
                   position: 'outer',
                   alignTo: 'none',
                   bleedMargin: 5,
                   formatter: '{b}: {c}%',
               },
               left: '66.6667%',
               right: 0,
               top: 0,
               bottom: 0
           }
       ]
   };
   
   return (
       <View style={{flex: 1}}>
           <ECharts
               height={400}
               option={options}
               backgroundColor="white"
           />
       </View>
   )
};

export default function SexChart() {

    const initialLayout = { width: Dimensions.get('window').width };
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(_.map(data, country => ({
        key: country.countryKey,
        title: country.countryName,
    })));

    const renderScene = SceneMap(_.reduce(data, function(map, country) {
        map[country.countryKey] = () => renderCharts(country);
        return map;
    }, {}));

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
}
