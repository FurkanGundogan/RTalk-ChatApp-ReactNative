import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
const MessageInput = ({input,setInput,sendMessage}) => {
  return (
    <View style={styles.footer}>
    <TextInput
      placeholder="Message..."
      style={styles.textInput}
      value={input}
      onChangeText={(text) => setInput(text)}
    />
    <TouchableOpacity activeOpacity={0.5} onPress={sendMessage} style={styles.button}>
      <Ionicons name="ios-send-outline" size={24} color="white" />
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
        height: 50,
        flex: 1,
        marginRight: 5,
        borderColor: "transparent",
        backgroundColor: "white",
        padding: 10,
        color: "black",
        borderRadius: 25,
        fontSize:16
      },
      button:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange",
        borderRadius:25,
        

      }
})