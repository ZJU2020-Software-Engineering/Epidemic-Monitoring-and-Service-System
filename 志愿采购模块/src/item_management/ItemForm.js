import React, { Component } from 'react';
import { ScrollView } from "react-native";
import { Button, InputItem, List, DatePicker, Provider } from '@ant-design/react-native';

export default class ItemForm extends Component {
    // prop 中传入 id 时为更新商品信息，不传入时为新建

    state = {
        id: this.props.id,
        merchant_id: this.props.merchant_id,
        weight: this.props.weight,
        stock: this.props.stock,
        payment: this.props.payment,
        production_date: this.props.production_date,
        shelf_life: this.props.shelf_life,
    };

    render() {
        return (
            <Provider>
                <ScrollView
                    style={{ flex: 1, marginTop: 40 }}
                    automaticallyAdjustContentInsets={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <List renderHeader={'商品信息'}>
                        <InputItem
                            clear
                            value={this.state.id}
                            onChange={value => {
                                this.setState({
                                    id: value,
                                });
                            }}
                            placeholder="请输入商品名"
                        >
                            商品名
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.merchant_id}
                            onChange={value => {
                                this.setState({
                                    merchant_id: value,
                                });
                            }}
                            placeholder="请输入商家名"
                        >
                            商家名
                        </InputItem>
                        <InputItem
                            clear
                            value={this.state.weight}
                            onChange={value => {
                                this.setState({
                                    weight: value,
                                });
                            }}
                            placeholder="请输入商品重量"
                        >
                            重量
                        </InputItem>
                        <InputItem
                            clear
                            type="number"
                            value={this.state.stock}
                            onChange={value => {
                                this.setState({
                                    stock: value,
                                });
                            }}
                            placeholder="请输入商品库存"
                        >
                            库存
                        </InputItem>
                        <InputItem
                            clear
                            type="number"
                            value={this.state.payment}
                            onChange={value => {
                                this.setState({
                                    payment: value,
                                });
                            }}
                            placeholder="请输入商品价格"
                        >
                            价格
                        </InputItem>
                        <DatePicker
                            value={this.state.production_date}
                            mode="date"
                            defaultDate={new Date()}
                            minDate={new Date(2015, 7, 6)}
                            maxDate={new Date(2026, 11, 3)}
                            onChange={value => {
                                this.setState({
                                    production_date: value,
                                });
                            }}
                            format="YYYY-MM-DD"
                        >
                            <List.Item arrow="horizontal">生产日期</List.Item>
                        </DatePicker>
                        <InputItem
                            clear
                            value={this.state.shelf_life}
                            onChange={value => {
                                this.setState({
                                    shelf_life: value,
                                });
                            }}
                            placeholder="请输入商品保质期"
                        >
                            保质期
                        </InputItem>
                        <List.Item>
                            <Button
                                onPress={() => {
                                    console.log(this.state);
                                }}
                                type="primary"
                            >
                                {this.props.id ? '更新商品' : '新建商品'}
                            </Button>
                        </List.Item>
                    </List>
                </ScrollView>
            </Provider>
        )
    }
}