import React from 'react';
import { WhiteSpace, WingBlank, Steps} from '@ant-design/react-native';
import { View } from 'react-native';
import { Card } from 'react-native-paper';

//从数据库中获取申请状态: 1 正在审核 2 审核完成
var status = 1; 

const Step = Steps.Step;
class StatusDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <WingBlank size="lg">
            <WhiteSpace/>
            <WhiteSpace/>
            <Steps current={status}>
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
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Card style={{ width: 300, marginTop:60, marginLeft:60, marginRight: 60, borderRadius: 15, elevation:3}}>
                    <Card.Content>
                        <StatusDisplay/>
                    </Card.Content>
                </Card>
            </View>
        )
    }
}