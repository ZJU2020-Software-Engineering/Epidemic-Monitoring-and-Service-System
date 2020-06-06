import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Heading2 } from './Text'
import { GetMerchantInfo } from './DatabaseClient';

export class StoreComponent extends Component{
    constructor(props){
        super(props);
        let name = props.navigation.state.params.account;  
        console.log('name:' + name);
        this.state = {
            canChange: false,
            storeName: name,
        };
    }
    componentDidMount() {
        GetMerchantInfo(this.state.storeName).then((response)=>{this.successShow(response[0])});
    }
    successShow(response) {
        this.setState({
            address: response.address,
            certificate: response.corporateIdentity,
            owner_name: response.name,
            owner_card: response.businessLicense,
            description: response.collectionInformation
        });
    }
    render() {
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
                    <Heading2>经营者</Heading2>
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
                    <Heading2>经营场所</Heading2>
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
                    <Heading2>统一社会信用代码</Heading2>
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
                    <Heading2>经营范围</Heading2>
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
            </KeyboardAwareScrollView>
        );
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
});
