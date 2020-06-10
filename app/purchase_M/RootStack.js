import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import {SplashComponent} from "./SplashComponent";
import {StoreComponent} from "./StoreComponent";
import {AccountComponent} from "./AccountComponent";
import {ConnectComponent} from "./ConnectComponent";
import {PayComponent} from "./PayComponent";
import {CurrentOrder} from './CurrentOrder';
import {HistoryOrder} from './HistoryOrder';
import {ItemList} from './Item';
import {ItemInfo} from './ItemInfo';
import {ItemForm} from './ItemForm';
import {OrderPage} from './OrderPage';

import TarbarMerchant from '../screen/TarbarMerchant';

export const PurchaseNavigator_M = createStackNavigator ({
    Default: {
        screen: TarbarMerchant,
        navigationOptions: {  
            headerShown: false
        }
    },
    Back: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false
        },
    },
    AccountScreen: {
        screen: AccountComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "账号管理",
        }
    },
    StoreScreen: {
        screen: StoreComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "店铺信息"
        }
    },
    ConnectScreen:{
        screen: ConnectComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "联系方式"
        }
    },
    PayScreen:{
        screen: PayComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "付款信息"
        }
    },
    CurrentOrderScreen: {
        screen: CurrentOrder,
        navigationOptions: {
            headerShown: true,
            headerTitle: "订单列表"
        }
    },
    HistoryOrderScreen: {
        screen: HistoryOrder,
        navigationOptions: {
            headerShown: true,
            headerTitle: "历史订单"
        }
    },
    ItemScreen: {
        screen: ItemList,
        navigationOptions: {
            headerShown: true,
            headerTitle: "商品列表"
        }
    },
    ItemAddScreen: {
        screen: ItemForm,
        navigationOptions: {
            headerShown: true,
            headerTitle: "新增商品"
        }
    },
    ItemInfoScreen: {
        screen: ItemInfo,
        navigationOptions: {
            headerShown: true,
            headerTitle: "商品信息"
        }
    },
    OrderPageScreen: {
        screen: OrderPage,
        navigationOptions: {
            headerShown: true,
            headerTitle: "订单信息"
        }
    }
});
export const Purchase_M = createAppContainer(PurchaseNavigator_M);
