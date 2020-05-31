import React, { Component } from 'react'
import { Text, Image, TextInput, View, StyleSheet, StatusBar, KeyboardAvoidingView,Button,Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Heading2, Paragraph } from './Text';
import { UpdateOrderState,GetOrderState} from '../DatabaseClient';

let windowWidth = Dimensions.get('window').width;
let windowheight = Dimensions.get('window').height;

class OrderDetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
          stateOrder:this.props.navigation.getParam('state','no-values'),
          order_id : this.props.navigation.getParam('id', 'no-values')
           
        };
    }

    // componentDidMount(){
            
    //     GetOrderState(this.state.order_id).then((response)=>{this.successShow(response[0])});
    // }
    // successShow(response){
    //     this.setState((state) => ({
            
    //         stateOrder: response.stat,
    //     }));
    // }

    onPressDone = ()=>{
        console.log(this.state.order_id);
        UpdateOrderState(this.state.order_id); //////////////  更改订单状态
        this.setState({stateOrder:"已送达"});
        alert("已更改订单状态")
    }

    



    start = this.props.navigation.getParam('start', 'no-values');
    end = this.props.navigation.getParam('end', 'no-values');
    time = this.props.navigation.getParam('time', 'no-values');
    buyer = this.props.navigation.getParam('buyer', 'no-values');
    contact = this.props.navigation.getParam('contact', 'no-values');
    itemlist = this.props.navigation.getParam('itemlist', 'no-values');
    price = this.props.navigation.getParam('price', 'no-values');
    

    render(){
    return (
      <View>
      <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>商家地址</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                        defaultValue={this.start}
                        editable={false}

            /> 
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>收货地址</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.end}
        
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>要求送达时间</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.time}
             
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
        
         <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>收货人</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.buyer}
             
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>收货人联系方式</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.contact}
            
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>货物列表</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.itemlist}
             multiline={true} 
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>总价</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.price}
            
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
        <View style={styles.content}>  
            <Heading2>订单状态</Heading2>
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
             defaultValue={this.state.stateOrder}
            
             editable={false}
             
            />
            
        </View>
        </TouchableOpacity>
         <View style={styles.buttonview}>
       
            <TouchableOpacity
                onPress={this.onPressDone}
                style = {styles.saveButton}
            >
            <Text style={styles.textChange}>已送达</Text>
            </TouchableOpacity>
        </View>
        </View>
       
    )
        }
}

var styles = StyleSheet.create({

   
    touch:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:50,
    },
    
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },

    buttonview:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: "center",

    },
    saveButton:{
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3CB371",
        borderRadius: 20,

    },
    textChange:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: "bold",
    },
    
})



export default OrderDetailComponent


