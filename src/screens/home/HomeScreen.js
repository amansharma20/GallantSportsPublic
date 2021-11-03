import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StatusBar,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import UpcomingActivityItem from '../../components/flatlistItems/UpcomingActivityItem';
import GOALSDATA from '../../../assets/data/ActivitIesData';
import ActivityItems from '../../components/flatlistItems/ActivityItems';
import ExploreFlatlistItem from '../../components/flatlistItems/ExploreFlatlistItem';
import { useNavigation } from '@react-navigation/core';
import { GQLQuery } from '../../persistence/query/Query';
import { useQuery } from '@apollo/client';

export default function HomeScreen(props) {
    console.log(props.navigation);
    // const firstName = props.route.params.personalDetailsData.FirstName;
    const { data: acitivity, error: errorActivity } = useQuery(GQLQuery.GET_ACTIVITIES);
    const { data: explore, error: errorExplore } = useQuery(GQLQuery.GET_EXPLORE);

    const Acitivities = acitivity && acitivity.ActivityQuery && acitivity.ActivityQuery.GetActivity;

    // const ExploreArena = explore && explore.ActivityQuery && explore.ActivityQuery.GetActivity;
    console.log(explore)
    console.log(errorExplore)

    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('DetectLocation')}>
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
                    Hi,
                    {/* {firstName} */}
                </Text>
                <Text style={styles.upcomingActivityText}>
                    Here are your
                    upcoming activities
                </Text>
            </View>
            <View style={{ paddingVertical: 30 }}>
                <FlatList
                    showsHorizontalScrollIndicator={false}

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

            <View>
                <View style={{ paddingLeft: SIZES.padding6 }}>
                    <Text style={styles.flatlistHeaderText}>
                        Activity
                    </Text>
                </View>
                <View style={{ paddingTop: 25, paddingBottom: 35 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.Id.toString()}
                        data={Acitivities}
                        horizontal={true}
                        renderItem={(item, index) => (
                            <ActivityItems
                                activity={item}
                            />
                        )}
                    />
                </View>
            </View>

            <View>
                <View style={{ paddingLeft: SIZES.padding6, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.flatlistHeaderText}>
                        Explore
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ExploreNearby')}>
                        <Text style={[styles.flatlistHeaderText, { color: COLORS.themePink, fontSize: 14, paddingRight: 16 }]}>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 25, paddingBottom: 35 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}

                        keyExtractor={(item) => item.id.toString()}
                        data={GOALSDATA}
                        horizontal={true}
                        renderItem={(itemData, item) => (
                            <ExploreFlatlistItem
                                // id={itemData.item.id}
                                // index={itemData.index}
                                goal={item}
                            />
                        )}
                    />
                </View>
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
        paddingLeft: SIZES.padding6,
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
        paddingHorizontal: SIZES.padding6,
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
    flatlistHeaderText: {
        fontSize: SIZES.header,
        fontFamily: FONTS.satoshi900,
        color: COLORS.white,
    }
});
