import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import SplashComponent from "./SplashComponent";
import StoreComponent from "./StoreComponent";
import AccountComponent from "./AccountComponent";
import ConnectComponent from "./ConnectComponent";
import PayComponent from "./PayComponent";

const StackNavigator = createStackNavigator ({
    Back: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false
        }
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
    }
});

export default createAppContainer(StackNavigator);