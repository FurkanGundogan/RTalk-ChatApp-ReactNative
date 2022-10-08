import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../components/HomeHeader";
import { useNavigation, useRoute } from "@react-navigation/native";

const StoriesScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader/>
    </SafeAreaView>
  );
};

export default StoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
