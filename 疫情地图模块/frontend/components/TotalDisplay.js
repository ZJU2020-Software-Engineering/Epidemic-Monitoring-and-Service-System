import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NumberDisplay, ShowNumBlock } from './NumberDisplay';
import {Row, Rows, Table} from 'react-native-table-component';
import { Tabs, Card, WhiteSpace, Button } from '@ant-design/react-native';

const listExample=[
  {
    name:"美国",
    新增确诊:27387,
    累计确诊:557590,
    现存确诊:492746,
    死亡:22109,
    治愈:42735
  },
  {
    name:"西班牙",
    新增确诊:3477,
    累计确诊:169496,
    现存确诊:87280,
    死亡:17489,
    治愈:64727
  },
  {
    name:"意大利",
    新增确诊:4092,
    累计确诊:156363,
    现存确诊:102253,
    死亡:19899,
    治愈:34211
  },
  {
    name:"法国",
    新增确诊:2942,
    累计确诊:133672,
    现存确诊:91791,
    死亡:14412,
    治愈:27469
  }
]

var _order='累计确诊';

export default class TotalDisplay extends Component {
  constructor(props){
    super(props);
    this.state={order:_order}
  }

  sortByAttr(list, attr){
    return list.sort((a,b)=>{return b[attr]-a[attr]});
  }

  detailList(list){
    var resultOption=new Array();
    list.forEach(element => {
      resultOption.push([element.name,element.新增确诊,element.累计确诊,element.现存确诊,element.死亡,element.治愈])
    });
    var head=[<Text  style={styles.tableHead}>地区</Text>,
              <Text 
                onPress={()=>{
                  this.setState({order:'新增确诊'});
                  }
                } 
                style={styles.tableHead}>
                  新增确诊
              </Text>,
              <Text 
                onPress={()=>{
                  this.setState({order:'累计确诊'});
                  }
                } 
                style={styles.tableHead}>
                  累计确诊
              </Text>,
              <Text 
                onPress={()=>{
                  this.setState({order:'现存确诊'});
                  }
                } 
                style={styles.tableHead}>
                  现存确诊
              </Text>,
              <Text 
                onPress={()=>{
                  this.setState({order:'死亡'});
                  }
                } 
                style={styles.tableHead}>
                  死亡
              </Text>,
              <Text 
                onPress={()=>{
                  this.setState({order:'治愈'});
                  }
                } 
                style={styles.tableHead}>
                  治愈
              </Text>
            ];
    return (
      <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}} style={styles.list}>
        <Row data={head} style={styles.head} textStyle={styles.text}/>
        <Rows data={resultOption} textStyle={styles.text} />
      </Table>
    )
  }

  render(){
    var homeData=new Array(6);
    var aboardData=new Array(6);
    const tabs=[
      {title: '国内疫情'},
      {title: '国际疫情'},
    ];
    homeData[0]=new ShowNumBlock(80735,'累计确诊',145,'red'); 
    homeData[1]=new ShowNumBlock(23732,'现有确诊',-1569,'orange'); 
    homeData[2]=new ShowNumBlock(54,'境外输入确诊',16,'blue'); 
    homeData[3]=new ShowNumBlock(482,'疑似病例',102,'#B2C200'); 
    homeData[4]=new ShowNumBlock(53958,'治愈人数',1684,'green'); 
    homeData[5]=new ShowNumBlock(3045,'死亡人数',30,'black');

    aboardData[0]=new ShowNumBlock(1008942,'累计确诊',13313,'red'); 
    aboardData[1]=new ShowNumBlock(991035,'现有确诊',1569,'orange'); 
    aboardData[2]=new ShowNumBlock(11235,'今日新增确诊',3554,'grey'); 
    aboardData[3]=new ShowNumBlock(220012,'疑似病例',-1048,'#B2C200'); 
    aboardData[4]=new ShowNumBlock(53958,'治愈人数',1684,'green'); 
    aboardData[5]=new ShowNumBlock(108715,'死亡人数',7821,'black');
    
    var tip='这是一行注释';
    var homeDisplay=new NumberDisplay(homeData);
    var aboardDisplay=new NumberDisplay(aboardData);
    return (
      <View style={{ flex: 1 }}>
        {homeDisplay.showTitle()}
        <Tabs tabs={tabs} tabBarBackgroundColor='transparent' tabBarInactiveTextColor='grey' >
          <View>
            <Card full>
              <Card.Body>
              {homeDisplay.showNumber()}
              </Card.Body>
              <Card.Footer content={tip}/>
            </Card>
            <WhiteSpace size="lg" />
            <WhiteSpace size="lg" />
            <View style={styles.listPos}>
              {this.detailList(this.sortByAttr(listExample,this.state.order))}
            </View>
          </View>
          <View>
            <Card full>
              <Card.Body>
              {aboardDisplay.showNumber()}
              </Card.Body>
              <Card.Footer content={tip}/>
            </Card>
            <WhiteSpace size="lg" />
            <View style={styles.listPos}>
              {this.detailList(this.sortByAttr(listExample,this.state.order))}
            </View>
          </View>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab:{
    backgroundColor: 'blue'
  },
  head: {
      height: 40,
      backgroundColor: '#f1f8ff'
  },
  text: {
      margin: 10,
      fontSize: 10,
      textAlign: 'center'
  },
  listPos:{
    alignItems: 'center'
  },
  list: {
    width:400
  },
  tableHead:{
    fontSize:12,
    textAlign:'center'
  }
});

