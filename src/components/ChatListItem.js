import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setChatList, setMessages } from "../utils/store";
import { db } from "../utils/firebase";

const ChatListItem = ({ item }) => {
  const chatMessagesList = useSelector((state) => state?.messages).filter(
    (listItem) => listItem?.chatId === item?.id
  );
  // Filter messages from redux according chatId

  const dispatch = useDispatch();

  // Set messages of this chat according chatId
  useEffect(() => {
    const q = query(
      collection(db, `messages`),
      where("chatId", "==", item?.id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let allItems = [];
      querySnapshot.forEach((doc) => {
        allItems.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      dispatch(setMessages(allItems));
 
    });

    () => unsubscribe();
  }, []);
  return (
    <View>
      <Text>ChatList Item</Text>
    </View>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({});
