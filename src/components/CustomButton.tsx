import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SubTitleText from './CustomTexts/SubTitleText';
import { s } from 'react-native-size-matters';
import SmallText from './CustomTexts/SmallText';

interface Props{
    bgColor: string;
    buttonText: string;
    buttonFn?: () => void;
}


const CustomButton = ({bgColor, buttonText, buttonFn}:Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={buttonFn}
    >
      <SmallText textColor="#fff" fontWeight='700'>{buttonText}</SmallText>
    </TouchableOpacity>
  );
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: "100%",
        backgroundColor: "#75563B",
          borderRadius: s(8),
          alignItems: "center",
        justifyContent: "center"
      },
})