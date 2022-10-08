import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatListItemStyles from "../styles/ChatListItemStyles";
import { Entypo,MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
const UploadingImageViewerScreen = () => {
  const navigation=useNavigation()
  const route=useRoute()
  const {image}=route?.params
  const handleShare = () => {
    console.log("handleShare",image);
 
  };

 
  /*
  const handleSaveProfile = async () => {
    setLoading(true);
    let newUrl = "";
    const oldUrl = userInfo.photoURL;
    if (imageChanged) {
      newUrl = await uploadImageAsync(userInfo.photoURL);
    }

    const docRef = doc(db, "users", user.id);
    await updateDoc(docRef, {
      ...userInfo,
      photoURL: newUrl != "" ? newUrl : oldUrl,
    })
      .then((response) => {
        dispatch(
          updateUser({ ...userInfo, photoURL: newUrl != "" ? newUrl : oldUrl })
        );
        alert("Update Successfull");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };

  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const fileRef = ref(storage, uuid.v4());
    const result = await uploadBytes(fileRef, blob);

    return await getDownloadURL(fileRef);
  }
*/

  return (
    <SafeAreaView style={styles.container}>
      <Image
        alt="ProfilePhoto"
        resizeMode="contain"
        style={ChatListItemStyles.image}
        source={{
          uri: image
                ? image
                : "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png",
        }}
      />
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareText}>Share</Text>
        <Entypo name="circle-with-plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButon} onPress={()=>navigation.goBack() }>
        <MaterialIcons name="cancel" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UploadingImageViewerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",

  },
  cancelButon:{
    position: "absolute",
    top:84,
    left: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  shareButton: {
    flexDirection: "row",
    backgroundColor: "orange",
    position: "absolute",
    bottom: 64,
    right: 32,
    width: 120,
    height: 40,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  shareText: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    marginRight: 8,
  }
});
