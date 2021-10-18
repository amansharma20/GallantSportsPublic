/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import ExploreNearbyFlatlistItems from '../../components/flatlistItems/ExploreNearbyFlatlistItems';
import GOALSDATA from '../../../assets/data/GoalsData';


export default function ExploreNearby() {
    const navigation = useNavigation();
    return (
        <View
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View>
                <FlatList
                    ListHeaderComponent={
                        <>
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
                        </>
                    }
                    keyExtractor={(item) => item.id.toString()}
                    data={GOALSDATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <ExploreNearbyFlatlistItems />
                    )}
                />
            </View>
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
