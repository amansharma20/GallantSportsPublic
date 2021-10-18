/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingCarousel from './OnBoardingCarousel';
import onBoardingData from '../../../assets/data/onBoardingData';
import { images, COLORS } from '../../../constants/';
import { ScreenHeight } from 'react-native-elements/dist/helpers';
import SplashScreen from 'react-native-splash-screen';

export default function OnBoardingScreen() {
    useEffect(() => {
        Platform.OS === 'ios' ? 200 : SplashScreen.hide();
      });
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor:'#6078EA' }}>
            <View style={styles.container}>
                <OnBoardingCarousel images={onBoardingData.images} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
