import React, {Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import { ECharts } from "react-native-echarts-wrapper";
import SwitchSelector from "react-native-switch-selector";
import Constants from 'expo-constants';

export default class app extends Component {
    render() {
        const province=["西藏","新疆","宁夏","北京","上海","重庆","天津","香港","澳门"]
        const data_xizang=[
            {
                name:"阿里地区",
                value: 3
            },
            {
                name: '那曲地区',
                value: 54
            },
            {
                name: '昌都市',
                value: 0
            },
            {
                name: '日喀则市',
                value: 4
            },
            {
                name: '拉萨市',
                value: 75
            },
            {
                name: '林芝市',
                value: 13
            },
            
            
        ]
        
        const data_xinjiang=[
            {
                name:"阿勒泰地区",
                value: 3
            },
            {
                name: '北屯市',
                value: 54
            },
            {
                name: '塔城地区',
                value: 0
            },
            {
                name: '克拉玛依市',
                value: 4
            },
            {
                name: '石河子市',
                value: 75
            },
            {
                name: '乌鲁木齐市',
                value: 13
            },
            {
                name: '吐鲁番市',
                value: 75
            },
            {
                name: '伊犁哈萨克自治州',
                value: 13
            },
            {
                name: '阿克苏地区',
                value: 13
            },
            {
                name: '阿拉尔市',
                value: 13
            },
            {
                name: '喀什地区',
                value: 13
            },
            {
                name: '图木舒克市',
                value: 13
            },
            {
                name: '克孜勒苏柯尔克孜自治州',
                value: 13
            },
            {
                name: '和田地区',
                value: 5
            },
            {
                name: '昌吉回族自治州',
                value: 6
            },
            
            
        ]
        const data_ningxia=[
            {
                name:"石嘴山市",
                value: 3
            },
            {
                name: '银川市',
                value: 54
            },
            {
                name: '吴忠市',
                value: 0
            },
            {
                name: '中卫市',
                value: 4
            },
            {
                name: '固原市',
                value: 75
            },
            
            
            
        ]
        const data_beijing=[
            {
                name:"延庆区",
                value: 3
            },
            {
                name: '昌平区',
                value: 54
            },
            {
                name: '怀柔区',
                value: 0
            },
            {
                name: '密云区',
                value: 4
            },
            {
                name: '平谷区',
                value: 75
            },
            {
                name: '顺义区',
                value: 10
            },
            {
                name: '通州区',
                value: 7
            },
            {
                name: '朝阳区',
                value: 7
            },
            {
                name: '海淀区',
                value: 10
            },
            {
                name: '大兴区',
                value: 75
            },
            {
                name: '房山区',
                value: 20
            },
            {
                name: '石景山',
                value: 6
            },
            {
                name: '西城区',
                value: 75
            },
            {
                name: '东城区',
                value: 75
            },
            {
                name: '丰台区',
                value: 75
            },
            {
                name: '门头沟区',
                value: 75
            },

        ]
        const data_shanghai=[
            {
                name:"崇明区",
                value: 3
            },
            {
                name: '浦东区',
                value: 54
            },
            {
                name: '宝山区',
                value: 0
            },
            {
                name: '嘉定区',
                value: 4
            },
            {
                name: '杨浦区',
                value: 75
            },
            {
                name: '静安区',
                value: 10
            },
            {
                name: '虹口区',
                value: 7
            },
            {
                name: '普陀区',
                value: 7
            },
            {
                name: '长宁区',
                value: 10
            },
            {
                name: '徐汇区',
                value: 75
            },
            {
                name: '黄浦区',
                value: 20
            },
            {
                name: '闵行区',
                value: 6
            },
            {
                name: '奉贤区',
                value: 75
            },
            {
                name: '松江区',
                value: 75
            },
            {
                name: '青浦区',
                value: 75
            },
            {
                name: '金山区',
                value: 75
            },
        ]
        const data_chongqin=[
            {
                name:'城口县',
                value: 3
            },
            {
                name: '巫溪县',
                value: 54
            },
            {
                name: '巫山县',
                value: 0
            },
            {
                name: '奉节县',
                value: 4
            },
            {
                name: '万州区',
                value: 75
            },
            {
                name: '开州区',
                value: 10
            },
            {
                name: '云阳县',
                value: 7
            },
            {
                name: '梁平区',
                value: 7
            },
            {
                name: '石柱县',
                value: 10
            },
            {
                name: '彭水县',
                value: 75
            },
            {
                name: '酉阳县',
                value: 20
            },
            {
                name: '秀山县',
                value: 6
            },
            {
                name: '南川区',
                value: 75
            },
            {
                name: '江津区',
                value: 75
            },
            {
                name: '永川区',
                value: 75
            },
            {
                name: '荣昌区',
                value: 75
            },
           
        ]
        const data_tianjin=[
            {
                name: '和平区',
                value: 7
            },
            {
                name: '河东区',
                value: 10
            },
            {
                name: '河西区',
                value: 75
            },
            {
                name: '南开区',
                value: 20
            },
            {
                name: '河北区',
                value: 6
            },
            {
                name: '红桥区',
                value: 75
            },
            {
                name: '滨海新区',
                value: 75
            },
            {
                name: '东丽区',
                value: 75
            },
            {
                name: '西青区',
                value: 75
            },
            {
                name: '津南区',
                value: 75
            },
            {
                name: '北辰区',
                value: 75
            },
            {
                name: '武清区',
                value: 75
            },
            {
                name: '宝坻区',
                value: 75
            },
            {
                name: '宁河区',
                value: 75
            },
            {
                name: '静海区',
                value: 75
            },
            {
                name: '蓟州区',
                value: 75
            },
        ]
        const data_xianggang=[
           
        ]
        const data_aomen=[
           
        ]
        const option ={
            tooltip: {
                triggerOn: "click",
                // formatter: function(e, t, n) {
                //     return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value
                // }
          
                formatter:function(e,t,n){
                    var html = '';
                    html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
                    html+='<button  οnclick="">详情</button>';      
                    return html;
                },
                
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                top: 100,
                showLabel: !0,
                itemGap:2,
                itemWidth: 5,
                itemHeight:5,
                textStyle: {
                    fontSize: '8',
                    color:'#000'
                },
                pieces: [{
                    gt: 1000,
                    label: "> 1000 人",
                    color: "#73240D"
                }, 
                    {
                    gte: 100,
                    lte:1000,
                    label: "100-1000 人",
                    color: "#BD430A"
                }, {
                    gte: 10,
                    lte: 100,
                    label: "10 - 100 人",
                    color: "#ff5428"
                }, {
                    gte: 1,
                    lt: 10,
                    label: "1 - 9 人",
                    color: "#ff8c71"
                }, {
                    value: 0,
                    color: "#ffffff"
                }],
                show: !0
            },
            geo: {
                map: province[3],
                roam: !1,
                scaleLimit: {
                    min: 1,
                    max: 2
                },
                zoom: 1.23,
                top: 120,
                label: {
                    normal: {
                        show: !0,
                        fontSize: "6",
                        color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                        //shadowBlur: 50,
                        //shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "确诊病例",
                type: "map",
                mapType: province[3],
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                geoIndex: 0,
                data: [],
                
            
            
            }]


           
          

    
  };
    return (

        <ECharts option={option}  />

    );
  }
  }
  

  