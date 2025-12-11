import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { CardIcon } from '../assets/SVGIcons';
import SmallText from './CustomTexts/SmallText';
import SubTitleText from './CustomTexts/SubTitleText';

const CardComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <CardIcon />
      <View style={styles.textFlex}>
        <SubTitleText fontWeight="700">No master card added</SubTitleText>
        <View style={styles.smallTextContainer}>
          <SmallText
            letterSpacing={s(0.7)}
            textAlign="center"
            lineHeight={vs(18)}
          >
            You can add a mastercard and save it for later
          </SmallText>
        </View>
      </View>
    </View>
  );
}

export default CardComponent

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#F7F8F9",
    paddingVertical: vs(35),
    alignItems: "center",
    justifyContent: "center",
    gap: vs(17),
    borderRadius: s(10),
  },
  textFlex: {
    gap: vs(3),
    alignItems: "center",
  },
  smallTextContainer: {
    width: s(200),
  },
});