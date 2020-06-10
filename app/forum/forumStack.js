import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './Home'
import SearchPage from "./SearchPage";
import AddPost from "./addPost";
import PostDetail from "./postDetail";
import mailCreate from './mailCreate';
import mailList from './mailList';
import UserPage from './user';
import Tarbar from '../screen/Tarbar'

const ForumStack = createStackNavigator({
    Tarbar: {
        screen: Tarbar,
        navigationOptions: {  
            headerTitle: '疫情监测与服务系统', 
            headerBackTitle:null 
        }
      }, 
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: '首页',
        }
    },
    Mail:{
        screen: mailList,
        navigationOptions: {
            headerTitle: ' 私信',
        }
    },
    User:{
        screen:UserPage,
        navigationOptions: {
            headerTitle: ' 个人中心',
        }        
    },
    CreatePost:{
        screen:AddPost,
        navigationOptions: {
            headerTitle: '新建帖子',
        }          
    },
    CreateMail:{
        screen:mailCreate,
        navigationOptions: {
            headerTitle: '新建私信',
        }           
    },
    Search:{
        screen:SearchPage,
        navigationOptions: {
            headerTitle: '搜索',
        }            
    },
    Detail:{
        screen:PostDetail,
        navigationOptions: {
            headerTitle: '详情',
        }            
    }
})

export default createAppContainer(ForumStack);