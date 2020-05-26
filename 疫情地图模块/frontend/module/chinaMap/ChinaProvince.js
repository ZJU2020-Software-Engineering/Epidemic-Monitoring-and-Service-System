import * as React from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { ECharts } from "react-native-echarts-wrapper"

const database={
    "贵州":[1,2,3,4,5,6,7,8,9],
    "云南":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    "陕西":[1,2,3,4,5,6,7,8,9,10],
    "内蒙古":[1,2,3,4,5,6,7,8,9,10,11,12],
    "甘肃":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    "广西":[1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    "青海":[1,2,3,4,5,6,7,8],
    "台湾":[1]
}

const datas={
    "贵州":[{
        name:"贵阳市",
        value:database.贵州[0]
    },
    {
        name:"六盘水市",
        value:database.贵州[1]
    },
    {
        name:"遵义市",
        value:database.贵州[2]
    },
    {
        name:"安顺市",
        value:database.贵州[3]
    },
    {
        name:"毕节市",
        value:database.贵州[4]
    },
    {
        name:"铜仁市",
        value:database.贵州[5]
    },
    {
        name:"黔东南苗族侗族自治州",
        value:database.贵州[6]
    },
    {
        name:"黔南布依族苗族自治州",
        value:database.贵州[7]
    },
    {
        name:"黔西南布依族苗族自治州",
        value:database.贵州[8]
    }
    ],
    "云南":[
    {
        name:"昆明市",
        value:database.云南[0]
    },
    {
        name:"曲靖市",
        value:database.云南[1]
    },
    {
        name:"玉溪市",
        value:database.云南[2]
    },
    {
        name:"昭通市",
        value:database.云南[3]
    },
    {
        name:"保山市",
        value:database.云南[4]
    },
    {
        name:"丽江市",
        value:database.云南[5]
    },
    {
        name:"普洱市",
        value:database.云南[6]
    },
    {
        name:"临沧市",
        value:database.云南[7]
    },
    {
        name:"德宏傣族景颇族自治州",
        value:database.云南[8]
    },
    {
        name:"怒江傈僳族自治州",
        value:database.云南[9]
    },
    {
        name:"迪庆藏族自治州",
        value:database.云南[10]
    },
    {
        name:"大理白族自治州",
        value:database.云南[11]
    },
    {
        name:"楚雄彝族自治州",
        value:database.云南[12]
    },
    {
        name:"红河哈尼族彝族自治州",
        value:database.云南[13]
    },
    {
        name:"文山壮族苗族自治州",
        value:database.云南[14]
    },
    {
        name:"西双版纳傣族自治州",
        value:database.云南[15]
    }],
    "陕西":[
    {
        name:"西安市",
        value:database.陕西[0]
    },
    {
        name:"宝鸡市",
        value:database.陕西[1]
    },
    {
        name:"咸阳市",
        value:database.陕西[2]
    },
    {
        name:"铜川市",
        value:database.陕西[3]
    },
    {
        name:"渭南市",
        value:database.陕西[4]
    },
    {
        name:"延安市",
        value:database.陕西[5]
    },
    {
        name:"榆林市",
        value:database.陕西[6]
    },
    {
        name:"汉中市",
        value:database.陕西[7]
    },
    {
        name:"安康市",
        value:database.陕西[8]
    },
    {
        name:"商洛市",
        value:database.陕西[9]
    }],
    "内蒙古":[
    {
        name:"呼和浩特市",
        value:database.内蒙古[0]
    },
    {
        name:"包头市",
        value:database.内蒙古[1]
    },
    {
        name:"乌海市",
        value:database.内蒙古[2]
    },
    {
        name:"赤峰市",
        value:database.内蒙古[3]
    },
    {
        name:"通辽市",
        value:database.内蒙古[4]
    },
    {
        name:"鄂尔多斯市",
        value:database.内蒙古[5]
    },
    {
        name:"呼伦贝尔市",
        value:database.内蒙古[6]
    },
    {
        name:"巴彦淖尔市",
        value:database.内蒙古[7]
    },
    {
        name:"乌兰察布市",
        value:database.内蒙古[8]
    },
    {
        name:"兴安盟",
        value:database.内蒙古[9]
    },
    {
        name:"锡林郭勒盟",
        value:database.内蒙古[10]
    },
    {
        name:"阿拉善盟",
        value:database.内蒙古[11]
    }],
    "甘肃":[
    {
        name:"兰州市",
        value:database.甘肃[0]
    },
    {
        name:"嘉峪关市",
        value:database.甘肃[1]
    },
    {
        name:"金昌市",
        value:database.甘肃[2]
    },
    {
        name:"白银市",
        value:database.甘肃[3]
    },
    {
        name:"天水市",
        value:database.甘肃[4]
    },
    {
        name:"武威市",
        value:database.甘肃[5]
    },
    {
        name:"张掖市",
        value:database.甘肃[6]
    },
    {
        name:"平凉市",
        value:database.甘肃[7]
    },
    {
        name:"酒泉市",
        value:database.甘肃[8]
    },
    {
        name:"庆阳市",
        value:database.甘肃[9]
    },
    {
        name:"定西市",
        value:database.甘肃[10]
    },
    {
        name:"陇南市",
        value:database.甘肃[11]
    },
    {
        name:"临夏回族自治州",
        value:database.甘肃[12]
    },
    {
        name:"甘南藏族自治州",
        value:database.甘肃[13]
    }],
    "广西":[
    {
        name:"南宁市",
        value: database.广西[0]
    },
    {
        name:"柳州市",
        value: database.广西[1]
    },
    {
        name:"桂林市",
        value: database.广西[2]
    },
    {
        name:"梧州市",
        value: database.广西[3]
    },
    {
        name:"北海市",
        value: database.广西[4]
    },
    {
        name:"崇左市",
        value: database.广西[5]
    },
    {
        name:"来宾市",
        value: database.广西[6]
    },
    {
        name:"贺州市",
        value: database.广西[7]
    },
    {
        name:"玉林市",
        value: database.广西[8]
    },
    {
        name:"百色市",
        value: database.广西[9]
    },
    {
        name:"河池市",
        value: database.广西[10]
    },
    {
        name:"钦州市",
        value: database.广西[11]
    },
    {
        name:"防城港市",
        value: database.广西[12]
    },
    {
        name:"贵港市",
        value: database.广西[13]
    }],
    "青海":[
    {
        name:"西宁市",
        value:database.青海[0]
    },
    {
        name:"海东市",
        value:database.青海[1]
    },
    {
        name:"海北藏族自治州",
        value:database.青海[2]
    },
    {
        name:"黄南藏族自治州",
        value:database.青海[3]
    },
    {
        name:"海南藏族自治州",
        value:database.青海[4]
    },
    {
        name:"果洛藏族自治州",
        value:database.青海[5]
    },
    {
        name:"玉树藏族自治州",
        value:database.青海[6]
    },
    {
        name:"海西蒙古族藏族自治州",
        value:database.青海[7]
    }],
    "台湾":[
    // {
    //     name:"台北市",
    //     value:database.台湾[0]
    // },
    // {
    //     name:"新北市",
    //     value:database.台湾[1]
    // },
    // {
    //     name:"桃园市",
    //     value:database.台湾[2]
    // },
    // {
    //     name:"台中市",
    //     value:database.台湾[3]
    // },
    // {
    //     name:"台南市",
    //     value:database.台湾[4]
    // },
    // {
    //     name:"高雄市",
    //     value:database.台湾[5]
    // },
    // {
    //     name:"基隆市",
    //     value:database.台湾[6]
    // },
    // {
    //     name:"新竹市",
    //     value:database.台湾[7]
    // },
    // {
    //     name:"嘉义市",
    //     value:database.台湾[8]
    // }
    {
        name:"台湾省",
        value:database.台湾[0]
    }
    ]
}

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
        text:"贵州疫情地图-现存病例",
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
        map: "贵州",
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
    series: [{
        name:"确诊病例",
        type:"map",
        geoIndex:0,
        data:datas.贵州
    }],
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut'
}

function optionX(province) {
    return {option:{    
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
            text:province.name+"疫情地图-现存病例",
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
            map: province.name,
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
            name:"确诊病例",
            type:"map",
            geoIndex:0,
            data:datas[province.name]
        }],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    }
    }
}

const optionShaanXi = {    
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
        text:"陕西疫情地图-现存病例",
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
        map: "陕西",
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
        name:"确诊病例",
        type:"map",
        geoIndex:0,
        data:datas.陕西
    }],
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut'
}

const optionTaiWan = {    
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
        text:"台湾疫情地图-现存病例",
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
        map: "台湾",
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
    series: [{
        name:"确诊病例",
        type:"map",
        geoIndex:0,
        data:datas.台湾
    }],
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'quinticInOut'
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

const GuiZhouRoute = () => (
    <View style={[styles.scene]} >
        <ECharts  option= {optionX({name:"贵州"}).option}/>
    </View>
);

const TaiWanRoute = () => (
    <View style={[styles.scene]} >
        <ECharts  option= {optionX({name:"台湾"}).option}/>
    </View>
);

const ThirdRoute = () => (
    <View style={[styles.scene]} >        
        <ECharts  option= {option3}/>
    </View>
  );

const ShaanXiRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"陕西"}).option}/>
    </View>
);

const QingHaiRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"青海"}).option}/>
    </View>
);
const GanSuRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"甘肃"}).option}/>
    </View>
);
const GuangXiRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"广西"}).option}/>
    </View>
);
const NeiMengGuRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"内蒙古"}).option}/>
    </View>
);

const YunNanRoute=()=>(
    <View style={[styles.scene]} >        
        <ECharts  option= {optionX({name:"云南"}).option}/>
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function ChinaRegionMap() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '贵州' },
        { key: 'second', title: '云南' },
        {key:'third',title:'陕西'},
        {key:'fourth',title:'内蒙古'},
        { key: 'fifth', title: '甘肃' },
        { key: 'sixth', title: '广西' },
        { key: 'seventh', title: '青海' },
        { key: 'eighth', title: '台湾' },
    ]);

    const renderScene = SceneMap({
        first: GuiZhouRoute,
        second: YunNanRoute,
        third: ShaanXiRoute,
        fourth: NeiMengGuRoute,
        fifth: GanSuRoute,
        sixth: GuangXiRoute,
        seventh: QingHaiRoute,
        eighth: TaiWanRoute
    });

    // return routeShaanXi;

  return (
    
    <View style={{ flex: 1, top:'10%' }}>

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