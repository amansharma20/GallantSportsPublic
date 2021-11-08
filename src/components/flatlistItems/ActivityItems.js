/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { applicationProperties } from '../../application.properties';
import { FONTS } from '../../../constants';

const ActivityItems = (props) => {
    const activities = props.activity
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.navigate('ExploreActivity', 
                {ActivityList: activities})}>
                <View style={{
                    backgroundColor: '#444B65', width: 69, height: 87, borderRadius: 15,
                    alignItems: 'center',
                }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image source={{ uri: applicationProperties.imageUrl + activities.item.ActivityIconStoragePath }} 
                         style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 20 }} />
                        <Text style={{ paddingVertical: 5, paddingHorizontal: 5, fontSize: 10, color: 'white', fontFamily: FONTS.satoshi700, textAlign: 'center'}}>
                            {activities.item.Name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16
    }
});

export default ActivityItems;
