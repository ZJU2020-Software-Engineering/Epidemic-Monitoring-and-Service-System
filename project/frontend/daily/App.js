import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import HealthCodeScreen from './screens/HealthCodeScreen';
import DailyReportScreen from './screens/DailyReportScreen';
import ScannerScreen from './screens/ScannerScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import ChartScreen from './screens/ChartScreen';
//import SymptomScreen from './screens/SymptomScreen';
//import AdminChartScreen from './screens/AdminChartScreen';
//import UserChartScreen from './screens/UserChartScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  //const [initialNavigationState, setInitialNavigationState] = React.useState();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        //setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });

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

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HealthCode" component={HealthCodeScreen} />
          <Stack.Screen name="DailyReport" component={DailyReportScreen} />
          <Stack.Screen name="Scanner" component={ScannerScreen} />
          <Stack.Screen name="Suggestion" component={SuggestionScreen} />
          <Stack.Screen name="Chart" component={ChartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//<Stack.Screen name="AdminChart" component={AdminChartScreen} />
//<Stack.Screen name="UserChart" component={UserChartScreen} />
//
