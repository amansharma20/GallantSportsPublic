/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

const ExploreNearByImagesFlatlist = (item) => {
    const navigation = useNavigation();
    const imageUrl = item.item.item.image;
    return (
        <View style={styles.container}>
          <Image source={{ uri: imageUrl }} style={{width: '100%', height: 160}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // paddingLeft: 16,
    }
});

export default ExploreNearByImagesFlatlist;
