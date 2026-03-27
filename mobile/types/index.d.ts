import { TextStyle, ViewStyle } from "react-native";

export interface IExpectChildren {
    children: React.ReactNode;
}

export interface ITypo extends IExpectChildren {
    size?: TextStyle["fontSize"];
    color?: TextStyle["color"];
    fontWeight?: TextStyle["fontWeight"];
    style?: TextStyle;
}

export interface IWrapper extends IExpectChildren {
    noBg?: boolean;
    style?: ViewStyle;
}
