import React from 'react';
import { View, Dimensions,Text} from 'react-native';
import _ from 'lodash';
import { Flex,WingBlank } from '@ant-design/react-native';
import { TabView, SceneMap} from 'react-native-tab-view';

class ShowNumBlock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: props.number,
      rest: props.rest
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
              <ShowNumBlock title={'紫金港校医院'} number={124} rest={259}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'启真便利超市'} number={8} rest={23}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={41} rest={35}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={18} rest={9}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'海梦造型'} number={3} rest={4}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'东操场'} number={49} rest={280}/> 
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'西操场'} number={67} rest={239}/> 
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'基础图书馆'} number={287} rest={329}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'农医图书馆'} number={232} rest={258}/>
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
              <ShowNumBlock title={'操场'} number={188} rest={320}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'阿华发艺'} number={5} rest={7}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={16} rest={21}/>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={26} rest={7}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'玉泉图书馆'} number={159} rest={76}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教七'} number={178} rest={93}/> 
            </Flex.Item>
          </Flex>
        </WingBlank> 
        <WingBlank style={{ marginTop: 10, marginBottom: 20 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教四'} number={76} rest={129}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教十'} number={89} rest={120}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教十一'} number={43} rest={149}/> 
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
              <ShowNumBlock title={'西溪图书馆'} number={89} rest={289}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={10} rest={25}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={7} rest={24}/> 
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
              <ShowNumBlock title={'华家池图书馆'} number={126} rest={38}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={9} rest={36}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={8} rest={14}/> 
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
              <ShowNumBlock title={'之江图书馆'} number={36} rest={47}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={8} rest={26}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={3} rest={19}/> 
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
              <ShowNumBlock title={'舟山图书馆'} number={86} rest={218}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={28} rest={5}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={7} rest={11}/> 
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
              <ShowNumBlock title={'海宁图书馆'} number={86} rest={168}/>  
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'教育超市'} number={18} rest={26}/>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <ShowNumBlock title={'菜鸟驿站'} number={15} rest={14}/> 
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