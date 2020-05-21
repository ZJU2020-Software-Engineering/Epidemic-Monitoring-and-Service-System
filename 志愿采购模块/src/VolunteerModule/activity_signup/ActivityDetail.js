import React from 'react';
import { List, WhiteSpace, WingBlank } from '@ant-design/react-native';


export default function ActivityDetail ({route, navigation}) {
    const { info} = route.params;

    return (
        <WingBlank>
            <WhiteSpace />
            <List>
                <List.Item extra={info.title}>
                    志愿活动名称
                </List.Item>
                <List.Item extra={info.time}>
                    时间
                </List.Item>
                <List.Item extra={info.address}>
                    地点
                </List.Item>
                <List.Item extra={info.type}>
                    志愿活动类型
                </List.Item> 
            </List>
        </WingBlank>
    );
}