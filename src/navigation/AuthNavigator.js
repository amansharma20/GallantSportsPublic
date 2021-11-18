import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUpScreen from '../screens/auth/SignUp';
import OtpScreen from '../screens/auth/OtpScreen';
import SignUp from '../screens/auth/SignUp';
import DetectLocation from '../screens/location/DetectLocation';
import SearchLocation from '../screens/location/SearchLocation';
import checkIfFirstLaunch from '../screens/auth/FirstLaunch';
import DynamicOnBoarding from '../screens/onBoarding/DynamicOnBoarding';
import StaticOnBoarding from '../screens/onBoarding/StaticOnBoarding';
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
        return <StaticOnBoarding />;
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            // initialRouteName={firstLaunch ? 'DynamicOnBoarding' : 'Login'}
        >
            
            {/* <Stack.Screen name="DynamicOnBoarding" component={DynamicOnBoarding} /> */}
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="DetectLocation" component={DetectLocation} />
            <Stack.Screen name="SearchLocation" component={SearchLocation} />
        </Stack.Navigator>
    );
}