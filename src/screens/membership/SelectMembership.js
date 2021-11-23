/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import CommonButton from '../../components/CommonGradientButton';

const THREEDAYS = [
    {
        id: "0",
        months: "1 Month",
        amount: '₹ 4,000',
    },
    {
        id: "1",
        months: "3 Month",
        amount: '₹ 10,000',
    },
    {
        id: "2",
        months: "6 Month",
        amount: '₹ 16,000',
    },
    {
        id: "3",
        months: "12 Month",
        amount: '₹ 25,000',
    },
];

const SIXDAYS = [
    {
        id: "4",
        months: "1 Month",
        amount: '₹ 7,000',
    },
    {
        id: "5",
        months: "3 Month",
        amount: '₹ 17,500',
    },
    {
        id: "6",
        months: "6 Month",
        amount: '₹ 28,000',
    },
    {
        id: "8",
        months: "12 Month",
        amount: '₹ 42,000',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.threeDayItem, backgroundColor]}>
        <Text style={[styles.monthsText, textColor]}>{item.months}</Text>
        <Text style={[styles.amountText, textColor]}>{item.amount}</Text>
    </TouchableOpacity>
);

export default function SelectMembership() {
    const navigation = useNavigation();

    const [selectedIdForThreeDays, setSelectedIdForThreeDays] = useState(null);
    const [selectedIdForSixDays, setSelectedIdForSixDays] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedIdForThreeDays ? "#DB3E6F" : COLORS.background;
        const color = item.id === selectedIdForThreeDays ? 'white' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedIdForThreeDays(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderItem2 = ({ item }) => {
        const backgroundColor = item.id === selectedIdForSixDays ? "#DB3E6F" : COLORS.background;
        const color = item.id === selectedIdForSixDays ? 'white' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedIdForSixDays(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <View>
                </View>
            </View>
            {/*  */}
            <Image source={images.gallantLogo} style={{ width: '40%', height: '20%', alignSelf: 'center', resizeMode: 'contain', marginTop: -30 }} />
            <Text style={styles.premiumText}>
                P R E M I U M
            </Text>
            <Text style={styles.titleText}>
                Select your membership
            </Text>
            {/*  */}
            <View>
                <Text style={styles.subTitleText}>
                    3 Days a week (1 hr slot)
                </Text>
                <FlatList
                    data={THREEDAYS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedIdForThreeDays}
                    numColumns={2}
                    contentContainerStyle={{ marginTop: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                />
            </View>

            {/*  */}
            <View>
                <Text style={styles.subTitleText}>
                    6 Days a week (1 hr slot)
                </Text>
                <FlatList
                    data={SIXDAYS}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    extraData={selectedIdForSixDays}
                    numColumns={2}
                    contentContainerStyle={{ marginTop: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                />
            </View>
            <CommonButton children="Buy Now" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SIZES.paddingLarge,
        paddingHorizontal: SIZES.padding6,
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        width: 24,
        height: 21,
    },
    premiumText: {
        fontSize: 24,
        color: COLORS.white,
        alignSelf: 'center',
        marginTop: '1%',
    },
    titleText: {
        fontSize: 24,
        fontFamily: FONTS.satoshi700,
        alignSelf: 'center',
        marginTop: '2.5%',
        color: COLORS.white,
    },
    subTitleText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi700,
        marginTop: '3.5%',
        color: COLORS.white,
    },
    threeDayItem: {
        borderColor: COLORS.themePink,
        borderWidth: 2,
        borderRadius: 15,
        width: '48%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    monthsText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi500
    },
    amountText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi700
    },
});
