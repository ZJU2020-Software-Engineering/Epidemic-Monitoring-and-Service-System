import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import AllComponent from "./AllComponent";
import OrderToSendList from "./order_to_send_list/OrderToSendList";
import SignUpComponent from "./activity_signup/SignUpComponent";
import ActivityComponent from "./activity_list/ActivityComponent";



const StackNavigator = createStackNavigator ({
    Back: {
        screen: AllComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen: {
        screen: SignUpComponent,
        navigationOptions: {
            headerShown: false,
            headerTitle: "志愿服务报名",
             
        }
    },
    OrderScreen: {
        screen: OrderToSendList,
        navigationOptions: {
            headerShown: false,
            headerTitle: "待派送订单列表",
             
        }
    },
    ActivityScreen: {
        screen: ActivityComponent,
        navigationOptions: {
            headerShown: false,
            headerTitle: "志愿活动列表",
             
        }
    },


});

export default createAppContainer(StackNavigator);