import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { s } from "react-native-size-matters";

interface Props {
  textColor?: string;
  children: string;
}

const SectionTitleText = ({ textColor, children }: Props) => {
  return <Text style={[styles.socialMediaSubTitleText, {color: textColor}]}>{children}</Text>;
};

export default SectionTitleText;

const styles = StyleSheet.create({
  socialMediaSubTitleText: {
    fontWeight: 600,
    fontSize: s(18),
    lineHeight: s(24),
    color: "#000000",
  },
});
