import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
//import ViewPager from '@react-native-community/viewpager';
import { CheckBox,Image,Input} from 'react-native-elements';
var axios = require('axios');
const ip="http://localhost:8000"
export default class ChangePhonenumber extends React.Component {
  

  constructor(props){
        super(props)
        this.state = (
          {   username :this.props.navigation.getParam( 'username', 'No username provided' ),
              token :this.props.navigation.getParam( 'token', 'No token provided' ),
              phoneNumber:''
          })
        //this.loginget = this.loginget.bind(this)
    }
    phoneNumber='';

    change = () => {
        
      var data={
         'username': this.state.username,
         'attr':'phonenumber',
         'changevalue':this.state.phoneNumber,
        }
        var token={
          'token':this.state.token,
         } 
     axios.post(ip+'/request/info/personalUserInfo/update', data,{headers:token}) 
     .then((res) => { //alert(JSON.stringify(res.data));
         if(res.data.result=='Y'){
            alert('Change Success!')
            //this.props.navigation.navigate('Profile',{ username:this.state.username,phonenumber:this.state.phonenumber } );
            const {navigate,goBack,state} = this.props.navigation;
            state.params.callback(this.state.phoneNumber);
            this.props.navigation.goBack();  
          }
          else if(res.data.result=='L'){
            alert('token expired,please login again!') 
            const { navigate } = this.props.navigation;  
            navigate('Home');
           }
         else
            alert('Change Failed!') 
             })
     .catch((error) => { console.log(error) });
 } 

  render() {

  // const username = this.props.navigation.getParam( 'username', 'No username provided' )
    return (
      
      <View style={styles.container}>
      
        <Input
             placeholder="new phonenumber"
             label='New phonenumber'
             //leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             onChangeText={value => this.state.phoneNumber=value}
            /> 

           <TouchableOpacity style={styles.button}  onPress={ this.change } >
              <Text style={styles.buttonText}> submit </Text>
           </TouchableOpacity> 

         
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  columncontainer: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#4d80e6',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});