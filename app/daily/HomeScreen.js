import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Icon } from '@ant-design/react-native';


export default function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', alignItems: 'center'}}>
      <Button style={styles.shadowContainer2} onPress={() => navigation.navigate('DailyReport')}>
        健康打卡
      </Button>
      <Button style={styles.shadowContainer2} onPress={() => navigation.navigate('HealthCode')}>
        健康码
      </Button>
      <Button style={styles.shadowContainer2} onPress={() => navigation.navigate('Scanner', {
        usertypre: 1
      })}>
        扫描健康码
      </Button>
      <Button style={styles.shadowContainer2} onPress={() => navigation.navigate('Reminder', {
        isRegistered:true, userId:'hhh', canUserSetTime:true
      })}>
        打卡提醒
      </Button>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  shadowContainer2: {
    position:'relative',
    //flex: 1,
    //top: 20,
    width: 200,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
        borderColor: 'rgba(0,0,0,0.02)',
        borderRadius: 6,
        borderWidth: 1,
      },
    }),
    backgroundColor: '#fbfbfb',
  },
  nametimeContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});
