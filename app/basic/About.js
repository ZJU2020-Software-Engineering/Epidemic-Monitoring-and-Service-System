import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import ViewPager from '@react-native-community/viewpager';


export default class About extends React.Component {
  

  constructor(props){
        super(props)
        this.state = ({username :this.props.navigation.getParam( 'username', 'No username provided' ),
                        token :this.props.navigation.getParam( 'token', 'No token provided' ),})
        
        //this.loginget = this.loginget.bind(this)
    }

  render() {

  // const username = this.props.navigation.getParam( 'username', 'No username provided' )
    return (
      
      <View style={styles.container}>
        <Text>Epidemic Monitoring and Service System (EMSS)  </Text>   
        <Text> developed by Zju Software Engineering 2020 class </Text>   
        <Text>疫情监测和服务系统</Text>   
        <Text>由浙江大学2020学年软件工程课程同学开发</Text>    
      </View>
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
});
