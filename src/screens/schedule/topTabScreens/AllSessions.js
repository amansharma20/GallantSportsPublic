/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../../constants';
import GOALSDATA from '../../../../assets/data/GoalsData';
import ScheduleFlatlistItem from '../../../components/flatlistItems/ScheduleFlatlistItem';

export default function AllSessions() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{paddingTop: SIZES.padding6}}>
            <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={GOALSDATA}
                    showsVerticalScrollIndicator={false}
                    renderItem={(itemData, item) => (
                        <ScheduleFlatlistItem
                            id={itemData.item.id}
                            index={itemData.index}
                            item={itemData.item}
                        />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.background,
    },
});
