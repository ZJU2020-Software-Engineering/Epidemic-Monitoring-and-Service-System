import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { AsyncStorage } from 'react-native';
import LoginPage from './login';
import HomePage from './HomePage';
import UserPage from './user';

export const AuthContext = React.createContext();

function App(){
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout:false,
            userToken:action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading:true,
      isSignout:false,
      userToken:null,
    }
  );

  React.useEffect(()=>{
    const bootstrapAsync = async ()=>{
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
      }
      dispatch({type:'RESTORE_TOKEN', token:userToken});
    };
    bootstrapAsync();
  },[]);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        let token = data.username + '&' + data.password+ '&' + data.userID;
        console.log('token: ' + token)
        await AsyncStorage.setItem('userToken',token);
        let s_token = await AsyncStorage.getItem('userToken');
        console.log('stored token: ' + s_token);
        dispatch({type:'SIGN_IN',token: token});
      },
      signOut: async () =>{
        await AsyncStorage.setItem('userToken','');
        dispatch({type: 'SIGN_OUT'})
      }
    }),
    []
  );

  return(
    <AuthContext.Provider value={authContext}>
          {state.userToken == null ? (
            <LoginPage />
          ):(
            <HomePage />
          )}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background:{
    flex: 1
  }
});

export default App;
