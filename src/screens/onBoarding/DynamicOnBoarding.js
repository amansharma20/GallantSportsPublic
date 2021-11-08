/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingCarousel from './OnBoardingCarousel';
import onBoardingData from '../../../assets/data/onBoardingData';
import { images } from '../../../constants';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function DynamicOnBoarding() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
            
        <ImageBackground source={images.onBoardingBackground} style={{ width: '100%', height: screenHeight }}>
            <View style={styles.container}>
                <OnBoardingCarousel images={onBoardingData.images} />
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
    },
});
