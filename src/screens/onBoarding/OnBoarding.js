/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { COLORS, FONTS, icons, images } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OnBoarding() {

    const [index, setIndex] = useState(0)

    const navigation = useNavigation();

    useEffect(() => {
        return () => MyAsyncStorage.storeData(AsyncStorageConstant.isFirstLaunch, 'false');
    })

    return (
        <View style={styles.container}>
            <PagerView style={{ flex: 1 }} initialPage={0}>

                <View key="1" style={styles.onboardingView}>
                    <ImageBackground source={images.onboardingfirst}
                        style={styles.imageStyle}>
                    </ImageBackground>
                </View>

                <View key="2" style={styles.onboardingView}>
                    <ImageBackground source={images.onboardingsecond}
                        style={styles.imageStyle}>
                    </ImageBackground>
                </View>

                <View key="3" style={styles.onboardingView}>
                    <ImageBackground source={images.onboardingthird}
                        style={styles.imageStyle}>
                        <View style={{ alignSelf: 'flex-end', flex: 1, }}>
                        </View>
                        <View style={styles.innerTextContainer}>
                            <View style={{backgroundColor:'transparent', flexDirection:'row', justifyContent:'space-between'}}>
                                <View></View>
                                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                                    <View style={styles.iconContainer}>
                                        <Text style={styles.iconText}>
                                            Continue
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </PagerView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    innerTextContainer: {
        paddingHorizontal: 0,
    },
    title: {
        fontFamily: FONTS.poppinsSemiBold,
        fontSize: 30,
        marginBottom: -20,
        color: COLORS.white,
    },
    subtitle: {
        fontFamily: FONTS.poppinsRegular,
        fontSize: 17,
        color: COLORS.white,
        marginTop: 25,
    },
    footerIconConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 70,
        paddingBottom: 20
    },
    skipText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsBold,
        fontSize: 17
    },
    nextIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 18
    },
    nextText: {
        color: COLORS.orangeText,
        fontFamily: FONTS.poppinsBold,
        fontSize: 17,
        paddingRight: 10
    },
    dot: {
        marginRight: 'auto',
        marginBottom: -15,
        marginLeft: -10

    },
    arrowSize: {
        width: 18,
        height: 14,
        resizeMode: 'contain',
        tintColor: COLORS.orangeText

    },
    onboardingView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    footerIconStarrtedContainer: {
        paddingHorizontal: 50,
        paddingTop: 40,
        paddingBottom: 30
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        backgroundColor: COLORS.orangeText,
        borderRadius: 26
    },

    iconText: {
        color: COLORS.white,
        fontFamily: FONTS.poppinsMedium,
        fontSize: 20,
        fontWeight:'bold',
        lineHeight: 22,
        paddingHorizontal:30,
        paddingVertical:10
    }
})
