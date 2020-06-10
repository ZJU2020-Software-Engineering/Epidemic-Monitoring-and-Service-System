import React , { Component }from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity , Picker } from 'react-native';

import { Input,CheckBox,Button } from 'react-native-elements';
var axios = require('axios');
<<<<<<< Updated upstream
var ip=require('./ip')
=======
const ip="http://192.168.31.78:8000"

>>>>>>> Stashed changes

export default class SignupPersonaluser extends React.Component {

  constructor(props){
        super(props)
        this.state = ({ 
          status:'true',
        password:'',
        confirmedpassword:'',
        selected:undefined   
                     })
       
    } 
    onValueChange(value: string) {
      this.setState({
        selected: value
      });
    } 
          username ='username';
          //password='';
         // confirmedpassword='';
          name='name';
          gender='gender';
          identityCardNumber='identityCardNumber';
          phoneNumber='phoneNumber';
          email='email';
          address='address';
          healthCode='绿码';
          healthStatus='健康' ;
          gender='gender';
 ㄎ
  signup= () =>{

    if(this.state.status=='true')
      this.gender='男'
    else
      this.gender='女'


    var data={
        'username': this.username,
        'password': this.state.password, 
        
        'name': this.name,
        'gender':this.gender,
        'identityCardNumber': this.identityCardNumber,
        'phoneNumber': this.phoneNumber, 
        'address': this.address, 
       'healthStatus': this.healthStatus, 
        'healthCode':this.healthCode,
        //'visitedPlaces':this.visitedPlaces, 
        'email':this.email, 
    }
    //http 請求
    var passwordpatt = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
                      if(this.email.length < 50){
                        if(this.address.length < 50){
                          if(this.phoneNumber.length == 11){
                            if(this.identityCardNumber.length < 50){
                              if(this.name.length < 20){
                                if(this.username.length < 30){
                                  if(this.username != 'username' && this.password != 'password'  && this.name != 'name' && this.identityCardNumber != 'identityCardNumber' && this.phoneNumber != 'phoneNumber' && this.address != 'address' && this.healthStatus != 'healthStatus' && this.healthCode != 'healthCode' && this.email != 'email'){
                                    if(this.healthStatus =='健康' || this.healthStatus =='疑似' || this.healthStatus =='确诊' || this.healthStatus =='重症' || this.healthStatus =='出院'){
                                      if(this.healthCode =='绿码' || this.healthCode =='黄码' || this.healthCode =='红码'){
                                        if(passwordpatt.test(this.state.password)){
                                          if(this.state.password == this.state.confirmedpassword){
                                            axios.post(ip+'/users/personalUserInfo/insert',data) 
                                                .then((res) => {  //alert(JSON.stringify(res.data));
                                                      if(res.data.result=='N'){
                                                        alert(res.data.message)
                                                      }
                                                      else{
                                                        alert("注册成功")
                                                        this.props.navigation.navigate( 'Home')
                                                      }
                                                                })
                                                  .catch((error) => {});
                                          }
                                          else alert("注册失败 密码与确认密码不同")}  
                                        else alert("密码格式错误")} 
                                      else alert("注册失败 健康码应从绿码、黄码、红码中选择填写")}
                                    else alert("注册失败 健康状态应从健康、疑似、确诊、重症、出院中选择填写")}   
                                  else alert("注册失败 请检查是否有未填项")}
                                else alert("用户名过长")}
                              else alert("姓名过长")}
                            else alert("证件号码过长")}
                          else alert("手机号码格式错误")}
                        else alert("地址过长")}
                      else alert("电子邮件过长")
                    
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
             label='密码（需要同时包含数字和英文字母，至少8位）'
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

            <View style={styles.rowcontainer}>
            <Text style={styles.text}>  性别</Text>
            <CheckBox
              title='男  '
              checked={this.state. status}
              onPress={() => this.setState({ status: !this.state.status})}
            />
             <CheckBox
              title='女'
              checked={!this.state. status}
              onPress={() => this.setState({ status: !this.state.status})}
            />
            </View> 
             <Text  style={ {fontSize:12}}> </Text>           
         <Input
             placeholder="姓名"
             label='姓名'
             style={styles}
             onChangeText={value => this.name=value}
        />
         <Input
             placeholder="身份证号"
             label='身份证号'
             style={styles}
             onChangeText={value => this.identityCardNumber=value}
        />
         <Input
             placeholder="手机号码"
             label='手机号码（请输入11位的手机号码）'
             style={styles}
             onChangeText={value => this.phoneNumber=value}
        />
        <Input
             placeholder="地址"
             label='地址'
             style={styles}
             onChangeText={value => this.address=value}
        />
//          <Text 
//               style={{alignSelf:'flex-start',marginStart:7,color:'#86939E',fontSize: 16,fontWeight:'bold',textAlign: 'center'}}> 地址</Text>
//         <Picker
//               mode="dropdown"
//               iosIcon={<Icon name="arrow-down" />}
//               placeholder="地址"
//               placeholderStyle={{ color: "#bfc6ea" }}
//               placeholderIconColor="#007aff"
//               style={{width: 120,alignSelf:'flex-start',marginStart:10,marginTop:10}}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this),value=>this.address=value}
//             >
//               <Picker.Item label="北京" value="北京" />
//               <Picker.Item label="天津" value="天津" />
//               <Picker.Item label="河北" value="河北" />
//               <Picker.Item label="山西" value="山西" />
//               <Picker.Item label="内蒙古" value="内蒙古" />
//               <Picker.Item label="辽宁" value="辽宁" />
//               <Picker.Item label="吉林" value="吉林" />
//               <Picker.Item label="黑龙江" value="黑龙江" />
//               <Picker.Item label="上海" value="上海" />
//               <Picker.Item label="江苏" value="江苏" />
//               <Picker.Item label="浙江" value="浙江" />
//               <Picker.Item label="安徽" value="安徽" />
//               <Picker.Item label="福建" value="福建" />
//               <Picker.Item label="江西" value="江西" />
//               <Picker.Item label="山东" value="山东" />
//               <Picker.Item label="河南" value="河南" />
//               <Picker.Item label="湖北" value="湖北" />
//               <Picker.Item label="湖南" value="湖南" />
//               <Picker.Item label="广东" value="广东" />
//               <Picker.Item label="广西" value="广西" />
//               <Picker.Item label="海南" value="海南" />
//               <Picker.Item label="重庆" value="重庆" />
//               <Picker.Item label="四川" value="四川" />
//               <Picker.Item label="贵州" value="贵州" />
//               <Picker.Item label="云南" value="云南" />
//               <Picker.Item label="西藏" value="西藏" /> 
//               <Picker.Item label="陕西" value="陕西" />
//               <Picker.Item label="甘肃" value="甘肃" />
//               <Picker.Item label="青海" value="青海" />
//               <Picker.Item label="宁夏" value="宁夏" />
//               <Picker.Item label="新疆" value="新疆" />
//               <Picker.Item label="香港" value="香港" />
//               <Picker.Item label="澳门" value="澳门" />
//               <Picker.Item label="台湾" value="台湾" />
//             </Picker>
         <Input
             placeholder="邮箱"
             label='邮箱'
             style={styles}
             onChangeText={value => this.email=value}
        />
//          <Text 
//               style={{alignSelf:'flex-start',marginStart:7,color:'#86939E',fontSize: 16,fontWeight:'bold',textAlign: 'center'}}> 健康状态</Text>
//         <Picker
//               mode="dropdown"
//               iosIcon={<Icon name="arrow-down" />}
//               placeholder="健康状态"
//               placeholderStyle={{ color: "#bfc6ea" }}
//               placeholderIconColor="#007aff"
//               style={{width: 120,alignSelf:'flex-start',marginStart:10,marginTop:10}}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this),value=>this.healthStatus=value}
//             >
//               <Picker.Item label="健康" value="健康" />
//               <Picker.Item label="疑似" value="疑似" />
//               <Picker.Item label="确诊" value="确诊" />
//               <Picker.Item label="重症" value="重症" />
//               <Picker.Item label="出院" value="出院" />
//             </Picker>
//             <Text 
//               style={{alignSelf:'flex-start',marginStart:7,color:'#86939E',fontSize: 16,fontWeight:'bold',textAlign: 'center',marginTop:10}}> 健康码</Text>
//           <Picker
//               mode="dropdown"
//               iosIcon={<Icon name="arrow-down" />}
//               placeholder="健康码"
//               placeholderStyle={{ color: "#bfc6ea" }}
//               placeholderIconColor="#007aff"
//               style={{width: 120,alignSelf:'flex-start',marginStart:10,marginTop:10}}
//               selectedValue={this.state.selected}
//               onValueChange={this.onValueChange.bind(this),value=>this.healthCode=value}
//             >
//               <Picker.Item label="绿码" value="绿码" />
//               <Picker.Item label="黄码" value="黄码" />
//               <Picker.Item label="红码" value="红码" />
//             </Picker>
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
