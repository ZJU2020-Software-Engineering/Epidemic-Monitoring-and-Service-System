/**
 * 需要安装以下依赖：
 * npm install @react-navigation/native --save
 * npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
 * npm install @react-navigation/material-bottom-tabs react-native-paper --save
 * npm install @react-navigation/stack --save
 * npm install react-native-vector-icons --save
 * npm install react-native-action-button --save
 * npm install react-native-ultimate-listview --save
 * npm install react-native-modal-dropdown --save
 */

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import {HomePageStack} from './HomePage'
import SearchPage from './SearchPage'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();


function PostDetail({navigation,route}){
  /*
   * 这个是帖子详情页面
   * 到时候将这个页面替换成正式的即可
   */
    
    return(
      <View style={styles.container}>
          <Text style={styles.text}>这是帖子发布页面</Text>
      </View>
    );
}


function PostPage({navigation,route}){
  /**
   * 这个是帖子发布页面
   * 到时候将这个替换成正式的即可
   */
    
    return(
      <View style={styles.container}>
          <Text style={styles.text}>这是帖子发布页面</Text>
      </View>
    );
}


function MySearchComponent(){
  const navigation = useNavigation();

  return(
      <TouchableOpacity
      onPress={(event)=>{navigation.navigate('Search')}}
      activeOpacity={0.7}
      >
      {/* 这里调整搜索图标的style，不建议修改height和width，修改color可以改变图标的颜色 */}
      <View style={{height:44,width:44,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <Feather name='search' color='#CFCFCF' size={30} />
      </View>
      </TouchableOpacity>
  );
}

export default class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        user_id:'id_123',
        user_name:'xxx',
        theme: null,
        currentTheme: null,
        isReady: false,
        isRegistered: true,
      }
    }

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
    changeRegister = () => {
      let currentRegisterState = this.state.isRegistered;
      this.setState({isRegistered:!currentRegisterState});
    }

    render(){
      const { theme, currentTheme, isReady } = this.state;
      if (!isReady) {
        return <AppLoading />;
      }
      return(
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='HomePageStack'
          >
            <Stack.Screen
              initialParams={{...this.state}}
              name='HomePageStack'
              component={HomePageStack}
              options={{
                title:'健康论坛',
                headerStyle:{
                  height:64
                },
                headerRight:()=>(<MySearchComponent/>)
              }}
            />
            <Stack.Screen
              name='Search'
              component={SearchPage}
            />
            <Stack.Screen
              name='PostDetail'
              component={PostDetail}
            />
            <Stack.Screen
              name='PostPage'
              component={PostPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}





const styles = StyleSheet.create({
  /**
   * 这里是UI，保证各个页面的UI在这里修改
   */
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontStyle:'italic',
        color:'red',
        backgroundColor:'#AEEEEE',
        height:24,
        textAlignVertical:'center',
        textAlign:'center',
    },
    post:{
        flexDirection:'column',
        height:300,
        backgroundColor:'#DCDCDC',
        paddingLeft:10,
        paddingRight:10,
    },
    poster:{
        fontSize:24,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'#1E90FF'
    },
    postHeader:{
        height:60,
        fontSize:36,
        paddingTop:20,
    },
    postContent:{
        fontSize:24,
        height:180,
    },
    postDate:{
        height:20,
        fontSize:16,
        textAlignVertical:'center',
    },
    postView:{
        height:25,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    select:{
        height:18,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingEnd:20,
    },
    selectItem:{
        height:18,
        alignItems:'center',
    },
    selectText:{
        fontSize:14,
        marginTop:2,
    },
});


