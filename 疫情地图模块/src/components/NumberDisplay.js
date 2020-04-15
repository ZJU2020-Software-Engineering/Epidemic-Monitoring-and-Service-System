import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Flex from '@ant-design/react-native/lib/flex';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Tag from '@ant-design/react-native/lib/tag';

//Class for displaying the number with colors.  
class ShowNumBlock{
  constructor(number,title,increasement,color){
    this.number=number;
    this.title=title;
    this.increasement=increasement;
    this.color=color;
  }
  sign(){
    return this.increasement>0?'+':'';
  }
  render(){
    return (
    <View alignItems='center' style={{textAlign : 'center'}}>
      <Text style={{fontSize: 30,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    color : this.color}}>
                      {this.number}
      </Text>
      <Tag>{this.title}</Tag>
      <Flex> 
        <Text style={{color : '#828282'}}>昨日</Text>
        <Text style={{color : this.color}}>{this.sign()}{this.increasement}</Text>
      </Flex>
    </View>
    );
  }

  setNumber(number,increasement){
    this.number=number;
    this.increasement=increasement;
  }

  setColor(color){
    this.color=color;
  }

}

const numbers=new Array(6);
numbers[0]=new ShowNumBlock(80735,'累计确诊',145,'red'); 
numbers[1]=new ShowNumBlock(23732,'现有确诊',-1569,'orange'); 
numbers[2]=new ShowNumBlock(54,'境外输入确诊',16,'blue'); 
numbers[3]=new ShowNumBlock(482,'疑似病例',102,'#B2C200'); 
numbers[4]=new ShowNumBlock(53958,'治愈人数',1684,'green'); 
numbers[5]=new ShowNumBlock(3045,'死亡人数',30,'black'); 

//A function for getting the date and day in correct format. 
function getDateAndDay(){
  var dayChinese="错";
  var date=new Date();
  switch (new Date().getDay()) {
    case 1:
      dayChinese="一";
      break;
    case 2:
      dayChinese="二";
      break;
    case 3:
      dayChinese="三";
      break;
    case 4:
      dayChinese="四";
      break;
    case 5:
      dayChinese="五";
      break;
    case 6:
      dayChinese="六";
      break;
    case 7:
      dayChinese="日";
      break;
    default:
      dayChinese="错";
      break;
  }
  return (date.toLocaleDateString().split("/")[0]+"年"+date.toLocaleDateString().split("/")[1]+"月"+
          date.toLocaleDateString().split("/")[2]+"日"+"  星期"+dayChinese);
}

export default class NumberDisplay extends Component {
  render() {
    return (
      <View>
        <View style={[{ margin: 10 }]} alignItems='center' borderTopColor='transparent'>
          <Text style={styles.textStyle1}> 疫情地图</Text>
          <Text>{getDateAndDay()}</Text>
        </View>
        
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[0].render()}  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[1].render()}  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[2].render()}  
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[3].render()}  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[4].render()}  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[5].render()}  
            </Flex.Item>
          </Flex>
        </WingBlank>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle1: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '900'
  },
  textStyleBigNumber: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400'
  },
  textStyle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '300'
  },
  
});
