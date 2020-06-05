import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { makeFetch, host, port, httpRequest } from './utls';
import MailCell from './mailCell';

var data = [
    { name: 'aaa', date: '2020-5-1', content: 'this is test 1' },
    { name: 'bbb', date: '2020-5-2', content: 'this is test 2' },
    { name: 'ccc', date: '2020-5-3', content: 'this is test 3' },
    { name: 'ddd', date: '2020-5-4', content: 'this is test 4' },
];

export default function mailList({ navigation }) {
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
            />
            <Button title="Create" onPress={() => navigation.navigate('mailCreate')}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});