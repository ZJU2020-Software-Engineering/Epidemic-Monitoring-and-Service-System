import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,TouchableOpacity } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from 'expo-linear-gradient';

import { ListItem } from 'react-native-elements'
const ip="http://localhost:8000"
var axios = require('axios');
export default class Profile extends React.Component {
  

  constructor(props){
        super(props)
        this.state = ({
          username :this.props.navigation.getParam( 'username', 'No username provided' ),
          token:this.props.navigation.getParam( 'token', 'wrong token' ),
          name:'name',
          gender:'gender',
          identityCardNumber:'identityCardNumber',
          phoneNumber:'phoneNumber',
          email:'email',
          address:'address',
          healthCode:'healthCode',
          healthStatus:'healthStatus',
          update:false
                      })       
    }
 

  
  componentDidMount(){
    
    
    var data={
            'username': this.state.username,///'admin'
           }
    var token={
          'token':this.state.token,
    }       
        axios.post(ip+'/request/info/personalUserInfo/select',data,{headers:token} ) 
        .then((res) => { //alert(JSON.stringify(res.data));
                if(res.data.result=='L'){
                  alert('token expired,please login again!') 
                  const { navigate } = this.props.navigation;  
                  navigate('Home');
                }
               this.setState({
                name : res.data.message.name,
                gender:res.data.message.gender,
                identityCardNumber:res.data.message.identitycardnumber,
                phoneNumber:res.data.message.phonenumber,
                email:res.data.message.email,
                address:res.data.message.address,
                healthStatus:res.data.message.healthStatus,
                healthCode:res.data.message.healthCode,
               })   
                })
        .catch((error) => { console.log(error) });
        

  }

 // componentDidUpdate(){

       // if(update){
       //  var data={
       //      'username': this.state.username///'admin'
       //     }
       //  axios.get('/request/info/personalUserInfo/select', {params:data}) 
       //  .then((res) => { alert(JSON.stringify(res.data));
       //         this.setState({
       //          name : res.data.message.name,
       //          gender:res.data.message.gender,
       //          identityCardNumber:res.data.message.identitycardnumber,
       //          phoneNumber:res.data.message.phonenumber,
       //          email:res.data.message.email,
       //          address:res.data.message.address,
       //          healthStatus:res.data.message.healthStatus,
       //          healthCode:res.data.message.healthCode,
       //         })   
       //          })
       //  .catch((error) => { console.log(error) });
       //  //this.setState({update:false});
       //   }
          
       // }
        // }
       

  render() {
    return (
           <ScrollView>
           <View>
              <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  linearGradientProps={{
                    colors: ['#a1c3e5', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  leftIcon={{ type: 'font-awesome', name: 'id-badge',color: 'white' }}
                  title={"  "+this.state.name}
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  subtitleStyle={{ color: 'white' }}
                  subtitle="  username"
                  chevron={{ color: '#796edb' }}
                  onPress={()=>this.props.navigation.navigate('ChangeName',{
                               username:this.state.username,token:this.state.token,
                               callback: (data)=>{
                                this.setState({
                                  name:data,
                                })
                                 }
                    }
                    )}
              />
              <View>
              <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  Gender'}
                  bottomDivider
                  rightTitle={this.state.gender}
                  //chevron={l.chevron}
              />
                <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  IdentityCardNumber'}
                  bottomDivider
                  rightTitle={this.state.identityCardNumber}
                  //chevron={l.chevron}
              />
                <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  PhoneNumber'}
                  bottomDivider
                  rightTitle={this.state.phoneNumber}
                  chevron={true}
                  onPress={()=>this.props.navigation.navigate('ChangePhonenumber',{
                                username:this.state.username,token:this.state.token,
                               callback: (data)=>{
                                this.setState({
                                  phoneNumber:data,
                                })
                                 }
                    }
                    )}
              />
                <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  Email'}
                  bottomDivider
                  rightTitle={this.state.email}
                  chevron={true}
                  onPress={()=>this.props.navigation.navigate('ChangeEmail',{
                                username:this.state.username,token:this.state.token,
                               callback: (data)=>{
                                this.setState({
                                  email:data,
                                })
                                 }
                    }
                    )}
              />
               <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  Address'}
                  bottomDivider
                  rightTitle={this.state.address}
                  chevron={true}
                  onPress={()=>this.props.navigation.navigate('ChangeAddress',{
                                username:this.state.username,token:this.state.token,
                               callback: (data)=>{
                                this.setState({
                                  address:data,
                                })
                                 }
                    }
                    )}
              />
               <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  HealthStatus'}
                  bottomDivider
                  rightTitle={this.state.healthStatus}
                  //chevron={l.chevron}
              />
               <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  HealthCode'}
                  bottomDivider
                  rightTitle={this.state.healthCode}
                  //chevron={l.chevron}
              />
              </View>
            
              <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#a1c3e5', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} 
                  leftIcon={{ type: 'font-awesome', name: 'lock',color: 'white' }}
                  title=" Account and Security"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  chevron={{ color: '#796edb' }}
                  onPress={  () => this.props.navigation.navigate( 'ChangePassword',{username:this.state.username,token:this.state.token,})}
              />
             <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#a1c3e5', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  leftIcon={{ type: 'font-awesome', name: 'tasks',color: 'white' }}
                  title=" About"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  chevron={{ color: '#796edb' }}
                  onPress={  () => this.props.navigation.navigate( 'About',{username:this.state.username,token:this.state.token,})}
              />
             <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#a1c3e5', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  //leftAvatar={{ rounded: true, source: {uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                  leftIcon={{ type: 'font-awesome', name: 'question-circle' ,color: 'white'}}
                  title=" Help"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  chevron={{ color: '#796edb'}}
                  onPress={  () => this.props.navigation.navigate( 'Help',{username:this.state.username,token:this.state.token,})}
              />
             <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#a1c3e5', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  //leftAvatar={{ rounded: true, source: {uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                  //leftIcon={{ type: 'font-awesome', name: 'question-circle' ,color: 'white'}}
                  leftIcon={{ type: 'font-awesome', name: 'angle-left',color: 'white' }}
                  title="  Sign out"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  chevron={{ color: '#796edb'}}
                  onPress={  () => this.props.navigation.navigate( 'Home')}
              />
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
  container1: {
    flex: 1,
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