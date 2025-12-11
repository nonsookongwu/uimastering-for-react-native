import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

interface Props {
  textColor?: string;
  children: string;
  fontWeight?: "400" | "500" | "600" | "700";
}

const SubTitleText = ({ textColor, children, fontWeight }: Props) => {
  return (
    <Text
      style={[
        styles.Text,
        { color: textColor, fontWeight },
      ]}
    >
      {children}
    </Text>
  );
};

export default SubTitleText;

const styles = StyleSheet.create({
  Text: {
    fontWeight: 500,
    fontSize: s(16),
    lineHeight: s(18),
    color: "#000000",
    // borderWidth: 1,
    // borderColor: "#000",
  },
});
