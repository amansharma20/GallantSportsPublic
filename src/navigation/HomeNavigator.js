import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/activityBookingFlow/ArenaDetailsScreen';
import ExploreArenaDetailsScreen from '../screens/exploreBookingFlow/ExploreArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/activityBookingFlow/ExploreActivity';
import ArenaBookingScreen from '../screens/activityBookingFlow/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';
import EditProfile from '../screens/profile/EditProfile';
import BookingSummary from '../screens/Booking/BookingSummary';
import BookingScreen from '../screens/Booking/BookingScreen';
import BookingComplete from '../screens/Booking/BookingComplete';
import ExploreArenaBookingScreen from '../screens/exploreBookingFlow/ExploreArenaBookingScreen';
import SelectMembership from '../screens/membership/SelectMembership';
import PremiumFeatures from '../screens/membership/PremiumFeatures';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="SelectMembership" component={SelectMembership} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="ExploreArenaDetailsScreen" component={ExploreArenaDetailsScreen} />
            <Stack.Screen name="ExploreActivity" component={ExploreActivity} />
            <Stack.Screen name="ArenaBookingScreen" component={ArenaBookingScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="BookingSummary" component={BookingSummary} />
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="BookingComplete" component={BookingComplete} />
            <Stack.Screen name="ExploreArenaBookingScreen" component={ExploreArenaBookingScreen} />
            <Stack.Screen name="PremiumFeatures" component={PremiumFeatures} />
        </Stack.Navigator>
    );
}

