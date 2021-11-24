/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import { ExpandableListView } from 'react-native-expandable-listview';

const CONTENT = [
    {
        id: '42',
        categoryName: 'What is Gallant Play?',
        subCategory: [
            {
                id: '1',
                name:
                    "You already know Gallant Sports as South Asia’s leading Sports Infrastructure solution-provider. We create, design, and maintain international standard sporting infrastructure ranging from indoor to outdoor playing fields.{'\n'}Growing its vision to create a sporting culture across India, Gallant is now expanding its field of operations to offer integrated playing and coaching solutions on our world-class turfs. Gallant intends to be your sporting partner right from toddlerhood through to the prime of your life by offering injury-free facilities that will unleash the inner sports person inside you.Gallant Play opens its doors to its world-class playing surfaces within accessible distance and affordable prices right at your fingertips. Gallant Play helps you choose your sport of choice, find an arena near you and schedule your playtime at your convenience. If you are a parent looking for outdoor activities for your child, a sports enthusiast wanting to burn some calories, an overworked corporate honcho searching for some stress-busting time or just wanting to stay active with a fitness regimen, look no further. Just a few clicks on your phone on our app will help you:",
            },

        ],
    },

];

export default function FAQ() {
    const navigation = useNavigation();

    function handleItemClick({ index }) {
        console.log(index);
    };

    function handleInnerItemClick({ innerIndex, item, itemIndex }) {
        console.log(innerIndex);
    };

    return (
        <View showsVerticalScrollIndicator={false}
            style={styles.container}>
            <ScrollView>
                <View>
                    {/* TOP HEADER */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icons.backIcon} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>
                            FAQ’s
                        </Text>
                        <View>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: 'white', fontSize: 20, paddingHorizontal: 20, fontWeight: 'bold' }}>
                            Commonly Searched FAQ’s
                        </Text>
                    </View>
                    <View style={styles.MainContainer}>

                        <ExpandableListView
                            data={CONTENT} // required
                            onInnerItemClick={handleInnerItemClick}
                            onItemClick={handleItemClick}
                            itemImageIndicatorStyle={{ color: 'white' }}
                            itemLabelStyle={{ backgroundColor: 'transparent', color: '#FFF', fontSize: 16, flexWrap: 'wrap', flexShrink: 1, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
                            itemContainerStyle={{ backgroundColor: 'transparent', color: '#FFF', margin: 10, elevation: 5, padding: 5, fontFamily: FONTS.AvenirRoman, fontWeight: 'bold' }}
                            innerItemContainerStyle={{ backgroundColor: '#FFF', margin: 10, elevation: 0, padding: 0, fontFamily: FONTS.AvenirRoman, }}
                            renderInnerItemSeparator={true}
                            renderItemSeparator={false}
                        />
                    </View>
                </View>
            </ScrollView>
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
    header: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5,
    },
    MainContainer: {
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
    }
});
