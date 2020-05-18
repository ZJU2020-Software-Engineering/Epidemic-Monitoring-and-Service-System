import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import PersonHome from "./PersonHome";
import ShoppingNavigator from './ShoppingNavigator';
import Cache from './Cache';

//设置账户id
Cache.set('account','heihei');

const PersonNavigator=createStackNavigator({
    Person:{
        screen: PersonHome,
        navigationOptions: {
            headerShown: false
        }
    },
    Shops:{
        screen: ShoppingNavigator,
        navigationOptions: {
            headerShown: false
        }
    },
    //志愿者模块的内容放在这里，然后到personhome下对应的button设置回调的navigate函数
});

export default createAppContainer(PersonNavigator);