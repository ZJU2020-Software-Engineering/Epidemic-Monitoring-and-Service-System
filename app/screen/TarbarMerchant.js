import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import ProfileMerchant from '../basic_M/ProfileMerchant';
import {SplashComponent} from '../purchase_M/SplashComponent';
import Cache from './Cache';

var navigation = null;

export default class TarBarMerchant extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'SplashComponent',
            username:this.props.navigation.getParam( 'username', 'No username provided'),
            token:this.props.navigation.getParam( 'token', 'No token provided'),
        };
        navigation = this.props.navigation;
    }
    _renderTabarItems(selectedTab,icon,selectedIcon,Component){
    return (
      <TabNavigator.Item
          selected={this.state.selectedTab === selectedTab}  
          title={selectedTab} 
          titleStyle={styles.tabText}  
          selectedTitleStyle={styles.selectedTabText}  
          renderIcon={() => <Image style={styles.icon} source={icon} />}  
          renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}  
          onPress={() => this.setState({ selectedTab: selectedTab })}
      >
          <Component navigation={navigation}/>
      </TabNavigator.Item>
    )

  }

    render() {
      // Cache.set('username', this.state.username);
    return (
      <View style={styles.container}>
        <TabNavigator>
         
          {this._renderTabarItems('商家个人中心',require('../assets/mine.jpg'),require('../assets/mine.jpg'), ProfileMerchant)}
          {this._renderTabarItems('志愿采购模块',require('../assets/volun.png'),require('../assets/volun.png'), SplashComponent, {name: this.state.username})}


        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
      
    },
    tabText: {
        color: "#666666",
        fontSize: 13
    },
    selectedTabText: {
        color: "#ff8a00",
        fontSize: 13
    },
    icon: {
        width: 25,
        height: 25
    }
});
