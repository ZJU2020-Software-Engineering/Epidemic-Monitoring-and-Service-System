import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { Card } from 'react-native-paper';
import { Flex } from '@ant-design/react-native';
import { Feather } from '@expo/vector-icons';
import Post from './PostList'

function MyTar({ title, name }) {
    return (
        <View alignItems='center' style={{ textAlign: 'center' }}>
            <Feather name={name} color='#2096F3' size={22} />
            <Text style={{ fontSize: 15, color: '#828282' }}>{title}</Text>
        </View>
    )
}

export default function Home({ navigation }) {
    console.log('Home')
    let username = navigation.getParam('username', 'Can not get username');
    console.log(username)
    return (
        <View style={styles.container}>
            <Card style={{ marginTop: 25, padding: 10, borderRadius: 15, elevation: 3 }}>
                <Flex>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}
                        onPress={() => {
                            console.log("navigating to CreatePost");
                            navigation.navigate("CreatePost", { username: username, userID: '2' });
                        }}>
                        <MyTar title="新建" name="plus" />
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}
                        onPress={() => {
                            console.log("navigating to Search");
                            navigation.navigate("Search", { username:username, userID: '2' })
                        }}>
                        <MyTar title="搜索" name="search" />
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}
                        onPress={() => {
                            console.log("navigating to Mail");
                            navigation.navigate("Mail", { username: username, userID: '2' })
                        }}>
                        <MyTar title="私信" name="mail" />
                    </Flex.Item>
                    <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}
                        onPress={() => {
                            console.log("navigating to User");
                            navigation.navigate("User", { username: username, userID: '2' })
                        }}>
                        <MyTar title="个人中心" name="user" />
                    </Flex.Item>
                </Flex>
            </Card>
            <Card style={{ marginTop: 25, padding: 10, borderRadius: 15, elevation: 3 ,height:425}}>
                <Post navigation={navigation} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft:10,
        paddingRight:10
    },
});