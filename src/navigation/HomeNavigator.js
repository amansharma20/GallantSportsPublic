import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/auth/SignUp';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import ArenaDetailsScreen from '../screens/arena/ArenaDetailsScreen';
import ExploreNearby from '../screens/explore/ExploreNearby';
import ExploreActivity from '../screens/explore/ExploreActivity';
import ArenaBookingScreen from '../screens/arena/ArenaBookingScreen';
import YourBookingDetails from '../screens/Booking/YourBookingDetails';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={BottomTabBarNavigator} />
            <Stack.Screen name="YourBookingDetails" component={YourBookingDetails} />
            <Stack.Screen name="ExploreNearby" component={ExploreNearby} />
            <Stack.Screen name="ArenaDetailsScreen" component={ArenaDetailsScreen} />
            <Stack.Screen name="ExploreActivity" component={ExploreActivity} />
            <Stack.Screen name="ArenaBookingScreen" component={ArenaBookingScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
        </Stack.Navigator>
    );
}

