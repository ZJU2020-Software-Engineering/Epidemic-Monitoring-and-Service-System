import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'

// 將你們各自模塊的首頁加進來
import Profile from '../basic/Profile';
import PersonHome from '../purchase/PersonHome';

var navigation = null;
export default class TabBar  extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'Profile',
            //username:this.props.navigation.getParam( 'username', 'No username provided'),
            
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
    return (
      <View style={styles.container}>
        <TabNavigator>

          {this._renderTabarItems('Profile',require('../assets/mine.jpg'),require('../assets/mine.jpg'),Profile)}
          {this._renderTabarItems('志愿采购', require('../assets/shopping.png'),require('../assets/shopping.png'), PersonHome)}
       
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