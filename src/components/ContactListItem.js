import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ChatListItemStyles from "../styles/ChatListItemStyles";

const ContactListItem = ({ item }) => {
  console.log("item:", item?.data?.firstName);
  return (
    <TouchableOpacity style={ChatListItemStyles.chatListItemWrapper}>
      <TouchableOpacity style={ChatListItemStyles.imageContainer}>
        <Image
          alt="ProfilePhoto"
          style={ChatListItemStyles.image}
          source={{
            uri: item?.data?.photoURL
              ? item?.data?.photoURL
              : "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png",
          }}
        />
      </TouchableOpacity>
      <View style={ChatListItemStyles.titleWrapper}>
        <Text style={ChatListItemStyles.title}>
          {item?.data && item?.data?.firstName + " " + item?.data?.lastName}
        </Text>
        <Text style={ChatListItemStyles.lastMsg}>{item?.data?.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({});
