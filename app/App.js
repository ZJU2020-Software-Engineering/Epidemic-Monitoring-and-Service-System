

import Home from './screen/Home'
import Signup from './screen/Signup'
import SignupPersonaluser from './screen/SignupPersonaluser'
import SignupMerchant from './screen/SignupMerchant'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

// import 你們模塊的 navigator
import basicNavigator_M from './basic_M/basicNavigator_M'
import basicNavigator from './basic/basicNavigator'
import PersonNavigator from './purchase/PersonNavigator'
import {PurchaseNavigator_M} from './purchase_M/RootStack'

const InfoStack = createStackNavigator( {
     Home: {
      screen: Home,
      navigationOptions: {  
          headerTitle: 'Home',  
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {  
          headerTitle: 'Signup',  
      }
    },
    SignupPersonaluser: {
      screen: SignupPersonaluser,
      navigationOptions: {  
          headerTitle: ' Signup for PersonalUser',  
      }
    },
    SignupMerchant: {
      screen:  SignupMerchant,
      navigationOptions: {  
          headerTitle: 'Signup for Merchant',  
      }
    },
})

//  把 navigator  放進來
 const AppStack = createAppContainer(createSwitchNavigator(
  {
    InfoStack,
    basicNavigator,
    basicNavigator_M,
    PersonNavigator,
    PurchaseNavigator_M,
    
  },
  {
    initialRouteName: 'InfoStack'
  }))

 export default AppStack;
