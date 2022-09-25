import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HeaderBackButton } from "@react-navigation/elements";
const ChatScreen = ({ navigation }) => {
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
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
