import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import PersonHome from "./PersonHome";
import ShoppingNavigator from './shopping/ShoppingNavigator';
import {UserHome} from './UserHome';
import ApplyNavigator from './ApplyNavigator';
import Cache from './Cache';
import VolunteerModule from './VolunteerModule';
import Tarbar from '../screen/Tarbar';

// //设置账户id
// Cache.set('account','heihei');

const PersonNavigator=createStackNavigator({
    Tarbar: {
        screen: Tarbar,
        navigationOptions: {  
            headerTitle: 'Epidemic-Monitoring-and-Service-System', 
            headerBackTitle:null 
        }
    }, 
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
    PersonInfo:{
        screen: UserHome,
        navigationOptions:{
            headerShown: false
        }
    },
    //志愿者模块的内容放在这里，然后到personhome下对应的button设置回调的navigate函数
    Apply:{
        screen: ApplyNavigator,
        navigationOptions: {
            headerShown: false
        }
    },

    Volunteer: {
        screen: VolunteerModule,
        navigationOptions:{
            headerShown: false
        }
    }

});

export default createAppContainer(PersonNavigator);