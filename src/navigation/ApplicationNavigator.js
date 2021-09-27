/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}
