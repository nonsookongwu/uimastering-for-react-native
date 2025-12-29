import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NavigationProp } from "./LoginScreen";
import { AuthStackParamList } from "../navigation/MainStack";

type DashboardRouteProp = RouteProp<AuthStackParamList, "dashboard">;

const DashboardScreen = () => {
    const navigate = useNavigation<NavigationProp>();
    
    const { name, params } = useRoute<DashboardRouteProp>();
   
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
              <Text>{`email is ${params?.email}`}</Text>
              <Text>{`password is ${params?.password}`}</Text>
        <Button onPress={() => navigate.navigate("login")} title="Log out" />
      </View>
    </CustomSafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    flex: 1,
  },
});
