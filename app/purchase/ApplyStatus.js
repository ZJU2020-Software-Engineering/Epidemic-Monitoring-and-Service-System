import React from 'react';
import { WhiteSpace, WingBlank, Steps,Button} from '@ant-design/react-native';
import { View} from 'react-native';
import { Card } from 'react-native-paper';
import { GetUserInfo } from './DatabaseClient';
import * as Font from 'expo-font';

const Step = Steps.Step;
export class StatusDisplay extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };
  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };
  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')

    );
    console.log("success");
    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <WingBlank size="lg">
            <WhiteSpace/>
            <WhiteSpace/>
            <Steps current={this.props.status}>
              <Step
                key={0}
                title="确认认证信息"
                status="finish"
              />
              <Step
                key={1}
                title="身份认证正在审核中"
                description="预计1~3天内审核完毕"
                status="progress"
              />
              <Step
                key={2}
                title="审核完成"
                status="wait"
              />
            </Steps>
          </WingBlank>
        </View>
    );
  }
}

export default class ApplyStatus extends React.Component{
  constructor(props) {
    super(props);
    let username = props.navigation.state.params.username;
    this.state = {
      username: username,
      isVolunteer: true
    }
  }
  componentDidMount(){
    GetUserInfo(this.state.username)
      .then((response) => {this.successShow(response[0])});
  }

  successShow(response){
    console.log('hello');
    this.setState(
        {
          status: response.status,
        }
    );
    console.log(this.state.status);
    let isVolunteer = (this.state.status != null && this.state.status == 2) ? false : true;
    console.log(isVolunteer);
    this.setState(
      {
        isVolunteer: isVolunteer
      }
    )
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