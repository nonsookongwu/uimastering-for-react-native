import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';

const Avatar = () => {
    return (
      <View >
        <Image
          source={{
            uri: "http://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
          }}
          style={styles.image}
        />
      </View>
    );
}

export default Avatar

const styles = StyleSheet.create({
    image: {
        height: s(40),
        width: s(40),
        borderRadius: s(20)
    }
})