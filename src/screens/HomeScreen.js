import { Button, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { useDispatch, useSelector } from "react-redux";
import { setChatList } from "../utils/store";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";
const HomeScreen = ({ navigation }) => {
  const chatList = useSelector((state) => state?.chatList);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, `chats`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allItems = [];
      querySnapshot.forEach((doc) => {
        allItems.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      dispatch(setChatList(allItems));
    });

    () => unsubscribe();
  }, []);

  console.log("Chat List: ", chatList);
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <Text>HomeScreen</Text>
      <Text>{chatList?.length}</Text>
      <Button
        title="Open Contacts"
        onPress={() => navigation.navigate("Contacts")}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
