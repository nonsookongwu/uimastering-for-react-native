import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import SubTitleText from "./CustomTexts/SubTitleText";
import SmallText from "./CustomTexts/SmallText";
import VideoIcon from "../assets/VideoIcon";
import CustomBadge from "./CustomBadge";
interface Props{
    imageUri: string
    cardText: string;
    cardTime: string
}

const MeditationCard = ({imageUri, cardText, cardTime}:Props) => {
    return (
     
        <ImageBackground
          source={{
            uri: imageUri,
          }}
          imageStyle={styles.image}
          style={styles.imageContainer}
        >
          <View style={styles.overlay}>
            <View style={styles.topContent}>
              <CustomBadge
                textColor="#fff"
                alignSelf="flex-end"
                badgeText="Live"
                bgColor="#E41111"
              />
            </View>
            <View style={styles.bottomContent}>
              <SubTitleText textColor="#fff">{cardText}</SubTitleText>
              <View style={styles.time}>
                <VideoIcon />
                <SmallText textColor="#fff">{cardTime}</SmallText>
              </View>
            </View>
          </View>
        </ImageBackground>
      
    );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
        // width: "48%",
    flex: 1,
    // width: s(166),
    resizeMode: "cover",
    borderRadius: s(12),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: s(12),
  },
  topContent: {
    width: "100%",
    padding: s(6),
  },
  bottomContent: {
    marginHorizontal: s(10),
    marginBottom: vs(8),
      gap: vs(3),
    //   backgroundColor: "red",
    //   position: "relative"
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(5),
  },
    overlay: {
      justifyContent: "space-between",
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0,0.40)"
  },
});
