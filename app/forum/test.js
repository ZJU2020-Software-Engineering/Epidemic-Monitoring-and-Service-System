import React, { Component, useState } from 'react';
import { FlatList, Button, View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { host, port } from "./utls";
import { AppLoading } from 'expo';


export default function TestPage({ navigation }) {
    let name = 'image.png'
    const [isReady, changeReady] = useState(false)
    const [img, setImg] = useState('')
    let url = host + ":" + port + '/public/' + name
    console.log(url)
    return (
        <Image
            source={{ uri:url }}
            style={{width: 40, height: 40, marginLeft: 8, marginRight: 8}}
        />
    )

}


const styles = StyleSheet.create({
    content_container: {
        paddingTop: 25,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button_delete: {
        paddingLeft: 100,
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    button_view: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingBottom: 10
    },
    title_text: {
        paddingTop: 10,
        fontSize: 28,
    },
    author_text: {

        fontSize: 20,
    },
    flatlist: {
        paddingTop: 10,
        paddingLeft: 10,
        flex: 1
    },
    item: {
        paddingTop: 10,
        fontSize: 18,
    },
    reply_user:
    {
        fontSize: 18,
        paddingBottom: 10
    },
    replies: {
        paddingBottom: 10,
        fontSize: 18
    },
    input: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between'
    }
});