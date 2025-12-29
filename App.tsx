import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MeditationScreen from './src/screens/MeditationScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import StylishLogoScreen from './src/screens/StylishLogoScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainStackNavigator from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabs';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <IntroScreen /> */}
      {/* <ContactUsScreen /> */}
      {/* <MeditationScreen /> */}
      {/* <PaymentScreen/> */}
      {/* <StylishLogoScreen/> */}
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <MyTabs />
        {/* <MainStackNavigator/> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
