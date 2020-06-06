import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ShowNumBlock, ShowNumber, NumberTitle } from './NumberDisplay';
import { WhiteSpace, Provider } from '@ant-design/react-native';
import ChinaMap from "./ChinaMap";
import ChinaDataTable from "./ChinaDataTable";
import axios from 'axios'
import {server_config} from '../config'
import time from './tools/time'

var _order='累计确诊';

export default class TotalDisplayChina extends Component {
  constructor(props){
    super(props);
    this.state={
      order:_order,
      'CNtotalDiagnosis':0,
      'CNextanceDiagnosis':0,
      'CNincreaseDiagnosis':0,
      'CNextanceSuspected':0,
      'CNtotalCure':0,
      'CNtotalDeath':0,
      'CNtotalDiagnosis_c':0,
      'CNextanceDiagnosis_c':0,
      'CNincreaseDiagnosis_c':0,
      'CNextanceSuspected_c':0,
      'CNtotalCure_c':0,
      'CNtotalDeath_c':0,
    } 

    var yesterday = time.formatDate(new Date(new Date().getTime() - 24*6*60*60*1000), 'yyyy-MM-dd');
    var today = time.formatDate(new Date(new Date().getTime() - 6*60*60*1000), 'yyyy-MM-dd');
    
      axios
      .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':`${server_config.GetChina.sum}`,'Data':today})
      .then((res)=>{
        if(res.data.result=='Y'){
          result = res.data.message
          console.log('已更新今日国内总计')
          console.log(res.data.message)
          this.setState({
            'CNtotalDiagnosis':result.total.confirmedNumber,
            'CNextanceDiagnosis':result.extance.confirmedNumber,
            'CNincreaseDiagnosis':result.newAddtion.confirmedNumber,
            'CNextanceSuspected':result.extance.suspectedNumber,
            'CNtotalCure':result.total.cureNumber,
            'CNtotalDeath':result.total.deathToll,
            }) 
        }
      })

      axios
      .post(`${server_config.backend_url}/${server_config.GetChina.url}`,{'Return':`${server_config.GetChina.compare}`})
      .then((res)=>{
        if(res.data.result=='Y'){
        result = res.data.message
        console.log('已更新昨日国内总计')
        console.log(res.data.message)
          this.setState({
          'CNtotalDiagnosis_c':result.total.confirmedNumber,
          'CNextanceDiagnosis_c':result.extance.confirmedNumber,
          'CNincreaseDiagnosis_c':result.newAddtion.confirmedNumber,
          'CNextanceSuspected_c':result.extance.suspectedNumber,
          'CNtotalCure_c':result.total.cureNumber,
          'CNtotalDeath_c':result.total.deathToll,
          })
      }
    })

  }

  render(){

    var homeData=new Array(6);
    
    homeData[0]=new ShowNumBlock(this.state.CNtotalDiagnosis,'累计确诊',this.state.CNtotalDiagnosis_c,'red'); 
    homeData[1]=new ShowNumBlock(this.state.CNextanceDiagnosis,'现有确诊',this.state.CNextanceDiagnosis_c,'orange'); 
    homeData[2]=new ShowNumBlock(this.state.CNincreaseDiagnosis,'新增确诊',this.state.CNincreaseDiagnosis_c,'blue'); 
    homeData[3]=new ShowNumBlock(this.state.CNextanceSuspected,'疑似病例',this.state.CNextanceSuspected_c,'#B2C200'); 
    homeData[4]=new ShowNumBlock(this.state.CNtotalCure,'治愈人数',this.state.CNtotalCure_c,'green'); 
    homeData[5]=new ShowNumBlock(this.state.CNtotalDeath,'死亡人数',this.state.CNtotalDeath_c,'black');

    return (
        <Provider>
          <ScrollView style={{ flex: 1 }}>
            <NumberTitle />
            {ShowNumber(homeData)}
                <WhiteSpace size="lg" />
                <View style={{ height: 550 }}>
                    <ChinaMap />
                </View>
            <ChinaDataTable />
          </ScrollView>
        </Provider>
    );
  }
}
