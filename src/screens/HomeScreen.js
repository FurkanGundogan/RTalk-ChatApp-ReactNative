import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Open Contacts' onPress={()=>navigation.navigate("Contacts")}/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})