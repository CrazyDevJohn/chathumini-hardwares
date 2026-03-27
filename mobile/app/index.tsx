import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Typo from "@/components/Typo";
import { COLORS } from "@/utils/theme";
import Wrapper from "@/components/wrapper";
import { verticalScale } from "@/utils/styling";
import Footer from "@/components/footer";

const Splash = () => {
    const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.replace("/(tabs)");
    //     }, 3000);
    // }, []);
    return (
        <Wrapper style={styles.conatiner}>
            <Typo size={verticalScale(14)} color={COLORS.light}>
                Hello Welcome!
            </Typo>
            <Typo size={verticalScale(30)} color={COLORS.light}>
                Chathumini Stores
            </Typo>

            <TouchableOpacity
                onPress={() => router.push("/(tabs)")}
                activeOpacity={0.9}
                style={{ marginTop: 40 }}
            >
                <View style={styles.button}>
                    <Typo size={24} color={COLORS.neutral200}>
                        Get Started!
                    </Typo>
                </View>
            </TouchableOpacity>

            <Footer />
        </Wrapper>
    );
};

export default Splash;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: COLORS.primary,
        marginHorizontal: 10,
        width: 250,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 15,
        shadowColor: COLORS.primary,
    },
});
