import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ECharts } from "react-native-echarts-wrapper";

const shanxi = {
    "options": [
    {
        "series": [
          {
            name: "确诊病例",
            type: "map",
            mapType: '山西',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            geoIndex: 0,
            
            "data": [
                {
                    name: '太原市',
                    value: 3
                },
                {
                    name: '大同市',
                    value: 13
                },
                {
                    name: '阳泉市',
                    value: 27
                },
                {
                    name: '长治市',
                    value: 19
                },
                {
                    name: '晋城市',
                    value: 138
                },
                {
                    name: '朔州市',
                    value: 228
                },
                {
                    name: '晋中市',
                    value: 151
                },
                {
                    name: '运城市',
                    value: 84
                },
                {
                    name: '沂州市',
                    value: 0
                },
                {
                    name: '吕梁市',
                    value: 61
                }
            ],
           
        }],
       
    }, {
      "series": [
        {
          name: "确诊病例",
          type: "map",
          mapType: '山西',
          label: {
              normal: {
                  show: true
              },
              emphasis: {
                  show: true
              }
          },
          geoIndex: 0,
          
          "data": [
              {
                  name: '太原市',
                  value: 3
              },
              {
                  name: '大同市',
                  value: 13
              },
              {
                  name: '阳泉市',
                  value: 27
              },
              {
                  name: '长治市',
                  value: 19
              },
              {
                  name: '晋城市',
                  value: 138
              },
              {
                  name: '朔州市',
                  value: 228
              },
              {
                  name: '晋中市',
                  value: 151
              },
              {
                  name: '运城市',
                  value: 84
              },
              {
                  name: '沂州市',
                  value: 0
              },
              {
                  name: '吕梁市',
                  value: 61
              }
          ],
         
      }],
     
  }, {
    "series": [
      {
        name: "确诊病例",
        type: "map",
        mapType: '山西',
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        geoIndex: 0,
        
        "data": [
            {
                name: '太原市',
                value: 3
            },
            {
                name: '大同市',
                value: 13
            },
            {
                name: '阳泉市',
                value: 27
            },
            {
                name: '长治市',
                value: 19
            },
            {
                name: '晋城市',
                value: 138
            },
            {
                name: '朔州市',
                value: 228
            },
            {
                name: '晋中市',
                value: 151
            },
            {
                name: '运城市',
                value: 84
            },
            {
                name: '沂州市',
                value: 0
            },
            {
                name: '吕梁市',
                value: 61
            }
        ],
       
    }],
   
  }],
    "date": ["4.4", "4.5", "4.6"]
};

const totalConfirm = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            inverse: false,
            playInterval: 3000,
            left:"center",
            width:"90%",
            top:'60%',
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
                formatter: shanxi.date
            },
           
            data: shanxi.date,
           
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
            text:"山西疫情地图-累计确诊",
            top:'5%',
            left:'center',
            textStyle: {
                color: '#2D3E53',
                fontSize: 18,
    
            },
        },
        tooltip: {
            triggerOn: "click",      
            formatter:function(e,t,n){
                var html = '';
                html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
                html+='<button  οnclick="">详情</button>';      
                return html;
            },
            
        },
        
        geo: {
            map: "山西",
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
    
    options: shanxi.options

}

const newConfirm = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
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
              formatter: shanxi.date
          },
         
          data: shanxi.date,
         
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
          text:"山西疫情地图-新增确诊",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "山西",
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
  
  options: shanxi.options

}

const totalCure = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
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
              formatter: shanxi.date
          },
         
          data: shanxi.date,
         
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
          text:"山西疫情地图-累计治愈",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "山西",
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
  
  options: shanxi.options

}


const totalDie = {
  baseOption: {
      timeline: {
          axisType: 'category',
          autoPlay: true,
          inverse: false,
          playInterval: 3000,
          left:"center",
          width:"90%",
          top:'60%',
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
              formatter: shanxi.date
          },
         
          data: shanxi.date,
         
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
          text:"山西疫情地图-累计死亡",
          top:'5%',
          left:'center',
          textStyle: {
              color: '#2D3E53',
              fontSize: 18,
  
          },
      },
      tooltip: {
          triggerOn: "click",      
          formatter:function(e,t,n){
              var html = '';
              html+= .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value+ "<br />";
              html+='<button  οnclick="">详情</button>';      
              return html;
          },
          
      },
      
      geo: {
          map: "山西",
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
  
  options: shanxi.options

}


const FirstRoute = () => (
    <View style={[styles.scene]} >
        <ECharts  option= {newConfirm}/>
    </View>
);
 
const SecondRoute = () => (
    <View style={[styles.scene]} >
        
        <ECharts  option= {totalConfirm}/>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]} >
        
        <ECharts  option= {totalCure}/>
    </View>
);

const FourthRoute = () => (
    <View style={[styles.scene]} >
        <ECharts  option= {totalDie}/>
    </View>
);
 
const initialLayout = { width: Dimensions.get('window').width };
 
export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '新增确诊' },
    { key: 'second', title: '累计确诊' },
    {key:'third',title:'累计治愈'},
    {key:'fourth',title:'累计死亡'}
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
    fourth: FourthRoute
  });
 
  return (
    
    <View style={{ flex: 1, top:'2%' }}>
       
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
    </View>
  );
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
