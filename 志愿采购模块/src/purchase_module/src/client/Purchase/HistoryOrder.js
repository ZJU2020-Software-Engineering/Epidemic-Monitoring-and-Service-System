import React from 'react';
import { ScrollView } from 'react-native';
import { List, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { GetHistoryOrder } from './DatabaseClient';

const Item = List.Item;

export class HistoryOrder extends React.Component {
    constructor(props) {
        super(props);
        let orders = []
        this.state = {
            merchant_id: props.navigation.state.params.id,
            orders: orders
        };
    }
    componentDidMount() {
        GetHistoryOrder(this.state.merchant_id).then((response)=>{this.successShow(response)});
    }
    successShow(response) {
        let orders = [];
        response.forEach(element => {
            orders.push([element.id, element.item_list]);
        });
        this.setState({
            orders: orders
        });
    }
    render() {
        return (
            <WingBlank>
            <WhiteSpace />
            <ScrollView>
                <List>
                    {this.state.orders.map((historyorder) => {
                        return(
                            <Item key={historyorder}>{historyorder}</Item>
                        )
                    })}
                </List>
            </ScrollView>
            </WingBlank>
        );
    }
}