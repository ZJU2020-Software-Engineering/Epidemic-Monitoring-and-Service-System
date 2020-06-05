import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, Keyboard, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { makeFetch, host, port, httpRequest } from './utls';
import CardView from 'react-native-cardview';

export async function sendMail(receiver, content, navigation) {
    console.log("sendmail")
    console.log(receiver, content)
    url = host + ':' + port + '/forum/mail/create'
    data = { receiver: receiver, content: content }
    response = await makeFetch(url, 'POST', data)
    console.log(response)
    if (response['state'] == 'success') {
        Alert.alert('Success', 'Create success')
    }
    else {
        Alert.alert('Error', 'Create failed')
    }
    navigation.navigate('mailList')
}

export default function mailCreate({ navigation }) {
    const [receiver, changeReceiver] = useState('')
    const [content, changeContent] = useState('')
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { Keyboard.dismiss(); }} >
                <View style={styles.top}>
                    <CardView
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={5}
                        style={styles.card}>
                        <Text style={styles.label}>收信人:</Text>
                        <TextInput
                            style={styles.textInput}
                            value={receiver}
                            onChangeText={text => changeReceiver(text)}
                        />
                    </CardView>
                </View>
                <View style={styles.mid}>
                    <CardView
                        cardElevation={2}
                        cardMaxElevation={2}
                        cornerRadius={5}
                        style={styles.card}>

                        <Text style={styles.label}>内容:</Text>
                        <TextInput
                            style={styles.multiTextInput}
                            value={content}
                            onChangeText={text => changeContent(text)}
                            multiline={true}
                            numberOfLines={4}
                            maxLength={80}
                        />

                    </CardView>
                </View>
                <View style={styles.bottom}>
                    <Button title="Send" onPress={() => {
                        //sendMail(receiver,content,navigation)
                        Alert.alert('Info message', 'Create success')
                    }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        marginTop: 10,
        padding: 10,
        width: 350,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    top: {
        flex: 2,
    },
    mid: {
        flex: 8,
    },
    bottom: {
        flex: 1,
    },
    textInput: {
        height: 40,
        borderRadius: 5,
		borderColor: '#F0F0F0',
		borderWidth: 1,
    },
    multiTextInput: {
        height: 350,
        borderRadius: 5,
		borderColor: '#F0F0F0',
		borderWidth: 1,
    },
    label:{
        fontSize:16,
    }
});