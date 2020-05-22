import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import {StoreDetailComponent} from './itemList';
import {ItemDisplay} from './ItemDisplay';
import HomeComponent from "./HomeComponent";
import PersonHome from "./PersonHome";

const ItemNavigator=createStackNavigator({
    // Person:{
    //     screen: PersonHome,
    // },
    Merchant: {
        screen: HomeComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    StoreDetailScreen: {
        screen: StoreDetailComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "店铺商品列表"
        }
    },
    ItemDisplayScreen: {
        screen: ItemDisplay,
        navigationOptions: {
            headerShown: true,
            headerTitle: "商品详情"
        }
    }
});

export default createAppContainer(ItemNavigator);