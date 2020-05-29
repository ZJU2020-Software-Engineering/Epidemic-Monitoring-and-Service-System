import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox,Button } from 'react-native-elements';
var axios = require('axios');
const ip="http://localhost:8000"


export default class SignupPersonaluser extends React.Component {

  constructor(props){
        super(props)
        this.state = ({ status:'true'
          
                      })
       
    } 
          username ='username';
          password='password';
          confiredpassword='confiredpassword';
          name='name';
          gender='gender';
          identityCardNumber='identityCardNumber';
          phoneNumber='phoneNumber';
          email='email';
          address='address';
          healthCode='healthCode';
          healthStatus='healthStatus' ;
          gender='gender';
 
  signup= () =>{

    if(this.state.status=='true')
      this.gender='男'
    else
      this.gender='女'


    var data={
        'username': this.username,
        'password': this.password, 
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
    axios.post(ip+'/users/personalUserInfo/insert',data) 
     .then((res) => {  // alert(JSON.stringify(res.data));
                         if(res.data.message=='Success')
                            this.props.navigation.navigate( 'Home')
                         else
                          alert(res.data.message)
                            //this.setState({register:'false'});
                        })
    .catch((error) => {});
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

            <View style={styles.rowcontainer}>
            <Text style={styles.text}>  Gender</Text>
            <CheckBox
              title='male  '
              checked={this.state. status}
              onPress={() => this.setState({ status: !this.state.status})}
            />
             <CheckBox
              title='female'
              checked={!this.state. status}
              onPress={() => this.setState({ status: !this.state.status})}
            />
            </View> 
             <Text  style={ {fontSize:12}}> </Text>           
         <Input
             placeholder="name"
             label='Name'
             style={styles}
             onChangeText={value => this.name=value}
        />
         <Input
             placeholder="identityCardNumber"
             label='IdentityCardNumber'
             style={styles}
             onChangeText={value => this.identityCardNumber=value}
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
             placeholder="healthStatus"
             label='HealthStatus'
             style={styles}
             onChangeText={value => this.healthStatus=value}
        />
         <Input
             placeholder="healthCode"
             label='HealthCode'
             style={styles}
             onChangeText={value => this.healthCode=value}
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