import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { s } from "react-native-size-matters";
import Feather from "@expo/vector-icons/Feather";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="send" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    height: s(46),
    width: s(46),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1077AF",
    borderRadius: s(23),
  },
});
