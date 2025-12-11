import React from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import Avatar from "../components/Avatar";
import BackButton from "../components/BackButton";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import SectionTitleText from "../components/CustomTexts/SectionTitleText";
import SmallText from "../components/CustomTexts/SmallText";
import TitleText from "../components/CustomTexts/TitleText";
import SendButton from "../components/SendButton";
import SocialMediaCircle from "../components/SocialMediaCircle";

const ContactUsScreen = () => {
  const socialMedia = [
    { id: 1, icon: "whatsapp", iconText: "Whatsapp" },
    { id: 2, icon: "x-twitter", iconText: "Twitter" },
    { id: 3, icon: "instagram", iconText: "Instagram" },
    { id: 4, icon: "snapchat-ghost", iconText: "Snapchat" },
    { id: 5, icon: "tiktok", iconText: "Tiktok" },
  ];

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Avatar />
        </View>
        <View style={styles.socialMediaContainer}>
          <TitleText> Contact Us</TitleText>
          <View style={styles.socialMediaWrapper}>
            <SectionTitleText>Social Media Platforms</SectionTitleText>
            {socialMedia.map((item) => (
              <View
                key={item.id}
                style={
                  item.id === 5
                    ? styles.socialMediaFlex1
                    : styles.socialMediaFlex
                }
              >
                <View style={styles.socialMediaInner}>
                  <SocialMediaCircle iconName={item.icon} />
                  <SmallText textColor="#8083A3">{item.iconText}</SmallText>
                </View>
                <SendButton />
              </View>
            ))}
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // flex: 1,
    // backgroundColor: "#fff",
    gap: vs(35),
    paddingLeft: 10,
    paddingRight: 10,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: s(10),
    paddingRight: s(10),
    marginTop: s(7),
  },
  socialMediaContainer: {
    width: "100%",
    gap: s(22),
    // backgroundColor: "red",
  },
  socialMediaWrapper: {
    gap: s(17),
    // backgroundColor: "red",
    backgroundColor: "#F5F5FA",
    borderRadius: 14,
    paddingTop: vs(26),
    paddingBottom: vs(10),
    paddingHorizontal: s(20),
  },
  socialMediaFlex1: {
    width: "100%",
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderBottomColor: "#E4E6E8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: vs(15),
  },
  socialMediaFlex: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: vs(15),
  },
  socialMediaInner: {
    gap: s(10),
    flexDirection: "row",
    alignItems: "center",
  },
  // socialMediaText: {
  //   fontWeight: 500,
  //   fontSize: s(12),
  //   lineHeight: s(18),
  //   color: "#8083A3",
  // },
  // socialMediaSubTitleText: {
  //   fontWeight: 600,
  //   fontSize: s(16),
  //   lineHeight: s(24),
  //   color: "#000000",
  // },
  // socialMediaTitleText: {
  //   fontWeight: 700,
  //   fontSize: s(30),
  //   lineHeight: s(36),
  //   color: "#000000",
  //   marginLeft: 10,
  // },
});
