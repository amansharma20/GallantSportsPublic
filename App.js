/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import SplashScreen from  "react-native-splash-screen";

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text> 
          text
          </Text>
      </View>
    </SafeAreaView>
  );
};

