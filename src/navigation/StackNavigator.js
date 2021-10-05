import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import PersonalDetails from '../screens/auth/PersonalDetails';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import YourBookingDetails from '../screens/yourBooking/YourBookingDetails';
import ArenaDetailsScreen from '../screens/arena/ArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
        </Stack.Navigator>
    );
}

