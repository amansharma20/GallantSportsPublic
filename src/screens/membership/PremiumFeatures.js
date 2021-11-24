/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../components/CommonGradientButton';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';

export default function PremiumFeatures() {
    const navigation = useNavigation();

    const screenHeight = Dimensions.get('screen').height

    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: screenHeight }}>
                <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
                    <View>
                    </View>
                </View>
                {/*  */}
                <Image source={images.gallantLogo} style={styles.gallantLogo} />
                <Text style={styles.premiumText}>
                    P R E M I U M
                </Text>
                {/* <Text style={[styles.premiumText, {fontFamily: FONTS.satoshi900}]}>
                Ends in 15 days
                </Text> */}
                <View style={styles.validContainer}>
                    <Text style={[styles.titleText, { fontSize: 18, fontFamily: FONTS.satoshi500, marginTop: 0 }]}>
                        Valid in Delhi/NCR only
                    </Text>
                </View>
                <Text style={[styles.titleText, { fontSize: 18, fontFamily: FONTS.satoshi500, marginTop: 0 }]}>
                    for above 12 years of age
                </Text>

                {/*  */}
                <Image source={images.premiumFeatures} style={{ width: '100%', height: '40%', resizeMode: 'contain' }} />
                <TouchableOpacity style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Privacy Policy
                    </Text>
                    <View>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Terms & conditions
                    </Text>
                    <View>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <CommonButton onPress={() => navigation.navigate('SelectMembership')} children="Buy Now" />
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
    gallantLogo: {
        width: '40%',
        height: '20%',
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: -30
    },
    premiumText: {
        fontSize: 24,
        color: COLORS.white,
        alignSelf: 'center',
        marginTop: '1%',
    },
    validContainer: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#444B65',
        borderRadius: 15,
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
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
    monthsText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi500
    },
    amountText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi700
    },
    mainContainerBody: {
        backgroundColor: COLORS.background,
        height: 46,
        justifyContent: 'space-between',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi500,
        color: COLORS.themePink,
    },

    nextButton: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        tintColor: COLORS.themePink,
    },
});
