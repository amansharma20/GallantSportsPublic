/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES, images } from '../../../constants';
import Icons from '../../../constants/Icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonGradientButton';
import DatePicker from 'react-native-date-picker'
import { format } from 'date-fns';

export default function BookingComplete(props) {

    const response = props
    const navigation = useNavigation();
    console.log(response)


    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        let items = Array.apply(null, Array(6)).map((v, i) => {
            return {
            };
        });
        setDataSource(items);
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const formatedDate = (date) => {
        var formattedDate = format(date, 'MMMM do, yyyy | hh:mma');
        return formattedDate;
    };

    const formatedTime = (time) => {
        var formattedTime = format(time, 'hh:mma');
        return formattedTime;
    };

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.backIcon} style={styles.backIcon} />
                        </TouchableOpacity>

                        <View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.headerText}>
                            Congraulations
                        </Text>
                        <Text style={{ color: '#FFF', fontSize: 16, alignSelf: 'center' }}>
                            Charanjeet your session
                            is booked
                        </Text>
                        <Text style={{ color: '#FFF', fontSize: 20, alignSelf: 'center', paddingVertical: 40 }}>
                            See you there
                        </Text>
                    </View>

                    <View style={{
                        backgroundColor: '#DB3E6F', marginHorizontal: 30, borderRadius: 20
                    }}>
                        <View>
                            <Image source={images.neeraj} style={{ width: '100%', height: 159, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>
                                The Gallant club
                            </Text>
                            <Text style={{ fontSize: 14, color: 'white' }}>
                                Sector 46 ,{'\n'}
                                Guruguram , Haryana
                            </Text>

                            <Text style={{ fontSize: 20, color: 'white', paddingVertical: 10, fontWeight: 'bold' }}>
                                Activity booked
                            </Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    titleText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },

    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
        paddingVertical: SIZES.paddingLarge,
    },

    headerText: {
        fontSize: 30,
        color: '#DB3E6F',
        fontFamily: FONTS.satoshi900,
        alignSelf: 'center'
    },

    backIcon: {
        width: 24,
        height: 21,
    },

    availableActivitiesContainer: {
        // paddingTop: SIZES.padding4,
    },

    availableActivitiesItems: {
        paddingVertical: 20,
        flexDirection: 'row'
    },

    activityContainer: {
        paddingRight: 18
    },

    activityBookedLeftContainer: {
        width: 69,
        height: 87,
        backgroundColor: '#444B65',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIconSize: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    activityText: {
        fontSize: 10,
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
    },

    buttonContainer: {
        paddingBottom: SIZES.padding2,
        paddingHorizontal: SIZES.padding6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background
    },

    dobContainer: {
        backgroundColor: '#444B65',
        height: 45,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#444B65',
        justifyContent: 'center',
    },

    dobText: {
        marginLeft: 10,
        fontSize: 16,
        color: '#fff',
    },

    datePicker: {
        backgroundColor: '#EAEAEA',
        marginTop: 250,
        alignSelf: 'center',
        marginHorizontal: 10,
        width: 320,
        height: 260,
        display: 'flex',
    },

    dateSubmitContainer: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
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
