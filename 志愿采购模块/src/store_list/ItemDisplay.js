// var React = require('react');
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { WhiteSpace, List, Button} from '@ant-design/react-native';
//import  ImageViewer from 'react-native-image-zoom-viewer';
// var axios =  require('axios');

// var url='http://0.0.0.0:4000';
// var server=axios.create({
//     baseURL: url,//改成服务器的url
//     timeout: 10000,
//     headers: {'X-Custom-Header': 'foobar'}
// });

const itemInfo={
    name:"default",
    price:"default",
    weight:"default",
    stock:"default",
    productionDate:"default",
    shelfLife:"default",
    pic:"https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg"
};

// var itemName={
//     id:'Tea Egg'
// };

// server.get('/request/item/selectid',{params:itemName}).then(
//     (res)=>{
//         if(res.data.result=='Y'){
//             console.log("OK");
//             itemInfo.name=res.data.message.id;
//             itemInfo.price=res.data.message.payment;
//             itemInfo.weight=res.data.message.weight;
//             itemInfo.stock=res.data.message.stock;
//             itemInfo.productionDate=res.data.message.production_date;
//             itemInfo.shelfLife=res.data.message.shelf_life;
            
//         }
//         else{
//             console.log("Not OK");
//         }
//     }
// ).catch((error)=>{});

const images=[{
    url:itemInfo.pic,
    props:{}
}]

const Item = List.Item;
const Brief = Item.Brief;

function GetIteminfo(name){
    itemInfo.name=name;
    return itemInfo;
}

export class ItemDisplay extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     itemInfo:itemInfo
        // }
    }
    render(){
        var nowItemInfo=GetIteminfo(this.props.name);
        return(
            <View>
                <WhiteSpace />
                <Image source={{uri: nowItemInfo.pic}} style={styles.pictureSize}></Image>
                <List >
                    <Item wrap extra={
                        <Button onPress={()=>{}}><Text style={styles.add2CartBtn}>+</Text></Button>
                    }>
                        <Text style={styles.title}>{nowItemInfo.name}</Text>
                        <WhiteSpace />
                        <Text style={styles.price}>￥{nowItemInfo.price}</Text>
                    </Item>
                    <Item multipleLine>
                        <Text style={styles.introduction}>商品简介</Text>
                        <Brief>
                            <Text>名称: {nowItemInfo.name}</Text>
                        </Brief>
                        <Brief>
                            <Text>生产日期: {nowItemInfo.productionDate}</Text>
                        </Brief>
                        <Brief>
                            <Text>保质期: {nowItemInfo.shelfLife}</Text>
                        </Brief>
                        <Brief>
                            <Text>重量: {nowItemInfo.weight}</Text>
                        </Brief>
                        <Brief>
                            <Text>存货: {nowItemInfo.stock}</Text>
                        </Brief>
                    </Item>
                </List>
            </View>
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
    pictureSize:{
        height:400,
        width:400
    },
    price:{
        fontSize:30,
        color:'red'
    },
    introduction: {
        fontSize:20
    },
    title:{
        fontSize:35
    },
    add2CartBtn: {
        fontSize:30,
        alignItems:'center',
        color:'blue'
    }
  });