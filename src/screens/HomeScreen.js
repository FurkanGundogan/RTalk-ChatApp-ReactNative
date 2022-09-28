import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { logOut } from '../utils/store';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeHeader from '../components/HomeHeader';
const HomeScreen = ({navigation}) => {
  const dispatch=useDispatch()
  const logout = async () => {
    dispatch(logOut());
    await AsyncStorage.removeItem("@user");
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
      <Text>HomeScreen</Text>
      <Button title='Open Contacts' onPress={()=>navigation.navigate("Contacts")}/>
      <Button title='Logout' onPress={logout}/>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})