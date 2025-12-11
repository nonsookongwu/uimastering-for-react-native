import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodLogo from '../assets/Logo';
import SunImageElement from '../assets/SunImageElement';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
          <FoodLogo />
          <SunImageElement style={ styles.sunImage} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    sunImage: {
        position: "absolute",
        bottom: 5,
        right: 3
    }
})