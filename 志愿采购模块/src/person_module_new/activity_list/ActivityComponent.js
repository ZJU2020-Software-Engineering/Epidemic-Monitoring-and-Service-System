import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from './DetailScreen';
import ActivityList from './ActivityList';


// const Stack = createStackNavigator();
// export default function ActivityComponent() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator
//            initialRouteName="ActivityList"
//         >
// 	         <Stack.Screen name="ActivityList" component={ActivityList} options={{ title: '志愿活动列表' }}/>
// 	         <Stack.Screen name="Detail" component={DetailScreen} options={{ title: '活动详情' }}/>
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const ActivityComponent=createStackNavigator({
  ActivityList:{
    screen: ActivityList,
    navigationOptions: {
      headerShown: true,
      headerTitle: "志愿活动列表"
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions:{
      headerShown: true,
      headerTitle: "活动详情"
    }
  }
})

export default createAppContainer(ActivityComponent);