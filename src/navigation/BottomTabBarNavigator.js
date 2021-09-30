import React, { useState } from 'react';
import { Image, Platform, TouchableOpacity, View } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Icons from '../../constants/Icons';
import { FONTS, icons } from '../../constants';
import LinearGradient from "react-native-linear-gradient";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// const Tab = createBottomTabNavigator();
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
                    // const backgroundColor = focused ? '#3511A3' : '#DECEE9';
                    switch (route.name) {
                        case 'Home':
                            return (
                                <View
                                    style={{
                                        // backgroundColor: backgroundColor,
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
                                        // backgroundColor: backgroundColor,
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
                                        // backgroundColor: backgroundColor,
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
                                            // backgroundColor: backgroundColor,
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
                // tabBarShowLabel: tabBarShowLabel,
                // tabBarLabelPosition: beside-icon,
                tabBarLabelStyle: { fontSize: 12, fontFamily: FONTS.satoshi700 },
                tabBarInactiveBackgroundColor: 'red',
                // tabBarActiveTintColor: '#EC6A93',
                // tabBarInactiveBackgroundColor: '#172047',
                // tabBarActiveBackgroundColor: '#393E61',
                // tabBarBackground: () => (
                //     <LinearGradient
                //         style={{flex: 1}}
                //         colors={[
                //             "#454C6B",
                //             "#2D3058"
                //         ]}
                //     ></LinearGradient>
                // ),
                // tabBarStyle: {
                //     height: Platform.select({
                //         ios: 80,
                //         android: 50,
                //     }),
                // },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Schedule" component={HomeScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
    );
}
