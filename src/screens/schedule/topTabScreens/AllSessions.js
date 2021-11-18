/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../../constants';
import ACTIVITIESDATA from '../../../../assets/data/ActivitIesData';
import ScheduleFlatlistItem from '../../../components/flatlistItems/ScheduleFlatlistItem';
import { GQLQuery } from '../../../persistence/query/Query';
import { useQuery } from '@apollo/client';


export default function AllSessions() {

    const { data: customerAllBookingData, error: customerAllBookingError } = useQuery(GQLQuery.GET_CUSTOMER_ALL_BOOKINGS);
    const customerAllBookings = customerAllBookingData && customerAllBookingData.BookingQuery && customerAllBookingData.BookingQuery.GetCustomerAllBookings;

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: SIZES.padding6 }}>
                <FlatList
                data={customerAllBookings}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item, index) => (
                        <ScheduleFlatlistItem
                            bookings={item}/>
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
