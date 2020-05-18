import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './DetailScreen';
import ActivityList from './ActivityList';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
           initialRouteName="ActivityList"
        >
	         <Stack.Screen name="ActivityList" component={ActivityList} options={{ title: '志愿活动列表' }}/>
	         <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '活动详情' }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}