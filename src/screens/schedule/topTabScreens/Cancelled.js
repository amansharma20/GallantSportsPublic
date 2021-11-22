/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../../constants';
import GOALSDATA from '../../../../assets/data/ActivitIesData';
import CancelledActivityItem from '../../../components/flatlistItems/ScheduleFlatlists/CancelledActivityItem';
import { GQLQuery } from '../../../persistence/query/Query';
import { useQuery } from '@apollo/client';

export default function Cancelled() {
    const navigation = useNavigation();

    const { data: customerCancelBookingData, error: customerCancelBookingError } = useQuery(GQLQuery.GET_CUSTOMER_CANCEL_BOOKINGS);
    const customerCancelBookings = customerCancelBookingData && customerCancelBookingData.BookingQuery && customerCancelBookingData.BookingQuery.GetCustomerCancelledBookings;

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: SIZES.padding6 }}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={customerCancelBookings}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item, index) => (
                        <CancelledActivityItem
                            cancelBookings={item}
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
