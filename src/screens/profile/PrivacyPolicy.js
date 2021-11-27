/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';


export default function PrivacyPolicy() {
    const navigation = useNavigation();

    return (
        <View
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                        Privacy Policy
                    </Text>
                    <View>
                    </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.padding6,
        paddingVertical: SIZES.paddingLarge,
    },
    headerText: {
        fontSize: SIZES.header,
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
    },
    backIcon: {
        width: 24,
        height: 21,
    },
});
