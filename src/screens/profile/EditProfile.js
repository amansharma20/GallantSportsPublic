import React, { useState, useContext } from 'react';
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    Image,
    TextInput,
    Modal,
    ScrollView
} from 'react-native';
import Images from '../../../constants/Images';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup';
import CommonButton from '../../components/CommonGradientButton';
import { icons, images } from '../../../constants';
import CommonLoading from '../../components/CommonLoading';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useDispatch } from 'react-redux';
import Icons from '../../../constants/Icons';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

export default function EditProfile() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        firstName: yup.string().required('First Name' + ' ' + 'is required'),
        lastName: yup.string().required('Last Name' + ' ' + 'is required'),
        email: yup.string().required('Email' + ' ' + 'is required'),
        phone: yup.number().required('Date of Birth' + ' ' + 'is required'),
        phone: yup
            .string()
            .required('This field is' + ' ' + 'required.')
            .matches(/(\d){10}\b/, 'Enter a valid phone number'),
    });

    const signup = data => {
        CommonLoading.show();
        const editProfileData = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Email: data.email,
            MobileNumber: data.phone,
        };
        console.log(editProfileData);
        // dispatch(
        //     AuthActions.signup('Account/RegisterCustomerStart', editProfileData),
        // ).then((response) => {
        //     CommonLoading.hide();
        //     if (response && response.success === false) { console.log('uh') } else {
        //         setShowSuccessModal(true);
        //         setTimeout(function () {
        //             navigation.navigate('OtpScreen', {
        //                 editProfileData,
        //             });
        //             setShowSuccessModal(false)
        //         }, 1000);
        //     }
        // });
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const stylesCheckbox = {
        container: {
            marginTop: 24
        },
        verticalStyle: { marginTop: 16 },
        textStyle: { color: 'white', fontFamily: FONTS.satoshi500, textDecorationLine: "none" },
        iconStyle: { height: 12, width: 12 },
    };

    const staticData =
        [
            {
                id: 0,
                text: 'Male',
                iconImageStyle: stylesCheckbox.iconStyle,
                textStyle: stylesCheckbox.textStyle,
                iconImageStyle: stylesCheckbox.iconStyle,
                fillColor: COLORS.themePink,
            },
            {
                id: 1,
                text: 'Female',
                textStyle: stylesCheckbox.textStyle,
                iconImageStyle: stylesCheckbox.iconStyle,
                fillColor: COLORS.themePink,
            },
            {
                id: 2,
                text: 'Others',
                textStyle: stylesCheckbox.textStyle,
                iconImageStyle: stylesCheckbox.iconStyle,
                fillColor: COLORS.themePink,
            },
        ];


    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 40, flex: 1, justifyContent: 'space-between', backgroundColor: COLORS.background }}
            showsVerticalScrollIndicator={false}
        // style={styles.container}
        >
            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />

            <View style={{ paddingHorizontal: 16, paddingVertical: 20, paddingBottom:0 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Icons.backIcon} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>

                <View style={{ alignItems: 'center', paddingTop: SIZES.padding2 }}>
                    <Image source={Icons.pfp} style={styles.profilePicture} />
                </View>

                <View style={styles.loginContainer}>

                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phone: '',
                        }}
                        onSubmit={values => signup(values)}
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
                                <View style={{ paddingHorizontal: SIZES.paddingExtraLarge }}>
                                    <View>
                                        <Text style={styles.textInputTitleFirstName}>
                                            First Name
                                        </Text>
                                    </View>
                                    <View style={styles.checkMarkContainer}>
                                        <TextInput
                                            name="firstName"
                                            style={styles.textInput}
                                            onChangeText={handleChange('firstName')}
                                            onBlur={handleBlur('firstName')}
                                            value={values.firstName}
                                            keyboardType='default'
                                            maxLength={20}
                                        />
                                        {!errors.firstName && touched.firstName && (
                                            <Image source={icons.tick} style={styles.checkMarkIcon} />
                                        )}
                                    </View>
                                    {errors.firstName && touched.firstName && (
                                        <View style={styles.errorContainer}>
                                            <Text style={styles.error}>{errors.firstName}</Text>
                                        </View>
                                    )}

                                    <View style={styles.textInputTitleContainer}>
                                        <Text style={styles.textInputTitle}>
                                            Last Name
                                        </Text>
                                    </View>
                                    <View style={styles.checkMarkContainer}>
                                        <TextInput
                                            name="lastName"
                                            style={styles.textInput}
                                            onChangeText={handleChange('lastName')}
                                            onBlur={handleBlur('lastName')}
                                            value={values.lastName}
                                            keyboardType='default'
                                            maxLength={20}
                                        />
                                        {!errors.lastName && touched.lastName && (
                                            <Image source={icons.tick} style={styles.checkMarkIcon} />
                                        )}
                                    </View>
                                    {errors.lastName && touched.lastName && (
                                        <View style={styles.errorContainer}>
                                            <Text style={styles.error}>{errors.lastName}</Text>
                                        </View>
                                    )}

                                    <View style={styles.textInputTitleContainer}>
                                        <Text style={styles.textInputTitle}>
                                            Email
                                        </Text>
                                    </View>
                                    <View style={styles.checkMarkContainer}>
                                        <TextInput
                                            name="email"
                                            style={styles.textInput}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            keyboardType='default'
                                        />
                                        {!errors.email && touched.email && (
                                            <Image source={icons.tick} style={styles.checkMarkIcon} />
                                        )}
                                    </View>
                                    {errors.email && touched.email && (
                                        <View style={styles.errorContainer}>
                                            <Text style={styles.error}>{errors.email}</Text>
                                        </View>

                                    )}

                                    <View style={styles.textInputTitleContainer}>
                                        <Text style={styles.textInputTitle}>
                                            Phone Number
                                        </Text>
                                    </View>
                                    <View style={styles.checkMarkContainer}>
                                        <TextInput
                                            name="phone"
                                            style={styles.textInput}
                                            onChangeText={handleChange('phone')}
                                            onBlur={handleBlur('phone')}
                                            value={values.phone}
                                            keyboardType="numeric"
                                            placeholderTextColor="#B4B4B4"
                                            maxLength={10}
                                        />
                                        {!errors.phone && touched.phone && (
                                            <Image source={icons.tick} style={styles.checkMarkIcon} />
                                        )}
                                    </View>
                                    {errors.phone && touched.phone && (
                                        <View style={styles.errorContainer}>
                                            <Text style={styles.error}>{errors.phone}</Text>
                                        </View>
                                    )}
                                </View>

                                <View style={{ alignItems: 'center', marginTop: 60 }}>
                                    <BouncyCheckboxGroup
                                        data={staticData}
                                        onChange={(selectedItem: ICheckboxButton) => {
                                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                                        }}
                                        style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 }}
                                    />
                                </View>



                                <View style={{ marginTop: 60, paddingHorizontal: 34 }}>
                                    <CommonButton
                                        onPress={handleSubmit}
                                        children="Save" />
                                </View>


                            </>
                        )}
                    </Formik>
                </View>
            </View>
            {showSuccessModal && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    showModal={showSuccessModal}
                    backgroundColor="black"
                    onRequestClose={() => setShowSuccessModal(false)}
                    statusBarTranslucent
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBody}>
                            <View>
                                <Image source={Images.success} style={styles.modalImage} />
                            </View>
                            <View style={{ paddingVertical: 20 }}>
                                <Text style={styles.successText}>
                                    Success!
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.successSubText}>
                                    Your account has been created
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        // padding: SIZES.paddingExtraLarge,
        // paddingTop: SIZES.paddingExtraLarge,
        backgroundColor: COLORS.background,
        justifyContent: 'space-between',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 99,
        borderWidth: 2,
        borderColor: '#DB3E6F'
    },

    headerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
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

    headerText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },

    textInputTitleContainer: {
        marginTop: 12
    },

    textInput: {
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
        height: 10,
        marginBottom: 10,
    },

    checkMarkIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: -28,
        tintColor: '#FFFFFF',
        marginTop: 30
    },

    error: {
        // padding: 4,
        color: '#cc0000',
        marginBottom: -24,
    },

    errorContainer: {
        marginTop: 18,
    },

    textInputTitle: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.h3,
        paddingTop: SIZES.padding2,
    },

    textInputTitleFirstName: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.h3,
        // paddingTop: SIZES.padding2,
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

    successText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
        fontSize: SIZES.largeTitle,
    },

    successSubText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
        fontSize: SIZES.h2,
    },

    modalBody: {
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingHorizontal: 26,
        paddingVertical: 50,
        borderRadius: 15,
        justifyContent: 'space-between',
        elevation: 5
    },

    modalContainer: {
        backgroundColor: COLORS.modalBackground,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});