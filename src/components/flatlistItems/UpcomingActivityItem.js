/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Responsive } from '../../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES } from '../../../constants';

const UpcomingActivityItem = (props) => {
    const navigation = useNavigation();
    const even = props.index % 2;
    const leftBackgroundColor = (even === 0) ? '#7E0027' : '#7B91F8';
    const rightBackgroundColor = (even === 0) ? '#DB3E6F' : '#273575';
    console.log(even);
    return (
        <View
            activeOpacity={0.9}
            style={styles.container}
        >
            <TouchableOpacity>
                <LinearGradient start={{ x: 0, y: 0 }} colors={[leftBackgroundColor, rightBackgroundColor]} style={styles.linearGradient}>

                </LinearGradient>
            </TouchableOpacity>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
    },
    linearGradient: {
        width: Responsive.width(289),
        height: Responsive.height(131),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default UpcomingActivityItem;
