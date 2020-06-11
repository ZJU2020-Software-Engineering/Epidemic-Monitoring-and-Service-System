import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {TemperatureChart} from './TemperatureChart';
import SymptomTable from './SymptomList';

export default function ChartScreen({ route }) {
    const data1 = route.params.temper;
    const data2 = route.params.symptom;
    //if(route.params.info)
    console.log(route);

    return (

          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>

            <TemperatureChart data = {data1} />
            <SymptomTable data = {data2} />

          </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#fafafa',
  },
  Container2: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
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

// <View style={styles.Container2}>
//   <Text style={{color: '#2f95dc', fontSize: 21, textAlignVertical:'center',}}>下拉屏幕刷新健康码</Text>
// </View>
