import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ChatListItemStyles from "../styles/ChatListItemStyles";
import { db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const ChatHeaderLeft = ({ contactId }) => {
  const [chatContact, setChatContact] = useState();
  const navigation = useNavigation();
  useEffect(async () => {
    const docRefContact = doc(db, "users", contactId);
    const docSnapContact = await getDoc(docRefContact);
    setChatContact(docSnapContact?.data());
  }, []);

  // contact avatar ekle
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="md-arrow-back" size={32} color="black" />
      </TouchableOpacity>
      {
        <View>
          <TouchableOpacity style={ChatListItemStyles.imageContainer}>
            <Image
              alt="ProfilePhoto"
              style={[ChatListItemStyles.image,styles.headerImageWrapper]}
              source={{
                uri: chatContact?.photoURL
                  ? chatContact?.photoURL
                  : "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png",
              }}
            />
          </TouchableOpacity>
        </View>
      }
    </>
  );
};

export default ChatHeaderLeft;

const styles = StyleSheet.create({
  headerImageWrapper:{
    overflow: "hidden",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 20,
    height: 40,
    width: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.51,
    shadowRadius: 30,
    elevation: 8,
  }
});
