import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import UpcomingActivityItem from '../../components/flatlistItems/UpcomingActivityItem';
import GOALSDATA from '../../../assets/data/GoalsData';

export default function HomeScreen(props) {
    // console.log(props);
    console.log(props.route.params.personalDetailsData.FirstName);
    const firstName = props.route.params.personalDetailsData.FirstName;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Image source={Icons.locationIcon} style={styles.locationIcon} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.locationHeaderText}>
                        Sector 48
                    </Text>
                    <Text style={styles.locationSubText}>
                        Gurugram
                    </Text>
                </View>
            </View>
            <View style={styles.headerTextContainer}>
                <Text style={styles.hiText}>
                    Hi, {firstName}
                </Text>
                <Text style={styles.upcomingActivityText}>
                    Here are your
                    upcoming activities
                </Text>
            </View>
            <View style={{paddingVertical: 30, }}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={GOALSDATA}
                    horizontal={true}
                    renderItem={(itemData, item) => (
                        <UpcomingActivityItem
                            id={itemData.item.id}
                            index={itemData.index}
                            goal={item}
                        />
                    )}
                />

            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    headerContainer: {
        padding: SIZES.paddingLarge,
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationIcon: {
        width: 25,
        height: 35,
        marginRight: 12,
        resizeMode: 'contain'
    },
    locationHeaderText: {
        fontFamily: FONTS.satoshi700,
        fontSize: 18,
        color: COLORS.white,
    },
    locationSubText: {
        fontFamily: FONTS.satoshi700,
        fontSize: 14,
        color: COLORS.white,
    },
    headerTextContainer: {
        paddingHorizontal: SIZES.paddingLarge,
    },
    hiText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi400,
        color: COLORS.white,
    },
    upcomingActivityText: {
        fontSize: 24,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    },
});
