import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,ScrollView,Dimensions,ListView,FlatList,RefreshControl } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {SceneMap, TabView,TabBar} from "react-native-tab-view";


let windowWidth = Dimensions.get('window').width;
let windowheight = Dimensions.get('window').height;


var data1 = [
        {
            "key":"1",
            "name": "食天一隅",
            "tag": "餐食",
            "time": "6:30-12:00",
            "addr":"XX楼3F",
            "distance":"2km",
            "img_path":require('./assets/nice_4.png')
        },
        {
            "key":"2",
            "name": "一食堂",
            "tag": "餐食",
            "time": "6:30-12:00",
            "addr":"XX楼1F",
            "distance":"300m",
            "img_path":require('./assets/nice_5.png')
        },
        {
            "key":"3",
            "name": "二食堂",
            "tag": "餐食",
            "time": "6:30-17:00",
            "addr":"XX楼2F",
            "distance":"5km",
            "img_path":require('./assets/nice_3.png')
        },
        {
            "key":"4",
            "name": "麦斯威",
            "tag": "茶饮",
            "time": "8:30-20:00",
            "addr":"曹楼1F",
            "distance":"400m",
            "img_path":require('./assets/nice_0.png')
        },
        {
            "key":"5",
            "name": "清真食堂",
            "tag": "餐食",
            "time": "8:30-20:00",
            "addr":"曹楼1F",
            "distance":"400m",
            "img_path":require('./assets/nice_6.png')
        },
        {
            "key":"6",
            "name": "三食堂",
            "tag": "餐食",
            "time": "8:30-20:00",
            "addr":"曹楼1F",
            "distance":"400m",
            "img_path":require('./assets/nice_1.png')
        },
        {
            "key":"7",
            "name": "四食堂",
            "tag": "餐食",
            "time": "8:30-20:00",
            "addr":"曹楼1F",
            "distance":"400m",
            "img_path":require('./assets/nice_7.png')
        }


    ];


var data2 = [
        {
            "key":"1",
            "name": "全家",
            "tag": "便利",
            "time": "6:30-12:00",
            "addr":"XX楼3F",
            "distance":"2km"
        },
        {
            "key":"2",
            "name": "物美商城",
            "tag": "超市",
            "time": "6:30-12:00",
            "addr":"XX楼1F",
            "distance":"300m"
        },
        {
            "key":"3",
            "name": "大润发",
            "tag": "超市",
            "time": "6:30-17:00",
            "addr":"XX楼2F",
            "distance":"5km"
        },
        {
            "key":"4",
            "name": "启真教育超市",
            "tag": "便利",
            "time": "8:30-20:00",
            "addr":"曹楼1F",
            "distance":"400m"
        }


    ];

var data3 = [
      {
          "key":"1",
          "name": "校医院药房",
          "tag": "药物",
          "time": "6:30-12:00",
          "addr":"XX楼3F",
          "distance":"2km"
      },
      {
          "key":"2",
          "name": "家家健康",
          "tag": "连锁",
          "time": "6:30-12:00",
          "addr":"XX楼1F",
          "distance":"300m"
      },
      {
          "key":"3",
          "name": "人民医院药房",
          "tag": "处方",
          "time": "6:30-17:00",
          "addr":"XX楼2F",
          "distance":"5km"
      }


  ];

export default class HomeComponent extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            index: 0,
            routes:[
                { key: 'first', title: '餐饮外卖' },
                { key: 'second', title: '日常用品' },
                { key:'third', title: '医疗用品' },
            

            ],
        
        };
    }
    
    render(){
    return (
        <ScrollView>
        
            <StatusBar
                barStyle="light-content"
            />
            <View style={styles.header}>
                
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('./assets/map.png')}
                    style={styles.map}
                />
                <Text style={styles.address}>浙江大学玉泉校区12舍</Text>
                
            </View>

            <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first:() => <FirstRoute {...this.props} />,
                        second: () => <SecondRoute {...this.props} />,
                        third: () => <ThirdRoute {...this.props} />,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            style={{backgroundColor: "#f5f5f5",
                                shadowColor: "#d4d4d4",
                                shadowOffset: {
                                    width: 0,
                                    height: 1
                                },
                                shadowRadius: 0,
                                shadowOpacity: 1}}
                            getLabelText={({ route }) => route.title}
                            labelStyle={{fontFamily: "PingFangSC-Regular",
                                fontSize:15,
                                }}
                            tabStyle={{height:44}}
                            indicatorStyle={{ backgroundColor: '#4a79e0' }}
                            activeColor={'#4a79e0'}
                            inactiveColor={'#666666'}

                        />
                    }
            />



            

            {/* <Animatable.View style={styles.footer}>
                <FlatList
                data={data}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                    />
                }
            />      
            </Animatable.View> */}

            </ScrollView>

    )
    }

    
}

class FirstRoute extends  Component{
    constructor(){
        super()
    }
    render(){
        return(

            <FlatList
                data={data1}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                    />
                }
            />   
            
        )
    }

    _keyExtractor = (item, index) => item.key;
     
    //列表的每一行
    renderItem({item,index}) {
        return (
        <TouchableOpacity style={styles.touch}
            onPress={ () => this.props.navigation.navigate("StoreDetailScreen",{
                itemId:100,
                otherParam:'cs2017',
            }) }
        >

            <View style={styles.content}>  
            <Image  style={styles.storeimg} source={item.img_path} />
            <View style={styles.destext}>
                <Text style={styles.t1}>{item.name}</Text>
                <TextInput style={styles.tx} value={item.tag} editable={false} ></TextInput>
                <Text style={styles.t2}>{item.addr}</Text>
                <Text style={styles.t3}>营业时间：{item.time}</Text>
                <Text style={styles.t4}>距离您 {item.distance}</Text>

            </View>
                
            </View>
        </TouchableOpacity>
        )
    }

}
class SecondRoute extends  Component{
    constructor(){
        super()
    }
    render(){
        return(

            <FlatList
                data={data2}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                    />
                }
            />   
            
        )
    }

    _keyExtractor = (item, index) => item.key;
     
    //列表的每一行
    renderItem({item,index}) {
        return (
        <TouchableOpacity style={styles.touch}
            onPress={ () => this.props.navigation.navigate("StoreDetailScreen",{
                itemId:100,
                otherParam:'cs2017',
            }) }
        >

            <View style={styles.content}>  
            <Image  style={styles.storeimg} source={require('./assets/store.png')} />
            <View style={styles.destext}>
                <Text style={styles.t1}>{item.name}</Text>
                <TextInput style={styles.tx} value={item.tag} editable={false} ></TextInput>
                <Text style={styles.t2}>{item.addr}</Text>
                <Text style={styles.t3}>营业时间：{item.time}</Text>
                <Text style={styles.t4}>距离您 {item.distance}</Text>

            </View>
                
            </View>
        </TouchableOpacity>
        )
    }
}
class ThirdRoute extends  Component{
    constructor(){
        super()
    }
    render(){
        return(

            <FlatList
                data={data3}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this._keyExtractor}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                    />
                }
            />   
            
        )
    }

    _keyExtractor = (item, index) => item.key;
     
    //列表的每一行
    renderItem({item,index}) {
        return (
        <TouchableOpacity style={styles.touch}
            onPress={ () => this.props.navigation.navigate("StoreDetailScreen",{
                itemId:100,
                otherParam:'cs2017',
            }) }
        >

            <View style={styles.content}>  
            <Image  style={styles.storeimg} source={require('./assets/store.png')} />
            <View style={styles.destext}>
                <Text style={styles.t1}>{item.name}</Text>
                <TextInput style={styles.tx} value={item.tag} editable={false} ></TextInput>
                <Text style={styles.t2}>{item.addr}</Text>
                <Text style={styles.t3}>营业时间：{item.time}</Text>
                <Text style={styles.t4}>距离您 {item.distance}</Text>

            </View>
                
            </View>
        </TouchableOpacity>
        )
    }
}

var styles = StyleSheet.create({

    storeimg:{
        width:120,
        height:120
    },
    destext:{
        flexDirection:'col',
        height:120
    },
    t1:{
        marginTop:12,
        marginLeft:12,
        fontSize:18,
        fontWeight: "bold",
    },
    tx:{
        marginTop:8,
        marginLeft:12,
        fontSize:14,
        color:"white",
        textAlign:"center",
        backgroundColor:'orange',
        borderBottomEndRadius:2,
        width:40,

    },
    t2:{
        marginTop:4,
        marginLeft:12,
        fontSize:12,
        color:"#C0C0C0",
        fontWeight: "bold",
    },
    t3:{
        marginTop:4,
        marginLeft:12,
        fontSize:12,
        color:"#C0C0C0",
        fontWeight: "bold",
    },
    t4:{
        marginTop:5,
        marginLeft:12,
        fontSize:12,
        color:"#DB7093",
        fontWeight: "bold",
    },


    map:{
        width: 45,
        height: 45,
        borderRadius: 50,
        marginTop:45
       
    },
    content: {
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    touch:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:120,
        width:windowWidth,
    },
    header: {
        height:100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        backgroundColor:'#2c3e50',
    },
    
    address:{
        color:"#FFF",
        fontSize:16,
        marginTop:45

    },
    
    
    
})