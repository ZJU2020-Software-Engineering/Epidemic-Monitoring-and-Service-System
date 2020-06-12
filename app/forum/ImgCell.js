import React, { Component, useState } from "react";
import {
    Button,
    View,
    Text,
    TextInput,
    StyleSheet,
    AsyncStorage,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    Image
} from "react-native";

export default function ImgCell({url}) {
    if (url!="") {
        return (
            <Image
                source={{ uri:url }}
                style={styles.thumbnail}
            />
        )
    }
    else{
        return(<Text></Text>)
    }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
	},
	thumbnail: {
		width: 200,
		height: 200,
		resizeMode: "contain"
	  }
});