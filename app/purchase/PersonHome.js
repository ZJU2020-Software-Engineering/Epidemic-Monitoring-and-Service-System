import React from 'react';
import { ScrollView,StatusBar,Text,View} from 'react-native'
import { Card } from 'react-native-paper';
import { WhiteSpace,Flex } from '@ant-design/react-native';
import NumberDisplay from './NumberDisplay';
import TrashDisplay from './TrashDisplay';
import EntryDisplay from './EntryDisplay';
import { Octicons } from '@expo/vector-icons';
import {GetUserInfo} from './DatabaseClient';
import Cache from '../screen/Cache';

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: showTime()};

    }
    componentDidMount(){
        setInterval(() => {
            this.setState(previousState => {
                return { time: showTime()};
            });
        }, 1000);
    }
    render(){

        return (
            <View>
                <Text style={{fontSize:16}}>{this.state.time}</Text>
                <Text style={{fontSize:12}} >数据来源：浙江大学后勤集团</Text>
            </View>
          
        )
    }
}
function showTime() {
    var nowtime = new Date();
    var year = nowtime.getFullYear();//年
    var month = nowtime.getMonth() + 1;//月
    var day = nowtime.getDate();//日
    var hour = nowtime.getHours();//时
    var minutes = nowtime.getMinutes(); //分
    var seconds = nowtime.getSeconds(); //秒
    var word = "当前时间：" + p(year) + "年" + p(month) + "月" + p(day) + "日 " + p(hour) + ":" + p(minutes) + ":" + p(seconds);
    return (word);
}

//月日时分秒小于10补0
function p(s) {
    return s < 10 ? '0' + s : s;
}

export default class PersonHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fresh:false,
        }
    }
    componentDidMount(){
        console.log(Cache.get('account'));
        GetUserInfo(Cache.get('account')).then(
            (result)=>{
                
                Cache.set('user name','匿名');
                Cache.set('address','未知');
                Cache.set('merchant id', '1');
                Cache.set('user name',result[0].name);
                Cache.set('address',result[0].address);
                console.log(result[0]);
                
            }
        );
        this.setState({fresh:true,});
        // this.render();
    }
    
    
    render(){
        console.log(this.props.navigation);
        return (
            <ScrollView style={{ flex: 1, marginTop: StatusBar.currentHeight, paddingLeft:10, paddingRight:10, backgroundColor:'rgba(0,0,0,0)'}}>
                <Card style={{ marginTop:20, padding:10,borderRadius: 15, elevation:3}}>
                <Flex>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{console.log(this.props.navigation);this.props.navigation.navigate("Shops");}}>
                    <View  style={{textAlign : 'left', alignItems: 'flex-start'}}>
                        <WhiteSpace />
                        <Text>用户名：{Cache.get("user name")}</Text>
                        <WhiteSpace />
                        <Text>账号：{Cache.get("account")}</Text> 
                    </View>
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{console.log(this.props.navigation);this.props.navigation.navigate("Shops");}}>
                        <View alignItems='center' style={{textAlign : 'center'}}>
                            <Octicons name="person" size={35} color="#2096F3" 
                                onPress={()=>{
                                    this.props.navigation.navigate('PersonInfo');
                                }} 
                            />
                        </View>
                    </Flex.Item>
                    
                </Flex>
                </Card>

                {/* <WhiteSpace/>
                <WhiteSpace/> */}
               
                
                
                <EntryDisplay navigation={this.props.navigation}/>
               
                <Card style={{ marginTop:20, borderRadius: 15, elevation:3}}>
                    <Card.Title title={'浙江大学食堂就餐拥挤指数'}/>
                    <Card.Content>
                        <Time/>
                        <WhiteSpace/>
                        <NumberDisplay />
                    </Card.Content>
                </Card>
                
                <WhiteSpace/>
                
                <Card style={{ marginTop:20, borderRadius: 15, elevation:3}}>
                    <Card.Content>
                        <TrashDisplay />
                    </Card.Content>
                </Card>

            </ScrollView>
        );
    }
}
