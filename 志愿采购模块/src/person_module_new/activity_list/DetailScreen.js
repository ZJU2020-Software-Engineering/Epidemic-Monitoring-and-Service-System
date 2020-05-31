import * as React from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native';
import { Button, List, WhiteSpace, WingBlank} from '@ant-design/react-native';

 


export default class DetailScreen extends React.Component {
    constructor(props){
        super(props);
        let info = props.navigation.state.params.info;
        this.state = {
            info : info
        };
    }
    render(){
        return (
            <WingBlank>
                <WhiteSpace />
                <List>
                    <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{this.state.info.title}</Text>} multipleLine>
                        志愿活动
                    </List.Item>
                    <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{this.state.info.time}</Text>} multipleLine>
                        时间
                    </List.Item>
                    <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{this.state.info.address}</Text>} multipleLine>
                        地点
                    </List.Item>
                    <List.Item wrap extra={<Text style={{fontSize:17, color:'grey'}}>{this.state.info.type}</Text>} multipleLine>
                        类型
                    </List.Item> 
                </List>
            </WingBlank>
        );
    }
  

}
