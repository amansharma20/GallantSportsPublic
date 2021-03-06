import React, { useState, useContext, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import Icons from '../../../constants/Icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BouncyCheckboxGroup, { ICheckboxButton } from "react-native-bouncy-checkbox-group";
import { useMutation, useQuery } from '@apollo/client';
import { GQLMutation } from '../../persistence/mutation/Mutation';
import DatePicker from 'react-native-datepicker'
import CommonLoading from '../../components/CommonLoading';

export default function EditProfile() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState();

    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required('First Name' + ' ' + 'is required'),
        lastName: yup
            .string()
            .required('Last Name' + ' ' + 'is required'),
        email: yup
            .string()
            .required('Email' + ' ' + 'is required')
            .matches(emailRegExp, 'Enter a valid email id.'),
        phoneNumber: yup
            .string()
            .required('This field is' + ' ' + 'required.')
            .matches(/(\d){10}\b/, 'Enter a valid phone number'),
    });

    const stylesCheckbox = {
        container: {
            marginTop: 24
        },
        verticalStyle: { marginTop: 16 },
        textStyle: { color: 'white', fontFamily: FONTS.satoshi500, textDecorationLine: "none" },
        iconStyle: { height: 12, width: 12 },
    };

    // PROFILE UPDATE MUTATION
    const [updateProfile, { data: profileUpdateResponse, error: profileUpdateError, loading }] = useMutation(GQLMutation.PROFILE_UPDATE);

    const submitProfile = (values) => {
        CommonLoading.show();
        updateProfile({
            variables: {
                FirstName: values.firstName,
                LastName: values.lastName,
                DateOfBirth: dateOfBirth,
                Email: values.email,
                PhoneNumber: values.phoneNumber,
                Gender: selectedItem.text,
            }
        });
    }

    useEffect(() => {
        if (!loading && profileUpdateResponse) {
            setShowSuccessModal(true)
            CommonLoading.hide()
        }
    }, [loading, profileUpdateResponse])


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
            contentContainerStyle={{ paddingBottom: 40, backgroundColor: COLORS.background }}
            showsVerticalScrollIndicator={false}>
            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
            <View style={{ paddingHorizontal: 16, paddingVertical: 20, paddingBottom: 0 }}>
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
                            phoneNumber: '',
                        }}
                        onSubmit={values => submitProfile(values)}>
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

                                    {/* FIRST NAME INPUT FIELD */}
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


                                    {/* LAST NAME INPUT FIELD */}
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


                                    {/* DATE OF BIRTH INPUT FIELD */}
                                    <View style={styles.textInputTitleContainer}>
                                        <View>
                                            <Text style={styles.textInputTitle}>
                                                Date of Birth
                                            </Text>
                                            <DatePicker
                                                date={dateOfBirth}
                                                onDateChange={setDateOfBirth}
                                                mode="date"
                                                showIcon={false}
                                                format="YYYY-MM-DD"
                                                placeholder={" "}
                                                style={{
                                                    paddingTop: 0, width: '100%', borderWidth: 0,
                                                    borderBottomWidth: 1,
                                                    borderBottomColor: 'white',
                                                    // borderColor: COLORS.background
                                                }}
                                                customStyles={{
                                                    dateInput: {
                                                        alignSelf: 'flex-start',
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderTopWidth: 0,
                                                    },
                                                    dateText: {
                                                        color: '#FFFFFF',
                                                        alignSelf: 'flex-start',
                                                        paddingLeft: 0,
                                                        fontSize: 18
                                                    },
                                                    placeholderText: {
                                                        color: '#FFFFFF',
                                                        alignSelf: 'flex-start',
                                                        paddingLeft: 14,
                                                    }
                                                    // ... You can check the source to find the other keys.
                                                }} />
                                        </View>
                                    </View>


                                    {/* EMAIL INPUT FIELD */}
                                    <View style={[styles.textInputTitleContainer, { paddingTop: 0 }]}>
                                        <Text style={[styles.textInputTitle, { paddingTop: 5 }]}>
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


                                    {/* PHONE NUMBER INPUT FIELD */}
                                    <View style={styles.textInputTitleContainer}>
                                        <Text style={styles.textInputTitle}>
                                            Phone Number
                                        </Text>
                                    </View>
                                    <View style={styles.checkMarkContainer}>
                                        <TextInput
                                            name="phoneNumber"
                                            style={styles.textInput}
                                            onChangeText={handleChange('phoneNumber')}
                                            onBlur={handleBlur('phoneNumber')}
                                            value={values.phoneNumber}
                                            keyboardType="numeric"
                                            placeholderTextColor="#B4B4B4"
                                            maxLength={10}
                                        />
                                        {!errors.phoneNumber && touched.phoneNumber && (
                                            <Image source={icons.tick} style={styles.checkMarkIcon} />
                                        )}
                                    </View>
                                    {errors.phoneNumber && touched.phoneNumber && (
                                        <View style={styles.errorContainer}>
                                            <Text style={styles.error}>{errors.phoneNumber}</Text>
                                        </View>
                                    )}
                                </View>
                                <View style={{ alignItems: 'center', marginTop: 60 }}>
                                    <BouncyCheckboxGroup
                                        data={staticData}
                                        onChange={(selectedItem: ICheckboxButton) => {
                                            setSelectedItem(selectedItem)
                                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                                        }}
                                        style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 }}
                                    />
                                </View>
                                <View style={{ marginTop: 40, paddingHorizontal: 34 }}>
                                    <CommonButton onPress={handleSubmit} children="Save" />
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
                    statusBarTranslucent>
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
                                    Your profile has been updated.
                                </Text>
                            </View>
                            <View style={{ marginTop: 0, paddingHorizontal: 34 , width:200}}>
                                    <CommonButton onPress={() => navigation.navigate('Home')} children="Done" />
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
        paddingBottom: 0,
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
        paddingHorizontal: 25,
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
    dobContainer: {
        backgroundColor: 'transparent',
        height: 45,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#444B65',
        justifyContent: 'center',
    },

    dobText: {
        marginLeft: 0,
        fontSize: 16,
        color: '#fff',
    },

    datePicker: {
        backgroundColor: '#EAEAEA',
        marginTop: 230,
        alignSelf: 'center',
        marginHorizontal: 10,
        width: 320,
        height: 260,
        display: 'flex',
    },

    dateSubmitContainer: {
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'
    },

    submitDateButtonText: {
        fontSize: 20,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        margin: 10,
        height: 40,
        width: 100,
        color: 'black',
    },
});