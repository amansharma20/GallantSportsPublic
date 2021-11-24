import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';
import checkIfFirstLaunch from '../screens/auth/FirstLaunch';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import WelcomeScreen from '../screens/auth/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {

    const [firstLaunch, setFirstLaunch] = useState(null);

    useEffect(() => {
        (async () => {
            const isFirstLaunch = await checkIfFirstLaunch();
            setFirstLaunch(isFirstLaunch);
        })();
    }, []);

    if (firstLaunch == null) {
        return <OnBoarding />;
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
             initialRouteName={firstLaunch ? 'OnBoarding' : 'Login'}>
            
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
        </Stack.Navigator>
    );
}