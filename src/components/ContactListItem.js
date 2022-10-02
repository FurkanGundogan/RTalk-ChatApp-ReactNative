import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactListItem = ({item}) => {
    console.log("item:",item)
  return (
    <View>
      <Text>{item?.data?.firstName}</Text>
    </View>
  )
}

export default ContactListItem

const styles = StyleSheet.create({})