/* eslint-disable prettier/prettier */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity } from 'react-native';
import AllSessions from '../screens/schedule/topTabScreens/AllSessions';
import Upcoming from '../screens/schedule/topTabScreens/Upcoming';
import Cancelled from '../screens/schedule/topTabScreens/Cancelled';
import { COLORS, FONTS, SIZES } from '../../constants';
import MyTabBar from './TabBar';

const Tab = createMaterialTopTabNavigator();

function ScheduleTopTabNavigator({ index, descriptors, navigation, position }) {
    const isFocused = index === index;

    return (
        <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
            initialRouteName="All"
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 12, fontFamily: FONTS.satoshi700, color: COLORS.white
                },
                activeTintColor: '#060417',
                inactiveTintColor: '#6F7FAF',
                tabBarStyle: { backgroundColor: COLORS.background},
            }}
        >
            <Tab.Screen name="AllSessions" component={AllSessions} options={{ tabBarLabel: 'All Sessions' }} />
            <Tab.Screen name="Upcoming" component={Upcoming} options={{ tabBarLabel: 'Upcoming' }} />
            <Tab.Screen name="Cancelled" component={Cancelled} options={{ tabBarLabel: 'Cancelled' }} />
        </Tab.Navigator>
    );
}
export default ScheduleTopTabNavigator;
