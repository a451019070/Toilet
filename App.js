/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TTabBarAA from './ios_views/tTabBar';


const App: () => React$Node = () => {
  return (
    <>
      <TTabBarAA>
      </TTabBarAA>
      <SafeAreaView style={{backgroundColor:'#F8F8F8'}}>
      </SafeAreaView>
      <StatusBar barStyle='dark-content' />
    </>
  );
};

export default App;
