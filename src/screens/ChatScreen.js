import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import ChatHeaderLeft from "../components/ChatHeaderLeft";
import ChatItem from "../components/ChatItem";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
const ChatScreen = ({ navigation }) => {
  const route=useRoute()
  const {messageId} = route?.params
  const chatMessagesList = useSelector((state) => state?.messages[messageId])
 
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <ChatHeaderLeft />,
    });
  });

  const data = [
    {
      id: 0,
      msg: "abc",
    },
    {
      id: 1,
      msg: "abc",
    },
    {
      id: 2,
      msg: "abc",
    },
  ];

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={chatMessagesList}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <ChatItem item={item} index={index} />}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
