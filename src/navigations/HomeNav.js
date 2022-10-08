import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ContactListScreen from "../screens/ContactListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShareMapScreen from "../screens/ShareMapScreen";
const Stack = createNativeStackNavigator();
const HomeNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={ContactListScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ShareMap" component={ShareMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
