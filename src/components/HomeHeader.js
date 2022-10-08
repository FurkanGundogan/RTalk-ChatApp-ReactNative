import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeHeaderStyles from "../styles/HomeHeaderStyles";
import Tabs from "./Tabs";

const HomeHeader = () => {
  const navigation=useNavigation()

  return (
    <>
    <View style={HomeHeaderStyles.homeHeaderContainer}>
      <View style={HomeHeaderStyles.headerTop}>
      <Text style={HomeHeaderStyles.title}>R-Talks</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <MaterialCommunityIcons
          name="account-settings"
          size={32}
          style={HomeHeaderStyles.accountIcon}
        />
      </TouchableOpacity>
      </View>
      <Tabs/>
    </View>
    
    </>
  );
};

export default HomeHeader;
