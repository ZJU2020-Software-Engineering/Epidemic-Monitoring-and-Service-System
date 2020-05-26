import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Button } from '@ant-design/react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: 0,
        }
    }

    render() {
        const addPrice = this.props.addPrice;
        const price = this.props.price;

        return (
            <View style={[styles.container,this.props.style]}>
                <View style={{ flexDirection: 'row', borderColor: '#e1e1e1', borderWidth: 0.5, borderRadius: 4 }}>
                    <Button
                        style={styles.buttonStyle}
                        title={"-"}
                        onPress={() => {
                            if (this.state.currentNumber > 0) {
                                this.setState({ currentNumber: this.state.currentNumber - 1})
                                addPrice(-price);
                                this.props.removeItem();
                            }
                        }}
                    >
                        -
                    </Button>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 16, width: 95 }}>{this.state.currentNumber}</Text>
                    </View>
                    <Button
                        style={styles.buttonStyle}
                        title={"+"}
                        onPress={() => {
                            this.setState({ currentNumber: this.state.currentNumber + 1});
                            addPrice(price);
                            this.props.addItem();
                        }}
                    >
                        +
                    </Button>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonStyle: {
        borderRadius: 5,
    },
});