import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TextInput } from 'react-native';
import Images from '../../../constants/Images';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import CommonButton from '../../components/CommonGradientButton';
import { icons } from '../../../constants';
import { Divider } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import CommonLoading from '../../components/CommonLoading';
import { AuthActions } from '../../persistence/actions/AuthActions';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <View style={{ paddingTop: 80 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Images.gallantLogo} style={styles.logoImage} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.logoText}>Let’s play sports at</Text>
          <Text style={[styles.logoText, { fontFamily: FONTS.satoshi700 }]}>Premium Arenas</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 30, paddingBottom: 60 }}>
        <CommonButton
          onPress={() => navigation.navigate('Login')}
          children="Login" />
        <CommonButton
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate('SignUp')}
          children="Register" />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between'
  },

  body: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SIZES.paddingLarge,
    paddingTop: SIZES.paddingExtraLarge,
    backgroundColor: COLORS.background,
  },

  logoImage: {
    width: Responsive.width(136),
    height: Responsive.height(146),
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SIZES.padding1,
  },

  logoText: {
    fontFamily: FONTS.satoshi400,
    color: '#FFFFFF',
    marginRight: 3,
    fontSize: Responsive.font(SIZES.h2),
  },

  loginText: {
    fontSize: SIZES.largeTitle,
    fontFamily: FONTS.satoshi900,
    color: COLORS.white,
  },

});