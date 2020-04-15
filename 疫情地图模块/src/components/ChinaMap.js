import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ECharts } from "../module/react-native-echarts-wrapper";


  const all = {
    "options": [{
        "series": [{
            name: "确诊病例",
            type: "map",
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            
            "data": [{
                    name: '北京',
                    value: 3
                },
                {
                    name: '天津',
                    value: 13
                },
                {
                    name: '河北',
                    value: 27
                },
                {
                    name: '山西',
                    value: 19
                },
                {
                    name: '内蒙古',
                    value: 138
                },
                {
                    name: '辽宁',
                    value: 228
                },
                {
                    name: '吉林',
                    value: 151
                },
                {
                    name: '黑龙江',
                    value: 84
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 61
                },
                {
                    name: '浙江',
                    value: 425
                },
                {
                    name: '安徽',
                    value: 213
                },
                {
                    name: '福建',
                    value: 520
                },
                {
                    name: '江西',
                    value: 572
                },
                {
                    name: '山东',
                    value: 47
                },
                {
                    name: '河南',
                    value: 983
                },
                {
                    name: '湖北',
                    value: 1207
                },
                {
                    name: '湖南',
                    value: 5053
                },
                {
                    name: '广东',
                    value: 165
                },
                {
                    name: '广西',
                    value: 659
                },
                {
                    name: '海南',
                    value: 118
                },
                {
                    name: '重庆',
                    value: 186
                },
                {
                    name: '四川',
                    value: 233
                },
                {
                    name: '贵州',
                    value: 2612
                },
                {
                    name: '云南',
                    value: 287
                },
                {
                    name: '西藏',
                    value: 9
                },
                {
                    name: '陕西',
                    value: 27
                },
                {
                    name: '甘肃',
                    value: 15
                },
                {
                    name: '青海',
                    value: 8
                },
                {
                    name: '宁夏',
                    value: 14
                },
                {
                    name: '新疆',
                    value: 67
                }
            ],
           
        }],
       
    }, {
        "series": [{
            name: "确诊病例",
            type: "map",
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            showLegendSymbol: false,
            "data": [{
                    name: '北京',
                    value: 4
                },
                {
                    name: '天津',
                    value: 6
                },
                {
                    name: '河北',
                    value: 63
                },
                {
                    name: '山西',
                    value: 37
                },
                {
                    name: '内蒙古',
                    value: 66
                },
                {
                    name: '辽宁',
                    value: 176
                },
                {
                    name: '吉林',
                    value: 131
                },
                {
                    name: '黑龙江',
                    value: 54
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 50
                },
                {
                    name: '浙江',
                    value: 247
                },
                {
                    name: '安徽',
                    value: 100
                },
                {
                    name: '福建',
                    value: 579
                },
                {
                    name: '江西',
                    value: 394
                },
                {
                    name: '山东',
                    value: 17
                },
                {
                    name: '河南',
                    value: 596
                },
                {
                    name: '湖北',
                    value: 660
                },
                {
                    name: '湖南',
                    value: 2173
                },
                {
                    name: '广东',
                    value: 188
                },
                {
                    name: '广西',
                    value: 569
                },
                {
                    name: '海南',
                    value: 46
                },
                {
                    name: '重庆',
                    value: 87
                },
                {
                    name: '四川',
                    value: 310
                },
                {
                    name: '贵州',
                    value: 1626
                },
                {
                    name: '云南',
                    value: 510
                },
                {
                    name: '西藏',
                    value: 11
                },
                {
                    name: '陕西',
                    value: 55
                },
                {
                    name: '甘肃',
                    value: 29
                },
                {
                    name: '青海',
                    value: 16
                },
                {
                    name: '宁夏',
                    value: 8
                },
                {
                    name: '新疆',
                    value: 51

                }
            ],
           
        }],
        
    }, {
        "series": [{
            name: "确诊病例",
            type: "map",
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            showLegendSymbol: false,
            "data": [{
                    name: '北京',
                    value: 3
                },
                {
                    name: '天津',
                    value: 10
                },
                {
                    name: '河北',
                    value: 34
                },
                {
                    name: '山西',
                    value: 17
                },
                {
                    name: '内蒙古',
                    value: 88
                },
                {
                    name: '辽宁',
                    value: 58
                },
                {
                    name: '吉林',
                    value: 19
                },
                {
                    name: '黑龙江',
                    value: 30
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 53
                },
                {
                    name: '浙江',
                    value: 97
                },
                {
                    name: '安徽',
                    value: 184
                },
                {
                    name: '福建',
                    value: 131
                },
                {
                    name: '江西',
                    value: 79
                },
                {
                    name: '山东',
                    value: 22
                },
                {
                    name: '河南',
                    value: 519
                },
                {
                    name: '湖北',
                    value: 682
                },
                {
                    name: '湖南',
                    value: 1047
                },
                {
                    name: '广东',
                    value: 59
                },
                {
                    name: '广西',
                    value: 715
                },
                {
                    name: '海南',
                    value: 121
                },
                {
                    name: '重庆',
                    value: 105
                },
                {
                    name: '四川',
                    value: 361
                },
                {
                    name: '贵州',
                    value: 2537
                },
                {
                    name: '云南',
                    value: 569
                },
                {
                    name: '西藏',
                    value: 8
                },
                {
                    name: '陕西',
                    value: 95
                },
                {
                    name: '甘肃',
                    value: 18
                },
                {
                    name: '青海',
                    value: 21
                },
                {
                    name: '宁夏',
                    value: 7
                },
                {
                    name: '新疆',
                    value: 34
                }
            ],
           
        }],
       
    }, {
        "series": [{
            name: "确诊病例",
            type: "map",
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            showLegendSymbol: false,
            "data": [{
                    name: '北京',
                    value: 3
                },
                {
                    name: '天津',
                    value: 5
                },
                {
                    name: '河北',
                    value: 108
                },
                {
                    name: '山西',
                    value: 40
                },
                {
                    name: '内蒙古',
                    value: 57
                },
                {
                    name: '辽宁',
                    value: 54
                },
                {
                    name: '吉林',
                    value: 58
                },
                {
                    name: '黑龙江',
                    value: 43
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 54
                },
                {
                    name: '浙江',
                    value: 433
                },
                {
                    name: '安徽',
                    value: 250
                },
                {
                    name: '福建',
                    value: 407
                },
                {
                    name: '江西',
                    value: 151
                },
                {
                    name: '山东',
                    value: 32
                },
                {
                    name: '河南',
                    value: 622
                },
                {
                    name: '湖北',
                    value: 510
                },
                {
                    name: '湖南',
                    value: 873
                },
                {
                    name: '广东',
                    value: 239
                },
                {
                    name: '广西',
                    value: 350
                },
                {
                    name: '海南',
                    value: 42
                },
                {
                    name: '重庆',
                    value: 162
                },
                {
                    name: '四川',
                    value: 309
                },
                {
                    name: '贵州',
                    value: 430
                },
                {
                    name: '云南',
                    value: 115
                },
                {
                    name: '西藏',
                    value: 3
                },
                {
                    name: '陕西',
                    value: 125
                },
                {
                    name: '甘肃',
                    value: 7
                },
                {
                    name: '青海',
                    value: 7
                },
                {
                    name: '宁夏',
                    value: 2
                },
                {
                    name: '新疆',
                    value: 59
                }
            ],
          
        }],
        
    }, {
        "series": [{
            name: "确诊病例",
            type: "map",
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            "data": [{
                    name: '北京',
                    value: 1
                },
                {
                    name: '天津',
                    value: 11
                },
                {
                    name: '河北',
                    value: 83
                },
                {
                    name: '山西',
                    value: 20
                },
                {
                    name: '内蒙古',
                    value: 57
                },
                {
                    name: '辽宁',
                    value: 51
                },
                {
                    name: '吉林',
                    value: 41
                },
                {
                    name: '黑龙江',
                    value: 49
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 30
                },
                {
                    name: '浙江',
                    value: 139
                },
                {
                    name: '安徽',
                    value: 81
                },
                {
                    name: '福建',
                    value: 92
                },
                {
                    name: '江西',
                    value: 46
                },
                {
                    name: '山东',
                    value: 8
                },
                {
                    name: '河南',
                    value: 328
                },
                {
                    name: '湖北',
                    value: 385
                },
                {
                    name: '湖南',
                    value: 922
                },
                {
                    name: '广东',
                    value: 65
                },
                {
                    name: '广西',
                    value: 289
                },
                {
                    name: '海南',
                    value: 23
                },
                {
                    name: '重庆',
                    value: 38
                },
                {
                    name: '四川',
                    value: 486
                },
                {
                    name: '贵州',
                    value: 275
                },
                {
                    name: '云南',
                    value: 299
                },
                {
                    name: '西藏',
                    value: 13
                },
                {
                    name: '陕西',
                    value: 67
                },
                {
                    name: '甘肃',
                    value: 11
                },
                {
                    name: '青海',
                    value: 6
                },
                {
                    name: '宁夏',
                    value: 9
                },
                {
                    name: '新疆',
                    value: 41
                }
            ],
           
           
        }],
        
    }],
    "years": ["3.14", "3.15", "3.16", "3.18", "3.19"]
};


const option1 = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,
            left:"center",
            width:"90%",
            top:'90%',
            loop: true,
            symbolSize: 8,

            label: {
                normal: {
                    textStyle: {
                        color: '#1C1C1C'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#CD3700'
                    }
                }
            },
            tooltip: {
                formatter: all.years
            },

            data: all.years,

        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            top: 300,
            showLabel: !0,
            itemGap:1,
            itemWidth: 7,
            itemHeight:7,
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
        title:{
            text:"全国疫情地图-现存病例",
            top:'5%',
            left:'center',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18,
    
            },
        },
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
        
        geo: {
            map: "china",
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2
            },
            zoom: 1.23,
            top: 120,
            label: {
                normal: {
                    show:!0,
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
        series: [],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    
    options: all.options

}
const option2 = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,
            left:"center",
            width:"90%",
            top:'90%',
            loop: true,
            symbolSize: 8,

            label: {
                normal: {
                    textStyle: {
                        color: '#1C1C1C'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#CD3700'
                    }
                }
            },
            tooltip: {
                formatter: all.years
            },
           
            data: all.years,
           
        },
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            top: 300,
            showLabel: !0,
            itemGap:1,
            itemWidth: 7,
            itemHeight:7,
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
        title:{
            text:"全国疫情地图-新增病例",
            top:'5%',
            left:'center',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18,
    
            },
        },
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
        
        geo: {
            map: "china",
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
        series: [],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    
    options: all.options

}

const option3 = {
    baseOption: {
            
        timeline: {
            axisType: 'category',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,
            left:"center",
            width:"90%",
            top:'90%',
            loop: true,
            symbolSize: 8,

            label: {
                normal: {
                    textStyle: {
                        color: '#1C1C1C'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#CD3700'
                    }
                }
            },
            tooltip: {
                formatter: all.years
            },
           
            data: all.years,
           
        },  
        visualMap: {
            min: 0,
            max: 1000,
            left: 26,
            top: 300,
            showLabel: !0,
            itemGap:1,
            itemWidth: 7,
            itemHeight:7,
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
        title:{
            text:"全国疫情地图-累计病例",
            top:'5%',
            left:'center',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18,
    
            },
        },
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
        
        geo: {
            map: "china",
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
        series: [],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    
    options: all.options

}
const FirstRoute = () => (
    <View style={[styles.scene]} >
        
        <ECharts option= {option1}/>
    </View>
);
 
const SecondRoute = () => (
    <View style={[styles.scene]} >
        
        <ECharts option= {option2}/>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]} >
        
        <ECharts option= {option3}/>
    </View>
  );
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function ChinaMap() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '全国现存' },
    { key: 'second', title: '全国新增' },
    {key:'third',title:'全国累计'}
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: 500,
  },
});
