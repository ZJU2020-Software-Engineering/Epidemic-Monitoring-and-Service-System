import React from 'react';
import { View, Dimensions,Text} from 'react-native';
import _ from 'lodash';
import { Flex,WingBlank } from '@ant-design/react-native';
import { TabView, SceneMap} from 'react-native-tab-view';

const canteen = [ '海宁校区食堂', 
                  '舟山校区食堂', 
                  '之江食堂', 
                  '华家池五食堂', '华家池一食堂', 
                  '西溪二食堂', '西溪一食堂二楼', '西溪一食堂一楼',
                  '玉泉四食堂二楼', '玉泉四食堂一楼', '玉泉怡膳堂', '玉泉二食堂二楼', '玉泉二食堂一楼', '玉泉一食堂',
                  '紫金港生活组团食堂二楼', '紫金港文科组团食堂二楼', '紫金港文科组团食堂一楼', '紫金港麦香餐厅', '紫金港临湖餐厅二楼', '紫金港风味餐厅', '紫金港东区大食堂二楼西区', '紫金港东区大食堂二楼东区'
                ];

function getNum (array, name){
  for (var obj in array){
    if (array[obj].year == name && array[obj].country == "当前人数"){
      return array[obj].value;
    }
  }
}

function getRest (array, name){
  for (var obj in array){
    if (array[obj].year == name && array[obj].country == "剩余容量"){
      return array[obj].value;
    }
  }
}



class ShowNumBlock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      rest: 100
    }
  }
  percent(){
    var str=Number(this.state.number/(this.state.number+this.state.rest)*100).toFixed(2);
    str+="%";
    return str;
  }
  color(){
    var color = 'green';
    const ratio = this.state.number/(this.state.number+this.state.rest);
    if (ratio > 0.9) {
      color = '#8B0000';
    }else if (ratio > 0.75){
      color = 'red';
    }else if (ratio > 0.5){
      color = 'orange';
    }
    return color;
  }
  componentDidMount(){
    setInterval(() => {
      this.fetchData();
    }, 1000);
  }
  async fetchData(){
    try{
      let data = await fetch('http://zdys.zju.edu.cn/monitor/general.php');
      let jsonData = await data.json();
      let source = await jsonData.data;
      this.setState(previousState => {
        return { number: getNum(source, this.props.title),
                  rest: getRest(source, this.props.title)};
      });
    }catch(error){
      console.log(error);
    }
  }
  render(){
    return (
    <View alignItems='center' style={{textAlign : 'center'}}>
      <Text style={{fontSize: 17, color: 'black', alignItems:'center'}}>{this.props.title}</Text>
      <Text style={{fontSize: 25,
                    fontStyle: 'normal',
                    fontWeight: '600',
                    color : this.color()}}>
                      {this.percent()}
      </Text>     
      <Flex> 
        <View alignItems='center'>
            <Text style={{fontSize: 10,color : '#828282'}}>当前人数</Text>
            <Text style={{color : '#2096F3'}}>{this.state.number}</Text>
        </View>
        <Text style={{color : '#828282'}}>  |  </Text>
        <View alignItems='center'>
            <Text style={{fontSize: 10,color : '#828282'}}>剩余容量</Text>
            <Text style={{color : '#2096F3'}}>{this.state.rest}</Text>
        </View>
      </Flex>
    </View>
    );
  }

}


const ZjgRoute = () => (
  <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[21]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[20]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[19]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[18]}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[17]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[16]}/> 
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[15]}/> 
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[14]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>  
  </View>
)

const YqRoute = () => (
  <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[13]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[12]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[11]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[10]}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[9]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[8]}/> 
            </Flex.Item>
          </Flex>
        </WingBlank> 
  </View>
)
const XxRoute = () => (
    <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[7]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[6]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[5]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
    </View>
)
const HjcRoute = () => (
    <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[4]}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[3]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
    </View>
)
const ZjRoute = () => (
  <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[2]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
  </View>
)
const ZsRoute = () => (
  <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[1]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
  </View>
)
const HnRoute = () => (
  <View>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={canteen[0]}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
  </View>
)

export default function NumberDisplay(){
    const initialLayout = { width: Dimensions.get('window').width };
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 'zjg', title: '紫金港'},
      {key: 'yq', title: '玉泉'},
      {key: 'xx', title: '西溪'},
      {key: 'hjc', title: '华家池'},
      {key: 'zj', title: '之江'},
      {key: 'zs', title: '舟山'},
      {key: 'hn', title: '海宁'}
    ]);
  
    const renderScene = SceneMap({
      zjg: ZjgRoute,
      yq: YqRoute,
      xx: XxRoute,
      hjc: HjcRoute,
      zj: ZjRoute,
      zs: ZsRoute,
      hn: HnRoute
    });
    return(
        <TabView style={{borderRadius: 5}}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    );
  }