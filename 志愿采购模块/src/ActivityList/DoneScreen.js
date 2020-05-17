import * as React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button, List, WhiteSpace, WingBlank,Table, Tag, Space } from '@ant-design/react-native';
import { Activity } from './DetailScreen';

//参与志愿活动列表
var DoneList=[1,2,3];
var DoneActivity=[];
for(var i=0;i<DoneList.length;i++){
	DoneActivity.push(Activity[DoneList[i]]);
}


export default function DoneScreen({ navigation }) {
  return (
    <View>
        <WingBlank>
  			<Text style={{marginTop:60,fontSize: 15}}> 当前已参与{DoneList.length}个志愿活动</Text>
  	        <WhiteSpace size='xl'/>
  			<ScrollView> 
  			   <List>
  			        {DoneActivity.map((activity) => {
  			            return(
                            <List.Item
                                   key={activity} 
  			                       onPress={
  			                                () => {navigation.navigate('Detail',{info: activity});}			   
  			                       }
  								   extra={
  								        <View>
  								                活动时间 
  								                <List.Item.Brief style={{textAlign: 'right'}}>{activity.time}</List.Item.Brief>
  								        </View>
  								   }
  								   multipleLine
  			                >
  			                {activity.title}    	   
  			                </List.Item>
  			            );
  			         })}
  			    </List>
          	</ScrollView>   
  	   </WingBlank>
    </View>
  );
}