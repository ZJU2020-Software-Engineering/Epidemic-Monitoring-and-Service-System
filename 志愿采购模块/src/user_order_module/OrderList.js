import React from 'react';
import { View, ScrollView } from 'react-native';
import { List, WingBlank, Provider } from '@ant-design/react-native';
import {GetCurrentOrder} from "./DatabaseClient";

export class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
    }

    componentDidMount() {
        GetCurrentOrder("求是咖啡").then(response => this.setState({
            orders: response,
        }));
    }

    render() {
        console.log(this.state.orders)
        return (
            <Provider>
            <View>
                <WingBlank>

                <ScrollView>
                <List>
                    {this.state.orders.map((order) => {
                        return (
                            <List.Item key={order.id}>
                                {`商品列表：${order.item_list}`}
                                {`商品总价：${order.total_price}`}
                                {`订单状态：${order.stat}`}
                            </List.Item>
                        );
                    })}
                </List>
                </ScrollView>

                </WingBlank>

            </View>
            </Provider>
        );
    }
}