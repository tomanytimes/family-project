import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation-tabs'; 
import FirstFrame from './Frame/FirstFrame'
import SecondFrame from './Frame/SecondFrame'
import thirdFrame from './Frame/thirdFrame'

// 하단 탭 네비게이터 생성
const AppTabNavigator = createBottomTabNavigator({
  HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
  
 // navigationOptions 코드 생략

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