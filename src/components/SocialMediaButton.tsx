import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { ComponentProps } from "react";
import { s } from "react-native-size-matters";
import {FontAwesome6, FontAwesome5} from "@expo/vector-icons";

interface Props {
  iconName: ComponentProps<typeof FontAwesome5>["name"];
  iconColor?: string;
    borderColor?: string;
    backgroundColor?: string;
}

const SocialMediaButton = ({ iconName, iconColor = "#178AD9", borderColor, backgroundColor }: Props) => {
  const isValidFA5 = (name: string) => {
    return FontAwesome5.getRawGlyphMap()[name] !== undefined;
  };

  return (
    
      <TouchableHighlight style = { [styles.container, {borderColor, backgroundColor }] } >
      {isValidFA5(iconName) ? (
        <FontAwesome5 name={iconName} size={s(24)} color={iconColor} />
      ) : (
        <FontAwesome6 name={iconName} size={s(24)} color={iconColor} />
      )}
    </TouchableHighlight>
  );
};

export default SocialMediaButton;

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
