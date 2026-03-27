import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { ScreenSize, verticalScale } from "@/utils/styling";
import { COLORS, radius } from "@/utils/theme";
import { Tabs } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <TabBar {...props} />}
        />
    );
};

const tabBarButtonIcon: any = {
    index: "home",
    Add: "add",
    List: "list",
};

function TabBar({
    state,
    descriptors,
    navigation,
}: {
    state: any;
    descriptors: any;
    navigation: any;
}) {
    // const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={styles.tabBarContainer}>
            <View style={styles.tabBar}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                              ? options.title
                              : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: "tabLongPress",
                            target: route.key,
                        });
                    };

                    console.log("");

                    return (
                        <PlatformPressable
                            key={route.key}
                            href={buildHref(route.name, route.params)}
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarButtonTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabBarButton}
                        >
                            <Ionicons
                                name={tabBarButtonIcon[route.name]}
                                size={verticalScale(20)}
                                color={
                                    isFocused
                                        ? COLORS.primary
                                        : COLORS.neutral500
                                }
                            />
                        </PlatformPressable>
                    );
                })}
            </View>
        </View>
    );
}

export default TabsLayout;

const styles = StyleSheet.create({
    tabBarContainer: {
        position: "absolute",
        height: 70,
        width: ScreenSize.width,
        justifyContent: "center",
        alignItems: "center",
        bottom: verticalScale(5),
    },
    tabBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: verticalScale(10),
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: verticalScale(23),
        gap: verticalScale(10),
        // width: ScreenSize.width - verticalScale(80),
        backgroundColor: COLORS.neutral900,
        borderRadius: 20,
        borderCurve: "continuous",
    },
    tabBarButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
});
