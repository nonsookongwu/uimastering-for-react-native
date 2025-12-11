import { StyleSheet} from 'react-native'
import React, { PropsWithChildren } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



const CustomSafeAreaView = ({children}:PropsWithChildren) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

export default CustomSafeAreaView

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff"
      }
})