import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button, List, WhiteSpace, WingBlank } from '@ant-design/react-native';

const Item = List.Item;
var orders = ["1", "2", "3"];

class ConfirmBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                    hint: '确认打包完成',
                    isDisabled: false,
                    isMounted: false,
                   };        
        this.change = this.change.bind(this);
    }

    componentDidMount(){
        this.setState({isMounted: true});
    }
    componentWillUnmount(){
        this.state.isMounted=false;
    }
    change(){
        if (this.state.isMounted){
            this.setState((state) => ({
                hint: '已打包完成',
                isDisabled: true
            }));
        }
    }
    render(){
        return (
            <Button disabled={this.state.isDisabled}
                onPress={() => {
                    Alert.alert(
                        "是否确认打包完成？",
                        "",
                        [
                            {text: '确认', onPress: () => {
                                    console.log('OK Pressed');
                                    this.change();
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

export default class CurrentOrder extends React.Component {
    render(){
        return (

        <View>
            <WingBlank>
            <WhiteSpace />
            <Button
                onPress={() => {
                    this.props.navigation.navigate('HistoryOrder')
                }}>
                历史订单列表
            </Button>
            <WhiteSpace />
            <ScrollView>
                <List renderHeader={'当前共有'+orders.length+'个订单未完成配送'}>
                    {orders.map((order) => {
                        btn = new ConfirmBtn();
                        return(
                            <Item
                                key={order} 
                                extra={
                                    <ConfirmBtn/>
                                }
                            >
                                {order}
                            </Item>
                            
                        );
                    })}
                </List>
            </ScrollView>
            </WingBlank>
        </View>
        );
    }
}

