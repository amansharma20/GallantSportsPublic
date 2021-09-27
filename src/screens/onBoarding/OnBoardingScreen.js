import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import Images from '../../../constants/Images';

export default function OnBoardingScreen() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={'#87BDE5'} barStyle={'dark-content'} />

            <ImageBackground source={Images.splashScreen} style={{ flex: 1 }}>

            </ImageBackground>
        </View>

    );
};