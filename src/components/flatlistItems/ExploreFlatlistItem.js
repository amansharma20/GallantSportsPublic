/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';

const ExploreFlatlistItem = (props) => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity>
                <View style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={Images.basketball} style={styles.image} />
                    </View>
                    <View style={styles.exploreItemTextContainer}>
                        <Text style={styles.exploreItemText}>
                        Sportika
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16
    },
    mainContainer: {
        borderRadius: 15,
    },
    imageContainer: { borderRadius: 15 },
    exploreItemText: {
        fontFamily: FONTS.satoshi700,
        color: COLORS.white,
        fontSize: SIZES.h2,
    },
    image: { width: 232, height: 131, resizeMode: 'cover' },
    exploreItemTextContainer: { paddingTop: 10},
});

export default ExploreFlatlistItem;
