// var React = require('react');
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { WhiteSpace, List, Button} from '@ant-design/react-native';
import {GetIteminfo} from '../DatabaseClient';

const itemInfo={
    name:"default",
    price:"default",
    weight:"default",
    stock:"default",
    productionDate:"default",
    shelfLife:"default",
    pic:"https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg"
};

const images=[{
    url:itemInfo.pic,
    props:{}
}]

const Item = List.Item;
const Brief = Item.Brief;


export class ItemDisplay extends React.Component{
    constructor(props){
        super(props);
        // var nowItemInfo=GetIteminfo(this.props.navigation.state.params.name);
        
        this.state={
            itemInfo:itemInfo
        };
    }
    

    //didMount函数在组件被挂载的时候执行一次
    componentDidMount(){
        // console.log(this.props.navigation.state.params.name);
        GetIteminfo(this.props.navigation.state.params.name).then(
            (response)=>{
                let detail=response[0];
                console.log('detail');
                console.log(detail);
                //利用setState更新参数，同时刷新渲染
                this.setState({
                    itemInfo:{
                        name:detail.id,
                        price:detail.payment,
                        weight:detail.weight,
                        stock:detail.stock,
                        productionDate:detail.production_date,
                        shelfLife:detail.shelfLife,
                        pic:detail.imgs
                    }
                });
            }
        );
    }

    render(){
        var nowItemInfo=this.state.itemInfo;
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
        fontSize:25,
        color:'red'
    },
    introduction: {
        fontSize:20
    },
    title:{
        fontSize:30
    },
    add2CartBtn: {
        fontSize:25,
        alignItems:'center',
        color:'blue'
    }
});