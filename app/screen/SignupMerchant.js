import React,{ Component }  from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity  , Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox } from 'react-native-elements';
var axios = require('axios');
//const ip="http://localhost:8000"
var ip=require('./ip')
export default class Feed extends React.Component {

   constructor(props){
        super(props)
        this.state = ({
          status:'true',//true:personalUSer    false:Merchant
          password:'',
         confirmedpassword:'',
         selected:undefined
                     })
    } 
   
    username ='username';
    password='';
    confirmedpassword='';
    name='name';
    phoneNumber='phoneNumber';
    email='email';
    address='address';
    businessLicense='businessLicense';
    corporateIdentity='corporateIdentity';
    category='category';
    collectionInformation='collectionInformation';
  
  signup= () =>{
    var data={
        'username': this.username,
        password: this.state.password, 
        
        'name': this.name,
        'phoneNumber': this.phoneNumber, 
        'address': this.address, 
        'email':this.email, 
        'businessLicense':this.businessLicense,
        'corporateIdentity':this.corporateIdentity,
        'category':this.category,
        'collectionInformation':this.collectionInformation,
    }
    //http 請求
    var passwordpatt = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    var areacodepatt = new RegExp(/^(\d{3,4}-)\d{7,8}$/);
                      if(this.collectionInformation.length < 40){
                        if(this.category.length < 20){
                          if(this.corporateIdentity.length < 20){
                            if(this.email.length < 40){
                              if(this.address.length < 20){
                                if(this.phoneNumber.length < 20){
                                  if(this.businessLicense.length < 20){
                                    if(this.name.length < 20){
                                      if(this.username.length < 20){
                                        if(this.username != 'username' && this.password != 'password' && this.name != 'name' && this.businessLicense != 'businessLicense' && this.phoneNumber != 'phoneNumber' && this.address != 'address' && this.corporateIdentity != 'corporateIdentity' && this.category != 'category' && this.email != 'email' && this.collectionInformation != 'collectionInformation'){
                                          if(passwordpatt.test(this.state.password)){
                                            if(areacodepatt.test(this.phoneNumber)){
                                              if(this.state.password == this.state.confirmedpassword){
                                                axios.post(ip+'/request/info/merchantUserInfo/select',data) 
                                                .then((res) => {  //alert(JSON.stringify(res.data));
                                                  if(res.data.message==null){
                                                    axios.post(ip+'/users/merchantUserInfo/insert',data) 
                                                    .then((res) => {  //alert(JSON.stringify(res.data));
                                                          if(res.data.result=='N'){
                                                            alert(res.data.message)
                                                          }
                                                          else{
                                                            alert("注册成功")
                                                            this.props.navigation.navigate( 'LoginHome')
                                                          }
                                                                    })
                                                      .catch((error) => {});
                                                  }
                                                  else{
                                                    alert("用戶名已存在")
                                                  }
                                                            })
                                              .catch((error) => {});
                                              }
                                              else alert("注册失败 密码与确认密码不同")}   
                                            else alert("座机电话格式错误")}   
                                          else alert("密码格式错误")} 
                                        else alert("注册失败 请检查是否有未填项")}
                                      else alert("用户名过长")} 
                                    else alert("姓名过长")}
                                  else alert("营业执照过长")}
                                else alert("电话号码格式错误")}
                              else alert("地址过长")}
                            else alert("电子邮件过长")}
                          else alert("法人身份信息过长")}
                        else alert("经营品类过长")}
                      else alert("收款信息过长")    
                    
    
  }  


  render() {
    return (
      <ScrollView>
      <Text  style={ {fontSize:12}}> </Text> 
      <View style={styles.container}>
       <Input
             placeholder="用户名"
             label='用户名'
             leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             onChangeText={value => this.username=value}
        />
         <Input
             placeholder="密码"
             label='密码(需要同时包含数字和英文字母，至少8位）'
             leftIcon={{ type: 'font-awesome', name: 'unlock' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.password=value}
        />
         <Input
             placeholder="确认密码"
             label='确认密码'
             leftIcon={{ type: 'font-awesome', name: 'unlock' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.state.confirmedpassword=value}
        />
         <Input
             placeholder="姓名"
             label='姓名'
             style={styles}
             onChangeText={value => this.name=value}
        />
        <Input
             placeholder="座机电话"
             label='座机电话（格式应该为区号-电话号，如010-1234567）'
             style={styles}
             onChangeText={value => this.phoneNumber=value}
        />
       <Input
             placeholder="地址"
             label='地址'
             style={styles}
             onChangeText={value => this.address=value}
        />
        <Input
             placeholder="邮箱"
             label='邮箱'
             style={styles}
             onChangeText={value => this.email=value}
        />
         <Input
             placeholder="营业执照"
             label='营业执照'
             style={styles}
             onChangeText={value => this.businessLicense=value}
        />
         <Input
             placeholder="法人身份"
             label='法人身份'
             style={styles}
             onChangeText={value => this.corporateIdentity=value}
        />
        <Input
             placeholder="经营品类"
             label='经营品类'
             style={styles}
             onChangeText={value => this.category=value}
        />
        <Input
             placeholder="收款信息"
             label='收款信息'
             style={styles}
             onChangeText={value => this.collectionInformation=value}
        />
        <TouchableOpacity style={styles.button}  onPress={ this.signup} >
              <Text style={styles.buttonText}> 注册 </Text>
        </TouchableOpacity>           
        <Text  style={ {fontSize:20}}> </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    columncontainer1: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
