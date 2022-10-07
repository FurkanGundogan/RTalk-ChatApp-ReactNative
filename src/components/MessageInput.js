import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import EmojiModal from 'react-native-emoji-modal';

const MessageInput = ({ input, setInput, sendMessage }) => {
  const [show, setShow] = useState(false);
  const onClick = (emoji) => {
    console.log(emoji);
  };
  return (
    <>
    {
      show &&
      <View style={{position:"absolute"}}>
      <EmojiModal onEmojiSelected={(emoji) => {setInput(input+" "+emoji)}} />
      </View>
    }
    <View style={styles.footer}>
     
      <TextInput
        placeholder="Message..."
        style={styles.textInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />

      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>click here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={sendMessage}
        style={styles.button}
      >
        <Ionicons name="ios-send-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
    </>
  
  );
};

export default MessageInput;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: "#dbdad7",
    borderTopColor: "white",
    borderTopWidth: 1,
  },
  textInput: {
    bottom: 0,
    height: 50,
    flex: 1,
    marginRight: 5,
    borderColor: "transparent",
    backgroundColor: "white",
    padding: 10,
    color: "black",
    borderRadius: 25,
    fontSize: 16,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 25,
  },
});
