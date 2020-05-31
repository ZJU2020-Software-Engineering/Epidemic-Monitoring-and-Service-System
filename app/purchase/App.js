import React from 'react';
import PersonNavigator from './PersonNavigator';
//AppRegistry.registerComponent('ItemDemo', () => ItemNavigator);
import {UserHome} from './UserHome';
import Cache from './Cache';

export default class App extends React.Component {
  CachePrepare(){
    Cache.set('account','007');
    Cache.set('user name','tester');
    Cache.set('address','紫金港云峰7幢');
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

    await Font.loadAsync(
      'antfill',
      // eslint-disable-next-line
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );
    // eslint-disable-next-line
    this.setState({ isReady: true });
  }
  
  render(){
    this.CachePrepare();
    return (
      <PersonNavigator />
      //<UserHome />
      );
  }
}
