import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs, WingBlank, WhiteSpace, List, Button, Flex } from '@ant-design/react-native';
import {ItemDisplay} from './ItemDisplay';
import Cache from '../Cache';
import {GetItems} from '../DatabaseClient';

var items=[{
    id:'default',
    price:'20',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
}
]

const Item = List.Item;
const Brief = Item.Brief;

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

    //didMount函数在组件被挂载的时候执行一次
    componentDidMount(){
        var merchantID=Cache.get("merchant id");
        if(this.props.navigation.state.params.merchantName!=merchantID){
            Cache.clearItems();
            Cache.set("merchant id",this.props.navigation.state.params.merchantName);
        }
        GetItems(this.props.navigation.state.params.merchantName).then(
            (response)=>{
                let result=response.map((item,index)=>{
                    
                    return {
                        id:item.id,
                        price:item.payment,
                        pic:item.imgs
                    };
                });
                //利用setState来更新参数，将从服务器中得到的数据嵌入到state里
                this.setState({myItems:result}); 
            }
        )
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
                                                {id:item.id,price:item.price,count:1,pic:item.pic
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


