/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';

export default function ArenaBookingScreen() {
  const navigation = useNavigation();

  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    let items = Array.apply(null, Array(6)).map((v, i) => {
      return {
      };
    });
    setDataSource(items);
  }, []);

  const renderAvailableActivitiesItem = ({ }) => (
    <TouchableOpacity style={styles.activityContainer}>
      <View style={styles.activityBookedLeftContainer}>
        <Image source={Icons.footballIcon} style={styles.activityIconSize} />
        <Text style={styles.activityText}>
          Football
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.backIcon} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Explore Nearby
        </Text>
        <View>
        </View>
      </View>
      <View>
        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
          Select activity
        </Text>

        <View style={styles.availableActivitiesContainer}>
          <View style={styles.availableActivitiesItems}>
            <FlatList
              data={dataSource}
              renderItem={renderAvailableActivitiesItem}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{
                paddingLeft: SIZES.padding6,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={[styles.headerText, { paddingHorizontal: SIZES.padding6 }]}>
          Select your slot
        </Text>

        <View style={styles.availableActivitiesContainer}>
          <View style={styles.availableActivitiesItems}>
            <FlatList
              data={dataSource}
              renderItem={renderAvailableActivitiesItem}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{
                paddingLeft: SIZES.padding6,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleText: {
    fontSize: SIZES.header,
    fontFamily: FONTS.satoshi900,
    color: COLORS.white,
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding6,
    paddingVertical: SIZES.paddingLarge,
  },
  headerText: {
    fontSize: SIZES.header,
    color: COLORS.white,
    fontFamily: FONTS.satoshi900,
  },
  backIcon: {
    width: 24,
    height: 21,
  },
  availableActivitiesContainer: {
    // paddingTop: SIZES.padding4,
  },
  availableActivitiesItems: { paddingVertical: 20, flexDirection: 'row' },
  activityContainer: { paddingRight: 18 },
  activityBookedLeftContainer: {
    width: 69,
    height: 87,
    backgroundColor: '#444B65',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIconSize: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  activityText: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: FONTS.satoshi500,
  },
});
