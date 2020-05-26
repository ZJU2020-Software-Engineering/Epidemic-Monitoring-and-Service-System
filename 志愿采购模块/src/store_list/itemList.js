import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs, WingBlank, WhiteSpace, List, Button, Flex } from '@ant-design/react-native';
import {ItemDisplay} from './ItemDisplay';

var items=[{
    id:'default',
    price:'20',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'30',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'60',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'70',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'40',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'50',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
},
{
    id:'default',
    price:'10',
    pic:'https://user-images.githubusercontent.com/37875411/81286757-28a9d600-9094-11ea-8f39-51c71772b768.jpg'
}
]

const Item = List.Item;
const Brief = Item.Brief;



export class StoreDetailComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const tabs=[{title:"1"}];
        return (
            
                <ScrollView style={{ flex: 1 }}>
                    <WhiteSpace />
                    <List renderHeader={' '}>
                        {
                            items.map((item)=>{
                                return(
                                    <Item wrap extra={
                                        <Button onPress={()=>{}}><Text style={styles.add2CartBtn}>+</Text></Button>
                                    }
                                    onPress={()=>{this.props.navigation.navigate('ItemDisplayScreen',{name: item.id})}}
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


