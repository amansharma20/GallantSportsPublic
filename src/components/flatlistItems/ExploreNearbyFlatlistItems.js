/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';
import { animatedStyles, scrollInterpolator } from '../../../utils/animations';
import ExploreNearByImagesFlatlist from './ExploreNearByImagesFlatlist';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import IMAGEDATA from '../../../assets/data/ImageDataDummy';
import { applicationProperties } from '../../application.properties';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ExploreNearbyFlatlistItems = (props) => {
    const navigation = useNavigation();

    console.log(applicationProperties.imageUrl + NeraByArenaData.item.ArenaImageStoragePath)
    const NeraByArenaData = props.nearArenas

    console.log('nearByArenas')
    console.log(NeraByArenaData)
    console.log('nearByArenas')

    const renderImageFlatlist = (item) => (
        <ExploreNearByImagesFlatlist item={item} key={item.index}
        />
    );
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ExpolreArenaDetailsScreen',
            {
                expolreArenaDetails: NeraByArenaData
            })}>
            <View>
                <Image source={{ uri: applicationProperties.imageUrl + NeraByArenaData.item.ArenaImageStoragePath }} style={{ width: '100%', height: 159 }} />
            </View>
            <View style={styles.arenaNameContainer}>
                <View>
                    <Text style={styles.headerText}>
                        {NeraByArenaData.item.Name}
                    </Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>
                        {NeraByArenaData.item.Rating}
                    </Text>
                    <Image source={images.star} style={styles.starSize} />
                </View>
            </View>
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
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

export default ExploreNearbyFlatlistItems;
