import React from 'react';
import {View} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

const defaultHeight = 500;
const defaultWidth = 350;
const RED = '#de5e50';
const GREEN = '#6cd87e';
const YELLOW = '#eccc68';
const minTemperature = 35;
const maxTemperature = 44;
const defaultflex = 1;
const lineColor = '#bdc3c7';

export class TemperatureChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: {
                title: {
                    text: '体温变化图',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: false,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                legeng: {
                  scroll: 'scroll',
                  scrollDataIndex: 1,
                },
                xAxis: {
                    name: '日期',
                    type: 'time',
                    nameLocation: 'end',
                    nameGap: 7,
                    maxInterval: 3600*24*1000,
                },
                yAxis: {
                    name: '体温',
                    type: 'value',
                    min: props.min || minTemperature,
                    max: props.max || maxTemperature,
                    boundaryGap: [0, '30%'],
                    interval: 1,
                    splitLine: {
                        show: false
                    },
                    nameGap: 7,
                },
                visualMap: {
                    type: 'piecewise',
                    show: true,
                    top: 10,
                    right: 10,
                    dimension: 1,
                    seriesIndex: 0,
                    pieces: [
                        {min: 39, label: '>39.0', color: RED},
                        {min: 37.2, max: 39, label: '37.2-39.0', color: YELLOW},
                        {max: 37.2, label: '<37.2', color: GREEN}
                    ],
                },
                series: [{
                    type: 'line',
                    symbol: 'none',
                    lineStyle: {
                        color: lineColor,
                        width: 2
                    },
                    areaStyle: {},
                    // markLine: {
                    //     silent: true,
                    //     data: [{
                    //         yAxis: 37.2
                    //     }, {
                    //         yAxis: 39
                    //     }, ]
                    // },
                    data: props.data
                }]
            },

        }
    }
    render() {
        return (
            <View style={{
              flex: 5,
              marginRight: 10,
              marginTop:10,
              marginBottom: -20,
              //margin: 10,
              //padding: 10,
              //borderWidth: 5,
              //borderTopLeftRadius: 20,
              //borderTopRightRadius: 20,
            }}>
            <ECharts
                option = {this.state.option}
                backgroundColor='rgba(0,0,0,0.05)'
            />
            </View>
        );
    }
};
