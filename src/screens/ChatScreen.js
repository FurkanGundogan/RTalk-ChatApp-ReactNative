import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import ChatHeaderLeft from "../components/ChatHeaderLeft";
import ChatItem from "../components/ChatItem";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import StartNewConversationArea from "../components/StartNewConversationArea";
import { SimpleLineIcons } from "@expo/vector-icons";
const ChatScreen = ({ navigation }) => {
  const route = useRoute();
  const { messageId } = route?.params;
  const chatMessagesList = useSelector((state) => state?.messages[messageId]);
  console.log("list:", chatMessagesList);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <ChatHeaderLeft />,
    });
  });

  return (
    <>
      {chatMessagesList === undefined ? (
        <StartNewConversationArea />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={chatMessagesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ChatItem item={item} index={index} />
          )}
        />
      )}
      <View style={styles.footer}>
        <TextInput
          placeholder="Message..."
          style={styles.textInput}
          //value={input}
          //onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity activeOpacity={0.5}>
          <SimpleLineIcons name="arrow-right" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ChatScreen;

const styles=StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 5,
    borderColor: "transparent",
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "gray",
    borderRadius: 30,
  },
})