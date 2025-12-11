import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

interface Props {
  textColor?: string;
  children: string;
  fontWeight?: "400" | "500" | "600" | "700";
  letterSpacing?: number;
  textAlign?: "left" | "right" | "center";
  lineHeight?: number;
}

const SmallText = ({ textColor, children, fontWeight, letterSpacing, textAlign, lineHeight }: Props) => {
  return <Text style={[styles.Text, {color: textColor, fontWeight, letterSpacing, textAlign, lineHeight}]}>{children}</Text>;
};

export default SmallText;

const styles = StyleSheet.create({
  Text: {
    fontWeight: 500,
    fontSize: s(12),
    lineHeight: s(14),
    color: "#000000",
    
  },
});
