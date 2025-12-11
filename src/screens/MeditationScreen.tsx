import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import { s, vs } from "react-native-size-matters";
import SectionTitleText from "../components/CustomTexts/SectionTitleText";
import TitleText from "../components/CustomTexts/TitleText";
import SubTitleText from "../components/CustomTexts/SubTitleText";
import SmallText from "../components/CustomTexts/SmallText";
import MeditationCard from "../components/MeditationCard";
import { dummyData } from "../data/data";

const MeditationScreen = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleSelectButton = (index: number) => {
    setSelectedButton(index);
  };

  const buttonArr = ["Live", "Recorded"];

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View>
          <TitleText>Meditations</TitleText>
          <SubTitleText>Pause the world, Play your peace.</SubTitleText>
        </View>
        <View style={styles.buttonHolder}>
          {buttonArr.map((button, index) => {
            const isActive = selectedButton === index;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  {
                    backgroundColor: isActive ? "#75563B" : "",
                  },
                ]}
                onPress={() => handleSelectButton(index)}
              >
                <SubTitleText textColor={isActive ? "#fff" : "#000"}>
                  {button}
                </SubTitleText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* <MeditationCard /> */}
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MeditationCard
              cardText={item.title}
              cardTime={item.date}
              imageUri={item.image}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            gap: s(10),
            justifyContent: "space-between",
          }}
          contentContainerStyle={{
              paddingBottom: vs(60),
              gap: vs(10)
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default MeditationScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(24),
    paddingHorizontal: s(10),
    gap: vs(20),
    flex: 1,
  },
  buttonHolder: {
    width: "100%",
    height: vs(40),
    flexDirection: "row",
    // backgroundColor: "red",
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    gap: 10,
    padding: s(3),
  },
  button: {
    flex: 1,
    height: "100%",
    // backgroundColor: "#75563B",
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#75563B",
    alignItems: "center",
    justifyContent: "center",
  },
});
