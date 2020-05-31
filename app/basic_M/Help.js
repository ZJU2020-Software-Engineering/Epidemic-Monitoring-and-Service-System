import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import ViewPager from '@react-native-community/viewpager';


export default class Help extends React.Component {
  

  constructor(props){
        super(props)
        this.state = ({username :this.props.navigation.getParam( 'username', 'No username provided' ),
        token :this.props.navigation.getParam( 'token', 'No token provided' )})

        //this.loginget = this.loginget.bind(this)
    }

  render() {

  // const username = this.props.navigation.getParam( 'username', 'No username provided' )
    return (
      
      <View style={styles.container}>
        <Text>Hello from Help!</Text> 
        <Text>{this.state.username}</Text>     
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