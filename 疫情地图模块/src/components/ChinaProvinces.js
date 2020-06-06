import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ECharts } from "../module/react-native-echarts-wrapper";
import {SegmentedControl, Modal, Button, Provider} from "@ant-design/react-native";
import axios from 'axios'
import time from './tools/time'
import {server_config} from '../config'

export default class ChinaProvince extends Component {
    cityNameToMapName = city => {
        if (city === "大兴安岭") return "大兴安岭地区";
        if (city === "大理州") return "大理白族自治州";
        if (city === "德宏州") return "德宏傣族景颇族自治州";
        if (city === "西双版纳") return "西双版纳傣族自治州";
        if (city === "文山州") return "文山壮族苗族自治州";
        if (city === "楚雄州") return "楚雄彝族自治州";
        if (city === "红河州") return "红河哈尼族彝族自治州";
        if (city.endsWith('盟') || city.endsWith('自治州') || city.endsWith('地区') || city.endsWith('市') || city.endsWith('师')) return city;
        return city + "市"
    };

    constructor(props){
        super(props);
        this.state={'DataUpdate':true}

        this.addition = {
            "options":
                [
                    {
                        "series":
                            [
                                {
                                    name: "新增病例",
                                    type: "map",
                                    mapType: this.props.province,
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
                            mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                                    mapType: this.props.province,
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
                            mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                                    mapType: this.props.province,
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
                            mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                        mapType: this.props.province,
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
                    symbolSize: 0,

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
                    top: 100,
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
                    text:"现存病例",
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
                        return html;
                    },

                },

                geo: {
                    map: this.props.province,
                    roam: !1,
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1.23,
                    top: 120,
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '80%',
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
                    top: 100,
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
                    text:"新增病例",
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
                    map: this.props.province,
                    roam: !1,
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1.23,
                    top: 120,
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '80%',
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
                    top: 100,
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
                    text:"累计病例",
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
                    map: this.props.province,
                    roam: !1,
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1.23,
                    top: 120,
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '80%',
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
        for (let day = 0; day < 5; day ++) {
            axios
                .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':'city','Data':this.timeTable[day],'Province':this.props.province})
                .then((res)=>{
                    if(res.data.result==='Y'){
                        for (var i=0; i<res.data.message.extance.length; i++) {
                            this.confirm.options[day].series[0].data[i]={
                                name:this.cityNameToMapName(res.data.message.total[i].city),
                                value:res.data.message.total[i].confirmedNumber
                            }
                            this.existing.options[day].series[0].data[i]={
                                name:this.cityNameToMapName(res.data.message.extance[i].city),
                                value:res.data.message.extance[i].confirmedNumber
                            }
                            this.addition.options[day].series[0].data[i]={
                                name:this.cityNameToMapName(res.data.message.newAddtion[i].city),
                                value:res.data.message.newAddtion[i].confirmedNumber,
                            }
                        }
                        this.setState({DataUpdate:false},()=>{})
                    }});
        }
    }

    render(){
        return (
            <View>
                <SegmentedControl
                    values={['现存', '新增', '累计']}
                    onChange={e => {
                        this.chart.setOption(this.options[e.nativeEvent.selectedSegmentIndex]);
                    }}
                    style={{ marginLeft: 50, marginRight: 50, marginBottom: 10}}
                />
                <View style={{ height: 600 }} >
                    <ECharts
                        ref={this.onRef}
                        option={this.options[0]}
                    />
                </View>
            </View>
        )
    }

}