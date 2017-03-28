/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Main from './App/Components/Main';

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class safehippoRN extends Component {
  render() {
    return (
      <NavigatorIOS 
        initialRoute={{
          component: Main,
          title: 'Safehippo',
        }}
        style={styles.container}
      />
    );
  }
}

AppRegistry.registerComponent('safehippoRN', () => safehippoRN);
