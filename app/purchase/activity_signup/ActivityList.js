import React ,{Component}from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Button, List, WhiteSpace, WingBlank, Flex} from '@ant-design/react-native';
import { GetActivityList,SignUpActivity,CheckActivityPerson,ChangeActivityListPerson} from '../DatabaseClient';


// var activities = [
//     {
//       title: "食堂指引",
//       time: "2020.5.30  10:30-13:00",
//       address: "玉泉麦斯威二楼",
//       type: "食堂"
//     },
//     {
//       title: "学园门口站岗",
//       time: "2020.5.10  13:30-15:00",
//       address: "紫金港东二教学楼",
//       type: "站岗"
//     },
// ];

// var activities=[
//     {id:"aa",title:"aa", time:"aa", address:"aa", type:"aa"},
// ]

class SignUpBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                    hint: '报名',
                    isDisabled: false,
                    isMounted: false,
                    // v_id: props.navigation.state.params.v_id, //////////////////  需要父页面传递的志愿者id
                    v_id:"03",
                    
                    
                    
                   };        
        this.change = this.change.bind(this);
    }

    componentDidMount(){

        this.setState({isMounted: true});
        CheckActivityPerson(this.state.v_id,this.props.id).then((response)=>{this.successShow_1(response)});
        
        
    }
    successShow_1(response){
        if(response.length>0){
            this.setState((state) => ({
                hint: '已报名',
                isDisabled: true
            }));
        }
    }

    

    componentWillUnmount(){
        this.state.isMounted=false;
    }
    change(id){
        if (this.state.isMounted){
            this.setState((state) => ({
                hint: '已报名',
                isDisabled: true
            }));
        }

        SignUpActivity(this.props.id);                     //////////// 更新该活动的全部报名人数
        ChangeActivityListPerson(this.state.v_id,this.props.id,2);     //////////// 更新个人报名活动列表



    }
    



    render(){
        return (
            <Button 
                disabled={this.state.isDisabled}
                onPress={() => {
                    Alert.alert(
                        "是否确认报名志愿活动："+ this.props.title +"?",
                        "",
                        [
                            {text: '确认', onPress: () => {
                                    console.log('OK Pressed');
                                    this.change(this.props.id);
                            }},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                    )
             }}>
                {this.state.hint}
            </Button>
        );
    }
}

export default class ActivityList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          activities: []
        };
      }
    componentDidMount() {
    GetActivityList().then((response)=>{this.successShow(response)});
    }

    successShow(response) {
    
        let acts = [];
    
        var i;
        i = 0;
        

        for(i = 0;i<response.length;i++){
            let single_act={id:"bb",title:"bb", time:"bb", address:"bb", type:"bb"};
            single_act.id = response[i].id;
            single_act.title = response[i].name;
            single_act.address = response[i].location;
            single_act.type = response[i].type;
            single_act.time = response[i].time_;
           
            
            acts.push(single_act);
            
        }

        console.log(acts);
        // activities=acts;
        this.setState({
            activities: acts
        })
    
    }
    render(){
    return (

        <View>
            <WingBlank>
            <WhiteSpace />
            <WhiteSpace />
            <ScrollView>
                <List>
                    {this.state.activities.map((activity) => {
                        return(
                            <List.Item
                                key={activity} 
                                extra={
                                    <SignUpBtn title={activity.title} 
                                               id={activity.id}
                                               time={activity.time}
                                               location={activity.address}
                                               type={activity.type}/>
                                }
                                onPress={
                                    () => {
                                        this.props.navigation.navigate('ActivityDetail',{
                                            title: activity.title,
                                            time: activity.time,
                                            location: activity.address,
                                            type: activity.type
                                        });
                                    }
                                }
                            >
                                
                                <Flex>

                                    <Flex.Item>
                                        <Text style={{fontSize: 18}}>
                                            {activity.title}
                                        </Text>
                                        <Text style={{fontSize: 15, color: 'grey'}}>
                                            地点：{activity.address}
                                        </Text>
                                        <Text style={{fontSize: 15, color: 'grey'}}>
                                            时间：{activity.time}
                                        </Text>
                                       
                                    </Flex.Item>
                                    
                        
                                   

                                </Flex>
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