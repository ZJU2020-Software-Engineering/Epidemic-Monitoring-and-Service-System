import React, {Component} from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
import { ECharts } from "react-native-echarts-wrapper";
import { Button } from 'react-native-paper';

 sourceData = [
 {'name': '广东【现存6人】', 'value': 1, 'extData': [1, '#D99D21', 0, '']},
 {'name': '四川【现存7人】', 'value': 6, 'extData': [6, '#FA8F2F', 0, '']},
 {'name': '浙江【现存8人】', 'value': 6, 'extData': [6, '#F57A34', 0, '']},
 {'name': '宁夏【现存9】', 'value': 7, 'extData': [7, '#D44C2D', 0, '']},
 {'name': '辽宁【现存10】', 'value': 8, 'extData': [8, '#D02C2A', 0, '']},
 {'name': '湖南【现存11】', 'value': 11, 'extData': [11, '#D5225B', 0, '']},
 {'name': '天津【现存12】', 'value': 12, 'extData': [12, '#D52178', 0, '']},
 {'name': '河北【现存13】', 'value': 12, 'extData': [12, '#C31C88', 0, '']},
 {'name': '江西【现存14】', 'value': 12, 'extData': [12, '#A63F98', 0, '']},
 {'name': '安徽【现存15】', 'value': 12, 'extData': [12, '#7D3990', 0, '']},
 {'name': '福建【现存19】', 'value': 13, 'extData': [13, '#6A368B', 0, '']},
 {'name': '河南【现存20】', 'value': 15, 'extData': [15, '#44388E', 0, '']},
 {'name': '山西', 'value': 15, 'extData': [15, '#2D3D8E', 0, '']},
 {'name': '广西', 'value': 15, 'extData': [15, '#2B55A1', 0, '']},
 {'name': '重庆', 'value': 16, 'extData': [16, '#2C6BA0', 0, '']},
 {'name': '吉林', 'value': 19, 'extData': [19, '#1E91CA', 0, '']},
 {'name': '云南', 'value': 20, 'extData': [20, '#209AC9', 0, '']},
 {'name': '海南', 'value': 20, 'extData': [20, '#14ADCF', 0, '']},
 {'name': '陕西', 'value': 21, 'extData': [21, '#3DBA78', 0, '']},
 {'name': '内蒙古', 'value': 21, 'extData': [21, '#37B44E', 0, '']},
 {'name': '江苏', 'value': 21, 'extData': [21, '#6DBC49', 0, '']},
 {'name': '新疆', 'value': 22, 'extData': [22, '#9ECB3C', 0, '']},
 {'name': '贵州', 'value': 23, 'extData': [23, '#C9DA36', 0, '']},
 {'name': '青海', 'value': 34, 'extData': [34, '#E9E416', 0, '']},
 {'name': '西藏', 'value': 41, 'extData': [41, '#FAE927', 0, '']}]


graphicData = [{
    type: 'group',
    left: 'center',
    top: '60%',
    bounding: 'raw', //重要，否则内容无法超过组
    z: 100,
    children: []
}]
graphicScatter = {
    type: 'circle',
    shape: {
        r: 2
    },
    style: {
        fill: 'black'
    },
    z: 100
}
graphicText = [{
    type: 'text',
    // left: 'center',
    // top: 10,
    z: 100,
    style: {
        fill: 'white',
        text: "eee",
        font: 'bold 13px Microsoft YaHei',
        textAlign: 'center'
    }
}, {
    type: 'text',
    // left: 'center',
    // top: 40,
    z: 100,
    style: {
        fill: 'white',
        text: 'ddd',
        font: 'bold 20px Microsoft YaHei',
        textAlign: 'center',

    }
}, {
    type: 'text',
    // left: 'center',
    // top: 70,
    z: 100,
    style: {
        fill: 'black',
        text: 'ccc',
        font: 'bold 20px Microsoft YaHei',
        textAlign: 'center'
    }
}]
graphic_total_Text = [{
    type: 'text',
    right: -220,
    bottom: 500,
    z: 100,
    style: {
        fill: '#E6E6FA',
        text: 'aaa',
        font: 'bold 10px Microsoft YaHei',
        textAlign: 'right'
    }
}, {
    type: 'text',
    right: -220,
    bottom: 475,
    z: 100,
    style: {
        fill: 'black',
        text: 'bbb',
        font: 'bold 18px Microsoft YaHei',
        textAlign: 'right',

    }
},
 {
    type: 'rect',
    left: 5,
    top: -299,
    z: 100,
    shape: {
        width: 170,
        height: 25,
        radius:2
    },
    style: {
        fill: 'gray'

    }
},
/*{
    type: 'rect',
    left: -114,
    top: -440,
    z: 100,
    shape: {
        width: 230,
        height: 50,
        radius:2
    },
    style: {
        fill: '#D5225B'

    }
},*/
/*{
    type: 'text',
    left: -109,
    top: -430,
    z: 100,
    style: {
        fill: 'white',
        text: '全国疫情新增零累计天数',
        font: 'bold 20px Microsoft YaHei',
        textAlign: 'right',

    }
},*/
{
    type: 'text',
    left: 12,
    top: -295,
    z: 100,
    style: {
        fill: 'white',
        text: '新增确诊为0的省份已有',
        font: 'bold 15px Microsoft YaHei',
        textAlign: 'right',

    }
}, {
    type: 'rect',
    left: 24,
    top: -230,
    z: 100,
    shape: {
        width: 150,
        height: 30
    },
    style: {
        fill: 'gray'

    }
}, 
{
    type: 'text',
    left: 32,
    top: -226,
    z: 100,
    style: {
        fill: 'white',
        text: '全国现存确诊人数为',
        font: 'bold 15px Microsoft YaHei',
        textAlign: 'right',

    }
},

{
    type: 'text',
    left: 110,
    top: -270,
    z: 100,
    style: {
        fill: '#D5225B',
        text: '28个',
        font: 'bold 25px Microsoft YaHei',
        textAlign: 'right'
    }
},
{
    type: 'text',
    left: 40,
    top: -328,
    z: 100,
    style: {
        fill: 'black',
        text: '截至2020年4月15日',
        font: 'bold 15px Microsoft YaHei',
        textAlign: 'right'
    }
},
{
    type: 'text',
    left: 95,
    top: -195,
    z: 100,
    style: {
        fill: '#D5225B',
        text: '354人',
        font: 'bold 25px Microsoft YaHei',
        textAlign: 'right'
    }
}
]
graphicChildren = {
    type: 'group',
    // left: 'center',
    // top: 'center',
    position: [],
    bounding: 'raw',
    z: 100,
    children: []

}

function convertData1() {
    var maxScale = 1
    var minScale = 0.1
    var stepRadius = 2 * Math.PI / sourceData.length
    var stepScale = (maxScale - minScale) / sourceData.length
    for (var i = 0; i < sourceData.length; i++) {
        sourceData[i].itemStyle = {
            color: sourceData[i]["extData"][1],
            borderWidth: 0
        }
        sourceData[i].label = {
            show: i > 6 ? false : false,
            position: i <= 5 ? "outer" : "inside",
            // alignTo: "labelLine",
            align: "right",
            borderWidth: 1,
            borderColor: "red",
            alignTo: "edge",
            margin: 450,
            formatter: (a) => {
                return a.data.extData[3]
            }
        }
        sourceData[i].labelLine = 
        {
            show: i > 6 ? false : false,
            // length: i <= 5 ? 5 * (i - 5) : 0,
            // length2: i <= 5 ? 0 : 0,
            lineStyle: {
                type: "dashed"
            }
        }
        var curRadius = (i + 0.5) * stepRadius
        // var curArclen = 1
        var curScale = i > 11 ? minScale + stepScale * (i) : 0.6 + stepScale * (i)
        var startR = i > 11 ? sourceData[i]["value"] * 350 / sourceData.slice(-1)[0]["value"] * 0.95 : ((
            sourceData[i]["value"] * 375 / sourceData.slice(-1)[0]["value"] + 10))
        var curR = [startR, startR * (i > 33 ? 0.95 : (i > 11 ? 0.75 : 1.12)), startR * (i > 33 ? 0.95 : (i >
            11 ? 0.8 : 1.17)) * (i > 33 ? 0.95 :
            (i > 11 ? 0.8 : 1.17))]
        var curPositions = []
        var curChilds = []
        var curCircles = []
        for (var j = 0; j < 3; j++) {
            var curX = Math.sin(curRadius) * curR[j]
            var curY = -Math.cos(curRadius) * curR[j]
            curPositions.push([curX, curY])
            var curChild = JSON.stringify(graphicChildren)
            curChild = JSON.parse(curChild)
            curChild.position = [curX, curY]
            curChild.rotation = i > 33 ? -((i + 0.5) / sourceData.length * 2 * Math.PI) : (i <= 11 ? -((i +
                0.5) / sourceData.length * 2 * Math.PI) + Math.PI / 2 : 0)
            curChild.scale = [curScale, curScale]
            curgraphicText = JSON.parse(JSON.stringify(graphicText[j]))
            curgraphicText.style.text = j == 0 ? sourceData[i]["name"] : (j == 1 ? (i > 11 ? sourceData[i]["extData"][0]+"天": "") : 
            (j == 2 && i > 33 ? (sourceData[i]["extData"][2] + "个") : (i <= 11 ? sourceData[i]["extData"][3] : "")))
            // curgraphicText.style.text = j == 0 ? sourceData[i]["name"] : (j == 1 ? i > 11 ? sourceData[i][
            //     "extData"
            // ][0] + "例" : "" : i > 33 ? sourceData[i][
            //     "extData"
            // ][2] + "例" : "")
            if (i <= 11) {
                curgraphicText.style.fill = "black"
                curgraphicText.style.textAlign = "left"
            }
            curChild.children = [curgraphicText]
            curChilds.push(curChild)
            // var curCircle = JSON.parse(JSON.stringify(graphicScatter))
            // curCircle.position = [curX, curY]
            // curCircles.push(curCircle)
            // graphicData[0].children.push(curCircle)
            graphicData[0].children.push(curChild)
        }
        // console.log(i, sourceData[i]["name"], curRadius, curR, curPositions)
    }
    for (var m = 0; m < 14; m++) {
        var cur_total_text = graphic_total_Text[m]
        graphicData[0].children.push(cur_total_text)
    }
    return sourceData
}



option = {
    /*title: {
        text: '全国疫情0新增累计天数',
        // subtext: '纯属虚构',
        left: 'center',
        textStyle: {
            color: "white",
            fontSize: 20
        },
        //backgroundColor: "rgb(199,16,16)",
        top: "5%"
    },*/
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },

    legend: {
    show:false,
    x: 'right',//水平位置，【left\center\right\数字】
    y: '35%',//垂直位置，【top\center\bottom\数字】
    align:'left',//字在图例的左边或右边【left/right】
    orient:'vertical',//图例方向【horizontal/vertical】
    icon: "circle",   //图例形状【circle\rect\roundRect\triangle\diamond\pin\arrow\none】
    textStyle://图例文字
    {
        // fontFamily:'微软雅黑',
        fontSize: '12',
        color:'#000',
        
    },
    formatter: function(params) {
                if(params=="海南"){
                    return params;
                }
                
    }
},


    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    graphic: graphicData,
    series: [{
        name: '新增0累计天数',
        type: 'pie',
        radius: [20, 340],
        center: ['50%', '60%'],
        label: {
            show: true
        },
        roseType: 'area',
        data: convertData1(),
        rich: {
            a: {
                color: 'white',
                lineHeight: 10
            },
            b: {
                backgroundColor: {
                    image: 'xxx/xxx.jpg'
                },
                height: 5
            },
            x: {
                fontSize: 18,
                fontFamily: 'Microsoft YaHei',
                borderColor: '#449933',
                borderRadius: 6
            }
        },
        
    },
    {
        name:'透明圆圈',
        type:'pie',
        radius: [10,27],
        center : ['50%', '60%'],
        itemStyle: {
                color: 'rgba(250, 250, 250, 0.3)',
        },
        data:[
            {value:10,name:''}
        ]
    },
    {
        name:'透明圆圈',
        type:'pie',
        radius: [10,35],
        center : ['50%', '60%'],
        itemStyle: {
                color: 'rgba(250, 250, 250, 0.3)',
        },
        data:[
            {value:10,name:''}
        ]
    },
]
};

export default class Rose extends Component {
    render(){
        return(               
            <View style={styles.container}>
                  <ECharts option={option}></ECharts>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
	  height: 570,
      justifyContent: 'center',
      paddingTop: 0,
      backgroundColor: '#ecf0f1',
      
    },
    textback:{
        left:'10%',
        top:'80%',
        backgroundColor:'red',       
    },   
  });
    