/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../../constants';
import GOALSDATA from '../../../../assets/data/ActivitIesData';
import UpcomingActivityItem from '../../../components/flatlistItems/ScheduleFlatlists/UpcomingActivityItem';
import { GQLQuery } from '../../../persistence/query/Query';
import { useQuery } from '@apollo/client';

export default function Upcoming() {
    const navigation = useNavigation();

    const { data: customerUpcomingBookingData, error: customerUpcomingBookingError } = useQuery(GQLQuery.GET_CUSTOMER_UPCOMING_BOOKINGS);
    const customerUpcomingBookings = customerUpcomingBookingData && customerUpcomingBookingData.BookingQuery && customerUpcomingBookingData.BookingQuery.GetCustomerUpcomingBookings;
    
    return (
        <View style={styles.container}>
            <View style={{paddingTop: SIZES.padding6}}>
            <FlatList
                    keyExtractor={item => item.id}
                    data={customerUpcomingBookings}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item, index) => (
                        <UpcomingActivityItem
                            upcomingBookings={item}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
});
