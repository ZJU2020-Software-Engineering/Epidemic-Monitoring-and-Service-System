import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, WhiteSpace, List, Provider, InputItem, DatePicker, Radio } from '@ant-design/react-native';
import { fetch } from 'whatwg-fetch';
import Cache from '../screen/Cache';

const RadioItem = Radio.RadioItem;

export default class DailyReportScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //username: this.props.navigation.getParam('token', 'No token provided'),
            username: Cache.get('account'),
            address:'',
            nowdate: new Date(),
            name: 0,
            temperature: 0,
            isdiagnose: 2,
            isquar: 2,
            quardate: '2020-01-01',
            iscontact: 2,
            issymptom: 2,
            hcode: 1,
            suspected: 1,
            alimentarycannal: 0,
            chestdistress: 0,
            cough: 0,

        };
    }
    submit = () => {
        if (!this.state.nowdate || !this.state.name || !this.state.temperature) alert("请完善问题 Please complete problem");
        else {
            fetch('http://182.92.243.158:8004/request/clockIn', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    username:this.state.username,
                    date: this.state.nowdate,
                    name: this.state.name,
                    temperature: this.state.temperature,
                    confirmed: this.state.isdiagnose,
                    quarantined: this.state.isquar,
                    quarantineDate: this.state.quardate,
                    suspected:this.state.suspected,
                    contacted: this.state.iscontact,
                    infected: this.state.issymptom,
                    alimentarycannal: this.state.alimentarycannal,
                    chestdistress: this.state.chestdistress,
                    cough: this.state.cough,

                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).catch(e => {
                console.log('submit failed');
            });
            alert('提交成功 Submit successfully');
        }
    };
    render() {

        return (
            <Provider>
                <View style={{backgroundColor: '#fff'}}>
                <View style={{marginHorizontal: 7, marginVertical: 5}}>
                    <ScrollView >
                        <List>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{paddingLeft: 10, fontSize: 18}}>1. 今日日期 Today's date</Text>
                            <DatePicker
                                defaultDate={this.state.nowdate}
                                mode="date"
                                value={this.state.nowdate}
                                format="YYYY-MM-DD"
                                title='打卡日期'
                                extra='请选择'
                                disabled={true}
                                    onChange={value => (this.setState({ nowdate: value.substring(0, 10) }))}
                            >
                                <List.Item arrow="horizontal">Select Date</List.Item>
                            </DatePicker>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{paddingLeft: 10, fontSize: 18}}>2. 姓名 Name</Text>
                            <InputItem
                                clear
                                value={this.state.name}
                                onChange={value => (this.setState({ name: value }))}
                            />
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{ paddingLeft: 10, fontSize: 18 }}>3. 今日测量体温 Today's temperature</Text>
                            <InputItem
                                clear
                                value={this.state.temperature}
                                onChange={value => (this.setState({ temperature: value }))}
                                placeholder="例：36.5"
                            />
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{ paddingLeft: 10, fontSize: 18 }}>4. 是否确诊 Diagnosis or not</Text>
                            <RadioItem
                                checked={this.state.isdiagnose === 1}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ isdiagnose: 1 });
                                    }
                                }}
                            >
                                是 Yes
                                </RadioItem>
                            <RadioItem
                                checked={this.state.isdiagnose === 2}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ isdiagnose: 2 });
                                    }
                                }}
                            >
                                否 No
                                </RadioItem>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{ paddingLeft: 10, fontSize: 18 }}>5. 是否隔离 Isolation or not</Text>
                            <RadioItem
                                checked={this.state.isquar === 1}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ isquar: 1 });
                                    }
                                }}
                            >
                                是 Yes
                                </RadioItem>
                            <RadioItem
                                checked={this.state.isquar === 2}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ isquar: 2 });
                                    }
                                }}
                            >
                                否 No
                                </RadioItem>
                            <WhiteSpace />
                            <WhiteSpace />
                            {(this.state.isquar != 2) && (
                            <View>
                                    <Text style={{ paddingLeft: 10, fontSize: 18 }}>开始隔离日期 Start quarantine date</Text>
                              <DatePicker
                                  defaultDate={this.state.quardate}
                                  mode="date"
                                  value={this.state.quardate}
                                  minDate={new Date(2019, 1, 1)}
                                  maxDate={new Date(2022, 1, 1)}
                                  format="YYYY-MM-DD"
                                            onChange={value => (this.setState({ quardate: value.substring(0, 10) })) }
                              >
                              <List.Item arrow="horizontal">Select Date</List.Item>
                              </DatePicker>
                                    <WhiteSpace />
                                    <WhiteSpace />
                            </View>
                                )}
                                <Text style={{ paddingLeft: 10, fontSize: 18 }}>6. 是否疑似 suspected or not</Text>
                                <RadioItem
                                    checked={this.state.suspected === 1}
                                    onChange={event => {
                                        if (event.target.checked) {
                                            this.setState({ suspected: 1 });
                                        }
                                    }}
                                >
                                    是 Yes
                                </RadioItem>
                                <RadioItem
                                    checked={this.state.suspected === 2}
                                    onChange={event => {
                                        if (event.target.checked) {
                                            this.setState({ suspected: 2 });
                                        }
                                    }}
                                >
                                    否 No
                                </RadioItem>
                                <WhiteSpace />
                                <WhiteSpace />
                            <Text style={{ paddingLeft: 10, fontSize: 18 }}>7. 是否接触过患者或疑似患者 Contact with patients</Text>
                            <RadioItem
                                checked={this.state.iscontact === 1}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ iscontact: 1 });
                                    }
                                }}
                            >
                                是 Yes
                                </RadioItem>
                            <RadioItem
                                checked={this.state.iscontact === 2}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ iscontact: 2 });
                                    }
                                }}
                            >
                                否 No
                                </RadioItem>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Text style={{ paddingLeft: 10, fontSize: 18 }}>8. 是否有感染症状 Infection symptoms or not</Text>
                            <RadioItem
                                checked={this.state.issymptom === 1}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ issymptom: 1 });
                                    }
                                }}
                            >
                                是 Yes
                                </RadioItem>
                            <RadioItem
                                checked={this.state.issymptom === 2}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ issymptom: 2 });
                                    }
                                }}
                            >
                                否 No
                                </RadioItem>
                            <WhiteSpace />
                            <WhiteSpace />
                                {(this.state.issymptom != 2) && (
                                    <View>
                                        <Text style={{ paddingLeft: 10, fontSize: 18 }}>腹泻 Alimentary cannal or not</Text>
                                        <RadioItem
                                            checked={this.state.alimentarycannal === 1}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ alimentarycannal: 1 });
                                                }
                                            }}
                                        >
                                            是 Yes
                                        </RadioItem>
                                        <RadioItem
                                            checked={this.state.alimentarycannal === 2}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ alimentarycannal: 2 });
                                                }
                                            }}
                                        >
                                            否 No
                                        </RadioItem>
                                        <WhiteSpace />
                                        <WhiteSpace />
                                    </View>
                                )}
                                {(this.state.issymptom != 2) && (
                                    <View>
                                        <Text style={{ paddingLeft: 10, fontSize: 18 }}>胸闷 Chest distress or not</Text>
                                        <RadioItem
                                            checked={this.state.chestdistress === 1}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ chestdistress: 1 });
                                                }
                                            }}
                                        >
                                            是 Yes
                                        </RadioItem>
                                        <RadioItem
                                            checked={this.state.chestdistress === 2}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ chestdistress: 2 });
                                                }
                                            }}
                                        >
                                            否 No
                                        </RadioItem>
                                        <WhiteSpace />
                                        <WhiteSpace />
                                    </View>
                                )}
                                {(this.state.issymptom != 2) && (
                                    <View>
                                        <Text style={{ paddingLeft: 10, fontSize: 18 }}>咳嗽 cough or not</Text>
                                        <RadioItem
                                            checked={this.state.cough === 1}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ cough: 1 });
                                                }
                                            }}
                                        >
                                            是 Yes
                                        </RadioItem>
                                        <RadioItem
                                            checked={this.state.cough === 2}
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    this.setState({ cough: 2 });
                                                }
                                            }}
                                        >
                                            否 No
                                        </RadioItem>
                                        <WhiteSpace />
                                        <WhiteSpace />
                                    </View>
                                )}
                            <Text style={{paddingLeft: 10, fontSize: 18}}>9. 健康码状态 Healthy code state </Text>
                            <RadioItem
                                checked={this.state.hcode === 1}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ hcode: 1 });
                                    }
                                }}
                            >
                                绿色 Green
                                </RadioItem>
                            <RadioItem
                                checked={this.state.hcode === 2}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ hcode: 2 });
                                    }
                                }}
                            >
                                黄色 Yellow
                                </RadioItem>
                            <RadioItem
                                checked={this.state.hcode === 3}
                                onChange={event => {
                                    if (event.target.checked) {
                                        this.setState({ hcode: 3 });
                                    }
                                }}
                            >
                                红色 Red
                                </RadioItem>
                            <WhiteSpace />
                            <WhiteSpace />
                            <Button style={{marginLeft: 2, marginRight:2, bottom: 2}} onPress={()=>this.submit()} type="primary">
                                提交 Submit
                            </Button>
                        </List>
                    </ScrollView>
                </View>
                </View>
            </Provider>
        );
    }
}
