import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Alert} from 'react-native';
import { Button, List, WhiteSpace, WingBlank,Flex } from '@ant-design/react-native';
import { Activity } from './DetailScreen';

//已报名活动列表
var signedList=[0,4,5];
var signedActivity=[];
for(var i=0;i<signedList.length;i++){
	signedActivity.push(Activity[signedList[i]]);
}

//yyyy-MM-dd hh:mm:ss
function DateFromString(dateString) { 
   if (dateString) { 
      var arr1 = dateString.split(" "); 
      var sdate = arr1[0].split('-');
	  var time=arr1[1].split(':');
      var date = new Date(sdate[0], sdate[1]-1, sdate[2],time[0],time[1],time[2]); 
      return date;
   } 
}


function checkTime(signedActivity){
	var list=[];
	var now=new Date();
	for(var i=0;i<signedActivity.length;i++){
		let time=DateFromString(signedActivity[i].time);
		if(time-now<0){
			signedActivity[i].state="已开始";
		}
		//2h之内
		else if(time-now<1000*60*60*2){
			signedActivity[i].state="即将开始";
			list.push(i);
		}
	}
	
	if(list.length==0) return;
	
	//弹窗通知
	msg="";
	for(var i=0;i<list.length;i++){
		msg+=(signedActivity[list[i]].title+'活动\n');
	}
	msg+="即将开始!";
	Alert.alert(
	  '活动通知',
	  msg
	)
}

var msg="";
export default class SignedScreen extends React.Component{
	componentDidMount() {  
	   this.timer = setTimeout(checkTime(signedActivity), 1000*60*5);  
	}  
	
	componentWillUnmount() {  
	    this.timer && clearTimeout(this.timer);  
	  }  
	
	render(){
		return (
		  <View>
		      <WingBlank>
					<Text style={{marginTop:60,fontSize: 15}}> 当前已报名{signedList.length}个志愿活动</Text>
					<WhiteSpace size='xl'/>
					<ScrollView> 
					   <List>
					        {signedActivity.map((activity) => {
					            return(
		                          <List.Item
		                                 key={activity} 
					                       onPress={
					                                () => {this.props.navigation.navigate('Detail',{info: activity});}			   
					                       }
										   extra={
										        <View>
										                {activity.state}   
										                <List.Item.Brief style={{ textAlign: 'right' }}>{activity.time}</List.Item.Brief>
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
}
//export default function SignedScreen({navigation}) {}


/*
Alert.alert(
  'Alert Title',
  'My Alert Msg',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
*/