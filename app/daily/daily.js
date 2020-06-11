import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Button } from '@ant-design/react-native';

import Tarbar from '../screen/Tarbar'
import HomeScreen from './HomeScreen';
import HealthCodeScreen from './HealthCodeScreen.js';
import DailyReportScreen from './DailyReportScreen';
import ScannerScreen from './ScannerScreen';
import SuggestionScreen from './SuggestionScreen';
import ChartScreen from './ChartScreen';
import ReminderScreen from './ReminderScreen';
//import SymptomScreen from './screens/SymptomScreen';
//import AdminChartScreen from './screens/AdminChartScreen';
//import UserChartScreen from './screens/UserChartScreen';

const Stack = createStackNavigator();

export default function daily() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  //const [initialNavigationState, setInitialNavigationState] = React.useState();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        //setInitialNavigationState(await getInitialState());

        // // Load fonts
        // await Font.loadAsync({
        //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        // });

        await Font.loadAsync(
          'antoutline',
          require('@ant-design/icons-react-native/fonts/antoutline.ttf')
        );

        await Font.loadAsync(
          'antfill',
          require('@ant-design/icons-react-native/fonts/antfill.ttf')
        );
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HealthCode">
          <Stack.Screen
            name="HealthCode"
            component={HealthCodeScreen}
            options={({ navigation, route }) => ({
              headerTitle: '健康打卡',
              headerShown: false
            })}
          />
          <Stack.Screen
            name="DailyReport"
            component={DailyReportScreen}
            options={() => ({
              headerTitle: '健康打卡',
            })}
          />
          <Stack.Screen
            name="Scanner"
            component={ScannerScreen}
            options={() => ({
              headerTitle: '扫描健康码',
            })}
          />
          <Stack.Screen
            name="Suggestion"
            component={SuggestionScreen}
            options={() => ({
              headerTitle: '防疫建议',
            })}
          />
          <Stack.Screen
            name="Chart"
            component={ChartScreen}
            options={() => ({
              headerTitle: '疫情防控',
            })}
          />
          <Stack.Screen
              name="Reminder"
              component={ReminderScreen}
              options={() => ({
                headerTitle: '打卡提醒',
              })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//<Stack.Screen name="AdminChart" component={AdminChartScreen} />
//<Stack.Screen name="UserChart" component={UserChartScreen} />
//
