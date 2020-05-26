import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignedScreen from './SignedScreen';
import DetailScreen from './DetailScreen';
import DoneScreen from './DoneScreen';


const DoneStack = createStackNavigator();

function Done() {
  return (
    <DoneStack.Navigator>
      <DoneStack.Screen name="Done" component={DoneScreen} options={{ headerShown:false }}/>
      <DoneStack.Screen name="Detail" component={DetailScreen} options={{ title: '活动详情' }}/>
    </DoneStack.Navigator>
  );
}

const SignedStack = createStackNavigator();

function Signed() {
  return (
    <SignedStack.Navigator>
      <SignedStack.Screen name="Signed" component={SignedScreen} options={{ headerShown:false }}/>
      <SignedStack.Screen name="Detail" component={DetailScreen} options={{ title: '活动详情' }}/>
    </SignedStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
	    tabBarOptions={{ 
			style: {
				height:45
            },
            //tab bar的文本样式
            labelStyle: {
                   fontSize: 15,
                   marginBottom: 12
            }, }}
	  >
        <Tab.Screen name="Signed" component={Signed} options={{ title: '报名活动列表' }} />
        <Tab.Screen name="Done" component={Done} options={{ title: '参与活动列表' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}