import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, RefreshControl, ScrollView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { fetch } from "whatwg-fetch";
import QRCode from 'react-native-qrcode-svg';
import * as WebBrowser from 'expo-web-browser';
import { Icon, Button } from '@ant-design/react-native';
import Cache from '../screen/Cache';

const devWidth =  Dimensions.get('window').width;
const devHeight =  Dimensions.get('window').height;

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "D+": this.getDate(), //日
    "d+": this.getDate(), //日
    "h+": this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

//TODO: 今天没打卡的情况
export default function HealthCodeScreen({navigation, route}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getHealthcode();
    wait(2000).then(() => {setRefreshing(false)});
  }, [refreshing]);

  const [loading, setLoading] = useState(true);
  const [codeContent, setCodeContent] = useState('none');
  const [qrcColor, setQRCColor] = useState('#7f8c8d');
  const [err, setErr] = useState(false);
  const [nRepo, setNRepo] = useState(false);

  function getHealthcode() {
    setErr(false);
    setLoading(true);
    setQRCColor('#7f8c8d')
    fetch(
        'http://182.92.243.158:8004/request/clock/qrcode/get',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'username':Cache.get('account'),
              })
        })
        .then((res) => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            if(data.result == 'E'){setErr(true); return;}
            else{
              setLoading(false);
              setRefreshing(false);
              if(data.result == 'Z'){setNRepo(true); return;}
              else{
                setCodeContent(data.message.qrsession);
                if(data.message.state == 2) setQRCColor('#c0392b');
                else if(data.message.state == 1) setQRCColor('#e67e22');
                else if(data.message.state == 0) setQRCColor('#639e60');
                return;
              }
            }
        })
        .catch(e => { console.log(e); setErr(true); return; })
  }

  useEffect(getHealthcode, [])

  function handleHelp1Press() {
    navigation.navigate('Suggestion');
  }

  function handleHelp2Press() {
    WebBrowser.openBrowserAsync(
      'http://www.gov.cn/fuwu/zt/yqfkzq/index.htm'
    );
  }

  const colorArray = ['#2f95dc']

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={colorArray}/>
        }
      >
        <View style={{
          top: 0,
          height: devHeight/3,
          backgroundColor: qrcColor,
          width: devWidth,
        }}>
          <View style={{
            marginTop: devHeight/40,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>

          <TouchableOpacity onPress={() => navigation.navigate('DailyReport')}>
          <View style={{alignItems: 'center'}}>
            <Icon
              name='audit'
              color="white"
              size={devHeight/18}
            />
            <Text style={{color: 'white', fontSize: 18, paddingTop: 10}}>健康打卡</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Reminder')}>
          <View style={{alignItems: 'center'}}>
            <Icon
              name='bell'
              color="white"
              size={devHeight/18}
            />
            <Text style={{color: 'white', fontSize: 18, paddingTop: 10}}>打卡提醒</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Scanner')}>
          <View style={{alignItems: 'center'}}>
            <Icon
              name='scan'
              color="white"
              size={devHeight/18}
            />
            <Text style={{color: 'white', fontSize: 18, paddingTop: 10}}>扫描健康码</Text>
          </View>
          </TouchableOpacity>

          </View>
        </View>

        <View style={styles.shadowContainer}>
          <View style={{marginTop: 20, justifyContent: 'flex-start', flexDirection: 'row'}}>
                      <Text style={{ color: '#444', fontSize: 22, flex: 2, paddingLeft: 30 }}>{Cache.get('account')}</Text>
            <Text style={{color: '#444', fontSize: 22, flex: 3, paddingRight:30}}>{new Date().Format('MM月dd日 HH:mm:ss')}</Text>
          </View>
          <View style={{marginTop: devHeight/16}}>
            {err ? (
                <Text style={{fontSize: 20, marginTop:67, marginBottom:70}}>
                  网络错误，无法获取用户信息
                </Text>
                ) : (
                  loading ? (
                  <Text style={{fontSize: 20, marginTop:67, marginBottom:70}}>
                    加载中，请稍候
                  </Text>
                  ) : (
                    nRepo ? (
                    <Text style={{fontSize: 20, marginTop:67, marginBottom:70}}>
                      尚未上报每日健康状况
                    </Text>
                    ) : (
                    <QRCode value={codeContent} color={qrcColor} size={160} />)
                  )

            )}
          </View>
          <View style={{marginTop: 40, marginBottom: 20, justifyContent: 'center', alignItems: "center", flexDirection: 'row'}}>
            <View style={{flex:1, alignItems: "center"}}>
              <TouchableOpacity onPress={handleHelp1Press}>
                <Text style={{color: '#2f95dc', fontSize: 18, flex: 1, paddingLeft: 30}}>防疫建议</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: "center"}}>
              <TouchableOpacity onPress={handleHelp2Press}>
                <Text style={{color: '#2f95dc', fontSize: 18, flex: 1, paddingRight:30}}>疫情防控</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.shadowContainer2}>
          <Text style={{color: '#2f95dc', fontSize: 21, textAlignVertical:'center',}}>下拉屏幕刷新健康码</Text>
        </View>
      </ScrollView>



    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#fafafa',
  },
  container2: {
    position: 'relative',
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#fafafa',
    marginTop: 0,
    left: 0,
    marginRight: 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    paddingTop: 15,
  },
  topViewContainer: {
    height: devHeight/4,
    backgroundColor:'#639e60',
    width: devWidth,
    justifyContent:'center',
    alignItems:'center'
  },
  bottomViewContainer: {
    flex: 7,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  shadowContainer: {
    position: 'absolute',
    top: devHeight/7+4,
    left: devWidth/32,
    right: devWidth/32,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      android: {
        elevation: 20,
        borderColor: 'rgba(0,0,0,0.02)',
        borderRadius: 6,
        borderWidth: 1,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: devHeight/32,
  },
  shadowContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: devHeight*3/4,
    left: 10,
    right: 10,
    height: 60,

    backgroundColor: '#fbfbfb',
  },
  nametimeContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});
