import React from 'react';
import { List, WhiteSpace, WingBlank } from '@ant-design/react-native';


export default class ActivityDetail extends React.Component {
    constructor(props){
        super(props);
        const title = props.navigation.state.params.title;
        const time = props.navigation.state.params.time;
        const location = props.navigation.state.params.location;
        const type = props.navigation.state.params.type;

        this.state={
            title: title,
            time: time,
            location: location,
            type: type
        };
    }
    render(){
        return (
            <WingBlank>
                <WhiteSpace />
                <List>
                    <List.Item extra={this.state.title}>
                        志愿活动名称
                    </List.Item>
                    <List.Item extra={this.state.time}>
                        时间
                    </List.Item>
                    <List.Item extra={this.state.location}>
                        地点
                    </List.Item>
                    <List.Item extra={this.state.type}>
                        志愿活动类型
                    </List.Item> 
                </List>
            </WingBlank>
        );
    }

}