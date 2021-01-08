import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './src/Components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen // MainScreen 컴포넌트를 네비게이터에 등록
    ,navigationOptions : {
      
    }
  }
},{
  headerMode: 'none'
});

export default createAppContainer(AppStackNavigator);