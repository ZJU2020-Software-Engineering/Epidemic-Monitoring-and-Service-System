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
import Map from './map/map'
import forum from './forum/forumStack'

const InfoStack = createStackNavigator( {
     Home: {
      screen: Home,
      navigationOptions: {  
          headerTitle: '登录页',  
      }
    },
    Signup: {
      screen: Signup,
      navigationOptions: {  
          headerTitle: '注册',  
      }
    },
    SignupPersonaluser: {
      screen: SignupPersonaluser,
      navigationOptions: {  
          headerTitle: ' 个人用户注册',  
      }
    },
    SignupMerchant: {
      screen:  SignupMerchant,
      navigationOptions: {  
          headerTitle: '商家用户注册',  
      }
    },
})

//  把 navigator  放進來
 const AppStack = createAppContainer(createSwitchNavigator(
  {
    InfoStack,
    basicNavigator,
    basicNavigator_M,
    Map,
    PersonNavigator,
    PurchaseNavigator_M,
    forum
  },
  {
    initialRouteName: 'InfoStack'
  }))

 export default AppStack;
