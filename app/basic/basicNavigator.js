
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
        headerTitle: '疫情监测与服务系统', 
        header:null
    }
  }, 
    Profile: {
      screen: Profile,
      navigationOptions: {  
          headerTitle: '个人中心',  
      }
    },
    ChangeName: {
      screen:  ChangeName,
      navigationOptions: {  
          headerTitle: '修改姓名',  
      }
    },
    ChangePhonenumber: {
      screen:  ChangePhonenumber,
      navigationOptions: {  
          headerTitle: '修改电话',  
      }
    },
    ChangeEmail: {
      screen:  ChangeEmail,
      navigationOptions: {  
          headerTitle: '修改邮箱',  
      }
    },
    ChangeAddress: {
      screen:  ChangeAddress,
      navigationOptions: {  
          headerTitle: '修改地址',  
      }
    },
    ChangePassword: {
      screen:  ChangePassword,
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
export default createAppContainer(basicNavigator);
