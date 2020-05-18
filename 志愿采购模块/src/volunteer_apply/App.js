import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import VolunteerApply from './VolunteerApply';
import ApplyStatus from './ApplyStatus';
import * as Font from 'expo-font';


const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="VolunteerApply"
            >
                <Stack.Screen
                    name="VolunteerApply"
                    component={VolunteerApply}
                    options={{title: '志愿者身份认证'}}
                />
                <Stack.Screen
                    name="ApplyStatus"
                    component={ApplyStatus}
                    options={{
                      title: '志愿者身份认证当前状态',
                      headerLeft: ()=>(
                        <Icon 
                          name='navigate-before' 
                          onPress={() => {
                            console.log("return to home");
                          }}
                          size= '40'
                        />
                      )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

// export default function App(){
//     return (
//         <NavigationContainer>
//             <Stack.Navigator
//                 initialRouteName="VolunteerApply"
//             >
//                 <Stack.Screen
//                     name="VolunteerApply"
//                     component={VolunteerApply}
//                     options={{title: '志愿者身份认证'}}
//                 />
//                 <Stack.Screen
//                     name="ApplyStatus"
//                     component={ApplyStatus}
//                     options={{title: '志愿者身份认证当前状态'}}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
