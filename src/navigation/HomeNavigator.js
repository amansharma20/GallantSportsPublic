import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/activityBookingFlow/ArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/activityBookingFlow/ExploreActivity';
import ArenaBookingScreen from '../screens/activityBookingFlow/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';
import EditProfile from '../screens/profile/EditProfile';
import BookingSummary from '../screens/Booking/BookingSummary';
import BookingComplete from '../screens/Booking/BookingComplete';
import ExploreArenaBookingScreen from '../screens/exploreBookingFlow/ExploreArenaBookingScreen';
import ScheduleBookingDetails from '../screens/schedule/ScheduleBookingDetails';
import SelectMembership from '../screens/membership/SelectMembership';
import PremiumFeatures from '../screens/membership/PremiumFeatures';
import TermsOfUse from '../screens/profile/TermsOfUse';
import Support from '../screens/profile/Support';
import FAQ from '../screens/profile/FAQ';
import ExpolreArenaDetailsScreen from '../screens/exploreBookingFlow/ExploreArenaDetailsScreen';
import PrivacyPolicy from '../screens/profile/PrivacyPolicy';
import YourBookings from '../screens/profile/YourBookings';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="SelectMembership" component={SelectMembership} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="ExpolreArenaDetailsScreen" component={ExpolreArenaDetailsScreen} />
            <Stack.Screen name="ExploreActivity" component={ExploreActivity} />
            <Stack.Screen name="ArenaBookingScreen" component={ArenaBookingScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="BookingSummary" component={BookingSummary} />
            <Stack.Screen name="BookingComplete" component={BookingComplete} />
            <Stack.Screen name="ExploreArenaBookingScreen" component={ExploreArenaBookingScreen} />
            <Stack.Screen name="ScheduleBookingDetails" component={ScheduleBookingDetails} />
            <Stack.Screen name="PremiumFeatures" component={PremiumFeatures} />
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="YourBookings" component={YourBookings} />
        </Stack.Navigator>
    );
}

