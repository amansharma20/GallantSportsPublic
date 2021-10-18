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
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';

const ActivityItems = (props) => {
    const navigation = useNavigation();
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity 
            onPress={() => navigation.navigate('ExploreActivity')}
            >
                <View style={{
                    backgroundColor: '#444B65', width: 69, height: 87, borderRadius: 15,
                    alignItems: 'center',
                }}>
                    <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                        <Image source={Icons.footballIcon} style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 20 }} />
                        <Text style={{paddingTop: 20, paddingBottom: 6}}>
                        Football
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
