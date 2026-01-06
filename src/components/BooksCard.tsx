import { ImageBackground, StyleSheet, Text, View, TouchableHighlight, GestureResponderEvent } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import SubTitleText from './CustomTexts/SubTitleText';
import SmallText from './CustomTexts/SmallText';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import TitleText from './CustomTexts/TitleText';
import { Books, useDeleteBooks } from '../hooks/useGetBooks';
import { capitalizeFirstLetter, formatAmount } from '../utils/helperFunctions';

interface props {
  book: Books;
    onSelect: () => void;
}

const BooksCard = ({ book, onSelect }: props) => {
    
   
  return (
    <TouchableHighlight onPress={onSelect}>
      <ImageBackground
        source={{ uri: book.bookCover }}
        imageStyle={styles.image}
        style={styles.bookListContainer}
      >
        <View style={styles.overlay}>
          <View style={styles.topContainer}>
            <SmallText textColor="#fff">21-11-2026</SmallText>
            <View style={styles.iconWrapper}>
              <Feather name="edit-3" size={24} color="#f58686bb" />
              <MaterialIcons
                name="cancel"
                size={25}
                color="#f58686bb"
              />
            </View>
          </View>
          <View style={styles.middleContainer}>
            <TitleText fontWeight="700" textColor="#fff">
              {capitalizeFirstLetter(book.bookTitle)}
            </TitleText>
            <SmallText fontWeight="700" textColor="#fff">
              by {book.name_of_author}
            </SmallText>
          </View>
          <View style={styles.bottomContainer}>
            <SubTitleText fontWeight="700" textColor="#fff">
              {formatAmount(+book.bookPrice)}
            </SubTitleText>
            <SmallText textColor="#fff">{book.sellerEmail}</SmallText>
          </View>
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
}

export default BooksCard

const styles = StyleSheet.create({
  bookListContainer: {
    borderRadius: s(12),
    flexDirection: "row",
    height: vs(200),
        width: "100%",
    overflow: "hidden",
    justifyContent: "space-between"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: s(12),
  },
  overlay: {
    justifyContent: "space-between",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.40)",
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: vs(5),
        paddingHorizontal: s(10),
        // backgroundColor: "red"
  },
    middleContainer: {
        justifyContent: "center",
        paddingVertical: vs(5),
        paddingHorizontal: s(10),
        width: "100%",
        // backgroundColor: "red"
        // gap: vs(5)
  },
    bottomContainer: {
        paddingVertical: vs(5),
        paddingHorizontal: s(10),
        width: "100%",
        // backgroundColor: "red",
        gap: vs(3)
    },
    iconWrapper:{
        flexDirection: "row",
        gap: s(15)
    }
});