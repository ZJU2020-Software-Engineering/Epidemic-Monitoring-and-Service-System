import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Flex from '@ant-design/react-native/lib/flex';
import WingBlank from '@ant-design/react-native/lib/wing-blank';
import Tag from '@ant-design/react-native/lib/tag';
import moment from 'moment';
import 'moment/locale/zh-cn';

//Class for displaying the number with colors.  
export class ShowNumBlock{
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
      <Text style={{fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    color : this.color}}>
                      {this.number}
      </Text>
      <Tag>{this.title}</Tag>
      <Flex> 
        <Text style={{color : '#828282'}}>昨日</Text>
        <Text style={{color : this.color}}>{this.sign()}{this.increasement}</Text>
        {/* <Text style={{color : this.color}}>{this.increasement}</Text> */}
      </Flex>
    </View>
    );
  }

  setColor(color){
    this.color=color;
  }

}
//A function for getting the date and day in correct format. 
function getDateAndDay(){
  moment.locale('zh-cn');
  return moment().format('ll');
}

export function ShowNumber(numbers) {
  return (
      <View>
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
export function ShowNumber_world(numbers) {
  return (
      <View>
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
            {/* <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              {numbers[5].render()}
            </Flex.Item> */}
          </Flex>
        </WingBlank>
      </View>
  );
}

export function NumberTitle() {
  const [toggle, setToggle] = useState(false);
  return(
      <View style={[{ margin: 10, justifyContent: 'space-between', flexDirection: 'row' }]} borderTopWidth={20} borderTopColor='transparent'>
        <Text style={{ textAlign: 'left', alignSelf: 'stretch', paddingLeft: 5 }}>截至{getDateAndDay()}</Text>
        <Text onPress={() => setToggle(!toggle)} style={{ textAlign: 'right', alignSelf: 'stretch', paddingRight: 5, color: 'grey' }}>
          { toggle ? "丁香医生实时疫情网站" : "数据来源" }
        </Text>
      </View>
  );
}