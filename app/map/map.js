import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank, SegmentedControl, ListView } from '@ant-design/react-native';
import Analysis from './components/dataAnalysis/App'
import TotalDisplayChina from "./components/TotalDisplayChina";
import TotalDisplayWorld from "./components/TotalDisplayWorld";

export default class Map extends React.Component {

    constructor(){
      super(...arguments);
    }

    _scroll;
    render(){
      return (
        <ScrollView ref={(scroll)=>this._scroll = scroll}>
        <View onLayout={event=>{this.cnlayoutY = event.nativeEvent.layout.y}}>
            <WingBlank style={{
                marginTop: 50,   
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <Flex>
                    <Flex.Item>
                        <Button type="primary" onPress={()=>{this._scroll.scrollTo({x:0,y:this.cnlayoutY});}}>中国疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.worldlayoutY});}}>世界疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.datalayoutY});}}>数据分析</Button>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        </View>

        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            <TotalDisplayChina />
        </View>
        
        <View onLayout={event=>{this.worldlayoutY = event.nativeEvent.layout.y}}>
            <WingBlank style={{
                marginTop: 50,   
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                <Flex>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.cnlayoutY});}}>中国疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="primary" onPress={()=>{this._scroll.scrollTo({x:0,y:this.worldlayoutY});}}>世界疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.datalayoutY});}}>数据分析</Button>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        </View>
        
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            <TotalDisplayWorld />
        </View>
        
        <View onLayout={event=>{this.datalayoutY = event.nativeEvent.layout.y}}>
            <WingBlank style={{
                marginTop: 50,   
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                }}>
                <Flex>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.cnlayoutY});}}>中国疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button onPress={()=>{this._scroll.scrollTo({x:0,y:this.worldlayoutY});}}>世界疫情</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button type="primary" onPress={()=>{this._scroll.scrollTo({x:0,y:this.datalayoutY});}}>数据分析</Button>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        </View>

        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
            <Analysis/>  
            {/* <View style={{ backgroundColor: '#ff9c6e', height: 1000 }} /> */}
        </View>
        
        <View style={{ paddingTop: 10, paddingHorizontal: 10,paddingBottom:30 }}>
            <Button type="primary" onPress={()=>{this._scroll.scrollTo({x:0,y:0});}}>返回顶部</Button>
        </View>

        </ScrollView>
      );
    }
  }
  
