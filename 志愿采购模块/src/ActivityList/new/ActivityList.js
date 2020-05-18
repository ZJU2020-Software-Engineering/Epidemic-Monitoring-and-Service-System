import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Alert} from 'react-native';
import { Button, List, WhiteSpace, WingBlank,Flex } from '@ant-design/react-native';
import { Activity } from './DetailScreen';


//"yyyy-MM-dd hh:mm:ss"  -> Date()
function DateFromString(dateString) { 
   if (dateString) { 
      var arr1 = dateString.split(" "); 
      var sdate = arr1[0].split('-');
	  var time=arr1[1].split(':');
      var date = new Date(sdate[0], sdate[1]-1, sdate[2],time[0],time[1],time[2]); 
      return date;
   } 
}


function checkTime(Activity){
	var list=[];
	var now=new Date();
	
	for(var i=0;i<Activity.length;i++){
		if(Activity[i].state=="已完成") continue;
		
		let time=DateFromString(Activity[i].time);
		if(time-now<0){
			Activity[i].state="已开始";
		}
		//2h之内
		else if(time-now<1000*60*60*2){
			Activity[i].state="即将开始";
			list.push(i);
		}
	}
	
	if(list.length==0) return;
	
	//弹窗通知
	msg="";
	for(var i=0;i<list.length;i++){
		msg+=(Activity[list[i]].title+'活动\n');
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
	   this.timer = setTimeout(checkTime(Activity), 1000*60*5);  
	}  
	
	componentWillUnmount() {  
	    this.timer && clearTimeout(this.timer);  
	  }  
	
	render(){
		return (
		  <View>
		      <WingBlank>
					<Text style={{marginTop:20,fontSize: 15}}> 当前已参与{Activity.length}个志愿活动</Text>
					<WhiteSpace size='xl'/>
					<ScrollView> 
					   <List>
					        {Activity.map((activity) => {
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
