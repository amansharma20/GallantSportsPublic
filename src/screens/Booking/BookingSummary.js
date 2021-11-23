/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import CommonButton from '../../components/CommonGradientButton';
import { applicationProperties } from '../../application.properties';
import { GQLQuery } from '../../persistence/query/Query';
import { useMutation, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { GQLMutation } from '../../persistence/mutation/Mutation';

export default function BookingSummary(props) {
    const navigation = useNavigation();

    const bookingDetail = props.route.params.bookingDetails
    const arenaId = bookingDetail.Activity.Activity.Id;
    const activityId = bookingDetail.ArenaId;

    const [needacoach, setacoach] = useState(bookingDetail.Needacoach)

    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        let items = Array.apply(null, Array(6)).map((v, i) => {
            return {
            };
        });
        setDataSource(items);
    }, []);

    // GET CUSTOMER USER DETAILS
    const { data: customerDetailsData, error: CustomerDetailsError } = useQuery(GQLQuery.GET_CUSTOMER_USER_DETAILS);
    const customerUserDetails = customerDetailsData && customerDetailsData.CustomerUserQuery && customerDetailsData.CustomerUserQuery.GetCustomerUserDetails;
    const name = customerUserDetails.FirstName;

    // GET BOOKING CHARGES BY ARENA ID OR ACTIVITY ID
    const { data: BookingChargesData, error: BookingChargesError } = useQuery(GQLQuery.GET_BOOKING_CHARGES_BY_ACTIVITYID_OR_ARENAID, {
        variables: {
            ArenaId: bookingDetail.Activity.Activity.Id,
            ActivityId: bookingDetail.ArenaId,
        },
    });
    const getBookingCharges = BookingChargesData && BookingChargesData.ActivityArenaChargesQuery && BookingChargesData.ActivityArenaChargesQuery.GetActivityArenaCharges;

    // CREATE BOOKING
    const [addBooking, { data: bookingResponse, error: bookingError, loading }] = useMutation(GQLMutation.CREATE_BOOKING);

    const submitBooking = () => {
        addBooking({
            variables: {
                ArenaId: arenaId,
                ActivityArenaId: activityId,
                BookingDateTime: bookingDetail.Bookingdate,
                NeedCoach: needacoach,
            }

        });
        if (bookingResponse != null) {

            navigation.navigate('BookingComplete')
        }
        else {
            console.log(bookingError)
            console.log('booking failed')
        }
    }

    function getTotalAmountWithGST(total, gst) {
        return (total * gst / 100) + total
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.backIcon} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            Booking Summary
                        </Text>
                        <View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
                            Activity Selected
                        </Text>

                        <View style={styles.availableActivitiesContainer}>
                            <View style={styles.availableActivitiesItems}>
                                {/* <FlatList
                                    data={dataSource}
                                    renderItem={renderAvailableActivitiesItem}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    contentContainerStyle={{
                                        paddingLeft: SIZES.padding6,
                                    }}
                                /> */}
                                <View style={styles.activityBookedLeftContainer}>
                                    <Image source={{ uri: applicationProperties.imageUrl + bookingDetail.Activity.Activity?.ActivityIconStoragePath }} style={styles.activityIconSize} />
                                    <Text style={styles.activityText}>
                                        {bookingDetail && bookingDetail.Activity && bookingDetail.Activity.Activity && bookingDetail.Activity.Activity.Name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
                            Slot
                        </Text>

                        <View style={styles.availableActivitiesContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Booked By
                                </Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    {customerUserDetails && customerUserDetails.FirstName} {customerUserDetails && customerUserDetails.LastName}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Date
                                </Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    {format(bookingDetail.Bookingdate, 'dd MMMM yyyy')}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Time
                                </Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    {format(bookingDetail.Bookingdate, 'hh:mm a')}
                                </Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Duration
                                </Text>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    02 hrs
                                </Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Coach
                                </Text>
                                {needacoach ?
                                    <Text style={{ color: 'white', fontSize: 16 }}>
                                        Yes
                                    </Text> :
                                    <Text style={{ color: 'white', fontSize: 16 }}>
                                        No
                                    </Text>}

                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
                                Amount
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                Activity Price
                            </Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                {getBookingCharges && getBookingCharges[0].AmountPerHr}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                GST
                            </Text>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                {getBookingCharges && getBookingCharges[0].GST} %
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center', paddingTop: 20 }}>
                            Total Amount
                        </Text>
                        <Text style={{ color: '#DB3E6F', fontSize: 45, alignSelf: 'center', fontWeight: 'bold' }}>
                            ₹{getTotalAmountWithGST(getBookingCharges && getBookingCharges[0].AmountPerHr, getBookingCharges && getBookingCharges[0].GST)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton onPress={submitBooking} children="Pay Now" />
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
        paddingRight: 18
    },

    activityBookedLeftContainer: {
        width: 69,
        height: 87,
        backgroundColor: '#444B65',
        borderRadius: 15,
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
});
