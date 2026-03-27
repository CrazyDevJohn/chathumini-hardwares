import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import Wrapper from "@/components/wrapper";
import Typo from "@/components/Typo";
import { COLORS } from "@/utils/theme";
import { verticalScale } from "@/utils/styling";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
    return (
        <Wrapper>
            <View style={styles.header}>
                <Typo>Chathumini Stores</Typo>
            </View>

            <LinearGradient
                colors={[COLORS.primary, COLORS.rose]}
                style={styles.card}
            >
                <View>
                    <Typo size={22} color={COLORS.textLighter}>
                        Start work
                    </Typo>
                    <Typo size={22} color={COLORS.textLighter}>
                        with some decks
                    </Typo>
                </View>

                <View style={styles.imgBx}>
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                        source={require("@/assets/images/art.png")}
                    />
                </View>
            </LinearGradient>

            <View style={styles.itemConainer}>
                <Typo>Recently added items</Typo>
            </View>
        </Wrapper>
    );
};

const RecentItems = () => {
    return (
        <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            keyExtractor={(item: any, i: any) =>
                `Recent-item-${item?._id}-${i}`
            }
            renderItem={({ item, index }) => {
                return <View></View>;
            }}
        />
    );
};

export default Home;

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },
    card: {
        height: verticalScale(130),
        borderRadius: 14,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imgBx: {
        width: "40%",
        height: "100%",
    },

    itemConainer: {
        paddingTop: 10,
        flex: 1,
    },
});
