/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonGradientButton';
import DatePicker from 'react-native-date-picker'
import { format } from 'date-fns';

export default function BookingScreen() {
    const navigation = useNavigation();

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

    const renderAvailableActivitiesItem = ({ }) => (
        <TouchableOpacity style={styles.activityContainer}>
            <View style={styles.activityBookedLeftContainer}>
                <Image source={Icons.footballIcon} style={styles.activityIconSize} />
                <Text style={styles.activityText}>
                    Football
                </Text>
            </View>
        </TouchableOpacity>
    );

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
                        <Text style={styles.headerText}>
                            Booking
                        </Text>
                        <View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
                            Select Activity
                        </Text>

                        <View style={styles.availableActivitiesContainer}>
                            <View style={styles.availableActivitiesItems}>
                                <FlatList
                                    data={dataSource}
                                    renderItem={renderAvailableActivitiesItem}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    contentContainerStyle={{
                                        paddingLeft: SIZES.padding6,
                                    }}/>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
                            Select Your Slot
                        </Text>

                        <View style={styles.availableActivitiesContainer}>
                            <View style={{ paddingHorizontal: 30, paddingTop: 20 }}>
                                <Text style={{ color: 'white', paddingBottom: 5 }}>
                                    Date
                                </Text>
                                <TouchableOpacity onPress={() => setShowModal(true)}>
                                    <View style={styles.dobContainer}>
                                        <Text style={styles.dobText}>{formatedDate(date)}</Text>
                                    </View>
                                </TouchableOpacity>
                                {showModal && (
                                    <Modal
                                        animationType="fade"
                                        transparent={true}
                                        showModal={showModal}
                                        backgroundColor="white"
                                        onRequestClose={() => setShowModal(false)}>
                                        <DatePicker
                                            date={date}
                                            onDateChange={setDate}
                                            mode="date"
                                            minDate={new Date()}
                                            style={styles.datePicker} />
                                        <View style={styles.dateSubmitContainer}>
                                            <TouchableOpacity
                                                onPress={() => setShowModal(false)}>
                                                <Text style={styles.submitDateButtonText}>Done</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
                                )}

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 30 }}>

                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'white', paddingTop: 15 }}>Time</Text>
                                    <TouchableOpacity onPress={() => setShowModal(true)}>
                                        <View style={styles.dobContainer}>
                                            <Text style={styles.dobText}>{formatedTime(time)}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {showModal && (
                                        <Modal
                                            animationType="fade"
                                            transparent={true}
                                            showModal={showModal}
                                            backgroundColor="white"
                                            onRequestClose={() => setShowModal(false)}>
                                            <DatePicker
                                                date={date}
                                                onDateChange={setTime}
                                                mode="time"
                                                minDate={new Date()}
                                                style={styles.datePicker} />
                                            <View style={styles.dateSubmitContainer}>
                                                <TouchableOpacity
                                                    onPress={() => setShowModal(false)}>
                                                    <Text style={styles.submitDateButtonText}>Done</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </Modal>
                                    )}
                                </View>

                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: 'white', paddingTop: 15, marginLeft: 10 }}>Duration</Text>
                                    <TextInput style={{ backgroundColor: '#444B65', borderRadius: 15, marginLeft: 10 }} />
                                </View>

                            </View>

                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6, alignSelf: 'center' }]}>
                                Booking Amount
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Activity Price
                            </Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                ₹ 450
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                GST
                            </Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                ₹ 50
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center', paddingTop: 20 }}>
                            Total Amount
                        </Text>
                        <Text style={{ color: '#DB3E6F', fontSize: 45, alignSelf: 'center', fontWeight: 'bold' }}>
                            ₹500
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton onPress={() => navigation.navigate('BookingSummary')} children="Book" />
            </View>
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
        fontSize: SIZES.header,
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
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
