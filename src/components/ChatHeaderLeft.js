import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeaderBackButton } from "@react-navigation/elements";
const ChatHeaderLeft = (props) => {
    const navigation=useNavigation()
  return (
    <HeaderBackButton
          {...props}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
  )
}

export default ChatHeaderLeft

const styles = StyleSheet.create({})