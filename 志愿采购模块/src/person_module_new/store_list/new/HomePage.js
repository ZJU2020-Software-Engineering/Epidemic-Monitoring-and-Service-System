import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackground } from "react-navigation-stack";

import HomeComponent from "./HomeComponent4";
import StoreDetailComponent from "./StoreDetailComponent";


const StackNavigator = createStackNavigator ({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    StoreDetailScreen: {
        screen: StoreDetailComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: "店铺商品详情",
             
        }
    }
    
});

export default createAppContainer(StackNavigator);