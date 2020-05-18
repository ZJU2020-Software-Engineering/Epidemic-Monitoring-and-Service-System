import * as React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button, List, WhiteSpace, WingBlank} from '@ant-design/react-native';

//活动信息
export var Activity=[{
	id:0,
	title:"食堂指引",
	time: "2020-05-17 10:00:00",
	address:"玉泉食堂",
	type:"执勤",
	state:"未开始"
},{
	id:1,
	title:"车站指引",
	time: "2020-05-15 16:00:00",
	address:"杭州东站",
	type:"执勤",
	state:"已完成"
},{
	id:2,
	title:"自习室志愿者",
	time: "2020-05-14 20:00:00",
	address:"自习室",
	type:"执勤",
	state:"已完成"
},{
	id:3,
	title:"学校大门站岗",
	time: "2020-05-15 8:00:00",
	address:"紫金港",
	type:"站岗",
	state:"已完成"
},{
	id:4,
	title:"车站指引",
	time: "2020-05-18 17:00:00",
	address:"杭州东站",
	type:"执勤",
	state:"未开始"
},{
	id:5,
	title:"自习室志愿者",
	time:"2020-05-19 20:00:00",
	address:"自习室",
	type:"执勤",
	state:"未开始"
}];


export default function DetailScreen({route, navigation}) {
  const { info} = route.params;
  
  return (
         <WingBlank>
             <WhiteSpace />
             <List>
                 <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{info.title}</Text>} multipleLine>
                     志愿活动
                 </List.Item>
                 <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{info.time}</Text>} multipleLine>
                     时间
                 </List.Item>
                 <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{info.address}</Text>} multipleLine>
                     地点
                 </List.Item>
                 <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{info.type}</Text>} multipleLine>
                     类型
                 </List.Item> 
             </List>
         </WingBlank>
     );
}
/*
 
*/