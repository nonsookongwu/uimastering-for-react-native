import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '../components/CustomSafeAreaView'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from './LoginScreen'

const SignUpScreen = () => {
    const navigate = useNavigation<NavigationProp>();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
              <Text>SignUpScreen</Text>
              <Button onPress={()=>navigate.navigate("login")} title='Login'/>
      </View>
    </CustomSafeAreaView>
  );
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gold",
        flex: 1
    }
})