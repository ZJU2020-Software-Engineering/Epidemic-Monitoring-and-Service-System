import React from 'react';
import { View } from 'react-native';
import { Button, List, WhiteSpace, WingBlank, Flex} from '@ant-design/react-native';
import { GetUserInfo, ChangeStat } from './DatabaseClient';
import { StatusDisplay } from './ApplyStatus';
import { Card } from 'react-native-paper';


class ApplyStatus extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        isVolunteer: true
      }
    }

    componentDidMount(){
        GetUserInfo(this.props.username).then((response) => {this.successShow(response[0])});
        setTimeout(() => {
            ChangeStat(this.props.username, 2);
            this.setState(previousState => {
                return { status: 2, isVolunteer: false};
            });
        }, 5000);
    }

    successShow(response){
        this.setState(
            {
                status: response.status,
            }
        );
        let isVolunteer = (this.state.status != null && this.state.status == 2) ? false : true;
        this.setState(
          {
            isVolunteer: isVolunteer
          }
        )
        console.log("status:spplystatus2" + this.state.status);
    }
    render(){
          return(
              <View style={{alignItems:'center'}}>
                  <Card style={{ width: 300, marginTop:60, marginLeft:60, marginRight: 60, borderRadius: 15, elevation:3}}>
                      <Card.Content>
                          <StatusDisplay status={this.state.status}/>
                          <WhiteSpace/>
                          <Button style={{borderRadius: 30}} onPress={() => {this.props.navigation.navigate("Tarbar");}}>返回主页</Button>
                          <WhiteSpace/>
                          <Button disabled={this.state.isVolunteer} style={{borderRadius: 30}} onPress={() => {this.props.navigation.navigate("Back")}}>前往志愿服务</Button>
                      </Card.Content>
                  </Card>
              </View>
          )
      }
  }


export default class VolunteerApply extends React.Component {
    constructor(props){
        super(props);
        let username = props.navigation.state.params.username;
        this.state = {
            username: username
        }
        console.log("username:volunteerapply:"+this.state.username);
    }
    componentDidMount(){
        GetUserInfo(this.state.username).then((response) => {this.successShow(response[0])});
    }
    successShow(response){
        this.setState(
            {
                status: response.status,
                name: response.name,
                gender: response.gender,
                identityCardNumber: response.identitycardnumber,
                phoneNumber: response.phonenumber,
                address: response.address
            }
        );
        console.log("status:volunteerapply" + this.state.status);
    }

    submit(){
        ChangeStat(this.state.username, 1);
        this.props.navigation.navigate('ApplyStatus', {username: this.state.username});
    }
    render(){
        if (this.state.status != 0){
            return (
                <ApplyStatus status={this.state.status} username={this.state.username} navigation={this.props.navigation}/>
            )
        }else{
        return (
            <View>
                <WingBlank>
                <WhiteSpace />
                <WhiteSpace />
                <View>
                    <List renderHeader="请确认以下信息">
                        <List.Item extra={this.state.name}>
                            姓名
                        </List.Item>
                        <List.Item extra={this.state.gender}>
                            性别
                        </List.Item>
                        <List.Item extra={this.state.identityCardNumber}>
                            证件号码
                        </List.Item>
                        <List.Item extra={this.state.phoneNumber}>
                            联络电话
                        </List.Item>
                        <List.Item extra={this.state.address}>
                            当前住址
                        </List.Item> 
                    </List>
                </View>
                </WingBlank>
                <WingBlank>   
                
                <Button 
                    style={{ alignSelf:'center', borderRadius: 30,  bottom: 0, width: '90%',borderColor: 'blue'}}
                    onPress={()=>{this.submit()}}>
                        确认提交认证信息
                </Button>
                </WingBlank>
    
            </View>
        );
        }
    }

}

