import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MeditationScreen from './src/screens/MeditationScreen';
import PaymentScreen from './src/screens/PaymentScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <IntroScreen /> */}
      {/* <ContactUsScreen /> */}
      {/* <MeditationScreen /> */}
      <PaymentScreen/>
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
