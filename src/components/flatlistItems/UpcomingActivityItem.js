/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Responsive } from '../../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
import { format } from "date-fns";

const UpcomingActivityItem = (props) => {
    const upcomingactivity = props.upcomingBookings

    const navigation = useNavigation();
    const even = props.index % 2;
    const leftBackgroundColor = (even === 0) ? '#7E0027' : '#273575';
    const rightBackgroundColor = (even === 0) ? '#DB3E6F' : '#7B91F8';
    console.log(even);

    var bookingTime = new Date(upcomingactivity.item.BookingDateTime);
    var bookingDate = new Date(upcomingactivity.item.BookingDateTime);

    var formattedDate = format(bookingDate, "dd MMM");
    var formattedTime = format(bookingTime, "H:mma");


    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('YourBookingDetails', 
                {
                    bookingDetails :upcomingactivity,
                })}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} colors={[leftBackgroundColor, rightBackgroundColor]} style={styles.linearGradient}>
                    <View style={styles.leftContainer}>
                        <View>
                            <Text style={styles.upcomingActivityText}>
                                Upcoming activity
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.venueText} numberOfLines={1}>
                            {upcomingactivity.item.ActivityArena.Arena.Name}
                            </Text>
                            <Text style={styles.upcomingActivityText} numberOfLines={1}>
                            {upcomingactivity.item.ActivityArena.Activity.Name}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.upcomingActivityText}>
                                {formattedDate} | {formattedTime}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={images.cardImage} style={styles.imageSize} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    linearGradient: {
        width: Responsive.width(289),
        height: Responsive.height(131),
        borderRadius: 15,
        flexDirection: 'row',
        padding: 16,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageContainer: { justifyContent: 'center' },
    imageSize: { width: 80, height: 80 },
    upcomingActivityText: {
        color: COLORS.white,
        fontSize: 12,
        fontFamily: FONTS.satoshi700,
    },
    venueText: {
        fontFamily: FONTS.satoshi900,
        fontSize: 18,
        color: COLORS.white,
    }

});

export default UpcomingActivityItem;
