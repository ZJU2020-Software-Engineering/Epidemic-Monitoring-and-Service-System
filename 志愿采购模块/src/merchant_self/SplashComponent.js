import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashComponent({navigation}) {
        return (

            <KeyboardAvoidingView style={styles.container}>

                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('./assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.account}>账号: abc123456</Text>
                </View>

                <Animatable.View style={styles.footer}
                    animation="bounceInUp"
                    duration={1000}
                >


                    <TouchableOpacity
                        onPress={ () => navigation.navigate("AccountScreen",{
                            itemId:100,
                            otherParam:'cs2017',
                        }) }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>账号管理</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("StoreScreen") }
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>店铺信息</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("ConnectScreen",{
                            itemId:100,
                            otherParam:'cs2017',
                        }) }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>联系方式</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("PayScreen",{
                            itemId:100,
                            otherParam:'cs2017',
                        }) }
                        style={styles.btnNewUser}
                    >
                        <Text style={styles.textLogin}>付款信息</Text>
                        <Image style={styles.arrow} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={ () => navigation.navigate("HomeScreen") }
                        style={styles.btnLogin}
                    >
                        <Text style={styles.textLogin}>设置</Text>
                        <Image style={styles.arrow2} source={require('./assets/cell_arrow.png')} />
                    </TouchableOpacity>


                </Animatable.View>

            </KeyboardAvoidingView>
        )
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
        backgroundColor: "#2c3e50",
        borderRadius: 20,
        flexDirection: 'row',
        

    },
    btnNewUser: {
        marginTop: 10,
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1c40f",
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
})