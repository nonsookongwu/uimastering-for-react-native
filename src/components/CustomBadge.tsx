import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import SubTitleText from './CustomTexts/SubTitleText'
import SmallText from './CustomTexts/SmallText';

interface Props{
    bgColor: string;
    alignSelf: "flex-end" | "flex-start" | "center"
    badgeText: string;
    textColor: string;
}

const CustomBadge = ({bgColor, alignSelf, badgeText, textColor}:Props) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor, alignSelf }]}>
      <SmallText textColor={textColor}>{badgeText}</SmallText>
    </View>
  );
}

export default CustomBadge

const styles = StyleSheet.create({
  container: {
        borderRadius: s(90),
        alignItems: "center",
        justifyContent: "center",
        height: vs(22),
        paddingHorizontal: s(10),
        // margin: 5
      
  },
});