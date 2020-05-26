import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, List, WingBlank, WhiteSpace, Modal, Provider, Toast } from '@ant-design/react-native';
import Counter from "./Counter";
import {GetItem, InsertOrder} from "./DatabaseClient";

export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        let name = '测试';
        this.state = {
            canChange: false,
            storeName: name,
            items: [],
            price: 0,
            itemsToBuy: {},
        };
    }

    componentDidMount() {
        GetItem("求是咖啡").then(response => this.setState({
            items: response,
        }));
    }

    addPrice = price => {
        this.setState({ price: this.state.price + price})
    };

    addItem = id => {
        if (!this.state.itemsToBuy[id]) {
            this.state.itemsToBuy[id] = 1;
        } else {
            this.state.itemsToBuy[id] += 1;
        }
    };

    removeItem = id => {
        const newMap = this.state.itemsToBuy;
        newMap[id] -= 1;
        this.setState({ itemsToBuy: newMap });
    };

    render() {
        return (
            <Provider>
            <View>
                <WingBlank>

                <ScrollView>
                <List>
                    {this.state.items.map((item) => {
                        return (
                            <List.Item key={item.id}
                                        extra={
                                            <View>
                                                <Counter
                                                    addPrice={this.addPrice}
                                                    price={parseInt(item.payment.match(/(\d+)/)[0])}
                                                    addItem={() => { this.addItem(item.id) }}
                                                    removeItem={() => { this.removeItem(item.id) }}
                                                />
                                            </View>
                                        }>
                                {item.id}
                            </List.Item>
                        );
                    })}
                </List>
                </ScrollView>

                <WhiteSpace/>

                    {
                        this.state.price > 0 &&
                        <View>
                            <Button onPress={() => {
                                Modal.alert('付款', '付款码放在这里', [
                                    {
                                        text: '支付成功',
                                        onPress: () => {
                                            console.log("此处应该转到订单界面");
                                            Toast.success("订单创建成功，请刷新订单页");
                                            let itemsToBuy = ""
                                            for (let key in this.state.itemsToBuy) {
                                                itemsToBuy += `${key}*${this.state.itemsToBuy[key]} `
                                            }
                                            console.log(itemsToBuy)
                                            InsertOrder(new Date().getTime(), "求是咖啡", "张三", itemsToBuy, this.state.price, "", "preparing", "yes")
                                        },
                                    },
                                    { text: '不支付' },
                                ]);
                            }}>
                                <Text>总价 {this.state.price} 元 点此付款</Text>
                            </Button>
                        </View>
                    }

                </WingBlank>

            </View>
            </Provider>
        );
    }
}