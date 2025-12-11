import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { SelectCircleIcon } from "../assets/SVGIcons";
import SmallText from "./CustomTexts/SmallText";

interface Props{
    isSelected: boolean;
    label: string;
    icon: ReactNode;
    onSelect: () => void;
}

const PaymentCard = ({ isSelected, label, icon, onSelect }: Props) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View
        style={[
          styles.innerContainer,
          isSelected && {
            borderWidth: s(2),
            borderColor: "#FF7622",
            backgroundColor: "#fff",
          },
        ]}
      >
        {icon}
      </View>
      {isSelected && <SelectCircleIcon style={styles.circle} />}
      <SmallText fontWeight="400">{label}</SmallText>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    width: s(85),
    height: vs(93),
    alignItems: "center",
    gap: vs(4),
  },
  innerContainer: {
    width: "100%",
    height: vs(72),
    backgroundColor: "#F0F5FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(10),
  },
    circle: {
        position: "absolute",
        top: s(-8),
        right: s(0)

        
  }
});
