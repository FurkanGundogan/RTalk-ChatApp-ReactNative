import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeHeader';
const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
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