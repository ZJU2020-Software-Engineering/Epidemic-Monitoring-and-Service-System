import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Heading2, Paragraph } from './Text'

class AccountComponent extends Component{
// const AccountComponent = ({navigation}) => {
// export default function AccountComponent({navigation}){

    constructor(props){
        super(props);
        this.state = {
            canChange:false,
            account:'abc123456',
            password:'zxcvbn'
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
        // <View style={styles.container}>
        //     {/* <Text>itemId:{JSON.stringify(this.itemId)}</Text>
		//     <Text>otherParam:{JSON.stringify(this.otherParam)}</Text> */}
        //     <Text style={styles.text1}>账号</Text>
        //     <TextInput 
        //                 style={styles.textInput}
        //                 defaultValue="abc123456"
        //                 editable={false}

        //     />
            
        //     <Text style={styles.text1}>密码</Text>
        //     <TextInput 
        //         style={styles.textInput}
        //         secureTextEntry={true}
        //         defaultValue="111111"
        //         clearTextOnFocus={true}
        //         editable={this.state.canChange}
        //     />
        //     <TouchableOpacity
        //         onPress={this.onPressChange}
        //         style = {styles.changeButton}
        //     >
        //     <Text style={styles.textChange}>修改密码</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //         onPress={this.onPressSave}
        //         style = {styles.saveButton}
        //     >
        //     <Text style={styles.textChange}>保存</Text>
        //     </TouchableOpacity>
        // </View>
        <KeyboardAwareScrollView>

        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>账号名</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.account}
                        editable={false}
                        onChangeText={(text) => this.setState({
                            storeName: text
                        })}
            /> 
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>密码</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.state.password}
             secureTextEntry={true}
             editable={this.state.canChange}
             onChangeText={(text) => this.setState({
                password: text
            })}
            />
            
        </View>
        </TouchableOpacity>

        <View style={styles.buttonview}>
        <TouchableOpacity
                onPress={this.onPressChange}
                style = {styles.changeButton}
            >
            <Text style={styles.textChange}>修改信息</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.onPressSave}
                style = {styles.saveButton}
            >
            <Text style={styles.textChange}>保存</Text>
            </TouchableOpacity>
        </View>

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
        height:50,
    },
    touch1:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:50,
    },
    content: {
        height: 44,
        flexDirection: 'row',
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

export default AccountComponent


