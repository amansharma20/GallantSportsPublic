import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

export default function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            paddingLeft: index === 0 ? 16 : 0,
                            marginLeft: index === 2 ? 8 : 0,
                            marginRight: index === 0 ? 8 : 0,
                            paddingRight: index === 2 ? 16 : 0,
                        }}
                    >
                        <LinearGradient start={{x: 0, y: 0}} colors={isFocused ? ['#7E0027', '#DB3E6F'] : ['#444B65', '#444B65']}
                            style={styles.linearGradient}>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.satoshi700, fontSize: 12 }}>
                                {label}
                            </Text>
                        </LinearGradient>


                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        height: 43,
        justifyContent: 'center',
        borderRadius: 15,
    }
})