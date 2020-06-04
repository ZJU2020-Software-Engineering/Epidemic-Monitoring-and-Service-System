import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ShowNumBlock, ShowNumber, NumberTitle } from './NumberDisplay';
import { WhiteSpace } from '@ant-design/react-native';
import WorldMap from "../module/chinaMap/worldMap";
import WorldDataTable from "./WorldDataTable";
import axios from 'axios'
import {server_config} from '../config'
import time from './tools/time'

var _order='累计确诊';

export default class TotalDisplayWorld extends Component {
  constructor(props){
    super(props);
    this.state={
      order:_order,
      'totalDiagnosis':0,
      'extanceDiagnosis':0,
      'increaseDiagnosis':0,
      'extanceSuspected':0,
      'totalCure':0,
      'totalDeath':0,
      'totalDiagnosis_c':0,
      'extanceDiagnosis_c':0,
      'increaseDiagnosis_c':0,
      'extanceSuspected_c':0,
      'totalCure_c':0,
      'totalDeath_c':0,
      'update':true
    }

    var yesterday = time.formatDate(new Date(new Date().getTime() - 24*6*60*60*1000), 'yyyy-MM-dd');
    var today = time.formatDate(new Date(new Date().getTime() - 6*60*60*1000), 'yyyy-MM-dd');
    axios
    .post(`${server_config.backend_url}/${server_config.GetWorld.url}`,{'Return':`${server_config.GetWorld.sum}`,'Data':today})
    .then((res)=>{
      if(res.data.result=='Y'){
        result = res.data.message 
        console.log('已更新国外今日总计')
        //console.log(res.data.message)
        this.setState({
          'totalDiagnosis':result.total.confirmedNumber,
          'extanceDiagnosis':result.extance.confirmedNumber,
          'increaseDiagnosis':result.newAddtion.confirmedNumber,
          'extanceSuspected':result.extance.suspectedNumber,
          'totalCure':result.total.cureNumber,
          'totalDeath':result.total.deathToll, 
          })
      }
    })
    axios
    .post(`${server_config.backend_url}/${server_config.GetWorld.url}`,{'Return':`${server_config.GetWorld.compare}`})
    .then((res)=>{
      console.log("wuliwala")
      console.log(res.data)
      if(res.data.result=='Y'){
        console.log('已更新国外昨日总计')
        console.log(res.data.message)
        result = res.data.message
        this.setState({
          'totalDiagnosis_c':result.total.confirmedNumber,
          'extanceDiagnosis_c':result.extance.confirmedNumber,
          'increaseDiagnosis_c':result.newAddtion.confirmedNumber,
          'extanceSuspected_c':result.extance.suspectedNumber,
          'totalCure_c':result.total.cureNumber,
          'totalDeath_c':result.total.deathToll,
          })
      }
    })
  } 
  render(){
    var aboardData=new Array(6);  
    //console.log(this.state)
    aboardData[0]=new ShowNumBlock(this.state.totalDiagnosis,'累计确诊',this.state.totalDiagnosis_c,'red'); 
    aboardData[1]=new ShowNumBlock(this.state.extanceDiagnosis,'现有确诊',this.state.extanceDiagnosis_c,'orange'); 
    aboardData[2]=new ShowNumBlock(this.state.increaseDiagnosis,'新增确诊',this.state.increaseDiagnosis_c,'blue'); 
    aboardData[3]=new ShowNumBlock(this.state.extanceSuspected,'疑似病例',this.state.extanceSuspected_c,'#B2C200'); 
    aboardData[4]=new ShowNumBlock(this.state.totalCure,'治愈人数',this.state.totalCure_c,'green'); 
    aboardData[5]=new ShowNumBlock(this.state.totalDeath,'死亡人数',this.state.totalDeath_c,'black');

    return (
      <ScrollView style={{ flex: 1 }}>
        <NumberTitle />
        {ShowNumber(aboardData)}
            <WhiteSpace size="lg" />
            <View style={{ height: 550 }}>
                <WorldMap />
            </View>
            <WorldDataTable />
      </ScrollView>
    );
  }
}