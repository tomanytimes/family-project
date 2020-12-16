import React, { Component } from 'react';
import { Platform , StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'; 
import FirstFrame from './Frame/FirstFrame'
import SecondFrame from './Frame/SecondFrame'
import thirdFrame from './Frame/thirdFrame'

const AppTabNavigator = createMaterialTopTabNavigator({
  FirstFrame: { screen: FirstFrame },
  SecondFrame: { screen: SecondFrame },
  thirdFrame: { screen: thirdFrame }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        ios:{
          backgroundColor:'white',
        },
        android: {
          backgroundColor:'white',
        },
        web: {
          backgroundColor:'white',
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});


const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  
  static navigationOptions = {
    headerShown: false
  }
  render() {
    return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});