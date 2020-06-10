import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { makeFetch, host, port, httpRequest, formatDate } from './utls';
import MailCell from './mailCell';

export default function mailList({ navigation}) {
    const [isReady, setReady] = useState(false);
    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(false)
    console.log('mail list')
    let url = host + ':' + port + '/forum/mail';
    let user_id = navigation.getParam('userID','Can not get userID')
    let user_name = navigation.getParam('username','Can not get username')
    let response = makeFetch(url, 'POST', { username: user_name })

    if (!isReady || refresh) {
        response.then((value) => {
            console.log(value)
            if (value.state == 'success') {
                setData(value.mails)
                setReady(true)
                setRefresh(false)
            }
        })
    }
    if (isReady) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View >
                            <MailCell data={item} />
                        </View>
                    )
                    }
                    refreshing={refresh}
                    onRefresh={() => {
                        setRefresh(true);
                    }}
                />
                <Button title="Create" onPress={() => navigation.navigate('CreateMail',{userID:user_id,username:user_name})}></Button>
            </View>
        )
    }
    else {
        return (<AppLoading />)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});