import React, { Component } from 'react';
import { FlatList,ScrollView,StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
var Order={
	//构造函数
	createNew:function(itemList,name_list,total_price,price_list,weight_list,state,time,tenant,volunteer,mechant,mechant_name){
		var order={};
		order.itemList=[];//商品列表
		for(var i=0;i<itemList.length;i++){
			order.itemList[i]={};
			order.itemList[i].name=name_list[i];//商品名
			order.itemList[i].price=price_list[i];//商品价格
			order.itemList[i].weight=weight_list[i];//商品订购量
		}
		order.totalPrice=total_price;//总价
		order.state=state;//订单状态
		order.time=time;//订单关闭时间
		order.tenantID=tenant;//居民ID
		order.volunteerID=volunteer;//志愿者ID
		order.mechantID=mechant;//商家ID
		order.mechantName=mechant_name;//商家名称
		//修改订单状态
		order.changeState=function(state){
			order.state=state;
		}
		
		return order;
	}	
	
};

//实例化订单类
var item_list=["001","002","003"];
var name_list=["土豆","有机花菜","瘦肉"];
var weight_list=[1,2,1];
var pay_list=[10.0,20.0,20.0];
var mechant_name="杰克厨房外卖";
var order=Order.createNew(item_list,name_list,50.00,pay_list,weight_list,1,"2020-5-15 24:00",1,2,3,mechant_name);


//订单表格
export class OrderTable extends Component {
  constructor(props) {
    super(props);
	var data=[];
    for(var i=0; i<order.itemList.length;i++){
		data.push([order.itemList[i].name,'x'+order.itemList[i].weight,'￥'+order.itemList[i].price]);
	}
	this.state = {
      tableHead: ['', '', ''],
	  tableData: data,
	  flexArr:[2,1,1]
    }
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.tableContainer}>
			<Row data={state.tableHead} flexArr={[2, 1, 1]} style={{backgroundColor: '#D3D3D3' ,height:4}} textStyle={styles.head}/>
			<Table borderStyle={{borderWidth: 0}}>
                  <TableWrapper style={styles.wrapper}>
                       <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                   </TableWrapper>
            </Table>	
      </View>
    )
  }
}

//订单页面
export default class OrderPage extends Component{ 
   
  render() {
	 var state="";
	 if(order.state==0) state="下单成功";
	 else if(order.state==1) state="订单配送中";
	 else if(order.state==2) state="订单已完成";
	 else if(order.state==3) state="订单已关闭";
	  
	  return (
	  	   <View style={styles.container}>
				<Text style={{fontSize: 30, marginTop:60,textAlign: 'center'}}>{state}</Text>
				<Text style={{fontSize: 10, padding:10, color:'#808080',textAlign: 'center'}}>{'订单关闭时间: '+order.time}</Text>
                <Text style={{ fontWeight: 'bold',textAlign: 'left',paddingLeft:20, paddingTop: 10 }}>{order.mechantName}</Text>
				<OrderTable />
				<Text style={{fontSize: 15, padding:20,textAlign: 'right'}}>{'总价: ￥'+order.totalPrice}</Text>
	  	   </View>
	  ); 
  }
  
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grey: {
      padding: 10,
      fontSize: 18,
      height: 44,
  	  flexDirection: 'row'
  },
  tableContainer: { flex: 1, padding: 20, paddingTop: 10, backgroundColor: '#fff' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40 },
});
