import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { AppLoading } from 'expo';
import { makeFetch, host, port, httpRequest, formatDate } from './utls';
import MailCell from './mailCell';

export default function mailList({ navigation, route }) {
    const [isReady, setReady] = useState(false);
    const [data, setData] = useState(null);
    const [refresh, setRefresh] = useState(false)
    console.log('mail list')
    console.log(route.params)
    let url = host + ':' + port + '/forum/mail';
    let user_id = route.params.userID;
    let user_name = route.params.username
    let response = makeFetch(url, 'POST', { userID: user_id })

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
                <Button title="Create" onPress={() => navigation.navigate('mailCreate')}></Button>
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