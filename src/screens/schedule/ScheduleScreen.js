/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import ScheduleTopTabNavigator from '../../navigation/ScheduleTopTabNavigator';

export default function ScheduleScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    Activities Calender
                </Text>
            </View>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1 }}>
                    <ScheduleTopTabNavigator />
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
    headerContainer: {
        alignItems: 'center',
        paddingVertical: SIZES.paddingLarge,
    },
    headerText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
});
