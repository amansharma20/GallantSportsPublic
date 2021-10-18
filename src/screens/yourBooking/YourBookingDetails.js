/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BookingImagesFlatlist from '../../components/flatlistItems/BookingImagesFlatlist';
import IMAGEDATA from '../../../assets/data/ImageDataDummy';
import { animatedStyles, scrollInterpolator } from '../../../utils/animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);
const ITEM_WIDTH = SLIDER_WIDTH;


export default function YourBookingDetails() {
    const navigation = useNavigation();
    const renderImageFlatlist = (item) => (
        <BookingImagesFlatlist item={item} key={item.index}
        />
    );
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Your Booking
                </Text>
                <View>
                </View>
            </View>
            <View>
                <Carousel
                    active
                    data={IMAGEDATA}
                    renderItem={renderImageFlatlist}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal={true}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={0.95}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />
                <View style={styles.paginationContainer}>
                    <Pagination
                        dotsLength={IMAGEDATA.length}
                        activeDotIndex={activeSlide}
                        dotStyle={styles.dotStyle}
                        inactiveDotStyle={styles.inactiveDotStyle}
                        containerStyle={{ width: 30 }}
                    />
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.mainDetailsContainer}>
                    <View>
                        <View style={styles.headerTopContainer}>
                            <Text style={styles.titleText}>
                                The Gallant Club
                            </Text>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>
                                    4.9
                                </Text>
                                <Image source={images.star} style={styles.starSize} />
                            </View>
                        </View>
                        <View style={styles.locationContainer}>
                            <Text style={styles.addressText}>
                                Sector 46,
                                Guruguram, Haryana
                            </Text>
                            <TouchableOpacity style={styles.directionContainer}>
                                <Image source={icons.directionIcon} style={styles.directionIconSize} />
                                <Text style={styles.directionText}>
                                    Get Direction
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.activityBookedContainer}>
                            <Text style={styles.activityBookedText}>
                                Activity booked
                            </Text>
                            <View style={styles.activityBookedMainContainer}>
                                <View style={styles.activityBookedLeftContainer}>
                                    <Image source={images.badminton} style={styles.activityIconSize} />
                                    <Text style={styles.activityText}>
                                        Badminton
                                    </Text>
                                </View>
                                <View style={styles.activityBookedByDetails}>
                                    <View style={styles.bookedActivityContentContainer}>
                                        <Text style={styles.bookedContentText}>
                                            Booked by
                                        </Text>
                                        <Text style={styles.bookedContentLeftText}>
                                            Aman Sharma
                                        </Text>
                                    </View>
                                    <View style={styles.bookedActivityContentContainer}>
                                        <Text style={[styles.bookedContentText, { paddingVertical: SIZES.padding6, }]}>
                                            Booked ID
                                        </Text>
                                        <Text style={styles.bookedContentLeftText}>
                                            GLNTPLY38899
                                        </Text>
                                    </View>
                                    <View style={styles.dateTimeContainer}>
                                        <Text style={[styles.bookedContentText, { paddingRight: 0 }]}>
                                            13 Sept | 7.00 PM
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.whatToBringContainer}>
                            <View>
                                <Text style={styles.whatToBringText}>What to bring</Text>
                            </View>
                            <Text style={styles.bodyText}>
                                Only sports shoes will be allowed.{'\n'}
                                You are expected to bring your own water bottle, towel etc.
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomContent}>
                        <TouchableOpacity style={styles.cancellationContainer}>
                            <Text style={styles.cancellationPolicyText}>
                                Cancellation & No show policy
                            </Text>
                            <Image source={icons.pinkNextButton} style={[styles.pinkNextButtonSize, { tintColor: COLORS.white }]} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.bottomContent}>
                        <Text style={styles.cancelText}>
                            Cancel this booking
                        </Text>
                        <Image source={icons.pinkNextButton} style={styles.pinkNextButtonSize} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomContent}>
                        <Text style={styles.cancelText}>
                            Need help
                        </Text>
                        <Image source={icons.pinkNextButton} style={styles.pinkNextButtonSize} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 2.5,
        backgroundColor: COLORS.white,
    },
    inactiveDotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2.5,
        backgroundColor: COLORS.white,
    },
    paginationContainer: { zIndex: 1000, alignItems: 'center', marginTop: -50, height: 50 },
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    mainDetailsContainer: {
        flex: 1,
        paddingHorizontal: SIZES.padding6,
    },
    headerTopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: SIZES.padding2,
        paddingBottom: 12,
    },
    titleText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
    ratingContainer: {
        backgroundColor: COLORS.themePink,
        flexDirection: 'row',
        alignItems: 'center',
        width: 52,
        height: 22,
        borderRadius: 15,
        justifyContent: 'center',
    },
    ratingText: {
        fontSize: SIZES.h4,
        fontFamily: FONTS.satoshi500,
        color: COLORS.white,
    },
    starSize: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 3,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addressText: { width: 175, fontSize: 16, fontFamily: FONTS.satoshi400, color: COLORS.white },
    directionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    directionIconSize: {
        width: 20,
        height: 18,
        resizeMode: 'contain',
        marginRight: 6,
    },
    directionText: {
        fontSize: 14, fontFamily: FONTS.satoshi700, color: COLORS.white,
    },
    activityBookedContainer: {
        marginTop: SIZES.padding2,
    },
    activityBookedText: {
        fontSize: SIZES.header,
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
        paddingBottom: SIZES.padding2,
    },
    activityBookedMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        width: 48,
        height: 48,
        resizeMode: 'contain',
    },
    activityText: {
        fontSize: 10,
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
    },
    activityBookedByDetails: {

    },
    bookedActivityContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bookedContentText: {
        paddingRight: SIZES.paddingExtraLarge,
        fontSize: 16,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
    bookedContentLeftText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
    },
    dateTimeContainer: { justifyContent: 'flex-end', flexDirection: 'row' },
    bottomContainer: {

    },
    whatToBringContainer: {
        paddingTop: SIZES.padding2,
    },
    whatToBringText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
    bodyText: {
        fontSize: 16,
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
        lineHeight: 32,
        paddingBottom: SIZES.padding2,
    },
    bottomContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
        alignItems: 'center',
        paddingBottom: SIZES.padding2,
    },
    cancellationContainer: {
        backgroundColor: '#444B65',
        borderRadius: 15,
        flex: 1,
        height: 46,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding6,
        flexDirection: 'row',
    },
    cancellationPolicyText: { color: COLORS.white, fontSize: 18, fontFamily: FONTS.satoshi500 },
    cancelText: {
        fontSize: SIZES.h2,
        fontFamily: FONTS.satoshi700,
        color: COLORS.themePink,
    },
    pinkNextButtonSize: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
});
