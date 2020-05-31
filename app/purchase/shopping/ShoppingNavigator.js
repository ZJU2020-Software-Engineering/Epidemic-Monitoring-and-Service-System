import React,{ Component,} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import { createStackNavigator,createAppContainer,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ItemNavigator from './ItemNavigator';
import ShopCart from './ShopCart';
import {HistoryOrder} from './HistoryOrder';
import {CurrentOrder} from './CurrentOrder';

class OneComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View>
                <Icon   name='ios-add'
                        type='ionicon'
                        color='#517fa4'></Icon>
            </View>
        )
    }
}


const Navigator=createBottomTabNavigator({
    Shop:{
        screen: ItemNavigator,
        navigationOptions:{
            tabBarLabel: '商店',
            tabBarIcon: ({focused})=>{
                return (
                    <Icon 
                        name='ios-business'
                        type='ionicon'
                        color={focused?'black':'grey'}
                    />
                );
            }
        }
    },
    Cart:{
        screen: ShopCart,
        navigationOptions:{
            tabBarLabel: '购物车',
            tabBarIcon: ({focused})=>{
                return (
                    <Icon 
                        name='ios-cart'
                        type='ionicon'
                        color={focused?'black':'grey'}
                    />
                );
            },
        }
    },
    OrderNow:{
        screen: CurrentOrder,
        navigationOptions:{
            tabBarLabel: '当前订单',
            tabBarIcon: ({focused})=>{
                return (
                    <Icon 
                        name='ios-bicycle'
                        type='ionicon'
                        color={focused?'black':'grey'}
                    />
                );
            }
        }
    },
    Olders:{
        screen: HistoryOrder,
        navigationOptions:{
            tabBarLabel: '订单记录',
            tabBarIcon: ({focused})=>{
                return (
                    <Icon 
                        name='ios-document'
                        type='ionicon'
                        color={focused?'black':'grey'}
                    />
                );
            }
        }
    },
    
},
{
    initialRoute: 'Shop',
    // tabBarPosition: 'bottom',
    // animationEnabled: false,
    // swipeEnabled: false,
}
);


export default createAppContainer(Navigator);