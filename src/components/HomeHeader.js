import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeHeader = () => {
  const navigation=useNavigation()

  return (
    <View style={styles.homeHeaderContainer}>
      <Text style={styles.title}>R-Talks</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <MaterialCommunityIcons
          name="account-settings"
          size={32}
          style={styles.accountIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    backgroundColor: "orange",
    height: 60,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  accountIcon: {
    color: "white",
  },
});
