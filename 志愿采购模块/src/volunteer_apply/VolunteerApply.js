import React from 'react';
import { View} from 'react-native';
import { Button, List, WhiteSpace, WingBlank, Flex} from '@ant-design/react-native';

//从数据库中获取如下信息
var applyinfo ={
    name: "张三",
    sex: "男",
    identityCardNumber: "427000000000000000",
    phoneNumber: "14300000000",
    address: "浙江省杭州市西湖区"
};

export default class VolunteerApply extends React.Component {
    render(){
        return (
            <View>
                <WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <View>
                    <List renderHeader="请确认以下信息">
                        <List.Item extra={applyinfo.name}>
                            姓名
                        </List.Item>
                        <List.Item extra={applyinfo.sex}>
                            性别
                        </List.Item>
                        <List.Item extra={applyinfo.identityCardNumber}>
                            证件号码
                        </List.Item>
                        <List.Item extra={applyinfo.phoneNumber}>
                            联络电话
                        </List.Item>
                        <List.Item extra={applyinfo.address}>
                            当前住址
                        </List.Item> 
                    </List>
                </View>
                </WingBlank>
                <WingBlank>   
                
                <Button 
                    style={{ alignSelf:'center', borderRadius: 30,  bottom: 0, width: '90%',borderColor: 'blue'}}
                    onPress={()=>{this.props.navigation.navigate('ApplyStatus')}}>
                        确认提交认证信息
                </Button>
                </WingBlank>
    
            </View>
        );
    }

}

