import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import Wrapper from "@/components/wrapper";
import Typo from "@/components/Typo";
import { COLORS, radius, withOpacity } from "@/utils/theme";
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
                        Welcome to
                    </Typo>
                    <Typo size={22} color={COLORS.textLighter}>
                        Chathumini Stores
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
                <Typo style={styles.title}>Our list of all items stock</Typo>

                <StockItems />
            </View>
        </Wrapper>
    );
};

const StockItems = () => {
    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                keyExtractor={(item: any, i: any) =>
                    `Stock-item-${item?._id}-${i}`
                }
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.stockItem}>
                            <View style={styles.innerView}>
                                <View style={styles.stockItemImage}>
                                    <Image
                                        source={require("@/assets/images/cdj.png")}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <View style={styles.sizeOverlay}>
                                        <Typo
                                            size={25}
                                            color={COLORS.neutral300}
                                        >
                                            10
                                        </Typo>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flex: 1,
                                    }}
                                >
                                    <View>
                                        <Typo size={22}>Melwa Roude</Typo>
                                        <Typo
                                            size={10}
                                            color={COLORS.neutral400}
                                        >
                                            Quality: RB500
                                        </Typo>
                                    </View>
                                    <View>
                                        <Typo
                                            size={18}
                                            color={COLORS.neutral400}
                                        >
                                            RS. 1200
                                        </Typo>
                                        <Typo size={10} color={COLORS.green}>
                                            100 In stock
                                        </Typo>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
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
    title: {
        backgroundColor: withOpacity(COLORS.neutral800, "53"),
        padding: 8,
        borderRadius: 10,
    },
    itemConainer: {
        paddingTop: verticalScale(10),
        flex: 1,
    },
    stockItem: {
        backgroundColor: "#00000000",
        paddingVertical: verticalScale(5),
        height: verticalScale(70),
    },
    innerView: {
        backgroundColor: withOpacity(COLORS.neutral800, "55"),
        paddingVertical: verticalScale(5),
        paddingHorizontal: verticalScale(8),
        borderRadius: radius._12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: verticalScale(10),
    },
    stockItemImage: {
        width: verticalScale(50),
        height: verticalScale(50),
        position: "relative",
        overflow: "hidden",
        borderRadius: radius._30,
    },
    sizeOverlay: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: withOpacity(COLORS.primaryDark, "73"),
        justifyContent: "center",
        alignItems: "center",
    },
});
