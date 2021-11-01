import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/arena/ArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/explore/ExploreActivity';
import ArenaBookingScreen from '../screens/arena/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="ExploreActivity" component={ExploreActivity} />
            <Stack.Screen name="ArenaBookingScreen" component={ArenaBookingScreen} />
        </Stack.Navigator>
    );
}

