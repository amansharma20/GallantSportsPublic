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
import { Responsive } from '../../../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../../../../constants/';

const CancelledActivityItem = (props) => {
    const navigation = useNavigation();
    const leftBackgroundColor = '#320000';
    const rightBackgroundColor = '#320000';
    const item = props.item;

    return (
        <View
            style={styles.container}
        >
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ paddingRight: 15 }}>
                    <Text style={{ fontSize: SIZES.h5, fontFamily: FONTS.satoshi900, color: COLORS.white, textAlign: 'center' }}>
                        {item.date}
                    </Text>
                </View>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('YourBookingDetails')}

                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }} colors={[leftBackgroundColor, rightBackgroundColor]} style={styles.linearGradient}>
                        <View style={styles.leftContainer}>
                            <View>
                                <Text style={styles.cancelledActivityText}>
                                    Cancelled Activity
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.venueText}>
                                    The Gallant Club
                                </Text>
                                <Text style={styles.activityText}>
                                    Tennis
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.activityText}>
                                    7.00 PM
                                </Text>
                            </View>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={images.cardImage} style={styles.imageSize} />
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>



        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: SIZES.padding6,
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
    cancelledActivityText: {
        color: COLORS.red,
        fontSize: 12,
        fontFamily: FONTS.satoshi700,
    },
    activityText: {
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

export default CancelledActivityItem;
