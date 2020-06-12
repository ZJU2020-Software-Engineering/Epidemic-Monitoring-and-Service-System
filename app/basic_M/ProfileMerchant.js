import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { LinearGradient } from 'expo-linear-gradient';
import Cache from '../screen/Cache';
import { ListItem } from 'react-native-elements'
var axios = require('axios');
//const ip="http://localhost:8000"
var ip=require('./ip')
export default class ProfileMerchant extends React.Component {
  

  constructor(props){
        super(props)
        this.state = ({
          //username :this.props.navigation.getParam( 'username', 'No username provided' ),
          username :Cache.get('account'),
          token :this.props.navigation.getParam( 'token', 'No username provided' ),
          name:'name',
          phoneNumber:'phoneNumber',
          email:'email',
          address:'address',
          businessLicense:'businessLicense',
          corporateIdentity:'corporateIdentity',
          category:'category',
          collectionInformation:'collectionInformation',
                      })       
    }

  //
  componentDidMount(){
    //alert(this.state.username)
    var data={
            'username': this.state.username
           }
    var token={
          'token':this.state.token,
    }         
        axios.post(ip+'/request/info/merchantUserInfo/select', data,{headers:token}) 
        .then((res) => { //alert(JSON.stringify(res.data));
                if(res.data.result=='L'){
                  alert('令牌过期，请重新登录!') 
                  const { navigate } = this.props.navigation;  
                  navigate('Home');
                }
               this.setState({
                name : res.data.message.name,
                phoneNumber:res.data.message.phoneNumber,
                email:res.data.message.email,
                address:res.data.message.address,
                businessLicense:res.data.message.businessLicense,
                corporateIdentity:res.data.message.corporateIdentity,
                category:res.data.message.category,
                collectionInformation:res.data.message.collectionInformation,
               })   
                })
        .catch((error) => { console.log(error) });
  }

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
                    colors: ['#1955c9', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  leftIcon={{ type: 'font-awesome', name: 'id-badge',color: 'white' }}
                  title={"  "+this.state.name}
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  subtitleStyle={{ color: 'white' }}
                  subtitle="  用户名"
                  rightIcon={{ type: 'font-awesome', name: 'pencil',color:'white',size:'20'}}
                  //onPress={  () => this.props.navigation.navigate( 'ChangeMerchantName',{username:this.state.username})}
                   onPress={()=>this.props.navigation.navigate('ChangeMerchantName',{
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
                  title={'  电话'}
                  bottomDivider
                  rightTitle={this.state.phoneNumber+"  "}
                  rightIcon={{ type: 'font-awesome', name: 'pencil',size:'20'}}
                  onPress={()=>this.props.navigation.navigate('ChangeMerchantPhonenumber',{
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
                  title={'  邮箱'}
                  bottomDivider
                  rightTitle={this.state.email+" "}
                  rightIcon={{ type: 'font-awesome', name: 'pencil',size:'20'}}
                  onPress={()=>this.props.navigation.navigate('ChangeMerchantEmail',{
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
                  title={'  营业执照'}
                  bottomDivider
                  rightTitle={this.state.businessLicense}
              />

              <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  法人身份'}
                  bottomDivider
                  rightTitle={this.state.corporateIdentity}
              />
              <ListItem
                  Component={TouchableScale}
                  friction={90} //
                  tension={100} // These props are passed to the parent component (here TouchableScale)
                  activeScale={0.95} //
                  title={'  经营品类'}
                  bottomDivider
                  rightTitle={this.state.category+"  "}
                  rightIcon={{ type: 'font-awesome', name: 'pencil',size:'20'}}
                  onPress={()=>this.props.navigation.navigate('ChangeMerchantCategory',{
                                username:this.state.username,token:this.state.token,
                               callback: (data)=>{
                                this.setState({
                                  category:data,
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
                  title={'  收款信息'}
                  bottomDivider
                  rightTitle={this.state.collectionInformation}
              />



              </View>
              <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#1955c9', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} 
                  leftIcon={{ type: 'font-awesome', name: 'lock',color: 'white' }}
                  title=" 修改密码"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  rightIcon={{ type: 'font-awesome', name: 'pencil',color:'white',size:'20'}}
                  onPress={  () => this.props.navigation.navigate( 'ChangeMerchantPassword',{username:this.state.username,token:this.state.token,})}
              />
             <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#1955c9', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  leftIcon={{ type: 'font-awesome', name: 'tasks',color: 'white' }}
                  title=" 关于"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  rightIcon={{ type: 'font-awesome', name: 'chevron-right',color:'white',size:'20'}}
                  onPress={  () => this.props.navigation.navigate( 'About',{username:this.state.username,token:this.state.token,})}
              />
             <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#1955c9', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  //leftAvatar={{ rounded: true, source: {uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                  leftIcon={{ type: 'font-awesome', name: 'question-circle' ,color: 'white'}}
                  title=" 帮助"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  rightIcon={{ type: 'font-awesome', name: 'chevron-right',color:'white',size:'20'}}
                  onPress={  () => this.props.navigation.navigate( 'Help',{username:this.state.username,token:this.state.token,})}
              />
              <Text  style={ {fontSize:12}}> </Text>
              <ListItem
                  Component={TouchableScale}
                  friction={90} 
                  tension={100} 
                  activeScale={0.95} 
                  linearGradientProps={{
                    colors: ['#1955c9', '#1955c9'],
                    start: { x: 1, y: 0 },
                    end: { x: 0.2, y: 0 },
                  }}
                  ViewComponent={LinearGradient} // Only if no expo
                  //leftAvatar={{ rounded: true, source: {uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                  //leftIcon={{ type: 'font-awesome', name: 'question-circle' ,color: 'white'}}
                  leftIcon={{ type: 'font-awesome', name: 'angle-left',color: 'white' }}
                  title="  注销"
                  titleStyle={{ color: 'white', fontWeight: 'bold' }}
                  //chevron={{ color: '#796edb'}}
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
});
