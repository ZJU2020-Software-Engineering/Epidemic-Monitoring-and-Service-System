import React,{ Component,} from 'react';
import {Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator,createAppContainer,} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ItemNavigator from './ItemNavigator';
import ShopCart from './ShopCart';
import {HistoryOrder} from './HistoryOrder';
import {CurrentOrder} from './CurrentOrder';

const Navigator=createBottomTabNavigator({
    Shop:{
        screen: ItemNavigator,
        navigationOptions:{
            tabBarLabel: '商店',
            tabBarIcon: ({focused})=>{
                return (
                    <Ionicons name="ios-business" size={24} color={focused?'black':'grey'} />
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
                    <Ionicons name="ios-cart" size={24} color={focused?'black':'grey'}/>
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
                    <Ionicons name="ios-bicycle" size={24} color={focused?'black':'grey'} />
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
                    <Ionicons name="ios-document" size={24} color={focused?'black':'grey'} />
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