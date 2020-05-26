import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, List, WingBlank, WhiteSpace } from '@ant-design/react-native';
import { GetItem } from './DatabaseClient';

export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        let name = props.navigation.state.params.account.name;
        let orders = [];
        this.state = {
            canChange: false,
            storeName: name,
            orders: orders
        };
    }
    componentDidMount() {
        GetItem(this.state.storeName).then((response)=>{this.successShow(response)});
    }
    successShow(response) {
        let orders = [];
        response.forEach(element => {
            orders.push(element.id);
        });
        this.setState({
            orders: orders
        });
    }
    render() {
        return (
            <View>
                <WingBlank>
                <WhiteSpace/>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('ItemAddScreen', {storeName: this.state.storeName})
                    }}>
                    新增商品信息
                </Button>
                <WhiteSpace/>
                
                <ScrollView>
                <List>
                    {this.state.orders.map((order) => {
                        return (
                            <List.Item key={order} 
                                        extra={<Button 
                                            onPress={() => {this.props.navigation.navigate('ItemInfoScreen', {id: order})}}>
                                        详细信息
                                        </Button>}>
                                {order}
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