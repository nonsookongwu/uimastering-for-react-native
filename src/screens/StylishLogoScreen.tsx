import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import { StylishLogo } from '../assets/SVGIcons';

const StylishLogoScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <StylishLogo/>
      </View>
    </CustomSafeAreaView>
  );
}

export default StylishLogoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})