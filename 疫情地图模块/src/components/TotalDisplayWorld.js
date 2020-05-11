import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ShowNumBlock, ShowNumber, NumberTitle } from './NumberDisplay';
import { WhiteSpace } from '@ant-design/react-native';
import WorldMap from "../module/chinaMap/worldMap";
import WorldDataTable from "./WorldDataTable";

var _order='累计确诊';

export default class TotalDisplayWorld extends Component {
  constructor(props){
    super(props);
    this.state={order:_order}
  }

  render(){
    var aboardData=new Array(6);

    aboardData[0]=new ShowNumBlock(1008942,'累计确诊',13313,'red'); 
    aboardData[1]=new ShowNumBlock(991035,'现有确诊',1569,'orange'); 
    aboardData[2]=new ShowNumBlock(11235,'今日新增确诊',3554,'grey'); 
    aboardData[3]=new ShowNumBlock(220012,'疑似病例',-1048,'#B2C200'); 
    aboardData[4]=new ShowNumBlock(53958,'治愈人数',1684,'green'); 
    aboardData[5]=new ShowNumBlock(108715,'死亡人数',7821,'black');

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