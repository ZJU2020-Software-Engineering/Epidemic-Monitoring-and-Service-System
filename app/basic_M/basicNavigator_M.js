//////
import TarbarMerchant from '../screen/TarbarMerchant'

import ProfileMerchant from './ProfileMerchant'  
import ChangeMerchantName from './ChangeMerchantName'
import ChangeMerchantAddress from './ChangeMerchantAddress'
import ChangeMerchantCategory from './ChangeMerchantCategory'
import ChangeMerchantPhonenumber from './ChangeMerchantPhonenumber'
import ChangeMerchantEmail from './ChangeMerchantEmail'
import ChangeMerchantPassword from './ChangeMerchantPassword'
import About from './About'
import Help from './Help'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const basicNavigator_M = createStackNavigator( {
 
  TarbarMerchant: {
    screen: TarbarMerchant,
    navigationOptions: {  
        headerTitle: 'Epidemic-Monitoring-and-Service-System',  
    }
  },

  ProfileMerchant: {
    screen: ProfileMerchant,
    navigationOptions: {  
        headerTitle: 'ProfileMerchant',  
    }
  },
  
 
  ChangeMerchantName: {
    screen:  ChangeMerchantName,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantName',  
    }
  },
  ChangeMerchantAddress: {
    screen:  ChangeMerchantAddress,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantAddress',  
    }
  },
  ChangeMerchantCategory: {
    screen:  ChangeMerchantCategory,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantCategory',  
    }
  },
  ChangeMerchantPhonenumber: {
    screen:  ChangeMerchantPhonenumber,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantPhonenumber',  
    }
  },
  ChangeMerchantEmail: {
    screen:  ChangeMerchantEmail,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantEmail',  
    }
  },
  ChangeMerchantPassword: {
    screen:  ChangeMerchantPassword,
    navigationOptions: {  
        headerTitle: 'ChangeMerchantPassword',  
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


  export default createAppContainer(basicNavigator_M);
