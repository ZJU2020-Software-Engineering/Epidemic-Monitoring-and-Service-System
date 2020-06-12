import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import {TemperatureChart} from './TemperatureChart';
import SymptomTable from './SymptomList';

export default function ChartScreen({ route }) {

    function trans1(originData){
      var temp = [];
      var res = [];
      for(let i=0; i<originData.length; i++){
        temp = [];
        temp.push(originData[i].date.substring(0, 10));
        temp.push(originData[i].temperature);
        res.push(temp);
      }
      return res;
    }
    function trans2(originData){
      var flag = false;
      var temp = []
      var temp2 = {}
      var res = [];
      for(let i=0; i<originData.length; i++){
        temp = [];
        temp2 = {};
        if(originData[i].alimentarycannal == "1"){
          temp.push("消化道症状");
          flag = true;
        }
        if(originData[i].chestdistress == "1") {
          temp.push("胸闷");
          flag = true;
        }
        if(originData[i].cough == "1") {
          temp.push("咳嗽");
          flag = true;
        }
        if(originData[i].temperature >= 37.2) {
          temp.push("发烧");
          flag = true;
        }
        if(!flag) temp.push("无明显症状")
        temp2["title"] = originData[i].date.substring(0, 10);
        temp2["data"] = temp;
        res.push(JSON.parse(JSON.stringify(temp2)));
      }
      return res;
    }
    const datax = trans1(route.params.datas);
    console.log(datax);
    const datat = trans2(route.params.datas);
    console.log(datat);
    //if(route.params.info)

    return (

          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>

            <TemperatureChart data = {datax} />
            <SymptomTable data = {datat} />

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
