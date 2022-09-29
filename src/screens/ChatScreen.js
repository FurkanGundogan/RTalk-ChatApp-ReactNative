import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import ChatHeaderLeft from "../components/ChatHeaderLeft";
import ChatItem from "../components/ChatItem";
const ChatScreen = ({ navigation }) => {
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
      style={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <ChatItem item={item} index={index} />}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
