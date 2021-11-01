import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
        </Stack.Navigator>
    );
}

