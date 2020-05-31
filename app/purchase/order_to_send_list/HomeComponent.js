import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, Alert , StatusBar, KeyboardAvoidingView,ScrollView,Dimensions,ListView,FlatList,RefreshControl } from 'react-native'
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, List, WhiteSpace, WingBlank, Flex} from '@ant-design/react-native';
import { GetOrderToSend,GetOrderState,UpdateOrderState,GetMerchantInfo,GetTenantInfo} from '../DatabaseClient';



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

class SignUpBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                    hint: "送达",
                    isDisabled: false,
                    isMounted: false,                    
                   };        
        this.change = this.change.bind(this);
    }

    componentDidMount(){

        this.setState({isMounted: true});

        GetOrderState(this.props.id).then((response)=>{this.successShow(response[0])});
    }

    
    successShow(response){
        console.log(response.stat);
        if(response.stat == "arrived"){
            console.log("arrived");
            this.setState((state) => ({
                hint: '已送达',
                isDisabled: true
            }));
        }
    }

    

    componentWillUnmount(){
        this.state.isMounted=false;
    }
    change(id){
        if (this.state.isMounted){
            this.setState((state) => ({
                hint: '已送达',
                isDisabled: true
            }));
        }

        UpdateOrderState(this.props.id);                     //////////// 更新订单状态
       


    }
    



    render(){
        return (
            <Button style={styles.button}
                disabled={this.state.isDisabled}
                onPress={() => {
                    Alert.alert(
                        "是否确认送达该订单?",
                        "",
                        [
                            {text: '确认', onPress: () => {
                                    console.log('OK Pressed');
                                    this.change(this.props.id);
                            }},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                    )
             }}>
                {this.state.hint}
            </Button>
        );
    }
}


var m_add,t_add,t_contact,t_account;
export default class HomeComponent extends Component{

        constructor(props){
          super(props);
          
          this.state = {
            
            
            // v_id: props.navigation.state.params.v_id, //////////////////  需要父页面传递的志愿者id
            v_id:"01",
            
            
          };
        }

        componentDidMount(){
            console.log(this.state.v_id);
            GetOrderToSend(this.state.v_id).then((response)=>{this.successShow(response)});
        }
    
        successShow(response) {
            data = [];
             
            var i;
            i = 0;
            for(i=0;i<response.length;i++)
            {
                
                let single_ord= {key:"",start:"",end:"",buyer:"",contact:"",time:"",id:"",item_list:"",price:"",state:""};
                
                single_ord.key = response[i].id;i
                single_ord.id = response[i].id;
                
                single_ord.time = response[i].expected_time.substring(0,5);
                single_ord.itemlist = response[i].item_list;i
                single_ord.price = String(response[i].total_price)+"元";
                single_ord.state = response[i].stat;
                GetTenantInfo(response[i].t_id).then((response)=>{
                    single_ord.end = response[0].address;
                    single_ord.contact = response[0].contact;
                    single_ord.buyer = response[0].account;
                    
                });
                GetMerchantInfo(response[i].t_id).then((response)=>{
                    single_ord.start = response[0].address;
                    console.log("hhhhhhhhhhhh");
                    console.log(single_ord);
                    data.push(single_ord);
                   
                });  
               
                
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
            

              //列表的每一行
              renderItem({item,index}) {
                  return (
                    <View style={styles.whole}>
                 <TouchableOpacity style={styles.touch}
                        onPress={ () => this.props.navigation.navigate("OrderDetailScreen",{
                            start:item.start,
                            end:item.end,
                            time:item.time,
                            buyer:item.buyer,
                            contact:item.contact,
                            itemlist:item.itemlist,
                            price:item.price,
                            state:item.state,
                            id:item.id,

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

                            <SignUpBtn  
                            id={item.id}
                                    
                            />
                    </View>
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

    whole:{
        alignItems: 'flex-start',
        flexDirection:'row',

    },
    button:{
        marginTop:17,
        marginLeft:10,
    },


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
        width:windowWidth*0.7,
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
