import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';



// export default function SignUpComponent(){
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName="ActivityList"
//             >
//                 <Stack.Screen
//                     name="ActivityList"
//                     component={ActivityList}
//                     options={{title: '当前志愿活动'}}
//                 />
//                 <Stack.Screen
//                     name="ActivityDetail"
//                     component={ActivityDetail}
//                     options={{title: '志愿活动详情'}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }


const SignUpComponent = createStackNavigator({
    ActivityList:{
        screen: ActivityList,
        navigationOptions: {
            headerShown: true,
            headerTitle: "当前志愿活动"
        }
    },
    ActivityDetail:{
        screen: ActivityDetail,
        navigationOptions: {
            headerShown: true,
            headerTitle: "志愿活动详情"
        }
    }
})

export default createAppContainer(SignUpComponent);