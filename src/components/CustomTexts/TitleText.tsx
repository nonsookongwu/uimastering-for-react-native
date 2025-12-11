import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { s } from "react-native-size-matters";

interface Props {
  textColor?: string;
  children: string;
}

const TitleText = ({ textColor, children }: Props) => {
  return <Text style={[styles.socialMediaTitleText, {color: textColor}]}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  socialMediaTitleText: {
    fontWeight: 700,
    fontSize: s(30),
    lineHeight: s(36),
    color: "#000000",
    // marginLeft: 10,
  },
});
