import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ShowNumBlock, ShowNumber, NumberTitle } from './NumberDisplay';
import { WhiteSpace } from '@ant-design/react-native';
import ChinaMap from "./ChinaMap";
import ChinaDataTable from "./ChinaDataTable";

var _order='累计确诊';

export default class TotalDisplayChina extends Component {
  constructor(props){
    super(props);
    this.state={order:_order}
  }

  render(){
    var homeData=new Array(6);

    homeData[0]=new ShowNumBlock(80735,'累计确诊',145,'red'); 
    homeData[1]=new ShowNumBlock(23732,'现有确诊',-1569,'orange'); 
    homeData[2]=new ShowNumBlock(54,'境外输入确诊',16,'blue'); 
    homeData[3]=new ShowNumBlock(482,'疑似病例',102,'#B2C200'); 
    homeData[4]=new ShowNumBlock(53958,'治愈人数',1684,'green'); 
    homeData[5]=new ShowNumBlock(3045,'死亡人数',30,'black');

    return (
      <ScrollView style={{ flex: 1 }}>
        <NumberTitle />
        {ShowNumber(homeData)}
            <WhiteSpace size="lg" />
            <View style={{ height: 550 }}>
                <ChinaMap />
            </View>
            <ChinaDataTable />
      </ScrollView>
    );
  }
}
