import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import {StoreDetailComponent} from './itemList';
import {ItemDisplay} from './ItemDisplay';
import HomeComponent from "./HomeComponent";
import {OrderPage} from "./OrderPage";

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
    },
    OrderPagePersonal:{
        screen: OrderPage,
        navigationOptions: {
            headerShown: false
        }
    }
});

export default createAppContainer(ItemNavigator);