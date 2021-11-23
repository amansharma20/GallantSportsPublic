/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    Modal,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { applicationProperties } from '../../application.properties';
import CommonButton from '../../components/CommonGradientButton';
import DatePicker from 'react-native-date-picker'
import { format } from 'date-fns';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { GQLQuery } from '../../persistence/query/Query';
import { useQuery } from '@apollo/client';

export default function ExploreArenaBookingScreen(props) {
    const navigation = useNavigation();

    const activities = props.route.params.arenaDetails
    const ArenaId = activities.item.Id;

    const { data: data2 } = useQuery(GQLQuery.GET_ACTIVITY_BY_ARENA_ID, {
        variables: {
            ArenaId: activities.item.Id,
        },
    });
    const activityList = data2 && data2.ActivityArenaQuery && data2.ActivityArenaQuery.GetActivityByArenaId;

    const [checkboxState, setCheckboxState] = React.useState(false);
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(new Date());

    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        let items = Array.apply(null, Array(6)).map(() => {
            return {
            };
        });
        setDataSource(items);
    }, []);

    const formatedDate = (date) => {
        var formattedDate = format(date, 'dd MMMM yyyy | hh:mm a');
        return formattedDate;
    };

    const [selectedActivity, setSelectedActivity] = useState(0);

    const renderAvailableActivitiesItem = ({ item, index }) => (
        <TouchableWithoutFeedback onPress={() => setSelectedActivity(index)}>
            <View style={styles.activityContainer}>
                <View style={selectedActivity == index ? styles.selectedActivityStyle : styles.activityBookedLeftContainer}>
                    <Image source={{ uri: applicationProperties.imageUrl + item.Activity.ActivityIconStoragePath }} style={styles.activityIconSize} />
                    <Text style={styles.activityText}>
                        {item.Activity.Name}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

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
                                    data={activityList}
                                    renderItem={renderAvailableActivitiesItem}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    contentContainerStyle={{
                                        paddingLeft: SIZES.padding6,
                                    }} />
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
                                    Date &amp; Time
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
                                            mode="datetime"
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
                            <View>
                                <BouncyCheckbox
                                    size={20}
                                    fillColor="#0E142E"
                                    unfillColor="#FFFFFF"
                                    text="Need a coach"
                                    iconStyle={{ borderColor: "white" }}
                                    textStyle={{ color: 'white', textDecorationLine: 'none' }}
                                    onPress={() => setCheckboxState(!checkboxState)}
                                    style={{ paddingHorizontal: 30, paddingTop: 20 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton onPress={() => navigation.navigate('BookingSummary',
                    {
                        bookingDetails: {
                            "Activity": activityList[selectedActivity],
                            "ArenaId": ArenaId,
                            "Bookingdate": date,
                            "Needacoach": checkboxState,
                        }
                    })} children="Book" />
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
        paddingHorizontal: 20,
        flexDirection: 'row'
    },

    activityContainer: {
        paddingRight: 15
    },

    activityBookedLeftContainer: {
        width: 70,
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
        fontSize: 9,
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
    selectedActivityStyle: {
        width: 69,
        height: 87,
        backgroundColor: '#DB3E6F',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});
