/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import { Responsive } from '../../../constants/Layout';
import * as yup from 'yup';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = 'AIzaSyCnZBgYngvXzzdd5wTPBhluSBjOP2w7n4M'; // never save your real api key in a snack!

export default function SearchLocation() {
    const navigation = useNavigation();
    const schema = yup.object().shape({
        search: yup
            .string()
            .required('This field is' + ' ' + 'required.')
    });

    const search = data => {
        console.log('search clicked');
    };
    
    const [userCurrentLocation, setCurrentLocation] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Search Location
                </Text>
                <View>
                </View>
            </View>
            <View style={{ paddingRight: 40, flexDirection: 'row', paddingLeft: 20 }}>
                <View style={{
                    height: Responsive.height(550),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <Image source={icons.searchIcon} style={styles.searchIcon} />
                </View>
                <View style={{ width: '100%' }}>

                    <GooglePlacesAutocomplete
                        placeholder="Search your address"
                        fetchDetails={true}
                        query={{
                            key: GOOGLE_PLACES_API_KEY,
                            language: 'en', // language of the results
                        }}
                        onPress={(data, details = null) => {
                            console.log(data)
                            setCurrentLocation(data);
                            navigation.navigate('Home',(data))
                        }}
                        styles={{
                            textInputContainer: {
                                paddingTop: 20,
                                backgroundColor: 'transparent',
                            },
                            poweredContainer: {
                                display: 'none'
                            },
                            row: {
                                backgroundColor: '#0E142E'
                            },
                            description: { fontSize: 12, color: 'white' },
                            textInput: {
                                backgroundColor: '#EAEAEA',
                                color: '#282828',
                                height: 45,
                                borderRadius: 5,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                fontSize: 14,
                                flex: 1,
                            },
                        }}
                    />

                    {/* <TextInput
                                    name="search"
                                    style={styles.searchInput}
                                    onChangeText={handleChange('search')}
                                    onBlur={handleBlur('search')}
                                    value={values.search}
                                    keyboardType="default"
                                    placeholder="Search your location"
                                    placeholderTextColor="#B4B4B4"
                                    maxLength={10}
                                    returnKeyType="search"
                                /> */}
                    {/* <TouchableOpacity style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center' }}>
                        <Image source={icons.useCurrentLocation} style={styles.searchIcon} />
                        <Text style={{ marginLeft: 15, color: '#DB3E6F', fontSize: 18, fontFamily: FONTS.satoshi700 }}>
                            Use current location
                        </Text>
                    </TouchableOpacity> */}
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
        paddingTop: SIZES.paddingLarge,
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
    searchIcon: {
        width: 14,
        height: 14,
    },
    searchInput: {
        marginTop: SIZES.h1,
        color: COLORS.white,
        fontSize: SIZES.h2,
        height: Responsive.height(50),
        fontFamily: FONTS.satoshi400,
        width: '100%',
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        marginLeft: 8
    },

    serachContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
});
