/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback, useRef } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    useWindowDimensions,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    ImageBackground,
} from 'react-native';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
import { icons, SIZES, FONTS, COLORS } from '../../../constants/';

const OnBoardingCarousel = ({ images, descriptions, onPress, titlesText }) => {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
        console.log(viewableItems);
    }, []);

    const flatlistRef = useRef();

    const onPressFunction = () => {
        console.log(activeIndex);
        if (activeIndex < 2) {
            flatlistRef.current.scrollToIndex({ index: activeIndex + 1 });
        } else {
            navigation.navigate('Login');
        }
    };

    return (
        <View>
         <StatusBar
          hidden={false}
          backgroundColor={'#9bc5e8'}
          barStyle={'light-content'}
        />
            <FlatList
                ref={flatlistRef}
                data={images}
                renderItem={({ item }) => (
                    // <View>
                    //     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    //         <View style={[styles.image, { width: windowWidth, alignItems: 'center', justifyContent: 'center', }]}>
                    //             <Image source={{ uri: item }} style={{ width: '110%', height: '100%', resizeMode: 'contain', marginTop: 0 }} />
                    //         </View>
                    //     </View>
                    // </View>
                    <ImageBackground source={{ uri: item }} style={{ width: ScreenWidth, height: ScreenHeight }}>
                        <View style={{flex: 1, justifyContent: 'flex-end',}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 20 }}>
                                {/* <TouchableOpacity>
                                    <Text style={{
                                        color: '#4D2D8F', fontSize: 24,
                                        fontFamily: FONTS.satoshi700,
                                    }}>
                                        Skip
                                    </Text>

                                </TouchableOpacity> */}
                                <View style={styles.dots}>
                                    {images.map((image, index) => (
                                        <View
                                            style={[
                                                styles.dot,
                                                {
                                                    backgroundColor:
                                                        index === activeIndex ? '#3511A3' : '#E7E7EA',
                                                    width: index === activeIndex ? 32 : 8,
                                                    height: index === activeIndex ? 8 : 8,
                                                },
                                            ]}
                                        />
                                    ))}
                                </View>
                                <View style={{marginBottom: 20}}>
                                    <TouchableOpacity
                                        onPress={onPressFunction}
                                    >
                                        <Text style={{fontFamily: FONTS.satoshi700, color: COLORS.white, fontSize: 24}}>
                                            Next
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 0}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                onViewableItemsChanged={onFlatlistUpdate}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        // height: HEIGHT / 1.8,
        resizeMode: 'cover',
        // borderBottomLeftRadius: 54,
        // borderTopLeftRadius: 54,
    },
    dots: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        marginTop: 20
    },
    dot: {
        borderRadius: 10,
        margin: 5,
    },
    buttonText: {
        color: '#3511A3',
        fontSize: 20,
        fontWeight: '400',
    },
    subtitleText: {
        fontSize: 20,
        color: '#838383',
        paddingHorizontal: SIZES.padding,
        fontWeight: '500',
    },
    titleText: {
        fontSize: 30,
        color: '#484848',
        fontWeight: '400',
        paddingHorizontal: SIZES.padding,
        marginRight: 60,
    },
    subtitleTextContainer: { paddingTop: SIZES.padding2 },
    titleTextContainer: {
        marginBottom: 55,
        paddingTop: SIZES.padding2,
        borderTopRightRadius: 65,
        marginTop: 15,
    },
});

export default OnBoardingCarousel;
