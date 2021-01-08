import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import RootNavigator from '../navigation/RootNavigator';
import AppLoading from './AppLoading';
import { cacheImages, cacheFonts } from '../helpers/AssetsCaching';
import vectorFonts from '../helpers/vector-fonts';
import {ThemeReducer, initialState, ThemeReducerContext} from '../helpers/ThemeReducer';

export default function App() {
  const [ThemeState, dispatch] = useReducer(ThemeReducer, initialState);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'dark') {
      dispatch({ type: 'set-theme', payload: 'dark' });
    }
  }, [colorScheme]);

  const [isReady, setIsReady] = useState(false);

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('../../assets/images/bg_screen1.jpg'),
      require('../../assets/images/bg_screen2.jpg'),
      require('../../assets/images/bg_screen3.jpg'),
      require('../../assets/images/bg_screen4.jpg'),
      require('../../assets/images/user-cool.png'),
      require('../../assets/images/user-hp.png'),
      require('../../assets/images/user-student.png'),
      require('../../assets/images/avatar1.jpg'),
    ]);

    const fontAssets = cacheFonts([
      ...vectorFonts,
      { georgia: require('../../assets/fonts/Georgia.ttf') },
      { regular: require('../../assets/fonts/Montserrat-Regular.ttf') },
      { light: require('../../assets/fonts/Montserrat-Light.ttf') },
      { bold: require('../../assets/fonts/Montserrat-Bold.ttf') }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  } 
  
  return (
    <ThemeReducerContext.Provider value={{ ThemeState, dispatch }}>
      <ThemeProvider useDark={ThemeState.themeMode === 'dark' ? true : false}>
        <RootNavigator />
      </ThemeProvider>
    </ThemeReducerContext.Provider>
  );
};