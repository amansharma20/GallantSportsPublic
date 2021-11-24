/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList, Modal, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import CommonButton from '../../components/CommonGradientButton';
import Images from '../../../constants/Images';
// import { ScreenHeight } from 'react-native-elements/dist/helpers';


const THREEDAYS = [
    {
        id: "0",
        months: "1 Month",
        amount: '₹ 4,000',
    },
    {
        id: "1",
        months: "3 Month",
        amount: '₹ 10,000',
    },
    {
        id: "2",
        months: "6 Month",
        amount: '₹ 16,000',
    },
    {
        id: "3",
        months: "12 Month",
        amount: '₹ 25,000',
    },
];

const SIXDAYS = [
    {
        id: "4",
        months: "1 Month",
        amount: '₹ 7,000',
    },
    {
        id: "5",
        months: "3 Month",
        amount: '₹ 17,500',
    },
    {
        id: "6",
        months: "6 Month",
        amount: '₹ 28,000',
    },
    {
        id: "8",
        months: "12 Month",
        amount: '₹ 42,000',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.threeDayItem, backgroundColor]}>
        <Text style={[styles.monthsText, textColor]}>{item.months}</Text>
        <Text style={[styles.amountText, textColor]}>{item.amount}</Text>
    </TouchableOpacity>
);

export default function SelectMembership() {
    const navigation = useNavigation();

    const [selectedIdForThreeDays, setSelectedIdForThreeDays] = useState(null);
    const [selectedIdForSixDays, setSelectedIdForSixDays] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedIdForThreeDays ? "#DB3E6F" : COLORS.background;
        const color = item.id === selectedIdForThreeDays ? 'white' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedIdForThreeDays(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    const renderItem2 = ({ item }) => {
        const backgroundColor = item.id === selectedIdForSixDays ? "#DB3E6F" : COLORS.background;
        const color = item.id === selectedIdForSixDays ? 'white' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedIdForSixDays(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    const screenHeight = Dimensions.get('screen').height;

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height: screenHeight}} style={styles.container}>
            <StatusBar hidden={false} backgroundColor={COLORS.background} barStyle={'light-content'} />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <View>
                </View>
            </View>
            {/*  */}
            <Image source={images.gallantLogo} style={{ width: '40%', height: '20%', alignSelf: 'center', resizeMode: 'contain', marginTop: -30 }} />
            <Text style={styles.premiumText}>
                P R E M I U M
            </Text>
            <Text style={styles.titleText}>
                Select your membership
            </Text>
            {/*  */}
            <View>
                <Text style={styles.subTitleText}>
                    3 Days a week (1 hr slot)
                </Text>
                <FlatList
                    data={THREEDAYS}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedIdForThreeDays}
                    numColumns={2}
                    contentContainerStyle={{ marginTop: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                />
            </View>

            {/*  */}
            <View>
                <Text style={styles.subTitleText}>
                    6 Days a week (1 hr slot)
                </Text>
                <FlatList
                    data={SIXDAYS}
                    renderItem={renderItem2}
                    keyExtractor={(item) => item.id}
                    extraData={selectedIdForSixDays}
                    numColumns={2}
                    contentContainerStyle={{ marginTop: 10 }}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginVertical: 10 }}
                />
            </View>
            <CommonButton onPress={() => setModalVisible(!modalVisible)} children="Buy Now" />
            <Modal
                animationType="slide"
                transparent={true}
                statusBarTranslucent={true}
                visible={modalVisible}
            >
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.crossContainer}>
                    <Image source={icons.modalCross} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Gallant Play Premium</Text>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>
                                Pick a plan start date
                            </Text>
                            <Image source={icons.calender} style={styles.calenderIcon} />
                        </View>
                        <View style={[styles.dateContainer, { marginBottom: 20 }]}>
                            <View>
                                <Text style={[styles.dateText, { fontSize: 14 }]}>
                                    1 x Premium
                                </Text>
                                <Text style={[styles.dateText, { fontFamily: FONTS.satoshi400, fontSize: 14 }]}>
                                    1 months Validity
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={icons.promoIcon} style={styles.promoIcon} />
                                    <Text style={[styles.dateText, { fontFamily: FONTS.satoshi500, color: COLORS.themePink, fontSize: 14 }]}>
                                        Apply Promo Code
                                    </Text>
                                </View>
                            </View>
                            <Text style={[styles.dateText, { fontSize: 16, fontFamily: FONTS.satoshi400 }]}>
                                ₹4,000
                            </Text>
                        </View>
                        <View style={[styles.dateContainer]}>
                            <View>
                                <Text style={[styles.dateText, { fontSize: 16 }]}>
                                    Total Cost
                                </Text>
                            </View>
                            <Text style={[styles.dateText, { fontSize: 16, fontFamily: FONTS.satoshi700 }]}>
                                ₹4,000
                            </Text>
                        </View>
                        <CommonButton
                            onPress={() => setShowSuccessModal(true) || setModalVisible(!modalVisible)}
                            children="Proceed"
                        />
                    </View>
                </View>
            </Modal>
            {showSuccessModal && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    showModal={showSuccessModal}
                    backgroundColor="black"
                    onRequestClose={() => setShowSuccessModal(false)}
                    statusBarTranslucent
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBody}>
                            <View>
                                <Image source={Images.success} style={styles.modalImage} />
                            </View>
                            <View style={{ paddingVertical: 20 }}>
                                <Text style={styles.successText}>
                                    Congratulations
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.successSubText}>
                                    Your account has been created
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SIZES.paddingLarge,
        paddingHorizontal: SIZES.padding6,
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backIcon: {
        width: 24,
        height: 21,
    },
    premiumText: {
        fontSize: 24,
        color: COLORS.white,
        alignSelf: 'center',
        marginTop: '1%',
    },
    titleText: {
        fontSize: 24,
        fontFamily: FONTS.satoshi700,
        alignSelf: 'center',
        marginTop: '2.5%',
        color: COLORS.white,
    },
    subTitleText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi700,
        marginTop: '3.5%',
        color: COLORS.white,
    },
    threeDayItem: {
        borderColor: COLORS.themePink,
        borderWidth: 2,
        borderRadius: 15,
        width: '48%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    monthsText: {
        fontSize: 14,
        fontFamily: FONTS.satoshi500
    },
    amountText: {
        fontSize: 18,
        fontFamily: FONTS.satoshi700
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: COLORS.modalBackground,
    },
    crossContainer: {
        paddingTop: '30%',
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: COLORS.modalBackground,
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 24,
        fontFamily: FONTS.satoshi700,
        color: COLORS.white
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    dateText: {
        fontSize: 16,
        fontFamily: FONTS.satoshi700,
        color: COLORS.white
    },
    calenderIcon: { width: 20, height: 20, resizeMode: 'contain' },
    promoIcon: { width: 16, height: 16, resizeMode: 'contain', marginRight: 4, tintColor: COLORS.themePink },

    modalBody: {
        backgroundColor: COLORS.background,
        alignItems: 'center',
        paddingHorizontal: 26,
        paddingVertical: 50,
        borderRadius: 15,
        justifyContent: 'space-between',
        elevation: 5
    },
    modalContainer: {
        backgroundColor: COLORS.modalBackground,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    successText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi900,
        fontSize: 24,
    },
    successSubText: {
        color: COLORS.white,
        fontFamily: FONTS.satoshi500,
        fontSize: SIZES.h2,
    },
});
