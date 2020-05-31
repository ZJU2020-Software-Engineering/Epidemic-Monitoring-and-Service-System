import React from 'react';
import { StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox,Button} from 'react-native-elements';



export default class Feed extends React.Component {

   constructor(props){
        super(props)
        this.state = ({
          ifpersonalUser:'true' //true:personalUSer    false:Merchant
                     })
        this.signup = this.signup.bind(this)
    } 
    signup = () => {
      if(this.state.ifpersonalUser){
        const { navigate } = this.props.navigation;  
        navigate('SignupPersonaluser');
      }  
      else{
        const { navigate } = this.props.navigation;  
        navigate('SignupMerchant');
      }
    }
  render() {
  
      return (
      
      <View style={styles.container}>
        <View style={styles.columncontainer2}>  
          </View> 
        <View style={styles.columncontainer1}>  
           <Text  style={ {fontSize:20}}> Firstly , choose your status.......</Text>
                   <View style={styles.rowcontainer}>
                      <Text style={styles.text}>  Status</Text>
                      <CheckBox
                        title='PersonalUser'
                        checked={this.state.  ifpersonalUser}
                        onPress={() => this.setState({  ifpersonalUser: !this.state. ifpersonalUser})}
                      />
                       <CheckBox
                        title='Merchant    '
                        checked={!this.state.  ifpersonalUser}
                        onPress={() => this.setState({  ifpersonalUser: !this.state. ifpersonalUser})}
                      />
                    </View>
           <TouchableOpacity style={styles.button}  onPress={this.signup} >
              <Text style={styles.buttonText}> Next </Text>
           </TouchableOpacity>                     
        </View>
         <View style={styles.columncontainer2}>  
          </View>

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
    columncontainer1: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   columncontainer2: {
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