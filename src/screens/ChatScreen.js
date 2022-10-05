import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ChatHeaderLeft from "../components/ChatHeaderLeft";
import ChatItem from "../components/ChatItem";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import StartNewConversationArea from "../components/StartNewConversationArea";
import MessageInput from "../components/MessageInput";
import { db } from "../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const ChatScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const route = useRoute();
  const { messageId } = route?.params;
  const chatMessagesList = useSelector((state) => state?.messages[messageId]);
  console.log("msgid", messageId);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => <ChatHeaderLeft />,
    });
  });
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    //handle create chat / send msg
    if (chatMessagesList === undefined) {
      // handle create chat + send msg
    } else {
      // handle send msg
      const docRef = await addDoc(
        collection(db, `chats/${messageId}/messages`),
        {
          timestamp: serverTimestamp(),
          type: "text",
          text: input,
          senderId: user.id,
        }
      );
    }
    setInput("");
  };
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
      <MessageInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </>
  );
};

export default ChatScreen;
