import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,ScrollView,Dimensions,ListView,FlatList,RefreshControl } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';


let windowWidth = Dimensions.get('window').width;
let windowheight = Dimensions.get('window').height;

let touchlenth = windowWidth*0.8


var data = [
        {
            "key":"1",
            "id": "01",
            "start": "曹楼",
            "end": "12舍",
            "time":"10:00",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"李铁柱",
            "state":"配送中"
           
        },
        {
            "key":"2",
            "id": "02",
            "start": "一食堂",
            "end": "12舍",
             "time":"13:00",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"张全蛋",
            "state":"配送中"
           
        },
         {
            "key":"3",
            "id": "03",
            "start": "麦斯威二楼",
            "end": "12舍",
             "time":"15:35",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"小明",
            "state":"配送中"
           
        },
         {
            "key":"4",
            "id": "04",
            "start": "校医院",
            "end": "12舍",
             "time":"12:15",
            "itemlist":"外科口罩30个",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"小红",
            "state":"配送中"
           
        },
        {
            "key":"5",
            "id": "05",
            "start": "文一路45号",
            "end": "8舍",
            "time":"12:15",
            "itemlist":"麻辣香锅一份",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"小蓝",
            "state":"配送中"
           
        },
                 {
            "key":"6",
            "id": "06",
            "start": "西溪路2号",
            "end": "31舍",
             "time":"12:15",
            "itemlist":"汤圆一份",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"张全蛋",
            "state":"配送中"
           
        },
        {
            "key":"7",
            "id": "07",
            "start": "紫金港校区",
            "end": "12舍",
            "time":"12:15",
            "itemlist":"消毒酒精10L",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"小白",
            "state":"配送中"
           
        },
        {
            "key":"8",
            "id": "08",
            "start": "黄龙广场",
            "end": "12舍",
            "time":"12:15",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"DDD",
            "state":"配送中"
           
        },
                 {
            "key":"9",
            "id": "09",
            "start": "凤起路地铁口",
            "end": "12舍",
             "time":"9:00",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"CCC",
            "state":"配送中"
           
        },
        {
            "key":"10",
            "id": "10",
            "start": "曹楼",
            "end": "12舍",
            "time":"12:00",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"BBB",
            "state":"配送中"
           
        },
        {
            "key":"11",
            "id": "11",
            "start": "道源路3号",
            "end": "12舍",
            "time":"16:20",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"AAA",
            "state":"配送中"
           
        },
        {
            "key":"12",
            "id": "12",
            "start": "道源路3号",
            "end": "12舍",
            "time":"16:20",
            "itemlist":"炸鸡一份 可乐一瓶",
            "price":"23.8元",
            "contact":"1888892XXXX",
            "buyer":"AAA",
            "state":"配送中"
           
        },
        


    ];


export default class HomeComponent extends Component{

        constructor(props){
          super(props);
          
          this.state = {
            
          };
        }
        
        render(){
          return (
            <View>
          
                <StatusBar
                    barStyle="light-content"
                />
                <View style={styles.header}>
                    
                   
                    <Text style={styles.address}>待配送订单列表</Text>
                    
                </View>

                <ScrollView >

                <View style={styles.footer}>
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
                <View style={{height:windowheight*0.2}}></View>  
                </View>

                </ScrollView>
          </View>

        )
        }

              _keyExtractor = (item, index) => item.key;

              componentDidMount() {

              }
            

              //列表的每一行
              renderItem({item,index}) {
                  return (
                 <TouchableOpacity style={styles.touch}
                        onPress={ () => this.props.navigation.navigate("OrderDetailScreen",{
                            start:item.start,
                            end:item.end,
                            time:item.time,
                            buyer:item.buyer,
                            contact:item.contact,
                            itemlist:item.itemlist,
                            price:item.price,
                            state:item.state

                        }) }
                    >

                        <View style={styles.content}>  
                        
                        <View style={styles.destext}>
                          <Text style={styles.t1}>{item.id}</Text>
                          <TextInput style={styles.tx} value={"始"} editable={false} ></TextInput>
                          <Text style={styles.t2}>{item.start}</Text>
                          <TextInput style={styles.tx2} value={"终"} editable={false} ></TextInput>
                          <Text style={styles.t2}>{item.end}</Text>
                          <TextInput style={styles.tx3} value={item.time} editable={false} ></TextInput>


                        </View>
                            
                        </View>
                    </TouchableOpacity>
                  )
              }
              //绘制列表的分割线
              renderItemSeparator(){
                  
              }

              //点击列表点击每一行
              clickItem(item,index) {
                  alert(index)
              }

        
  }

var styles = StyleSheet.create({


    destext:{
        flexDirection:'row',
        height:60,
        marginTop:10,
        marginBottom:10
    },
    t1:{
        marginTop:12,
        marginLeft:8,
        fontSize:18,
        fontWeight: "bold",
    },
    tx:{
        marginTop:12,
        marginLeft:10,
        marginBottom:8,
        fontSize:14,
        color:"white",
        textAlign:"center",
        backgroundColor:'orange',
        borderRadius:4,
        width:25,
        height:25,

    },
    tx2:{
        marginTop:12,
        marginLeft:10,
        marginBottom:8,
        fontSize:14,
        color:"white",
        textAlign:"center",
        backgroundColor:'green',
        borderRadius:4,
        width:25,
        height:25,

    },
    tx3:{
        marginTop:12,
        marginLeft:10,
        marginBottom:8,
        fontSize:14,
        color:"white",
        textAlign:"center",
        backgroundColor:'#F08080',
        borderRadius:4,
        width:50,
        height:25,

    },
    t2:{
        marginTop:16,
        marginLeft:8,
        fontSize:14,
        color:"#C0C0C0",
        fontWeight: "bold",
    },
    content: {
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
    touch:{
        backgroundColor:"white",
        borderBottomColor:"white",
        borderRadius:5,
        height:60,
        width:windowWidth*0.9,
        marginTop:10,
        
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
    footer: {
        
        backgroundColor: "#D3D3D3",
        justifyContent: "center",
        alignItems: "center",
     
    },
    
    
})