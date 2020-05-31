import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function AllComponent({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={ () => navigation.navigate("SignUpScreen") }
            style={styles.btnLogin}
            >
                <Text style={styles.textLogin}>志愿报名</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => navigation.navigate("ActivityScreen") }
            style={styles.btnLogin}
            >
                <Text style={styles.textLogin}>已报名活动列表</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ () => navigation.navigate("OrderScreen") }
            style={styles.btnLogin}
            >
                <Text style={styles.textLogin}>志愿配送订单列表</Text>
            </TouchableOpacity>
        </View>
    )
}


var styles = StyleSheet.create({
    container:{
        marginTop:200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
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
    textLogin: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    
})
