import React,{ Component }  from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity  , Picker} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox } from 'react-native-elements';
var axios = require('axios');
<<<<<<< Updated upstream
//const ip="http://localhost:8000"
var ip=require('./ip')
=======
const ip="http://192.168.31.78:8000"

>>>>>>> Stashed changes
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
    onValueChange(value: string) {
      this.setState({
        selected: value
      });
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
                                                axios.post(ip+'/users/merchantUserInfo/insert',data) 
                                                    .then((res) => {   //alert(JSON.stringify(res.data));
                                                      if(res.data.result=='N'){
                                                        alert(res.data.message)
                                                      }
                                                      else{
                                                            alert("注册成功")
                                                            this.props.navigation.navigate( 'Home')
                                                      }})
                                                    .catch((error) => {});
                                              }
                                              else alert("注册失败 密码与确认密码不同")}   
                                            else alert("座机电话格式错误")}   
                                          else alert("密码格式错误")} 
                                        else alert("注册失败 请检查是否有未填项")}
                                      else alert("用户名过长")} 
                                    else alert("姓名过长")}
                                  else alert("营业执照过长")}
                                else alert("电话号码过长")}
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
