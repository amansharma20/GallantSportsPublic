/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IMAGEDATA from '../../../assets/data/ImageDataDummy';
import { animatedStyles, scrollInterpolator } from '../../../utils/animations';
import ExploreNearByImagesFlatlist from '../../components/flatlistItems/ExploreNearByImagesFlatlist';

const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.84);
const ITEM_WIDTH = SLIDER_WIDTH;

export default function ExploreNearby() {
    const navigation = useNavigation();
    const renderImageFlatlist = (item) => (
        <ExploreNearByImagesFlatlist item={item} key={item.index}
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
                    Explore Nearby
                </Text>
                <View>
                </View>
            </View>
            <View>
                <View>
                    <Carousel
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
                <View style={styles.arenaNameContainer}>
                    <View>
                        <Text style={styles.headerText}>
                            Football Arena
                        </Text>
                        <Text style={styles.subText}>
                            Football
                        </Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>
                            4.5
                        </Text>
                        <Image source={images.star} style={styles.starSize} />
                    </View>
                </View>
            </View>

            <View>
                <View>
                    <Carousel
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
                <View style={styles.arenaNameContainer}>
                    <View>
                        <Text style={styles.headerText}>
                            The Gurgaon Club
                        </Text>
                        <Text style={styles.subText}>
                            Badminton, Tennis, Basketball & More
                        </Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>
                            4.6
                        </Text>
                        <Image source={images.star} style={styles.starSize} />
                    </View>
                </View>
            </View>

            <View>
                <View>
                    <Carousel
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
                <View style={styles.arenaNameContainer}>
                    <View>
                        <Text style={styles.headerText}>
                            The Gallant Club
                        </Text>
                        <Text style={styles.subText}>
                            Table Tennis, Badminton, Squash & More
                        </Text>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>
                            4.9
                        </Text>
                        <Image source={images.star} style={styles.starSize} />
                    </View>
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
    subText: {
        fontSize: 14,
        color: COLORS.white,
        fontFamily: FONTS.satoshi400,
    },
    backIcon: {
        width: 24,
        height: 21,
    },
    paginationContainer: { zIndex: 1000, alignItems: 'center', marginTop: -50, height: 50 },
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
    arenaNameContainer: {
        paddingTop: 10,
        paddingBottom: SIZES.padding2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
    },
});
