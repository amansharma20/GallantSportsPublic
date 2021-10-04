import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import Icons from '../../constants/Icons';
import { FONTS } from '../../constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScheduleScreen from '../screens/schedule/ScheduleScreen.js';
import ProfileScreen from '../screens/profile/ProfileScreen';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabBarNavigator(props, focused) {
    console.log(props)

    const [tabBarShowLabel, setTabBarShowLabel] = useState(false);

    return (
        <Tab.Navigator
            shifting={true}
            activeColor={'#EC6A93'}
            lazy={false}
            barStyle={{backgroundColor: '#172047'}}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#EC6A93' : '#ffffff';
                    switch (route.name) {
                        case 'Home':
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderTopRightRadius: 45,
                                        borderBottomRightRadius: 45,
                                    }}>
                                    <Image
                                        source={Icons.homeIcon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 24,
                                            height: 24,
                                        }}
                                    />
                                </View>
                            );
                        case 'Schedule':
                            return (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 45,
                                    }}>
                                    <Image
                                        source={Icons.calenderIcon}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 28,
                                            height: 28,
                                        }}
                                    />
                                </View>
                            );
                        case 'Profile':
                            return (
                                <TouchableOpacity onPress={() => setTabBarShowLabel(!tabBarShowLabel)}>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Image
                                            source={Icons.profileIcon}
                                            resizeMode="contain"
                                            style={{
                                                tintColor: tintColor,
                                                width: 28,
                                                height: 28,
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>

                            );
                    }
                },
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12, fontFamily: FONTS.satoshi700 },
                tabBarInactiveBackgroundColor: 'red',
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
