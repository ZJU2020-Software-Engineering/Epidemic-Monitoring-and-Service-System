import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox } from 'react-native-elements';
var axios = require('axios');
const ip="http://localhost:8000"

export default class Feed extends React.Component {

   constructor(props){
        super(props)
        this.state = ({
          status:'true' //true:personalUSer    false:Merchant
                     })
    } 

    username ='username';
    password='password';
    confirmedpassword='confirmedpassword';
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
        'password': this.password, 
        'name': this.name,
        'phoneNumber': this.phoneNumber, 
        'address': this.address, 
        'email':this.email, 
        'businessLicense':this.businessLicense,
        'corporateIdentity':this.corporateIdentity,
        'category':this.category,
        'collectionInformation':this.collectionInformation,
    }
    if(this.password==this.confirmedpassword){
    //http 請求
    axios.post(ip+'/users/merchantUserInfo/insert',data) 
     .then((res) => {   //alert(JSON.stringify(res.data));
                         if(res.data.message=='Success')
                            this.props.navigation.navigate( 'Home')
                         else
                          alert(res.data.message)
                            //this.setState({register:'false'});
                        })
    .catch((error) => {});
    }
    else{
        alert("password and confiredpassword should be the same!")
    }
  }  


  render() {
    return (
      <ScrollView>
      <Text  style={ {fontSize:12}}> </Text> 
      <View style={styles.container}>
       <Input
             placeholder="username"
             label='Username'
             leftIcon={{ type: 'font-awesome', name: 'address-book' }}
             style={styles}
             onChangeText={value => this.username=value}
        />
         <Input
             placeholder="password"
             label='Password'
             leftIcon={{ type: 'font-awesome', name: 'unlock' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.password=value}
        />
         <Input
             placeholder="confirmedpassword"
             label='Confirmedpassword'
             leftIcon={{ type: 'font-awesome', name: 'unlock' }}
             style={styles}
             secureTextEntry={true}  
             onChangeText={value => this.confirmedpassword=value}
        />
         <Input
             placeholder="name"
             label='Name'
             style={styles}
             onChangeText={value => this.name=value}
        />
        <Input
             placeholder="phoneNumber"
             label='PhoneNumber'
             style={styles}
             onChangeText={value => this.phoneNumber=value}
        />
         <Input
             placeholder="address"
             label='Address'
             style={styles}
             onChangeText={value => this.address=value}
        />
        <Input
             placeholder="email"
             label='Email'
             style={styles}
             onChangeText={value => this.email=value}
        />
         <Input
             placeholder="businessLicense"
             label='BusinessLicense'
             style={styles}
             onChangeText={value => this.businessLicense=value}
        />
         <Input
             placeholder="corporateIdentity"
             label='CorporateIdentity'
             style={styles}
             onChangeText={value => this.corporateIdentity=value}
        />
        <Input
             placeholder="category"
             label='Category'
             style={styles}
             onChangeText={value => this.category=value}
        />
        <Input
             placeholder="collectionInformation"
             label='CollectionInformation'
             style={styles}
             onChangeText={value => this.collectionInformation=value}
        />
        <TouchableOpacity style={styles.button}  onPress={ this.signup} >
              <Text style={styles.buttonText}> Sign up </Text>
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