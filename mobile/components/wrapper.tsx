import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { IWrapper } from "@/types";
import { COLORS } from "@/utils/theme";
import { ScreenSize } from "@/utils/styling";

const Wrapper = ({ noBg, children, style }: IWrapper) => {
    return (
        <View
            style={{
                backgroundColor: COLORS.primaryDark,
                paddingTop: StatusBar.currentHeight || 12,
                paddingHorizontal: 10,
                flex: 1,
                height: ScreenSize.height,
                ...style,
            }}
        >
            {!noBg && (
                <>
                    <View style={styles.circle} />
                    <View style={styles.circle2} />
                </>
            )}
            {children}
        </View>
    );
};

export default Wrapper;

const styles = StyleSheet.create({
    circle: {
        width: 200,
        height: 200,
        backgroundColor: COLORS.primary,
        filter: "blur(120px)",
        position: "absolute",
        top: 10,
        left: 0,
    },
    circle2: {
        width: 200,
        height: 200,
        backgroundColor: COLORS.yellow,
        filter: "blur(120px)",
        position: "absolute",
        bottom: -30,
        right: 0,
    },
});
