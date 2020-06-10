import React from 'react'
import { Text, View, Vibration, Platform, StyleSheet } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'
import { List, Switch, DatePicker, Provider } from '@ant-design/react-native'
class TimeReminder extends React.Component {
  static defaultProps = {
    //需要从父组件传递过来的属性默认值
    isRegistered:true,
    userId:'abcd',
    canUserSetTime:true,
    style:undefined
  }

  constructor(props){
    super(props);
    this.state = {
      expoPushToken: '',  //通知推送识别序列号
      notification: {},   //收到的通知
      timerOn: true,     //是否显示时间设置
      date: undefined,    //用户设置的时间
      isRegistered: true,   //用户是否已经完成注册
      canUserSetTime:true,//用户是否可以设置时间
      directoryExist:true //是否已经
    };
    this.defaultDate = new Date(2020,1,1,11,0,0);  //设置默认的时间为11点
  }

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
        //获取通知权限
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') { //如果未被授予权限，请求权限
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        //如果请求权限失败，弹出警示
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        //获取本APP的expo ID，用于通知的推送
        token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        //更新token
        this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }
    //如果是安卓，创建一个通知推送通道
    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  //在初次创建组件时执行
  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  //通知处理函数,没什么用
  _handleNotification = notification => {
    Vibration.vibrate(); //振动
    console.log(notification);
    this.setState({ notification: notification });
  };

  //设置是否显示DatePicker的指标：show
  _showTimePicker = () => {
      let currentShowState = this.state.timerOn;
      this.setState({timerOn:!currentShowState});
  }

  //时间选择组件回调函数
  _datePickerOnChange = (selectedDate) => {
      console.log({name:'获得的时间',time: selectedDate});
      //重新设置计时的Schedule
      this._setScheduledNotification(selectedDate);
      this.setState({date: selectedDate});
  }

  //设置打卡时间定时
  _setScheduledNotification = async (selectedDate) => {
      //先检查是否已经存在定时
      if(this.state.date !== undefined){
        //取消已有的schedule
        await Notifications.cancelAllScheduledNotificationsAsync();
      }
      let localNotification = {
        title:"打卡提醒",
        body:"记得完成打卡哦",
        data:{name:"xxx",isRegistered:true,checked:false},
        ios:{
          sound:true,
          _displayInForeground:true
        },
        android:{
          channelId:"default"
        }
      };
      //创建一个scheduleed Notification
      const localNotificationId = Notifications.scheduleLocalNotificationAsync(localNotification,{
        time:selectedDate,
        repeat:"day"    //IOS好像没有repeat的这个功能了
      });
  }
    componentWillUnmount() {
 
    }



  //滑动开关组件回调函数
  _switchOnChange = (checked) => {
      this.setState({timerOn:checked});
      if(checked==false){ //关闭开关
        Notifications.cancelAllScheduledNotificationsAsync();
      }
      else{//打开开关
        if(this.state.canUserSetTime){  //如果已经设定过时间
            if(this.state.date!==undefined)
                this._setScheduledNotification(this.state.date);
          }
        else{
            this._setScheduledNotification(this.defaultDate);
        }
      }
  }

  //在传入新的props时且在render之前，进行state更新
  componentWillReceiveProps(nextProps) {
    this.setState({isRegistered:nextProps.isRegistered,userId:nextProps.userId,canUserSetTime:nextProps.canUserSetTime});
  }

  render() {
    return (
        <Provider>
        <View style={this.props.style}>
          <List>
              <List.Item
                extra={
                    <Switch
                        checked={this.state.isRegistered?this.state.timerOn:false}
                        disabled={!this.state.isRegistered}
                        onChange={(checked)=>{this._switchOnChange(checked)}}
                        
                    />
                }
              >
                设置打卡提醒
              </List.Item>
            </List>

            {
                this.state.timerOn && this.state.canUserSetTime && (
                      <DatePicker
                        value={(this.state.date!==undefined)?this.state.date:undefined}
                        mode="time"
                        defaultDate={new Date()}
                        onChange={(selectedDate) => {this._datePickerOnChange(selectedDate)}}
                        format="HH:mm"
                      >
                        <List.Item arrow="horizontal">打卡提醒时间</List.Item>
                      </DatePicker>
                )
            }
      </View>
      </Provider>
    );
  }
}


const timeReminderStyles = StyleSheet.create({
    picker:{}, //可设置用于调整DatePicker的itemStyle属性
}
);

//导出类
export default TimeReminder;
