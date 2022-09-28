import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeHeaderStyles from "../styles/HomeHeaderStyles";

const HomeHeader = () => {
  const navigation=useNavigation()

  return (
    <View style={HomeHeaderStyles.homeHeaderContainer}>
      <Text style={HomeHeaderStyles.title}>R-Talks</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <MaterialCommunityIcons
          name="account-settings"
          size={32}
          style={HomeHeaderStyles.accountIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
