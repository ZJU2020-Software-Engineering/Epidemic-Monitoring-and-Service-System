import React from 'react';
import { View, Button } from 'react-native';

export class PurchaseInterface extends React.Component {
    render() {
        return (<View style = {{
                    marginTop: 20,
                    width: 100,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#2c3e50",
                    borderRadius: 20
                }}>
            <Button title = '进入系统'
            onPress = {
                () => {
                    this.props.navigation.navigate("Back", {name: '求是咖啡'})
                }
            }></Button></View>
        );
    }
}