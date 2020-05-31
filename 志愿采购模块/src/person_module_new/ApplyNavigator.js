import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import VolunteerApply from "./VolunteerApply";
import ApplyStatus from "./ApplyStatus";


const ApplyNavigator=createStackNavigator({

    ApplyForm: {
        screen: VolunteerApply,
        navigationOptions: {
            headerShown: true,
            headerTitle: "志愿者身份认证"
        }
    },
    ApplyStatus: {
        screen: ApplyStatus, 
        navigationOptions: {
            headerShown: true,
            headerTitle: "志愿者身份认证状态",
            headerLeft: null,
            gestureEnabled: false
        }
    }
});

export default createAppContainer(ApplyNavigator);