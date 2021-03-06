import React, { useEffect, useState } from 'react';
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
import ActivityItems from '../../components/flatlistItems/ActivityItems';
import ExploreFlatlistItem from '../../components/flatlistItems/ExploreFlatlistItem';
import { useNavigation } from '@react-navigation/core';
import { GQLQuery } from '../../persistence/query/Query';
import { useQuery } from '@apollo/client';
import GetLocation from 'react-native-get-location'
import LinearGradient from 'react-native-linear-gradient';
import { Responsive } from '../../../constants/Layout';
import Geocoder from 'react-native-geocoding';

Geocoder.init("AIzaSyCnZBgYngvXzzdd5wTPBhluSBjOP2w7n4M"); // use a valid API key

export default function HomeScreen(props) {
    const navigation = useNavigation();

    // GET CUSTOMER USER DETAILS
    const { data: customerDetailsData, error: CustomerDetailsError } = useQuery(GQLQuery.GET_CUSTOMER_USER_DETAILS);
    const customerUserDetails = customerDetailsData && customerDetailsData.CustomerUserQuery && customerDetailsData.CustomerUserQuery.GetCustomerUserDetails;

    // GET UPCOMING ACTIVITY
    const { data: customerUpcomingBookingData, error: customerUpcomingBookingError } = useQuery(GQLQuery.GET_CUSTOMER_UPCOMING_BOOKINGS);
    const customerUpcomingBookings = customerUpcomingBookingData && customerUpcomingBookingData.BookingQuery && customerUpcomingBookingData.BookingQuery.GetCustomerUpcomingBookings;

    // GET ACTIVITY UNDER ACTIVITY CAROUSEL
    const { data: acitivity, error: errorActivity } = useQuery(GQLQuery.GET_ACTIVITIES);
    const Acitivities = acitivity && acitivity.ActivityQuery && acitivity.ActivityQuery.GetActivity;

    // GET ARENA UNDER EXPLORE CAROUSEL
    const { data: explore, error: errorExplore } = useQuery(GQLQuery.GET_EXPLORE);
    const ExploreArena = explore && explore.ArenaQuery && explore.ArenaQuery.GetArena;

    // const [latlong, setLatLong] = useState(null);
    const [userCurrentLocation, setCurrentLocation] = useState();
    const [userCurrentAddress, setCurrentAddress] = useState('');

    const detectLocation = (data) => {
        setCurrentLocation(data)
        setCurrentAddress(description)
        console.log(data)
    }

    useEffect(() => {
        getOneTimeLocation();
    }, []);

    const getOneTimeLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                setCurrentLocation(location);

                Geocoder.from(location.latitude, location.longitude).then(json => {
                    var addressComponent = json.results[0].formatted_address;
                    setCurrentAddress(addressComponent)
                    // Alert.alert(this.state.addressComponent)
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }


    return (
        <View style={{
            flex: 1
        }}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetectLocation', {
                        onGoBack: detectLocation,
                        customerUserDetail: customerUserDetails
                    })}>
                        <Image source={Icons.locationIcon} style={styles.locationIcon} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.locationHeaderText}>
                            {userCurrentAddress}
                        </Text>
                        {/* <Text style={styles.locationSubText}>
                            Gurugram
                        </Text> */}
                    </View>
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.hiText}>
                        Hi, {customerUserDetails && customerUserDetails.FirstName}
                    </Text>
                    <Text style={styles.upcomingActivityText}>
                        Here are your
                        upcoming activities
                    </Text>
                </View>
                <View style={{ paddingVertical: 30 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={customerUpcomingBookings}
                        horizontal={true}
                        renderItem={(item, index) => (
                            <UpcomingActivityItem
                                upcomingBookings={item} />
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
                            keyExtractor={item => item.id}
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
                        <TouchableOpacity onPress={() => navigation.navigate('ExploreNearby', {
                            currentLocation: userCurrentLocation
                        })}>
                            <Text style={[styles.flatlistHeaderText, { color: COLORS.themePink, fontSize: 14, paddingRight: 16 }]}>
                                More
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 25, paddingBottom: 35 }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            data={ExploreArena}
                            horizontal={true}
                            renderItem={(item, index) => (
                                <ExploreFlatlistItem
                                    goal={item}
                                />
                            )}
                        />
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PremiumFeatures')}>
                <LinearGradient start={{ x: 0, y: 0 }} colors={['#7E0027', '#DB3E6F']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Become A Member
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
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
        fontSize: 14,
        paddingRight:20,
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
    },
    linearGradient: {
        height: Responsive.height(57),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
        fontSize: SIZES.buttonText,
    },
    TOContainer: { width: '100%', marginTop: 20 },
});
