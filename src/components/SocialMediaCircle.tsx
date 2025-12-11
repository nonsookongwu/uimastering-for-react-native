import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import { s } from "react-native-size-matters";
import {FontAwesome6, FontAwesome5} from "@expo/vector-icons";

interface Props {
  iconName: ComponentProps<typeof FontAwesome5>["name"];
}

const SocialMediaCircle = ({ iconName }: Props) => {
  const isValidFA5 = (name: string) => {
    return FontAwesome5.getRawGlyphMap()[name] !== undefined;
  };

  return (
    <View style={styles.container}>
      {isValidFA5(iconName) ? (
        <FontAwesome5 name={iconName} size={s(24)} color="#178AD9" />
      ) : (
        <FontAwesome6 name={iconName} size={s(24)} color="#178AD9" />
      )}
    </View>
  );
};

export default SocialMediaCircle;

const styles = StyleSheet.create({
  container: {
    height: s(46),
    width: s(46),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(23),
    borderWidth: 1,
    borderColor: "#E4E6E8",
  },
});
