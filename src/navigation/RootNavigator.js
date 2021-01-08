import React, { useContext } from 'react';
import {Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import CommonHeader from '../Components/Common/Header'
import DrawerNavigator from './DrawerNavigator';

import first from '../Components/Frame/FirstFrame';
import second from '../Components/Frame/SecondFrame';
import third from '../Components/Frame/thirdFrame';



const mainPage = createStackNavigator({
  First: {
    screen: first,
    navigationOptions: ({ navigation }) => ({
      header: () => <CommonHeader title="Home" navigation={navigation} />,
      drawerLabel: 'Home',
    }),
  },
});

const twoPage = createStackNavigator({
  Second: {
    screen: second,
    navigationOptions: ({ navigation }) => ({
      header: () => <CommonHeader title="Detail" navigation={navigation} />,
      drawerLabel: 'Detail',
    }),
  },
});

const threePage = createStackNavigator({
  Third: {
    screen: third,
    navigationOptions: ({ navigation }) => ({
      header: () => <CommonHeader title="About" navigation={navigation} />,
      drawerLabel: 'About',
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    mainPage: {
      screen: mainPage,
      navigationOptions: ({ navigation }) => ({
        // header: <Header title="Home" navigation={navigation} />,
        drawerLabel: 'Home',
      }),
    },
    twoPage: {
      screen: twoPage,
      navigationOptions: {
        drawerLabel: 'Detail',
      },
    },
    threePage: {
      screen: threePage,
      navigationOptions: {
        drawerLabel: 'About',
      },
    },
  },
  {
    contentComponent: DrawerNavigator,
    drawerWidth: Dimensions.get('window').width - 150,
  }
);

export default createAppContainer(Drawer);