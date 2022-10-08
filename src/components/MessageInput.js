import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Octicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import EmojiModal from "react-native-emoji-modal";

const MessageInput = ({ input, setInput, sendMessage }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={show ? styles.emojiShowFooter : styles.footer}>
        {show && (
          <View style={styles.emojiModalWrapper}>
            <EmojiModal
              emojiSize={42}
              containerStyle={styles.emojiModal}
              onEmojiSelected={(emoji) => {
                setInput(input + " " + emoji);
              }}
              onPressOutside={() => setShow(!show)}
            />
          </View>
        )}
        <View style={styles.textAreaWrapper}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setShow(!show);
            }}
            activeOpacity={0.5}
            style={[
              styles.smileybutton,
              { backgroundColor: show ? "orange" : "gray" },
            ]}
          >
            <Octicons name="smiley" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            placeholder="Message..."
            style={styles.textInput}
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <TouchableOpacity
            onPress={() => setShow(!show)}
            activeOpacity={0.5}
            style={styles.locationbutton}
          >
            <MaterialIcons name="location-on" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            sendMessage();
            setShow(false);
          }}
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
    padding: 8,
    backgroundColor: "#dbdad7",
    borderTopColor: "white",
    borderTopWidth: 1,
  },
  emojiShowFooter: {
    flexDirection: "row",
    width: "100%",
    padding: 8,
    backgroundColor: "#dbdad7",
    borderTopColor: "white",
    borderTopWidth: 1,
    height: 386,
    alignItems: "flex-start",
  },
  emojiModalWrapper: {
    position: "absolute",
    bottom: 4,
    left: 8,
    width: "100%",
  },
  emojiModal: {
    borderRadius: 0,
    width: "100%",
  },
  textInput: {
    color: "black",
    fontSize: 20,
    flex: 1,

    alignItems: "center",
  },
  textAreaWrapper: {
    flexDirection: "row",
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
  smileybutton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
    top: 3,
  },
  locationbutton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 8,
    top: 2,
  },
});
