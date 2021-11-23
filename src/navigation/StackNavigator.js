import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/activityBookingFlow/ArenaDetailsScreen';
import ExpolreArenaDetailsScreen from '../screens/exploreBookingFlow/ExploreArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/activityBookingFlow/ExploreActivity';
import ArenaBookingScreen from '../screens/activityBookingFlow/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';
import BookingSummary from '../screens/Booking/BookingSummary';
import BookingScreen from '../screens/Booking/BookingScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import BookingComplete from '../screens/Booking/BookingComplete';
import ExploreArenaBookingScreen from '../screens/exploreBookingFlow/ExploreArenaBookingScreen';

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
            <Stack.Screen name="BookingScreen" component={BookingScreen} />
            <Stack.Screen name="BookingComplete" component={BookingComplete} />
            <Stack.Screen name="ExploreArenaBookingScreen" component={ExploreArenaBookingScreen} />
        </Stack.Navigator>
    );
}

