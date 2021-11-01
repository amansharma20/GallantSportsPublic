/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../constants/Images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function Splash() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
                <Image source={Images.splashScreen} style={styles.splash} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    background: { height: screenHeight / 1.25, resizeMode: 'cover', width: screenWidth },
    splash: { height: screenHeight, resizeMode: 'cover', width: screenWidth },
});
