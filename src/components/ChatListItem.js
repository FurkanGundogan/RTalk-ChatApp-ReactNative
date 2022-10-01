import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  console.log("ITEM:", chatMessagesList?.[0]);
  /*
    chatMessagesList[0]: {
    "chatId": "6j0XgLCAV7YDpNu4iDhn",
    "messageList":[id,data]
  }
  */
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
    <TouchableOpacity style={styles.chatListItemWrapper}>
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          alt="ProfilePhoto"
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
          }}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Statham Aadadasdasdasdkins</Text>
        <Text style={styles.lastMsg}>Last Message</Text>
      </View>
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>14:30</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  chatListItemWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 16,
    height: 60,
    width: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleWrapper: {
    marginLeft: 16,
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.2,
  },
  lastMsg: {
    color: "gray",
    fontSize: 12,
    fontWeight: "400",
  },
  dateWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
  dateText: {
    color: "gray",
    paddingRight: 8,
    fontSize: 12,
    fontWeight: "600",
  },
});
