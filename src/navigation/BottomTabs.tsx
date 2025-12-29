import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactUsScreen from "../screens/ContactUsScreen";
import MeditationScreen from "../screens/MeditationScreen";
import LoginScreen from "../screens/LoginScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="contact"
        component={ContactUsScreen}
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name="contacts" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={MeditationScreen}
        options={{
          title: "Meditation",
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name="meditation"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;