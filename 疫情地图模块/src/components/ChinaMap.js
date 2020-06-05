import React, { Component } from 'react';
import { View } from 'react-native';
import { ECharts } from "../module/react-native-echarts-wrapper";
import {SegmentedControl, Modal, Button} from "@ant-design/react-native";
import axios from 'axios'
import time from './tools/time'
import {server_config} from '../config'
import ChinaProvince from "./ChinaProvinces";
import ProvinceDataTable from "./ProvinceDataTable";

export default class ChinaMap extends Component {
    constructor(props){
        super(props);
        this.state={'DataUpdate':true, 'visible': false, 'prevClick': ''}

        this.addition = {
            "options": 
            [
                {
                "series": 
                [
                    {
                    name: "新增病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    
                    "data": [],}],
               
            }, {
                "series": [
                    {
                    name: "新增病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [],}],
                
            }, {
                "series": [{
                    name: "新增病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                   
                }],
               
            }, {
                "series": [{
                    name: "新增病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                  
                }],
                
            }, {
                "series": [{
                    name: "新增病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    "data": [],}],}],
            // "years": ["3.14", "3.15", "3.16", "3.18", "3.19"]
            // "years": []
        };
        this.confirm = {
            "options": 
            [
                {
                "series": 
                [
                    {
                    name: "确诊病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    
                    "data": [],}],
               
            }, {
                "series": [
                    {
                    name: "确诊病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [],}],
                
            }, {
                "series": [{
                    name: "确诊病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                   
                }],
               
            }, {
                "series": [{
                    name: "确诊病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                  
                }],
                
            }, {
                "series": [{
                    name: "确诊病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    "data": [],}],}],

        };
        this.existing = {
            "options": 
            [
                {
                "series": 
                [
                    {
                    name: "现存病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    
                    "data": [],}],
               
            }, {
                "series": [
                    {
                    name: "现存病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [],}],
                
            }, {
                "series": [{
                    name: "现存病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                   
                }],
               
            }, {
                "series": [{
                    name: "现存病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    showLegendSymbol: false,
                    "data": [
                    ],
                  
                }],
                
            }, {
                "series": [{
                    name: "现存病例",
                    type: "map",
                    mapType: 'china',
                    label: {
                        normal: {show: true},
                        emphasis: {show: true}
                    },
                    geoIndex: 0,
                    "data": [],}],}],
            // "years": ["3.14", "3.15", "3.16", "3.18", "3.19"]
            // "years": []
        };
        const curDate = new Date(new Date().getTime() - 6*60*60*1000);
        this.timeTable = [];
        for( i = 0 ; i < 5 ; i ++ ){
            this.timeTable[4-i] = time.formatDate(new Date(curDate.getTime() - i*24*60*60*1000), 'yyyy-MM-dd');
        }
        this.confirm.years=this.timeTable
        this.existing.years=this.timeTable
        this.addition.years=this.timeTable
        this.option1 = {
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
                        formatter: this.existing.years
                    },
        
                    data: this.existing.years,
        
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
                        html+='再次点击查看详情';
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
            
            options: this.existing.options
        
        }
        this.option2 = {
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
                        formatter: this.addition.years
                    },
                   
                    data: this.addition.years,
                   
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
            
            options: this.addition.options
        
        }
        
        this.option3 = {
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
                        formatter: this.confirm.years
                    },
                   
                    data: this.confirm.years,
                   
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
                        html+='<button>详情</button>';
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
            
            options: this.confirm.options
        
        }
        this.options = [this.option1, this.option2, this.option3];
        this.chart;
        this.onRef = ref => {
            if (ref) {
                this.chart = ref;
            }
        };
        axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'joinProvince','Data':this.timeTable[0]}) 
        .then((res)=>{  
            if(res.data.result=='Y'){ 
                // console.log(res.data.message) 
                for (var i=0; i<res.data.message.length; i++) {
                    this.confirm.options[0].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].grandTotalConfirmedNumber
                    }
                    this.existing.options[0].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].existingConfirmedNumber
                    }
                    this.addition.options[0].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].newAddtionConfirmedNumber
                    }
                }   
                this.setState({DataUpdate:false},()=>{})
        }}); 
        axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'joinProvince','Data':this.timeTable[1]}) 
        .then((res)=>{  
            if(res.data.result=='Y'){ 
                // console.log(res.data.message) 
                for (var i=0; i<res.data.message.length; i++) {
                    this.confirm.options[1].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].grandTotalConfirmedNumber
                    }
                    this.existing.options[1].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].existingConfirmedNumber
                    }
                    this.addition.options[1].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].newAddtionConfirmedNumber
                    }
                }   
                this.setState({DataUpdate:false},()=>{})
        }});
        axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'joinProvince','Data':this.timeTable[2]}) 
        .then((res)=>{  
            if(res.data.result=='Y'){ 
                // console.log(res.data.message) 
                for (var i=0; i<res.data.message.length; i++) {

                    this.confirm.options[2].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].grandTotalConfirmedNumber
                    }
                    this.existing.options[2].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].existingConfirmedNumber
                    }
                    this.addition.options[2].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].newAddtionConfirmedNumber
                    }

                }   
                this.setState({DataUpdate:false},()=>{})
        }});
        axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'joinProvince','Data':this.timeTable[3]}) 
        .then((res)=>{  
            if(res.data.result=='Y'){ 
                // console.log(res.data.message) 
                for (var i=0; i<res.data.message.length; i++) {

                    this.confirm.options[3].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].grandTotalConfirmedNumber
                    }
                    this.existing.options[3].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].existingConfirmedNumber
                    }
                    this.addition.options[3].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].newAddtionConfirmedNumber
                    }

                }   
                this.setState({DataUpdate:false},()=>{})
        }});
        axios
        .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'joinProvince','Data':this.timeTable[4]}) 
        .then((res)=>{  
            if(res.data.result=='Y'){ 
                // console.log(res.data.message) 
                for (var i=0; i<res.data.message.length; i++) {

                    this.confirm.options[4].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].grandTotalConfirmedNumber
                    }
                    this.existing.options[4].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].existingConfirmedNumber
                    }
                    this.addition.options[4].series[0].data[i]={
                        name:res.data.message[i].province,
                        value:res.data.message[i].newAddtionConfirmedNumber
                    }
                }   
                this.setState({DataUpdate:false},()=>{})
        }});
        

      }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){

        return (
                <View>
                    <SegmentedControl
                        values={['现存', '新增', '累计']}
                        onChange={e => {
                            this.chart.setOption(this.options[e.nativeEvent.selectedSegmentIndex]);
                        }}
                        style={{ marginLeft: 50, marginRight: 50}}
                    />
                    <View style={{ height: 500 }} >
                        <ECharts
                            ref={this.onRef}
                            option={this.options[0]}
                            onData={(e) => {
                                if (!JSON.parse(e).data) return;
                                const clickName = JSON.parse(e).data.name;
                                if (this.state.prevClick && this.state.prevClick.length > 0 && this.state.prevClick === clickName) {
                                    this.setState({ visible: true })
                                }
                                this.setState({ prevClick: clickName })
                            }}
                        />
                    </View>
                    <Modal
                        title={this.state.prevClick}
                        transparent
                        onClose={this.onClose}
                        maskClosable
                        visible={this.state.visible}
                        closable
                        style={{ width: '90%', height: '75%' }}
                    >
                        <View style={{ paddingVertical: 20, minHeight: 800 }}>
                            <ChinaProvince province={this.state.prevClick} />
                            <ProvinceDataTable province={this.state.prevClick} />
                            <Button type="primary" onPress={this.onClose}>
                                关闭
                            </Button>
                        </View>
                    </Modal>
                </View>
        )
    }
  
}