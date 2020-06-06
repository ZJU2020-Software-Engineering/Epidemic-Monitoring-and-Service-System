import React from 'react';
import Cache from '../Cache';
import {Icon} from 'react-native-elements';
import { Tabs, WingBlank, WhiteSpace, List, Button, Flex } from '@ant-design/react-native';
import { StyleSheet, Image, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native';
import {InsertOrder} from '../DatabaseClient';

const Item = List.Item;
const Brief = Item.Brief;

export default class ShopCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sumPrice:Cache.countPrice(),
            items:Cache.getItemList(),
        };
    }

    componentDidMount() { 
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({
            sumPrice:Cache.countPrice(),
            items:Cache.getItemList(),
            }); 
        }); 
    } 
    componentWillUnmount() { this._navListener.remove(); }
    
    getItemListToString() {
        var string="";
        // console.log(this.state.items);
        for(index in this.state.items){
            string+=( this.state.items[index].id+"*"+this.state.items[index].count+";\n");
        }
        return  string;
    }


    render(){
        return(
            <ScrollView style={{ flex: 1 }}>
                <WhiteSpace />
                <List renderHeader={' '}>
                    {
                        this.state.items.map(
                            (item,key)=>{
                                return(
                                    <Item wrap >
                                        <WingBlank style={{ marginBottom: 5, flexDirection: 'row', alignItems:'center' }}>
                                            <Image source={{uri: item.pic}} style={styles.smallPictureSize}></Image>
                                            <View>
                                                <Text style={styles.title}>{item.id}</Text>
                                                    <WhiteSpace />
                                                <Text style={styles.price}>￥{item.price}</Text>
                                            </View>
                                            <WingBlank style={{ marginBottom: 5, flexDirection: 'row', alignItems:'center' }}>
                                                <Icon name='ios-remove-circle' type='ionicon' onPress={()=>{
                                                            Cache.itemNoPlus(item.id,-1);
                                                            this.setState({
                                                                sumPrice:Cache.countPrice(),
                                                                items:Cache.getItemList(),
                                                            })
                                                        }}></Icon>
                                                
                                                <WingBlank ><Text>{Cache.getItemNo(item.id)}</Text></WingBlank>
                                                <Icon name='ios-add-circle' type='ionicon' onPress={()=>{
                                                            Cache.itemNoPlus(item.id,1);
                                                            this.setState({
                                                                sumPrice:Cache.countPrice(),
                                                                items:Cache.getItemList(),
                                                            });
                                                            console.log(this.state.sumPrice);
                                                        }}></Icon>
                                            </WingBlank>
                                            {/* <Flex style={styles.cartExtra}>
                                                <Flex.Item>
                                                    
                                                </Flex.Item>
                                                <Flex.Item>
                                                    
                                                </Flex.Item>
                                                <Flex.Item>
                                                    
                                                </Flex.Item>
                                            </Flex> */}
                                        </WingBlank>
                                    </Item>
                                )
                            }
                        )
                    }
                </List>
                <Button onPress={()=>{
                    var orderinfo={
                        m_id: Cache.get("merchant id"),
                        t_id: Cache.get("account"),
                        item_list: this.getItemListToString(),
                        total_price: this.state.sumPrice,
                        payment: null,
                    };
                    InsertOrder(orderinfo).then(
                        (response)=>{
                            if(response=='Y'){
                                Alert.alert('订单已生成');
                                Cache.clearItems();
                                this.setState({items:Cache.getItemList()})
                            }
                            else{
                                Alert.alert('订单生成错误');
                            }
                        }
                    )
                }}>{this.state.sumPrice}  去结算</Button>
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
    },
    cartExtra:{
        flexDirection:'row'
    }
  });

