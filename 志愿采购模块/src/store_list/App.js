import React from 'react';
import ItemNavigator from './ItemNavigator';
import {ItemDisplay} from './ItemDisplay';
//AppRegistry.registerComponent('ItemDemo', () => ItemNavigator);
export default class App extends React.Component {
  render(){
    //var item=new ItemDisplay();
    return (
      // <ItemDisplay name='yes'/>
      <ItemNavigator />
      );
  }
}

// import React from 'react';
// import { View, Text } from 'react-native-animatable';
// import HomePage from './new/HomePage'
// //import RootStack from './test/RootStack'

// export default class App extends React.Component{
//   render() {
//     return(
//       // <View>
//       //   <Text>CanalGeekDev</Text>
//       // </View>
//       <HomePage />
//       //<RootStack />
//     )
//   }
// }