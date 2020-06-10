import React from 'react';
import Cache from '../screen/Cache';
import {Icon} from 'react-native-elements';
import { Tabs, WingBlank, WhiteSpace, List, Button, Flex, Modal, Provider } from '@ant-design/react-native';
import { StyleSheet, Image, ScrollView, Text, View, TextInput, Alert, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GetTenantInfo, UpdateTenant} from './DatabaseClient';

export class UserHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account: Cache.get('account'),
            userName: Cache.get('user name'),
            address: Cache.get('address'),
            saveBtnShow: false,
        }
    }

    componentDidMount() {
        GetTenantInfo(this.state.account).then((response)=>{console.log(response);this.successShow(response[0])});
    }
    successShow(response) {
        this.setState({
            contact: response.contact,
            address: response.address,
            is_volunteer: (response.v_id==null)?'否':'是',
        });
    }

    checkContact(str){
        var email= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var phone= /^1[3456789]\d{9}$/;
        var check= email.test(str)||phone.test(str);
        return check;
    }

    render(){
        return(
            <Provider>
            <KeyboardAwareScrollView>
                <WhiteSpace />
                <WhiteSpace />
                <Image style={styles.backgroundSize} source={{uri:'https://user-images.githubusercontent.com/37875411/82528388-31f27280-9b6b-11ea-9829-b8f3b19d0f83.png'}}></Image>
                <TouchableOpacity style={styles.touch}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            账户
                        </Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <TextInput  style={{color: '#999999', width: 200, textAlign: 'right'}}
                                    defaultValue = {this.state.account}
                                    editable = {false}
                                    onChangeText = {(text) => this.setState({account: text})}
                        />
                    </View>
                </TouchableOpacity>
                <WhiteSpace />
                <TouchableOpacity style={styles.touch}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            用户名
                        </Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <TextInput  style={{color: '#999999', width: 200, textAlign: 'right'}}
                                    defaultValue = {this.state.userName}
                                    editable = {false}
                                    onChangeText = {(text) => {this.setState({userName: text})}}
                        />
                    </View>
                </TouchableOpacity>
                <WhiteSpace />
                <TouchableOpacity style={styles.touch}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            居住地址
                        </Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <TextInput  style={{color: '#999999', width: 200, textAlign: 'right'}}
                                    defaultValue = {this.state.address}
                                    editable = {true}
                                    onChangeText = {(text) => {
                                        this.setState({address: text, saveBtnShow: true});
                                    }}
                        />
                    </View>
                </TouchableOpacity>
                <WhiteSpace />
                <TouchableOpacity style={styles.touch}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            联系方式
                        </Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <TextInput  style={{color: '#999999', width: 200, textAlign: 'right'}}
                                    defaultValue = {this.state.contact}
                                    editable = {true}
                                    onChangeText = {(text) => {
                                        this.setState({contact: text, saveBtnShow: true});
                                        
                                    }}
                        />
                    </View>
                </TouchableOpacity>
                <WhiteSpace />
                <TouchableOpacity style={styles.touch}>
                    <View style={styles.content}>
                        <Text style={styles.h2}>
                            是否是志愿者
                        </Text>
                        <View style={{flex: 1, backgroundColor: 'blue'}} />
                        <TextInput  style={{color: '#999999', width: 200, textAlign: 'right'}}
                                    defaultValue = {this.state.is_volunteer}
                                    editable = {false}
                                    onChangeText = {(text) => this.setState({is_volunteer: text})}
                        />
                    </View>
                </TouchableOpacity>
                {
                    this.state.saveBtnShow && 
                    <View>
                        <Button onPress={async()=>{
                            
                            var check=this.checkContact(this.state.contact);
                            console.log(check);
                            if(check){
                                let result=await UpdateTenant({contact:this.state.contact, address:this.state.address, userName:this.state.account});
                                if(result=='Y'){
                                    this.setState({saveBtnShow:false});
                                    GetTenantInfo(this.state.account).then((response)=>{console.log(response);this.successShow(response[0])});
                                    Modal.alert('修改成功', '修改成功', [
                                        {
                                            text: '确认',
                                            style: 'cancel',
                                        }
                                    ]);
                                }
                                else{
                                    this.setState({saveBtnShow:false});
                                    Modal.alert('保存失败', '数据库更新失败', [
                                        {
                                            text: '确认',
                                            style: 'cancel',
                                        }
                                    ]);
                                }
                            }
                            else{
                                Modal.alert('保存失败', '联系方式格式错误', [
                                    {
                                        text: '确认',
                                        style: 'cancel',
                                    }
                                ]);
                                this.setState({saveBtnShow:false});
                            }
                        }}>保存修改</Button>
                    </View>
                }
            </KeyboardAwareScrollView>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    backgroundSize:{
        height:Dimensions.get('window').width*9/16,
        width: Dimensions.get('window').width,
    },
    h0: {
        fontSize: 40,
        color: '#06C1AE',
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    h2: {
        fontSize: 15,
        color: '#222222',
    },
    p: {
        fontSize: 15,
        color: '#777777',
    },
    tip: {
        fontSize: 13,
        color: '#999999'
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
});