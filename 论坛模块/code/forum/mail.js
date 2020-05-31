import React, { Component, useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './App'
import { makeFetch, host, port, httpRequest } from './utls';

export function mailList({navigation}) {
	const { signOut } = React.useContext(AuthContext);
	var data = [
		{name:'aaa',date:'1/1'},
		{name:'bbb',date:'1/2'},
		{name:'ccc',date:'1/3'},
		{name:'ddd',date:'1/4'},
	];
    return(
        <View style={styles.container}> 
            <FlatList
                data={data}
                renderItem={({item}) => 
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {navigation.navigate('mailDetail',{
                            itemName:item.name
                            });
                            }}>
                        <Text style={styles.item}>{item.date}:{item.name}</Text>
                    </TouchableOpacity>
                }
            />
			<Button title ="Create" onPress={() =>navigation.navigate('mailCreate')}></Button>
        </View>
    )
}

export function mailDetail({route}){
    const {itemName} = route.params;
    return(
        <View style={styles.container}>
            <Text>This is {itemName}</Text>
        </View>
    )
}

export async function sendMail(receiver,content,navigation){
	console.log("sendmail")
	console.log(receiver,content)
	url = host + ':' + port +  '/forum/mail/create'
	data = {receiver:receiver, content:content}
	response = await makeFetch(url, 'POST', data)
	console.log(response)
	if (response['state']=='success'){
		Alert.alert('Success','Create success')
	}
	else{
		Alert.alert('Error','Create failed')
	}
	navigation.navigate('mailList')
}

export function mailCreate({navigation}){
	const [receiver, changeReceiver] = useState('')
	const [content, changeContent] = useState('')
    return(
		<KeyboardAvoidingView style={styles.container} enabled behavior="padding">
			<View style={styles.container}>
				<Text>Receiver:</Text>
				<TextInput 
					style={styles.textInput}
					value={receiver}
					onChangeText={text => changeReceiver(text)}
				/>
				<Text>Content:</Text>
				<TextInput 
					style={styles.multiTextInput}
					value={content}
					onChangeText={text => changeContent(text)}
					multiline={true}
					numberOfLines={4}
					maxLength={80}
				/>
				<Button title="Send" onPress={() => {
					//sendMail(receiver,content,navigation)
					Alert.alert('Info message','Create success')
					}}/>
			</View>
		</KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
	  },
	textInput:{
		width:300,
		height:40,
		borderColor:'#36292f',
		borderWidth:1,
	},
	multiTextInput:{
		width:300,
		height:80,
		borderColor:'#36292f',
		borderWidth:1,
	},
  });