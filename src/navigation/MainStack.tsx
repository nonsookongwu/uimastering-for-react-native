import { createStackNavigator } from "@react-navigation/stack"
import ForgetPassword from "../screens/ForgetPassword"
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/Dashboard";

export type AuthStackParamList = {
  login: undefined;
    signup: undefined;
  forgetPassword: undefined;
    dashboard: { email: string; password: string};
};

const Stack = createStackNavigator<AuthStackParamList>();

function MainStackNavigator() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="signup"
      >
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="forgetPassword"
          component={ForgetPassword}
          options={{
            title: "Forget Password",
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{
            title: "Create Account",
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
          }}
        />
      </Stack.Navigator>
    );
}

export default MainStackNavigator;