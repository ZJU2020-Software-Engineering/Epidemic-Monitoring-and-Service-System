import React from 'react'
import { Text, Image, View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cache from '../screen/Cache';
import { GetMerchantInfo } from './DatabaseClient';


let name = Cache.get('username');
export class SplashComponent extends React.Component {
    constructor(props){
        super(props);
    // console.log(name);
        this.state={
            storeName: name
        }
    }
    // console.log(name);
    componentDidMount() {
        GetMerchantInfo(this.state.storeName).then((response)=>{this.successShow(response[0])});
    }
    successShow(response) {
        // console.log(response);
        this.setState({
            img_uri: response.imgs
        });
    }
    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar barStyle="light-content"/>
    
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        // source={require('./assets/logo.png')}
                        source={{uri:this.state.img_uri}}
                        style={styles.logo}
                    />
                    <Text style={styles.account}>{name}</Text>
                </View>
    
                <Animatable.View style={styles.footer} animation="bounceInUp" duration={1000}>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("AccountScreen", {account: {name}})}
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>修改密码</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity> */}
    
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("StoreScreen", {account: this.state.storeName})}
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>店铺信息</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("ConnectScreen", {account: {name}}) }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>联系方式</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("PayScreen") }
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>付款信息</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("CurrentOrderScreen", {account: {name}}) }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>订单列表</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>
    
                    <TouchableOpacity
                        onPress={ () => this.props.navigation.navigate("ItemScreen", {account: {name}}) }
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>商品列表</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>
    
                </Animatable.View>
            </KeyboardAvoidingView>
        );
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#2c3e50",
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop:25
    },
    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    account:{
        color:"#FFF",
        marginTop : 10,

    },
    footer: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    btnLogin: {
        marginTop: 10,
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 0,
        backgroundColor: "#6495ED",
        borderRadius: 20,
        flexDirection: 'row',
        

    },
    btnNewUser: {
        marginTop: 10,
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        borderRadius: 20,
        flexDirection: 'row',

    },
    textLogin: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    arrow:{
        width: 18,
        height: 18,
        marginLeft: 140,
    },
    arrow2:{
        width: 18,
        height: 18,
        marginLeft: 180,
    }
});