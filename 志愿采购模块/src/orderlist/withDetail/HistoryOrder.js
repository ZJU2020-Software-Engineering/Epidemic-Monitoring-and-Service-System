import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button, List, WhiteSpace, WingBlank } from '@ant-design/react-native';

const Item = List.Item;

var historyorders = ["4", "5", "6", "7", "8"];

export default class HistoryOrder extends React.Component {
    render() {
        return (

        <WingBlank>
        <WhiteSpace />
        <ScrollView>
            <List>
                {historyorders.map((historyorder) => {
                    return(
                        <Item key={historyorder}
						      onPress={() =>{this.props.navigation.navigate('OrderDetail',{index:{historyorder}.historyorder})}}
						>{historyorder}
						</Item>
                    )
                })}
            </List>
        </ScrollView>
        </WingBlank>
        );
    }
}