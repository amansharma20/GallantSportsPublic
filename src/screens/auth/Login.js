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

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required('This field is' + ' ' + 'required.')
      .matches(/(\d){10}\b/, 'Enter a valid phone number'),
  });

  const login = data => {
    CommonLoading.show();
    const signInData = {
      MobileNumber: data.phone,
    };
    console.log(signInData);
    navigation.navigate('OtpScreen', {
      MobileNumber: data.phone,
    })
    dispatch(AuthActions.signIn('Account/LoginStart', signInData)).then(
      (response) => {
        CommonLoading.hide();
        if (response && response.success === false) { console.log('error') } else {
          navigation.navigate('OtpScreen', {
            phone: data.phone,
            screenName: 'Login',
          });
        }
      },
    );
  };

  return (

    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />

      <ScrollView style={{ backgroundColor: COLORS.background }}>
        <View style={styles.body}>
          <View style={{ alignItems: 'center' }}>
            <Image source={Images.gallantLogo} style={styles.logoImage} />
            <View style={styles.textContainer}>
              <Text style={styles.logoText}>
                Let’s play sports at
              </Text>
              <Text style={[styles.logoText, { fontFamily: FONTS.satoshi700 }]}>
                Premium Arena's
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
                  <View style={{ marginTop: 40 }}>
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
                    {/* {!errors.phone && touched.phone && (
                    <Image source={icons.tick} style={styles.checkMarkIcon} />
                  )} */}
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -35, }}>
                    <Divider orientation="horizontal" style={{ width: '85%' }} />
                  </View>

                  {errors.phone && touched.phone && (
                    <Text style={styles.error}>{errors.phone}</Text>
                  )}

                  <CommonButton
                    style={{ marginTop: 80 }}
                    // onPress={() => navigation.navigate('BookingSummary')}
                    onPress={handleSubmit}
                    children="Get OTP" />
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
      </ScrollView>

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
    paddingTop: 30,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
  },

  logoImage: {
    width: Responsive.width(136),
    height: Responsive.height(170),
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

  loginText: {
    paddingTop: 40,
    fontSize: 34,
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
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.white,
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
    fontSize: 10,
    paddingLeft: 25,
    color: '#FFFFFF',
  },

  redirectToSignUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
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