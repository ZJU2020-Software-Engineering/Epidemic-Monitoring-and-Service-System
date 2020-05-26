import React from 'react';
import { View, Text} from 'react-native';
import { Flex} from '@ant-design/react-native';
import { Icon } from 'react-native-elements';

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
    }

    render(){
        return(
            <Flex>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{console.log("navigating");this.props.navigation.navigate("Merchant");}}>
                    {btns[0].render()}
                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{}}>
                    {btns[1].render()}
                </Flex.Item>
                <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }} onPress={()=>{}}>
                    {btns[2].render()}
                </Flex.Item>   
            </Flex>
        );
    }
}