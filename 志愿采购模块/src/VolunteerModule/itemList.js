import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs, WingBlank, WhiteSpace, List, Button, Flex } from '@ant-design/react-native';
import {ItemDisplay} from './ItemDisplay';
import Cache from './Cache';

var axios=require('axios');

var url='http://10.180.90.36:4000';
var server=axios.create({
    baseURL: url,//改成服务器的url
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});


var items=[{
    id:'default',
    price:'20',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
}
]

const Item = List.Item;
const Brief = Item.Brief;

async function getItems(merchant){
    var itemsGet=[];
    await server.get('/request/item/selectm_id',{params:{merchant_id:merchant}}).then(
        (res)=>{
            //console.log(res);
            if(res.data.result=='Y'){
                console.log("OK");
                items=[];
                res.data.message.map((item,index)=>{
                    console.log("Hei item:");
                    console.log(item.id);
                    items.push({
                        id:item.id,
                        price:item.payment,
                        pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
                    })
                });
            }
            else{
                console.log("Not OK");
            }
            // console.log("This is items 0");
            // console.log(itemsGet);
            return items;
        }
        
    ).catch((error)=>{});
    console.log("This is itemsget");
    console.log(itemsGet);

    return items;
}

export class StoreDetailComponent extends React.Component{
    constructor(props){
        super(props);
        //现在state里放入参数
        this.state={
            myItems:[]
        };
        console.log(this.state.myItems);
    }
    
    static test='';
    //用async和await来确保在数据读取完成之后再进行后面的操作
    async getItems(merchant){
        try{
            let data=await server.get('/request/item/selectm_id',{params:{merchant_id:merchant}});
            let newdata=await data.data;
            let result=newdata.message.map((item,index)=>{
                var mItems=[];
                mItems.push({
                    id:item.id,
                    price:item.payment,
                    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
                });
                return {
                    id:item.id,
                    price:item.payment,
                    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
                };
            });
            //利用setState来更新参数，将从服务器中得到的数据嵌入到state里
            this.setState({myItems:result}); 
        }
        catch(error){
            console.log(error);
            
        }
    }

    //didMount函数在组件被挂载的时候执行一次
    componentDidMount(){
        // setInterval(()=>{
        //     this.getItems("1");  
        // });
        //这里的1是用于测试的，实际要改为this.props.navigation.state.params.merchantName
        this.getItems("1");
    }

    render(){
        return (
            
                <ScrollView style={{ flex: 1 }}>
                    <WhiteSpace />
                    <List renderHeader={' '}>
                        {
                            this.state.myItems.map((item,key)=>{
                                return(
                                    <Item wrap extra={
                                        <Button onPress={()=>{
                                            Cache.addItem(
                                                {id:item.id,price:item.price,count:1,pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
                                            });
                                            console.log(Cache.storage);}
                                        }>
                                            <Text style={styles.add2CartBtn}>+</Text>
                                        </Button>
                                    }
                                    onPress={()=>{this.props.navigation.navigate('ItemDisplayScreen',{name: item.id});}}
                                    key={key}
                                    >
                                        <WingBlank style={{ marginBottom: 5, flexDirection: 'row', alignItems:'center' }}>
                                            <Image source={{uri: item.pic}} style={styles.smallPictureSize}></Image>
                                            <View>
                                                <Text style={styles.title}>{item.id}</Text>
                                                    <WhiteSpace />
                                                <Text style={styles.price}>￥{item.price}</Text>
                                            </View>
                                        </WingBlank>
                                    </Item>
                                )
                            })
                        }
                    </List>
                </ScrollView>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    smallPictureSize: {
        width: 100,
        height: 100
    },
    price:{
        fontSize:30,
        color:'red',
        fontWeight:'500',
        fontFamily:'Times New Roman'
    },
    introduction: {
        fontSize:20
    },
    title:{
        fontSize:30,
        fontFamily:'Times New Roman'
    },
    add2CartBtn: {
        fontSize:30,
        alignItems:'center',
        color:'blue'
    }
  });


