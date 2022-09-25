import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HeaderBackButton } from "@react-navigation/elements";
const ContactListScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: (props) => (
        <HeaderBackButton
          {...props}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      ),
    });
  });
  return (
    <View>
      <Text>ContactListScreen</Text>
      <Button title="Go Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({});
