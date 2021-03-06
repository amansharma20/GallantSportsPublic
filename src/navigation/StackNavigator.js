import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/activityBookingFlow/ArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/activityBookingFlow/ExploreActivity';
import ArenaBookingScreen from '../screens/activityBookingFlow/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';
import BookingSummary from '../screens/Booking/BookingSummary';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import BookingComplete from '../screens/Booking/BookingComplete';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import ScheduleBookingDetails from '../screens/schedule/ScheduleBookingDetails';
import TermsOfUse from '../screens/profile/TermsOfUse';
import Support from '../screens/profile/Support';
import FAQ from '../screens/profile/FAQ';
import ExpolreArenaDetailsScreen from '../screens/exploreBookingFlow/ExploreArenaDetailsScreen';
import PrivacyPolicy from '../screens/profile/PrivacyPolicy';
import YourBookings from '../screens/profile/YourBookings';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="ExpolreArenaDetailsScreen" component={ExpolreArenaDetailsScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="ExploreActivity" component={ExploreActivity} />
            <Stack.Screen name="ArenaBookingScreen" component={ArenaBookingScreen} />
            <Stack.Screen name="BookingSummary" component={BookingSummary} />
            <Stack.Screen name="BookingComplete" component={BookingComplete} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="ScheduleBookingDetails" component={ScheduleBookingDetails} />
            <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="FAQ" component={FAQ} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="YourBookings" component={YourBookings} />
        </Stack.Navigator>
    );
}

