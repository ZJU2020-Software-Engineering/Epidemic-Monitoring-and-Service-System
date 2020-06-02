import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
//import ViewPager from '@react-native-community/viewpager';
import { CheckBox,Image,Input} from 'react-native-elements';
var axios = require('axios');

const ip="http://localhost:8000"
export default class ChangeMerchantPassword extends React.Component {
  

  constructor(props){
        super(props)
        this.state = (
          {   username :this.props.navigation.getParam( 'username', 'No username provided' ),
              token :this.props.navigation.getParam( 'token', 'No token provided' ),
              newpassword:'',
              confirmednewpassword:'',
              oldpassword:''

          })
        this.checkpassword = this.checkpassword.bind(this)
        //this.change = this.change.bind(this)
    }
    oldpassword=''
    newpassword=''
    confirmednewpassword=''


    checkpassword = ()=>{ 
      var data={
         'username': this.state.username,///'admin'
         oldpassword:this.state.oldpassword,
         newpassword:this.state.newpassword,
        // checkpassword:this.state.checkpassword
        }
        var token={
         'token':this.state.token,
        } 
     if(this.state.newpassword==this.state.confirmednewpassword){  
             axios.post(ip+'/request/info/merchantUserInfo/changePassword',data, {headers:token}) 
             .then((res) => {// alert(JSON.stringify(res.data));
                    if(res.data.result=='N'){
                     alert(res.data.message)
                    }
                    else if(res.data.result=='D')(
                     alert(res.data.message)
                     ) 
                     else if(res.data.result=='L'){
                      alert('令牌过期，请重新登录!') 
                      const { navigate } = this.props.navigation;  
                      navigate('Home');
                     } 
                     else{
                       alert('修改成功!')
                       const {navigate,goBack,state} = this.props.navigation;
                        this.props.navigation.goBack();  
                     }
                     })
             .catch((error) => { console.log(error) });
         }
     else{
       alert('新密码和确认新密码应该相同!')
     }    

 }

  //  change = () => {  
  
  //  alert("change")
  //        var data={
  //           'username': this.state.username,
  //           'attr':'password',
  //           'changevalue':this.state.newpassword,
  //          }
  //          var token={
  //           'token':this.state.token,
  //          } 
  //       axios.post(ip+'/request/info/merchantUserInfo/update',data, {headers:token}) 
  //       .then((res) => {  alert(JSON.stringify(res.data));
  //           if(res.data.result=='Y'){
  //              alert('Change Success!')
  //              //this.props.navigation.navigate('ProfileMerchant',{ username:this.state.username } );
  //              const {navigate,goBack,state} = this.props.navigation;
  //               //state.params.callback(this.state.name);
  //               this.props.navigation.goBack();  
               
  //            }
  //           else
  //              alert('Change Failed!') 
  //               })
  //       .catch((error) => { console.log(error) });
      
  //   } 

  render() {

  // const username = this.props.navigation.getParam( 'username', 'No username provided' )
    return (
      
      <View style={styles.container}>
      
        <Input
             placeholder="原密码"
             label='原密码'
             //leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.oldpassword=value}
            /> 
        <Input
             placeholder="新密码"
             label='新密码'
             //leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.newpassword=value}
            />
        <Input
             placeholder=" 确认新密码"
             label='确信新密码'
             //leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.confirmednewpassword=value}
            />                  

           <TouchableOpacity style={styles.button}  onPress={ this.checkpassword } >
              <Text style={styles.buttonText}> 提交 </Text>
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
