import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';


const Stack = createStackNavigator();
export default function SignUpComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ActivityList"
            >
                <Stack.Screen
                    name="ActivityList"
                    component={ActivityList}
                    options={{title: '当前志愿活动'}}
                />
                <Stack.Screen
                    name="ActivityDetail"
                    component={ActivityDetail}
                    options={{title: '志愿活动详情'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}