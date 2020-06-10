import React from 'react';
import { View, Text} from 'react-native';
import { Flex} from '@ant-design/react-native';
import { Icon } from 'react-native-elements';
import { Card } from 'react-native-paper';
import {GetUserInfo} from './DatabaseClient';
// import Cache from './Cache';
import Cache from '../screen/Cache';

export class ShowBtnBlock{
    constructor(title,name){
      this.title=title;
      this.name=name;
    }
    render(){
      return (
      <View alignItems='center' style={{textAlign : 'center'}}>
            <Icon 
                name={this.name} 
                color='#2096F3'
                size= '35' />
            <Text style={{fontSize:15, color:'#828282'}}>{this.title}</Text>
      </View>
      );
    }
  
}

const btns=new Array(6);
btns[0] = new ShowBtnBlock('配送服务','shopping-cart',);
btns[1] = new ShowBtnBlock('志愿认证', 'perm-contact-calendar');
btns[2] = new ShowBtnBlock('志愿报名', 'assignment');

export default class EntryDisplay extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: Cache.get('user name'),
        }
        console.log(this.state.username);
    }
    CachePrepare(){
        Cache.set('account','3170104174');
        Cache.set('user name','蒋皓俊');
        Cache.set('address','上海');
        Cache.set('merchant id', '1');
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
                Cache.set('merchant id', '1');
                console.log(result[0]);
                
            }
        )
    }
    
    render(){
        // this.CachePrepare();
        return(
            <Card style={{ marginTop:60, padding:10,borderRadius: 15, elevation:3}}>
            <Flex>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{console.log("navigating");this.props.navigation.navigate("Shops");}}>
                    {btns[0].render()}
                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{this.props.navigation.navigate("ApplyForm", {username: this.state.username})}}>
                    {btns[1].render()}
                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{this.props.navigation.navigate("Back")}}>
                    {btns[2].render()}
                </Flex.Item>   
            </Flex>
            </Card>
        );
    }
}