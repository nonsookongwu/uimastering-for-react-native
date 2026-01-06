import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import useGetBooks, { Books, useAddBook, useDeleteBooks } from "../hooks/useGetBooks";
import TitleText from "../components/CustomTexts/TitleText";
import { s, vs } from "react-native-size-matters";
import CustomButton from "../components/CustomButton";
import BooksCard from "../components/BooksCard";
import BookModal from "./BookModal";
import SmallText from "../components/CustomTexts/SmallText";
import { useFocusEffect } from "@react-navigation/native";

const BooksAPIScreen = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState(-1);
    const { data, error, isLoading, isFetching, refetch } = useGetBooks();
    const { mutate, isPending } = useAddBook({
      name_of_author: "Korina Villanueva",
      bookCover:
        "https://www.shutterstock.com/image-vector/vector-vintage-book-cover-exquisite-600nw-2659348439.jpg",
      bookTitle: "The Story of a lonely Boy",
      bookPrice: "700.18",
      sellerEmail: "Korina.Villanueva@gmail.com",
      id: `temp-${Date.now()}`,
      createdAt: new Date().toISOString(),
    });

  //   console.log(JSON.stringify(data, null, 3))
  // console.log(error);
  const handleSelectBook = (index: number) => {
    setSelectedBooks(index);
    handleCloseModal();
  };
  const handleAddBook = () => {
   mutate()
  };

  const handleCloseModal = () => {
    setisModalOpen((prev) => !prev);
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     refetch();
  //   }, [refetch])
    // );
    


  return (
    <>
      <BookModal
        isVisible={isModalOpen}
        book={data?.[selectedBooks]}
        onClose={handleCloseModal}
      />

      <CustomSafeAreaView>
        <View style={styles.container}>
          <TitleText>Books</TitleText>
          <View style={styles.buttonContainer}>
            <CustomButton
              bgColor="#000"
              buttonText="Add"
                          buttonFn={handleAddBook}
                          loading={isPending}
            />
          </View>
          {isLoading ? (
            <View style={styles.body}>
              <ActivityIndicator />
            </View>
          ) : !isLoading && error ? (
            <SmallText textColor="#960a0aba">{error.message}</SmallText>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <BooksCard
                  onSelect={() => handleSelectBook(index)}
                  book={item}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: vs(40),
                gap: vs(10),
              }}
              refreshControl={
                <RefreshControl refreshing={isFetching} onRefresh={refetch} />
              }
            />
          )}
          {/* {data && (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <BooksCard onSelect={() => handleSelectBook(index)} book={item} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: vs(40),
          gap: vs(10),
        }}
      />
    )} */}
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default BooksAPIScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(20),
    flex: 1,
    paddingHorizontal: s(10),
    gap: vs(10),
  },
  buttonContainer: {
    height: vs(45),
    width: "50%",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red"
  },
});
