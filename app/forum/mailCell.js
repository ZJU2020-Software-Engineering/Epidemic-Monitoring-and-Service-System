import React, { Component, useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { makeFetch, host, port, httpRequest, formatDate } from './utls';
import CardView from 'react-native-cardview';
import Collapsible from 'react-native-collapsible';

export default function MailCell({ data }) {
    var name = data.user_name;
    var content = data.content;
    var date = formatDate(data.update_date);
    const [isCollapsed, changeCollapsed] = useState(true)
    console.log(data)
    return (
        <View>
            <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
                <View style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => changeCollapsed(!isCollapsed)}>
                        <View style={styles.head}>
                            <Text style={styles.head_text}>寄信人：{name}       日期：{date}</Text>
                        </View>
                        <Collapsible collapsed={isCollapsed}>
                            <View style={styles.content}>
                                <Text style={styles.content_text}>{content}</Text>
                            </View>
                        </Collapsible>
                    </TouchableOpacity>
                </View>
            </CardView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        padding:10,
        width: 350,
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    content_text: {
        fontSize: 14,
    },
    head: {
        height: 35,
    },
    head_text: {
        fontSize: 16,
    },
});