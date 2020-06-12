import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button } from '@ant-design/react-native';

export default function ScannerScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function getUserinfo(qrsess) {
    fetch(
        'http://182.92.243.158:8004/request/clock/qrcode/scan',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                  'qrsession': qrsess,
              })
        })
        .then((res) => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            if(data.result == 'timeout') alert('过期的健康码，请对方刷新后重试！');
            else if(data.result == 'none') alert('无二维码信息！');
            else if(data.result == 'forbidden') alert('无权限获取信息！');
            else if(data.result == 'N') alert('服务器未知错误！');
            else if(data.result == 'Y'){
              navigation.navigate('Chart', data.message);
            }
            return;
        })
        .catch(e => { console.log(e); alert('网络错误！请检查网络连接'); return; })
  }

  const handleBarCodeScanned = ({ type, data }) => {
    console.log('maybe');
    setScanned(true);
    console.log('here');
    console.log(data);
    getUserinfo(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button onPress={() => setScanned(false)} >
          点击以重新扫描
        </Button>
      )}
    </View>
  );
}
