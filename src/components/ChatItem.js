import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatItem = ({item}) => {

  return (
    <View>
      <Text>{item?.data?.text}</Text>
    </View>
  )
}

export default ChatItem

const styles = StyleSheet.create({})