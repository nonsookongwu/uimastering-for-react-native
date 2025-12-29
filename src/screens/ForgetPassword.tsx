import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";

const ForgetPassword = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text>ForgetPassword</Text>
      </View>
    </CustomSafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    flex: 1,
  },
});
