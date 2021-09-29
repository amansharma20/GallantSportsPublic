import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import PersonalDetails from '../screens/auth/PersonalDetails';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        </Stack.Navigator>
    );
}

