import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,Alert} from 'react-native';
import { Button, List, WhiteSpace, WingBlank,Flex } from '@ant-design/react-native';
import { GetActivityPerson,GetActivityDetailInfo} from '../DatabaseClient';


//活动信息
// var Activity=[{
// 	id:0,
// 	title:"食堂指引",
// 	time: "2020-05-17 10:00:00",
// 	address:"玉泉食堂",
// 	type:"执勤",
// 	state:"未开始"
// },{
// 	id:1,
// 	title:"车站指引",
// 	time: "2020-05-15 16:00:00",
// 	address:"杭州东站",
// 	type:"执勤",
// 	state:"已完成"
// },{
// 	id:2,
// 	title:"自习室志愿者",
// 	time: "2020-05-14 20:00:00",
// 	address:"自习室",
// 	type:"执勤",
// 	state:"已完成"
// }];
//"yyyy-MM-dd hh:mm:ss"  -> Date()


// var Activity=[]


function DateFromString(dateString) { 
//    if (dateString) { 
//       var arr1 = dateString.split(" "); 
//       var sdate = arr1[0].split('-');
// 	  var time=arr1[1].split(':');
//       var date = new Date(sdate[0], sdate[1]-1, sdate[2],time[0],time[1],time[2]); 
//       return date;
//    } 
}


function checkTime(Activity){
	// var list=[];
	// var now=new Date();
	
	// for(var i=0;i<Activity.length;i++){
	// 	if(Activity[i].state=="已完成") continue;
		
	// 	let time=DateFromString(Activity[i].time);
	// 	if(time-now<0){
	// 		Activity[i].state="已开始";
	// 	}
	// 	//2h之内
	// 	else if(time-now<1000*60*60*2){
	// 		Activity[i].state="即将开始";
	// 		list.push(i);
	// 	}
	// }
	
	// if(list.length==0) return;
	
	// //弹窗通知
	// msg="";
	// for(var i=0;i<list.length;i++){
	// 	msg+=(Activity[list[i]].title+'活动\n');
	// }
	// msg+="即将开始!";
	// Alert.alert(
	//   '活动通知',
	//   msg
	// )
}

var msg="";
export default class SignedScreen extends React.Component{

	constructor(props) {
        super(props);
        this.state={
                    // v_id: props.navigation.state.params.v_id, //////////////////  需要父页面传递的志愿者id
					v_id:"03",
					
					act_name:"",
					act_tim3:"",
					act_type:"",
					
					act_addr:"",
					Activity:[]
                   };        
		// this.change = this.change.bind(this);
		
    }

	componentDidMount() {  
	//    this.timer = setTimeout(checkTime(Activity), 1000*60*5);  
	   GetActivityPerson(this.state.v_id).then((response)=>{this.successShow(response)});
	}  

	

	successShow(response) {
        
		
		var i;
		i = 0;
		Activity=[];
		for(i=0;i<response.length;i++){
			
			
			GetActivityDetailInfo(response[i].va_id).then((response1)=>{
				single_act = {id:"a",title:"b",time:"a",address:"a",type:"a",state:"未开始"};
				single_act.id = response1[0].id;
				single_act.title = response1[0].name;
				single_act.time = response1[0].time_;
				single_act.address = response1[0].location;
				single_act.type = response1[0].type;
				Activity.push(single_act);
				console.log(Activity);
				this.setState({
					Activity: Activity
				})
			});
						
		}
		console.log("#######################");
        console.log(Activity);

        
	}


	
	componentWillUnmount() {  
		this.timer && clearTimeout(this.timer);  
		
	  }  
	
	render(){
		return (
		  <View>
		      <WingBlank>
					<Text style={{marginTop:20,fontSize: 15}}> 当前已参与{this.state.Activity.length}个志愿活动</Text>
					<WhiteSpace size='xl'/>
					<ScrollView> 
					   <List>
					        {this.state.Activity.map((activity) => {
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