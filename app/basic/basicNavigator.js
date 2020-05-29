
import Profile from './Profile'
import ChangeName from './ChangeName'
import ChangePhonenumber from './ChangePhonenumber'
import ChangeEmail from './ChangeEmail'
import ChangeAddress from './ChangeAddress'
import ChangePassword from './ChangePassword'
import About from './About'
import Help from './Help'
/////////
import Tarbar from '../screen/Tarbar'
//////////
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const basicNavigator = createStackNavigator( { 
  Tarbar: {
    screen: Tarbar,
    navigationOptions: {  
        headerTitle: 'Epidemic-Monitoring-and-Service-System', 
        headerBackTitle:null 
    }
  }, 
    Profile: {
      screen: Profile,
      navigationOptions: {  
          headerTitle: 'Profile',  
      }
    },
    ChangeName: {
      screen:  ChangeName,
      navigationOptions: {  
          headerTitle: 'ChangeName',  
      }
    },
    ChangePhonenumber: {
      screen:  ChangePhonenumber,
      navigationOptions: {  
          headerTitle: 'ChangePhonenumber',  
      }
    },
    ChangeEmail: {
      screen:  ChangeEmail,
      navigationOptions: {  
          headerTitle: 'ChangeEmail',  
      }
    },
    ChangeAddress: {
      screen:  ChangeAddress,
      navigationOptions: {  
          headerTitle: 'ChangeAddress',  
      }
    },
    ChangePassword: {
      screen:  ChangePassword,
      navigationOptions: {  
          headerTitle: 'ChangePassword',  
      }
    },
     About: {
      screen:  About,
      navigationOptions: {  
          headerTitle: 'About',  
      }
    },
     Help: {
      screen:   Help,
      navigationOptions: {  
          headerTitle: ' Help',  
      }
    },
  

})
export default createAppContainer(basicNavigator);
