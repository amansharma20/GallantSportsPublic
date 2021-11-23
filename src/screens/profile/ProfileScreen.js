/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Images from '../../../constants/Images';
import { AuthContext } from '../../navigation/ApplicationNavigator';
import Toast from 'react-native-toast-message';
import Icons from '../../../constants/Icons';
import { GQLQuery } from '../../persistence/query/Query';
import { useQuery } from '@apollo/client';

export default function ProfileScreen() {
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext);

    const { data: customerDetailsData, error: CustomerDetailsError } = useQuery(GQLQuery.GET_CUSTOMER_USER_DETAILS);

    const customerUserDetails = customerDetailsData && customerDetailsData.CustomerUserQuery && customerDetailsData.CustomerUserQuery.GetCustomerUserDetails;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Image source={Icons.editProfile} style={styles.editProfile} />
                    </TouchableOpacity>
                </View>
                <Image source={Images.pfpGallant} style={styles.profilePicture} />

                <Text style={styles.nameText}>
                    {customerUserDetails && customerUserDetails.FirstName} {customerUserDetails && customerUserDetails.LastName}
                </Text>
                <Text style={styles.locationText}>
                    Gurugram, Haryana
                </Text>
            </View>
            <View style={styles.mainContainer}>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Your Bookings
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Membership
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Support
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        FAQ’s
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Terms of use
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContainerBody}>
                    <Text style={styles.itemText}>
                        Privacy Policy
                    </Text>
                    <TouchableOpacity>
                        <Image source={icons.profileNext} style={styles.nextButton} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity>
                    <Text style={[styles.footerText, { marginTop: 32 }]}>
                        Rate us on play store
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={async () => {
                    signOut();
                    Toast.show({
                        type: 'error',
                        text1: 'Log Out',
                        text2: 'You have been logged out.',
                        visibilityTime: 2000,
                        autoHide: true,
                    });
                }}>
                    <Text style={[styles.footerText, { marginVertical: 20 }]}>
                        Log Out
                    </Text>
                </TouchableOpacity>



            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 99,
        borderWidth: 2,
        borderColor: '#DB3E6F'
    },

    editProfile: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },

    imageContainer: {
        alignItems: 'center',
        paddingVertical: SIZES.paddingLarge,
    },

    nameText: {
        paddingTop: 10,
        fontFamily: FONTS.satoshi900,
        fontSize: 24,
        color: COLORS.white
    },

    locationText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi500,
        color: COLORS.white,
    },

    mainContainer: {
        paddingHorizontal: SIZES.padding6,
    },

    mainContainerBody: {
        backgroundColor: '#444B65',
        paddingHorizontal: 20,
        height: 46,
        justifyContent: 'space-between',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },

    itemText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi500,
        color: COLORS.white,
    },

    nextButton: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },

    footerContainer: {
        paddingLeft: SIZES.paddingExtraLarge,
    },

    footerText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi500,
        color: COLORS.white,
    },
});
