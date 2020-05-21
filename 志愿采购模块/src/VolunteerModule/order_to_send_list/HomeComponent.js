import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,ScrollView,Dimensions,ListView,FlatList,RefreshControl } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetOrderToSend,UpdateOrderState,GetMerchantInfo,GetTenantInfo} from '../DatabaseClient';
import { response } from 'express';


let windowWidth = Dimensions.get('window').width;
let windowheight = Dimensions.get('window').height;

let touchlenth = windowWidth*0.8


// var data = [
//         {
//             "key":"1",
//             "id": "01",
//             "start": "曹楼",
//             "end": "12舍",
//             "time":"10:00",
//             "itemlist":"炸鸡一份 可乐一瓶",
//             "price":"23.8元",
//             "contact":"1888892XXXX",
//             "buyer":"李铁柱",
//             "state":"配送中"
           
//         },

//     ];
var data=[];

var m_add,t_add,t_contact,t_account;

export default class HomeComponent extends Component{

        constructor(props){
          super(props);
          
          this.state = {
            
            isMounted: false,
            // v_id: props.navigation.state.params.v_id, //////////////////  需要父页面传递的志愿者id
            v_id:"01",
            
            
          };
        }

        componentDidMount(){
            this.setState({isMounted: true});
            GetOrderToSend(this.state.v_id).then((response)=>{this.successShow(response)});
        }
    
        successShow(response) {
            data = [];
            
            var i;
            i = 0;
            for(i=0;i<response.length;i++)
            {
                GetTenantInfo(response[i].t_id).then((response)=>{
                    t_add = response[0].address;
                    t_contact = response[0].contact;
                    t_account = response[0].account;
                });
                GetMerchantInfo(response[i].t_id).then((response)=>{
                    m_add = response[0].address;
                });
                single_ord = {key:"",start:"",end:"",buyer:"",contact:"",time:"",id:"",item_list:"",price:"",state:""};
                single_ord.key = response[0].id;
                single_ord.start = m_add;
                single_ord.end = t_add;
                single_ord.buyer = t_account;
                single_ord.contact = t_account;
                single_ord.time = response[0].expected_time;
                single_ord.item_list = response[0].item_list;
                single_ord.price = response[0].total_price;
                single_ord.state = response[0].stat;
               
                data.push(single_ord);
                
            }
           
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
        height:80,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        backgroundColor:'#FFF',
    },
    
    address:{
        color:"black",
        fontSize:17,
        marginTop:45,
        fontWeight: "bold",

    },
    footer: {
        
        backgroundColor: "#F5F5F5",
        justifyContent: "center",
        alignItems: "center",
     
    },
    
    
})