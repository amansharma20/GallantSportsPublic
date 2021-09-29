/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS, images, SIZES } from '../../constants/';
import { Responsive } from '../../constants/Layout/';

const CommonButton = ({ children, ...rest }) => {
    return (
        <TouchableOpacity activeOpacity={0.75} style={styles.TOContainer} {...rest}>
            <LinearGradient start={{ x: 0, y: 0 }} colors={['#7E0027', '#DB3E6F']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default CommonButton;

const styles = StyleSheet.create({
    linearGradient: {
        height: Responsive.height(57),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi700,
        fontSize: SIZES.buttonText,
    },
    TOContainer: { width: '100%' },
});
