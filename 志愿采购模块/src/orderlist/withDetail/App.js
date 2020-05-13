import React from 'react';
// import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
// import { Button, List, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CurrentOrder from './CurrentOrder';
import HistoryOrder from './HistoryOrder';
import OrderDetail from './orderDetail';

const Stack = createStackNavigator();
export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="CurrentOrder"
            >
                <Stack.Screen
                    name="CurrentOrder"
                    component={CurrentOrder}
                    options={{title: '当前订单列表'}}
                />
                <Stack.Screen
                    name="HistoryOrder"
                    component={HistoryOrder}
                    options={{title: '历史订单列表'}}
                />
				<Stack.Screen
				    name="OrderDetail"
				    component={OrderDetail}
				    options={{title: '订单详情'}}
				/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}