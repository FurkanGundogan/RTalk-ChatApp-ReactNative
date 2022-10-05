import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from "@expo/vector-icons";
const MessageInput = ({input,setInput,sendMessage}) => {
  return (
    <View style={styles.footer}>
    <TextInput
      placeholder="Message..."
      style={styles.textInput}
      value={input}
      onChangeText={(text) => setInput(text)}
    />
    <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
      <SimpleLineIcons name="arrow-right" size={24} color="blue" />
    </TouchableOpacity>
  </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({
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