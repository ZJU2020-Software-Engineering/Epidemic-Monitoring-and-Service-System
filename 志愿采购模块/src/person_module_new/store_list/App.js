import React from 'react';
import { View, Text } from 'react-native-animatable';
import HomePage from './new/HomePage'
//import RootStack from './test/RootStack'

export default class App extends React.Component{
  render() {
    return(
      // <View>
      //   <Text>CanalGeekDev</Text>
      // </View>
      <HomePage />
      //<RootStack />
    )
  }
}