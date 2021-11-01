/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import LottieView from 'lottie-react-native';
import CommonButton from '../../components/CommonGradientButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetectLocation() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.contentContainer}>
                    <View style={styles.lottieContainer}>
                        <LottieView
                            source={require('../../../assets/lotties/location.json')}
                            autoPlay
                            loop={false}
                            style={styles.locationLottie}
                        />
                    </View>
                    <View style={styles.titleTextContainer}>
                        <Text style={[styles.headerText, { fontSize: 24 }]}>
                            Hi Aman, nice to meet you!
                        </Text>
                        <Text style={styles.normalText}>
                            Set your location to start exploring
                            our Arenas around you
                        </Text>
                    </View>
                    <View style={styles.bottomContentContainer}>
                        <CommonButton children="Detect current location" style={{ fontSize: 22, width: '100%' }} />
                        <TouchableOpacity onPress={() => navigation.navigate('SearchLocation')}
                         style={{
                            marginTop: SIZES.padding6,
                        }}>
                            <Text style={styles.headerText}>
                                Select location manually
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.discTextContainer}>
                    <Text style={[styles.normalText, { fontSize: 14 }]}>
                        We only access your location while you
                        are using the app to improve your
                        experience
                    </Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    body: { alignItems: 'center', justifyContent: 'space-between', flex: 1 },
    contentContainer: { height: '75%', justifyContent: 'space-between' },
    lottieContainer: { alignItems: 'center' },
    locationLottie: {
        zIndex: 9999,
        width: 300,
        height: 300,
    },
    titleTextContainer: { alignItems: 'center', paddingHorizontal: SIZES.paddingLarge },
    headerText: {
        fontSize: 22,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
        textAlign: 'center',
    },
    normalText: {
        textAlign: 'center',
        fontFamily: FONTS.satoshi400,
        fontSize: SIZES.h2,
        color: COLORS.white
    },
    bottomContentContainer: { paddingHorizontal: SIZES.paddingLarge, alignItems: 'center' },
    discTextContainer: { paddingBottom: 40, paddingHorizontal: 40 },
});
