import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Heading2, Paragraph } from './Text'

class PayComponent extends Component{


    constructor(props){
        super(props);
        this.state = {
            canChange:false,
            account:'abc123456',
            
        };
    }


    onPressChange = ()=>{
        this.setState({canChange:true});
    }
    onPressSave = ()=>{

        this.setState({canChange:false});
        alert("修改已保存")
    }
    
    
    //通过navigation.getParam来获取传递过来的参数
    itemId = this.props.navigation.getParam('itemId', 'no-values');
    otherParam = this.props.navigation.getParam('otherParam', 'no-values');


    

    render(){
    return (
       
        <KeyboardAwareScrollView>

        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <Image style={styles.qrimg} source={require('./assets/qr.png')}/>
        </View>
        </TouchableOpacity>


        </KeyboardAwareScrollView>
    )
        }
}

var styles = StyleSheet.create({

    container:{
        marginTop :40,
        marginLeft:40,
        paddingVertical:10,
        paddingHorizontal:15,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        width:'80%'

    },
    qrimg:{
        width:400,
        height:600,
        marginTop :10,


    },
    buttonview:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap: 'wrap',
        width:'80%',
        marginLeft:'10%'

    },
    touch:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:640,
    },
    touch1:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:50,
    },
    content: {
        height: 44,
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    text1:{
        fontSize:18

    },
    
    textInput: {
        width: 270,
        height: 30,
        borderColor: "#708090",
        borderWidth: 2,
        marginBottom: 10,
    },
    textInput2: {
        width: 270,
        height: 90,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        backgroundColor:"white",
        marginBottom: 10,
    },
    changeButton:{
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        borderRadius: 20,

    },
    saveButton:{
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3CB371",
        borderRadius: 20,

    },
    textChange:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
})

export default PayComponent


