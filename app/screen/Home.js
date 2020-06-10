import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { CheckBox,Image,Input,Text,Button} from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import Cache from './Cache';
var axios = require('axios');
//const ip="http://localhost:8000"
var ip=require('./ip')
export default class Home extends React.Component {

  
   constructor(props){
        super(props)
        this.state = ({
          username : 'no',
          password:'no',
          token:'',
          ifpersonalUser: true, //true:personalUSer    false:Merchant
          login:'unknown'
                     })
         this.login = this.login.bind(this)
    }

    
     login = () => {
      if(this.state.ifpersonalUser==true){
        var data={
            'username': this.state.username,
            'password': this.state.password, 
           }
        axios.post(ip+'/users/personalUserInfo/login',data) 
        .then((res) => { //alert(JSON.stringify(res.data));
            if(res.data.result=='Y'){
              //alert("登陆成功")
              this.setState({token:res.data.token})
              Cache.set('account',this.state.username);//Cache在这里有用来，用来设置用户的账号
              this.props.navigation.navigate( 'Tarbar',{username:this.state.username,token:res.data.token})
              //this.props.navigation.navigate( 'Profile',{username:this.state.username})
             }
            else if(res.data.result=='W'){
              //alert(res.data.message)
              alert("密码错误！")
            }
            else if(res.data.result=='No'){
                //alert(res.data.message)
                alert("用户不存在")
               }
            else{
              alert(res.data.message)
            }     
                })
        .catch((error) => { console.log(error) });            
      }
      else{
        var data={
          'username': this.state.username,
          'password': this.state.password, 
         }
      axios.post(ip+'/users/merchantuserInfo/login',data) 
      .then((res) => { //alert(JSON.stringify(res.data));
          if(res.data.result=='Y'){
            //alert("登录成功")
            Cache.set('account',this.state.username);//Cache在这里有用来，用来设置用户的账号
            this.props.navigation.navigate( 'TarbarMerchant',{username:this.state.username,token:res.data.token})
            //this.props.navigation.navigate( 'Profile',{username:this.state.username})
           }
          else if(res.data.result=='W'){
              alert("密码错误")
          }
          else{
             alert("用户不存在")
             }  
              })
      .catch((error) => { console.log(error) });
        
      }    
       
    }

  // login = () => {
  //     if(this.state.ifpersonalUser==true){
  //       //alert('here')
  //       var data={
  //           'username': this.state.username,
  //           'password': this.state.password, 
  //          }
  //       axios.get(ip+'/request/info/personalUserInfo/select', {params:data}) 
  //       .then((res) => { alert(JSON.stringify(res.data));
  //           if(res.data.message.password==this.state.password){
  //              // this.setState({username:this.username});
  //             this.setState({login:'true'});
  //             this.props.navigation.navigate( 'Tarbar',{username:this.state.username})
  //             //this.props.navigation.navigate( 'Profile',{username:this.state.username})
  //            }
  //           else{
  //              this.setState({login:true}); 
  //              alert("worng password")
  //              }  
  //               })
  //       .catch((error) => { console.log(error) }); 
  //           //this.props.navigation.navigate( 'Tarbar',{username:this.state.username})
  //     }
  //     else{
  //       alert("merchant")
  //       var data={
  //           'username': this.state.username,
  //           'password': this.state.password, 
  //          }
  //       axios.get(ip+'/request/info/merchantUserInfo/select', {params:data}) 
  //       .then((res) => { alert(JSON.stringify(res.data));
  //           if(res.data.message.password==this.state.password){

  //             this.setState({login:true});
  //             this.props.navigation.navigate( 'TarbarMerchant',{username:this.state.username})
  //            }
  //           else{
  //              this.setState({login:true}); 
  //              alert("worng password")
  //              }   
  //               })
  //       .catch((error) => { console.log(error) });

  //     }    
       
  //   }




  render() {
    return (
      <View style={styles.container}> 
       <View style={styles.columncontainer1}>  
         
         <Text  style={ {fontSize:40}}> 疫情监测与服务系统</Text>
         <Text  style={ {fontSize:20}}> Epidemic Monitoring and Service System</Text>
        </View>

          <View style={styles.columncontainer2}>
            <View style={styles.rowcontainer}>
            <Text style={styles.text}>  身份</Text>
            <CheckBox
              title='个人用户'
              checked={this.state.ifpersonalUser}
              onPress={() => this.setState({ ifpersonalUser: !this.state.ifpersonalUser})}
            />
             <CheckBox
              title='商家用户    '
              checked={!this.state.ifpersonalUser}
              onPress={() => this.setState({ ifpersonalUser: !this.state.ifpersonalUser})}
            />
            </View>
            <Input
             placeholder="用户名"
             label='用户名'
             leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             onChangeText={value => this.state.username = value}
            />
             <Input
             placeholder="密码"
             label='密码'
             leftIcon={{ type: 'font-awesome', name: 'unlock' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.password = value}
            />
            <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}   onPress={this.login} >
              <Text style={styles.buttonText}> 登录 </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button}  onPress={  () => this.props.navigation.navigate( 'Signup')} >
              <Text style={styles.buttonText}> 注册 </Text>
           </TouchableOpacity>         
          </View>
          </View>
          <View style={styles.columncontainer3}>  
          </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  columncontainer1: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columncontainer2: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
   columncontainer3: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color:'#737373',//顏色
    fontSize: 16,//字號
    fontWeight:'bold',
    textAlign: 'center',//居中
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

