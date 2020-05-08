import React from 'react';
import { ScrollView,StatusBar,Text,View} from 'react-native'
import { Card } from 'react-native-paper';
import { WhiteSpace } from '@ant-design/react-native';
import NumberDisplay from './NumberDisplay';
import EntryDisplay from './EntryDisplay';
import { Icon } from 'react-native-elements';

class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: showTime()};

    }
    componentDidMount(){
        setInterval(() => {
            this.setState(previousState => {
                return { time: showTime()};
            });
        }, 1000);
    }
    render(){

        return (
            <Text style={{fontSize:16}}>{this.state.time}</Text>
        )
    }
}
function showTime() {
    var nowtime = new Date();
    var year = nowtime.getFullYear();//年
    var month = nowtime.getMonth() + 1;//月
    var day = nowtime.getDate();//日
    var hour = nowtime.getHours();//时
    var minutes = nowtime.getMinutes(); //分
    var seconds = nowtime.getSeconds(); //秒
    var word = "当前时间：" + p(year) + "年" + p(month) + "月" + p(day) + "日 " + p(hour) + ":" + p(minutes) + ":" + p(seconds);
    return (word);
}

//月日时分秒小于10补0
function p(s) {
    return s < 10 ? '0' + s : s;
}

export default function App(){
    return(
    
    <ScrollView style={{ flex: 1, marginTop: StatusBar.currentHeight, paddingLeft:10, paddingRight:10, backgroundColor:'rgba(0,0,0,0)'}}>
        {/* <Text style={{ paddingLeft: 20, fontSize:30, marginTop: 70}}>
            志愿采购
        </Text> */}
        <View style={{position:'absolute',right:20,top:20}}>
        <Icon 
            name='person'
            color='#2096F3'
            size= '35' 
            onPress={()=>console.log('hello')} //个人中心
        /> 
        </View>

        <Card style={{ marginTop:60, borderRadius: 15, elevation:3}}>
            <Card.Title title={'浙江大学食堂拥挤情况'} />
            <Card.Content>
                <Time/>
                <WhiteSpace/>
                <NumberDisplay />
            </Card.Content>
        </Card>
        <WhiteSpace/>
        <WhiteSpace/>
        <EntryDisplay/>
    </ScrollView>
    );
}
