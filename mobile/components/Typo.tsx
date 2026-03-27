import { View, Text } from "react-native";
import React from "react";
import { ITypo } from "@/types";
import { COLORS } from "@/utils/theme";

const Typo = ({
    size = 14,
    color = COLORS.light,
    style,
    fontWeight = "600",
    children,
}: ITypo) => {
    return (
        <Text
            style={{
                fontSize: size,
                color,
                fontWeight,
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

export default Typo;
