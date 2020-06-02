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
        headerTitle: '疫情检测与服务系统',  
    }
  },

  ProfileMerchant: {
    screen: ProfileMerchant,
    navigationOptions: {  
        headerTitle: '商家个人中心',  
    }
  },
  
 
  ChangeMerchantName: {
    screen:  ChangeMerchantName,
    navigationOptions: {  
        headerTitle: '修改商家姓名',  
    }
  },
  ChangeMerchantAddress: {
    screen:  ChangeMerchantAddress,
    navigationOptions: {  
        headerTitle: '修改商家地址',  
    }
  },
  ChangeMerchantCategory: {
    screen:  ChangeMerchantCategory,
    navigationOptions: {  
        headerTitle: '修改经营品类',  
    }
  },
  ChangeMerchantPhonenumber: {
    screen:  ChangeMerchantPhonenumber,
    navigationOptions: {  
        headerTitle: '修改商家电话',  
    }
  },
  ChangeMerchantEmail: {
    screen:  ChangeMerchantEmail,
    navigationOptions: {  
        headerTitle: '修改商家邮箱',  
    }
  },
  ChangeMerchantPassword: {
    screen:  ChangeMerchantPassword,
    navigationOptions: {  
        headerTitle: '修改密码',  
    }
  },
   About: {
    screen:  About,
    navigationOptions: {  
        headerTitle: '关于',  
    }
  },
   Help: {
    screen:   Help,
    navigationOptions: {  
        headerTitle: ' 帮助',  
    }
  },

})


  export default createAppContainer(basicNavigator_M);
