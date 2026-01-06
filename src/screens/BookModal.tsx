import { ActivityIndicator, Button, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Books, useDeleteBooks } from '../hooks/useGetBooks'
import CustomSafeAreaView from '../components/CustomSafeAreaView';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props{
    book: Books | undefined;
    isVisible: boolean;
    onClose: ()=> void
}

const BookModal = ({ book, isVisible, onClose }: Props) => {
    if (!book) return null;
    const { mutate, isPending } = useDeleteBooks({ book, onCloseModal: onClose })
    
    console.log(JSON.stringify(book, null, 3));
    
        const handleDeleteBook = async () => {
          
          mutate();
        };
    return (
      <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <Text>{book?.bookTitle}</Text>
          <Button title="Close" onPress={onClose} />
         {isPending ? <ActivityIndicator/> : <Button title="Delete Book" onPress={handleDeleteBook} />}
        </View>
      </Modal>
    );
}

export default BookModal

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})