import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { logOut } from '../utils/store';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux';
const ProfileScreen = () => {
    const dispatch=useDispatch()
    const logout = async () => {
      dispatch(logOut());
      await AsyncStorage.removeItem("@user");
    };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Logout' onPress={logout}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})