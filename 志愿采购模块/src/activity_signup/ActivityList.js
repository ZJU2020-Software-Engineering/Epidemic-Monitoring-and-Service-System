import React from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { Button, List, WhiteSpace, WingBlank, Flex} from '@ant-design/react-native';

var activities = [
    {
      title: "食堂指引",
      time: "2020.5.30 10:30-13:00",
      address: "yq",
      type: "食堂"
    },
    {
      title: "学园门口站岗",
      time: "2020.5.10",
      address: "zjg 东二",
      type: "站岗"
    },
];

class SignUpBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                    hint: '报名',
                    isDisabled: false,
                    isMounted: false,
                   };        
        this.change = this.change.bind(this);
    }

    componentDidMount(){
        this.setState({isMounted: true});
    }
    componentWillUnmount(){
        this.state.isMounted=false;
    }
    change(){
        if (this.state.isMounted){
            this.setState((state) => ({
                hint: '已报名',
                isDisabled: true
            }));
        }
    }
    render(){
        return (
            <Button disabled={this.state.isDisabled}
                onPress={() => {
                    Alert.alert(
                        "是否确认报名志愿活动："+ this.props.title +"?",
                        "",
                        [
                            {text: '确认', onPress: () => {
                                    console.log('OK Pressed');
                                    this.change();
                            }},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        ],
                    )
             }}>
                {this.state.hint}
            </Button>
        );
    }
}

export default function ActivityList({navigation}) {
    return (

        <View>
            <WingBlank>
            <WhiteSpace />
            <WhiteSpace />
            <ScrollView>
                <List>
                    {activities.map((activity) => {
                        return(
                            <List.Item
                                key={activity} 
                                extra={
                                    <SignUpBtn title={activity.title}/>
                                }
                                onPress={
                                    () => {
                                        navigation.navigate('ActivityDetail',{
                                            info: activity,
                                        });
                                    }
                                }
                            >
                                <Flex>

                                    <Flex.Item>
                                        <Text style={{fontSize: 20}}>
                                            {activity.title}
                                        </Text>
                                    </Flex.Item>
                                    <Flex.Item style={{right:10}}>
                                        <Text style={{fontSize: 15, color: 'grey'}}>
                                            时间：{activity.time}
                                        </Text>
                                    </Flex.Item>
                                    <Flex.Item style={{left:20}}>
                                        <Text style={{fontSize: 15, color: 'grey'}}>
                                            地点：{activity.address}
                                        </Text>
                                    </Flex.Item>

                                </Flex>
                            </List.Item>
                            
                        );
                    })}
                </List>
            </ScrollView>

            </WingBlank>
        </View>
    );
}

