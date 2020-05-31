import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import HomeComponent from "./HomeComponent";
import OrderDetailComponent from "./OrderDetailComponent";


const StackNavigator = createStackNavigator ({
    back: {
        screen: HomeComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    OrderDetailScreen: {
        screen: OrderDetailComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "订单详情",
             
        }
    }
    
});

export default createAppContainer(StackNavigator);