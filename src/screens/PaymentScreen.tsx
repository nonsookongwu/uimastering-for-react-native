import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import {
    CashIcon,
    MastercardIcon,
    PaypalIcon,
    VisaIcon
} from "../assets/SVGIcons";
import BackButton from "../components/BackButton";
import CardComponent from "../components/CardComponent";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import SectionTitleText from "../components/CustomTexts/SectionTitleText";
import SmallText from "../components/CustomTexts/SmallText";
import PaymentCard from "../components/PaymentCard";
import SubTitleText from "../components/CustomTexts/SubTitleText";
import TitleText from "../components/CustomTexts/TitleText";
import CustomButton from "../components/CustomButton";

const PaymentScreen = () => {
  const [selected, setSelected] = useState(0);

  const paymentMethods = [
    { id: "1", label: "Cash", icon: <CashIcon /> },
    { id: "2", label: "Visa", icon: <VisaIcon /> },
    { id: "3", label: "Mastercard", icon: <MastercardIcon /> },
    { id: "4", label: "Paypal", icon: <PaypalIcon /> },
  ];
  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <CustomSafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <SectionTitleText>Payment</SectionTitleText>
        </View>
        <View>
          <FlatList
            data={paymentMethods}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <PaymentCard
                icon={item.icon}
                isSelected={index === selected}
                label={item.label}
                onSelect={() => handleSelect(index)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: s(16),
              paddingVertical: vs(10),
              paddingHorizontal: s(15),
            }}
          />
        </View>
        <View style={styles.screenBody}>
          <View style={styles.cardButton}>
            <CardComponent />
            <TouchableOpacity style={styles.bigButton}>
              <AntDesign name="plus" size={24} color="#FF7622" />
              <SmallText fontWeight="700" textColor="#FF7622">
                ADD NEW
              </SmallText>
            </TouchableOpacity>
          </View>
          <View style={styles.amountWrapper}>
            <View style={styles.totalFlex}>
              <SubTitleText>TOTAL:</SubTitleText>
              <TitleText>$96</TitleText>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton bgColor="#FF7622" buttonText="PAY & CONFIRM" />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(24),
    gap: vs(20),
    flex: 1,
    paddingBottom: vs(30),
  },
  header: {
    flexDirection: "row",
    gap: s(18),
    alignItems: "center",
    marginBottom: s(15),
  },

  paymentMethods: {
    flexDirection: "row",
    gap: s(18),
    alignItems: "center",
  },
  screenBody: {
    flex: 1,
    paddingHorizontal: s(15),
    gap: vs(70),
  },
  cardButton: {
    gap: vs(15),
  },

  bigButton: {
    height: vs(62),
    borderRadius: s(10),
    flexDirection: "row",
    gap: s(5),
    borderWidth: s(2),
    borderColor: "#F0F5FA",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  amountWrapper: {
    gap: vs(22),
  },
  totalFlex: {
    gap: s(14),
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    height: vs(62),
    width: "100%",
  },
});
