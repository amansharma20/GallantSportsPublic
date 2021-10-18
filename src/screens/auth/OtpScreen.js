import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Images from '../../../constants/Images';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import CommonButton from '../../components/CommonGradientButton';
import { icons } from '../../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OtpScreen(props) {
    // console.log(props.route.params.MobileNumber);
    const mobileNumber = props.route.params.MobileNumber;
    const navigation = useNavigation();

    const schema = yup.object().shape({
        phone: yup
            .string()
            .required('This field is' + ' ' + 'required.')
            .matches(/(\d){10}\b/, 'Enter a valid phone number'),
    });

    const onPressConfirm = () => {
        // setTimeout(function timer() {
        //     setHidden(false);
        // }, 30000);
        timerStart;
        navigation.navigate('PersonalDetails');
    }
    // this.state = {
    //     timerStart: true,
    //     stopwatchStart: false,
    //     totalDuration: 90000,
    //     timerReset: false,
    //     stopwatchReset: false,
    //   };

    // const login = data => {
    //   CommonLoading.show();
    //   const signInData = {
    //     MobileNumber: data.phone,
    //   };
    //   dispatch(AuthActions.signIn('Account/LoginStart', signInData)).then(
    //     (response) => {
    //       CommonLoading.hide();
    //       if (response && response.success === false) { } else {
    //         navigation.navigate('OTPScreen', {
    //           phone: data.phone,
    //           screenName: 'Login',
    //         });
    //       }
    //     },
    //   );
    // };

    const [otpTimer, setOtpTimer] = useState(30);
    useEffect(() => {

        let interval = setInterval(() => {

            setOtpTimer(oldValue => {

                oldValue <= 1 && clearInterval(interval)

                return oldValue - 1

            })

        }, 1000)
        return () => clearInterval(interval)
    }, [])


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
                                <View>
                                    <Text style={styles.loginText}>
                                        Login
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={styles.phoneNumberText}>
                                        Please enter the 4 digit code
                                    </Text>
                                    <Text style={[styles.phoneNumberText, { fontFamily: FONTS.satoshi700 }]}>
                                        sent to you at +91 {mobileNumber}.
                                    </Text>
                                </View>
                                <View style={styles.otpContainer}>
                                    <OTPInputView
                                        pinCount={4}
                                        // autoFocusOnLoad
                                        style={styles.otpInputContainer}
                                        codeInputFieldStyle={styles.underlineStyleBase}
                                    // onCodeFilled={(code => {
                                    //     setOtp(code);
                                    //     console.log(`Code is ${code}, you are good to go!`);
                                    // })}
                                    />
                                </View>

                            </>
                        )}
                    </Formik>
                </View>

                <View style={{ alignItems: 'center' }}>
                            <View style={styles.resendOtp}>
                                {
                                    otpTimer > 0 ?
                                        (
                                            <Text style={styles.resendOtpText}>
                                                {otpTimer}s
                                            </Text>
                                        ) : (
                                            <View style={styles.resendOtp}>
                                                <Text style={styles.resendOtpText}>
                                                    Didn’t get OTP?
                                                </Text>
                                                <TouchableOpacity onPress={() => setOtpTimer(30)}>
                                                    <Text style={styles.resendOtpTextBold}>
                                                        Resend OTP
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                }
                            </View>
                    <View style={{ width: '100%' }}>
                        <CommonButton onPress={(onPressConfirm)} children="Confirm" />
                        <View style={styles.termsTextContainer} />
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
        paddingBottom: SIZES.paddingExtraLarge,
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
        padding: 4,
        color: '#cc0000',
    },
    phoneNumberText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
        fontSize: 18,
    },
    termsTextContainer: {
        // flexDirection: 'row',
        paddingTop: SIZES.h3,
    },
    termsText: {
        color: COLORS.background,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: FONTS.satoshi400,
    },
    otpContainer: { alignItems: 'center' },
    otpInputContainer: {
        width: '80%',
        height: 100,
    },
    underlineStyleBase: {
        color: COLORS.white,
        borderBottomWidth: 1,
        borderWidth: 0,
        fontSize: 22,
        fontFamily: FONTS.satoshi400,
        alignItems: 'center',
    },
    resendOtp: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    resendOtpText: {
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
        fontSize: 14,
    },
    resendOtpTextBold: {
        fontFamily: FONTS.satoshi700,
        color: COLORS.white,
        marginLeft: SIZES.paddingLarge,
        fontSize: 14,
    },

});

const options = {
    container: {

    },
    text: {
        fontFamily: FONTS.satoshi500
    }
}