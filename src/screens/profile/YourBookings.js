/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScheduleFlatlistItem from '../../components/flatlistItems/ScheduleFlatlistItem';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { GQLQuery } from '../../persistence/query/Query';
import { useQuery } from '@apollo/client';


export default function YourBookings() {
    const navigation = useNavigation();

    // GET CUSTOMER ALL BOOKINGS
    const { data: customerAllBookingData, error: customerAllBookingError } = useQuery(GQLQuery.GET_CUSTOMER_ALL_BOOKINGS);
    const customerAllBookings = customerAllBookingData && customerAllBookingData.BookingQuery && customerAllBookingData.BookingQuery.GetCustomerAllBookings;

    console.log()

    return (
        <View
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.backIcon} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            Your Bookings
                        </Text>
                        <View>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={{ paddingTop: SIZES.padding6 }}>
                            <FlatList
                                data={customerAllBookings}
                                keyExtractor={item => item.id}
                                showsVerticalScrollIndicator={false}
                                renderItem={(item, index) => (
                                    <ScheduleFlatlistItem
                                        bookings={item} />
                                )}
                            />
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
});
