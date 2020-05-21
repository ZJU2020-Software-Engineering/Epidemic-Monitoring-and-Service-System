import * as React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button, List, WhiteSpace, WingBlank} from '@ant-design/react-native';

 


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