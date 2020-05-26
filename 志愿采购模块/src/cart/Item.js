import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, List, WingBlank, WhiteSpace, Modal, Provider } from '@ant-design/react-native';
import Counter from "./Counter";

export class ItemList extends React.Component {
    constructor(props) {
        super(props);
        let name = '测试';
        let items = [
            {
                id: 0,
                itemName: '土豆',
                count: 0,
                price: 1,
            },
            {
                id: 1,
                itemName: '西瓜',
                count: 0,
                price: 2,
            },
            {
                id: 2,
                itemName: '葡萄',
                count: 0,
                price: 3,
            },
        ];
        this.state = {
            canChange: false,
            storeName: name,
            items: items,
            price: 0,
        };
    }

    addPrice = price => {
        this.setState({ price: this.state.price + price})
    };


    render() {
        return (
            <Provider>
            <View>
                <WingBlank>
                <WhiteSpace/>
                <Button>
                    新增商品信息
                </Button>
                <WhiteSpace/>

                <ScrollView>
                <List>
                    {this.state.items.map((item) => {
                        return (
                            <List.Item key={item.id}
                                        extra={
                                            <View>
                                                <Counter addPrice={this.addPrice} price={item.price} />
                                                <Button>详情</Button>
                                            </View>
                                        }>
                                {item.itemName}
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
                                Modal.alert('付款', '整合同学，付款码放在这里，付款成功以后应该转到订单界面', [
                                    {
                                        text: '支付成功',
                                        onPress: () => {
                                            console.log("此处应该转到订单界面")
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