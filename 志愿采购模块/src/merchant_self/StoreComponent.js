import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Heading2, Paragraph } from './Text'

class StoreComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            canChange:false,
            ///////////////////////////////////////// 这里的default value应该从数据库中获得
            ////////////////////////////////////////  搜索主键是前一个页面navigation传入的账号名
            storeName:"麦斯威咖啡吧",
            address:"曹光彪主楼F1",
            certificate:"uia173nc",
            owner_name:"小明",
            owner_card:"33900519750701XXXX",
            description:"东西很多 东西很好恰\n 哈哈哈哈哈哈哈哈哈哈哈"


        };
    }


    onPressChange = ()=>{
        this.setState({canChange:true});
    }
    onPressSave = ()=>{

        this.setState({canChange:false});
        alert("修改已保存")
        //////////////////////////////////////     保存的同时需要加一个更新数据库的操作
    }
    
    
    //通过navigation.getParam来获取传递过来的参数
    itemId = this.props.navigation.getParam('itemId', 'no-values');
    otherParam = this.props.navigation.getParam('otherParam', 'no-values');

    password = "bbbbb";
    

    render(){
    return (
        <KeyboardAwareScrollView>

        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>店铺名称</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.storeName}
                        editable={this.state.canChange}
                        onChangeText={(text) => this.setState({
                            storeName: text
                        })}
            /> 
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>店铺地址</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.state.address}
             editable={this.state.canChange}
             onChangeText={(text) => this.setState({
                owner_name: text
            })}
             
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>法人姓名</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.owner_name}
                        editable={this.state.canChange}
                        onChangeText={(text) => this.setState({
                            owner_name: text
                        })}
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>法人身份证号</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.owner_card}
                        editable={this.state.canChange}
                        onChangeText={(text) => this.setState({
                            owner_card: text
                        })}
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>营业执照编号</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.certificate}
                        editable={this.state.canChange}
                        onChangeText={(text) => this.setState({
                            certificate: text
                        })}
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch1}>
        <View style={styles.content}>  
            <Heading2>经营品类说明</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.state.description}
                        editable={this.state.canChange}
                        multiline={true} 
                        onChangeText={(text) => this.setState({
                            description: text
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

export default StoreComponent



