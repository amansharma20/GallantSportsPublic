/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useRef } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { Responsive } from '../../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../components/CommonGradientButton';
import { Formik } from 'formik';
import { ValuesOfCorrectTypeRule } from 'graphql';
import * as yup from 'yup';


export default function Support() {
    const navigation = useNavigation();

    const descriptionRef = useRef();

    const schema = yup.object().shape({
        description: yup
            .string()
            .required('description' + ' ' + 'is required'),
        email: yup
            .string()
            .required('This field is' + ' ' + 'required.')
            .matches(emailRegExp, 'Enter a valid email id.'),
    });

    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


    return (
        <View showsVerticalScrollIndicator={false}
            style={styles.container}>
            <Formik
                validationSchema={schema}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                }}
                onSubmit={values => signup(values)}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <>
                        <View style={{ justifyContent: 'space-between', flex: 1 }}>
                            <View>
                                <View style={styles.headerContainer}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Image source={icons.backIcon} style={styles.backIcon} />
                                    </TouchableOpacity>
                                    <Text style={styles.headerText}>
                                        Support
                                    </Text>
                                    <View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 20, paddingHorizontal: 20 }}>
                                        Please tell us about the issue{'\n'} you require support with
                                    </Text>
                                </View>
                                <View style={{ paddingHorizontal: 20 }}>
                                    <Text style={styles.textInputTitleFirstName}>
                                        Email
                                    </Text>
                                    <View>
                                        <TextInput
                                            name="Email"
                                            style={styles.textInput}
                                            onSubmitEditing={() => {
                                                description.current.focus();
                                            }}
                                            keyboardType='default'
                                            maxLength={20}
                                        />
                                        <Text style={{ color: '#DB3E6F' }}>
                                            Given email ID will be used for further communication
                                        </Text>
                                    </View>

                                    <View style={{ paddingTop: 20 }}>
                                        <Text style={styles.textInputTitleFirstName}>
                                            Description
                                        </Text>
                                        <TextInput
                                            name="Description"
                                            placeholder="Please mention issue you faced"
                                            placeholderTextColor="#FFF"
                                            style={styles.textInput}
                                            value={values.description}
                                            ref={descriptionRef}
                                            keyboardType='default'
                                            maxLength={300} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <CommonButton onPress={handleSubmit} children="Submit support ticket" />
                            </View>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: COLORS.background,
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
        paddingVertical: SIZES.paddingLarge,
    },
    headerText: {
        fontSize: SIZES.header,
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
    },
    backIcon: {
        width: 24,
        height: 21,
    },
    textInput: {
        paddingBottom: 0,
        color: COLORS.white,
        fontSize: SIZES.h2,
        fontFamily: FONTS.satoshi400,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.white,
    },
    textInputTitleFirstName: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.h4,
        paddingTop: 20
        // paddingTop: SIZES.padding2,
    },
    buttonContainer: {
        paddingBottom: SIZES.padding2,
        paddingHorizontal: SIZES.padding6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background
    },
});