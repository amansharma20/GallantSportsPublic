/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../../../constants';

export default function Upcoming() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Upcoming</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
});
