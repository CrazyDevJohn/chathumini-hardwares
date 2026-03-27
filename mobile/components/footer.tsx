import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Typo from "./Typo";
import { COLORS } from "@/utils/theme";

const Footer = () => {
    return (
        <View style={styles.conatiner}>
            <Typo color={COLORS.light}>
                Developed By: <Typo color={COLORS.primary}>Null Coder</Typo>
            </Typo>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
    },
});
