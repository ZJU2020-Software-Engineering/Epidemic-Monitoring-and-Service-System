import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Heading2 } from './Text'
import { GetItemInfo, UpdateItem } from './DatabaseClient';

export class ItemInfo extends Component{
    constructor(props){
        super(props);
        let name = props.navigation.state.params.id;
        this.state = {
            canChange: false,
            id: name,
        };
    }
    onPressChange = ()=>{
        this.setState({canChange:true});
    }
    onPressSave = ()=>{
        this.setState({canChange:false});
        UpdateItem(this.state.id, this.state.weight, this.state.stock, this.state.payment, this.state.production_date);
        Alert.alert("", "修改已保存");
    }
    componentDidMount() {
        GetItemInfo(this.state.id).then((response)=>{this.successShow(response[0])});
    }
    successShow(response) {
        let date = new Date(+new Date(response.production_date)+8*3600*1000).toISOString().replace(/T/g,'').replace(/\.[\d]{3}Z/,'').replace(/:[\d]{2}/,'').replace(/:[\d]{2}/,'').replace(/[\d]{2}$/,'');
        this.setState({
            merchant_id: response.merchant_id,
            weight: response.weight,
            stock: response.stock,
            payment: response.payment,
            production_date: date,
            shelf_life: response.shelf_life
        });
    }
    render() {
        return (
            <KeyboardAwareScrollView>
                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>商品名称</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.id}
                                editable={false}
                                onChangeText={(text) => this.setState({
                                    id: text
                                })}
                    /> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>经营者</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.merchant_id}
                                editable={false}
                                onChangeText={(text) => this.setState({
                                    merchant_id: text
                                })}
                    /> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>重量</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.weight}
                                editable={this.state.canChange}
                                onChangeText={(text) => this.setState({
                                    weight: text
                                })}
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>库存</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.stock}
                                editable={this.state.canChange}
                                onChangeText={(text) => this.setState({
                                    stock: text
                                })}
                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch1}>
                <View style={styles.content}>  
                    <Heading2>价格</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.payment}
                                editable={this.state.canChange}
                                multiline={true} 
                                onChangeText={(text) => this.setState({
                                    payment: text
                                })}

                    />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>生产日期</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.production_date}
                                editable={this.state.canChange}
                                onChangeText={(text) => this.setState({
                                    production_date: text
                                })}
                    /> 
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                <View style={styles.content}>  
                    <Heading2>保质期</Heading2>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                    <TextInput style={{ color: '#999999',width:200, textAlign:'right'}}
                                defaultValue={this.state.shelf_life}
                                editable={false}
                                onChangeText={(text) => this.setState({
                                    shelf_life: text
                                })}
                    />
                </View>
                </TouchableOpacity>

                <View style={styles.buttonview}>
                    <TouchableOpacity
                        onPress={this.onPressChange}
                        style = {styles.changeButton}
                    >
                    <Text style={styles.textChange}>修改信息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressSave}
                        style = {styles.saveButton}
                    >
                    <Text style={styles.textChange}>保存</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        marginTop :40,
        marginLeft:40,
        paddingVertical:10,
        paddingHorizontal:15,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        width:'80%'
    },
    buttonview:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap: 'wrap',
        width:'80%',
        marginLeft:'10%'
    },
    touch:{
        backgroundColor:"white",
        borderBottomColor:"#DCDCDC",
        borderWidth:0.2,
        height:50,
    },
    touch1:{
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
    text1:{
        fontSize:18
    },
    textInput: {
        width: 270,
        height: 30,
        borderColor: "#708090",
        borderWidth: 2,
        marginBottom: 10,
    },
    textInput2: {
        width: 270,
        height: 90,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        backgroundColor:"white",
        marginBottom: 10,
    },
    changeButton:{
        marginTop: 10,
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        borderRadius: 20,
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
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
});
