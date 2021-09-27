import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Images from '../../../constants/Images';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import CommonButton from '../../components/CommonGradientButton';
import { icons } from '../../../constants';

export default function Login() {
  const navigation = useNavigation();

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required('This field is' + ' ' + 'required.')
      .matches(/(\d){10}\b/, 'Enter a valid phone number'),
  });

  const login = data => {
    // CommonLoading.show();
    const signInData = {
      MobileNumber: data.phone,
    };
    console.log(signInData);
    navigation.navigate('OtpScreen',{
      MobileNumber: data.phone,
    })
    // dispatch(AuthActions.signIn('Account/LoginStart', signInData)).then(
    //   (response) => {
    //     CommonLoading.hide();
    //     if (response && response.success === false) { } else {
    //       navigation.navigate('OTPScreen', {
    //         phone: data.phone,
    //         screenName: 'Login',
    //       });
    //     }
    //   },
    // );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />

      <View style={styles.body}>

        <View style={{ alignItems: 'center' }}>
          <Image source={Images.gallantLogo} style={styles.logoImage} />
          <View style={styles.textContainer}>
            <Text style={styles.logoText}>
              Let’s play sports at
            </Text>
            <Text style={[styles.logoText, { fontFamily: FONTS.satoshi700 }]}>
              Premium Arenas
            </Text>
          </View>

        </View>

        <View style={styles.loginContainer}>
          <Formik
            validationSchema={schema}
            initialValues={{
              phone: '',
            }}
            onSubmit={values => login(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={{ marginTop: 60 }}>
                  <Text style={styles.loginText}>
                    Login
                  </Text>
                </View>
                <View>
                  <Text style={styles.phoneNumberText}>
                    Phone Number
                  </Text>
                </View>
                <View style={styles.checkMarkContainer}>
                  <TextInput
                    name="phone"
                    style={styles.phoneInput}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    keyboardType="numeric"
                    placeholder="Phone Number"
                    placeholderTextColor="#B4B4B4"
                    maxLength={10}
                  />
                  {!errors.phone && touched.phone && (
                    <Image source={icons.tick} style={styles.checkMarkIcon} />
                  )}
                </View>
                  {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )}
                <CommonButton
                  style={{ marginTop: 120 }}
                  // onPress={() => navigation.navigate('OtpScreen')}
                  onPress={handleSubmit}
                  children="Confirm" />
              </>
            )}
          </Formik>
        </View>

        <View>
          <View style={styles.termsTextContainer}>
            <Text style={styles.termsText}>
              By continuing, I confirm that I have read & agree to the
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={[styles.termsText, { fontFamily: FONTS.satoshi700 }]}>
                Terms & Conditions
              </Text>
              <Text style={[styles.termsText, { marginHorizontal: 3 }]}>
                and
              </Text>
              <Text style={[styles.termsText, { fontFamily: FONTS.satoshi700 }]}>
                Privacy Policy.
              </Text>
            </View>

          </View>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    padding: SIZES.paddingLarge,
    paddingTop: SIZES.paddingExtraLarge,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
  },
  logoImage: {
    width: Responsive.width(136),
    height: Responsive.height(146),
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: SIZES.padding1,
  },
  logoText: {
    fontFamily: FONTS.satoshi400,
    color: '#FFFFFF',
    marginRight: 3,
    fontSize: Responsive.font(SIZES.h2),
  },
  loginContainer: {
    // backgroundColor: 'red'
  },
  loginText: {
    fontSize: SIZES.largeTitle,
    fontFamily: FONTS.satoshi900,
    color: COLORS.white,
  },
  phoneInput: {
    marginTop: SIZES.h1,
    color: COLORS.white,
    fontSize: SIZES.h2,
    height: Responsive.height(50),
    fontFamily: FONTS.satoshi400,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  checkMarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 26,
    justifyContent: 'center',
    paddingBottom: 25,
  },
  checkMarkIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: -28,
    tintColor: '#FFFFFF',
    marginTop: Responsive.height(36),
  },
  error: {
    // padding: 4,
    color: '#cc0000',
  },
  phoneNumberText: {
    color: COLORS.white,
    fontFamily: FONTS.satoshi500,
    paddingTop: SIZES.paddingExtraLarge,
  },
  termsTextContainer: {
    // flexDirection: 'row',
    paddingTop: SIZES.h3,
  },
  termsText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FONTS.satoshi400,
  },
});