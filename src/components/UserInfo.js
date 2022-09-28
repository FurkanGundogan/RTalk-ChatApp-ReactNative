import { ActivityIndicator, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { updateUser } from "../utils/store";
import SignStyles from "../styles/SignStyles";
import UserSettingsStyles from "../styles/UserSettingsStyles";

const UserInfo = () => {
  const dispatch=useDispatch()
  const user = useSelector(state => state.auth.user);
  const [userInfo, setuserInfo] = useState(user);
  console.log("userinfo:",userInfo)
  const [loading, setLoading] = useState(false);
  const handleChange = (e, name) => {
    setuserInfo((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };

  const handleSaveProfile = async () => {
    setLoading(true)
    console.log("save:",userInfo)
    const docRef = doc(db, 'users', user.id);
    await updateDoc(docRef, {
      ...userInfo,
      photoURL: "",
    }).then(response => {
      dispatch(updateUser({...userInfo, photoURL: ""}));
      alert('Update Successfull')
      setLoading(false)
    }).catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };


  return (
    <View>
     
      <TextInput
        style={[SignStyles.textInput,loading && UserSettingsStyles.disableButton]}
        placeholder="First Name"
        value={userInfo?.firstName}
        onChangeText={(e) => handleChange(e, "firstName")}
      />
      <TextInput
        style={[SignStyles.textInput,loading && UserSettingsStyles.disableButton]}
        placeholder="Last Name"
        value={userInfo?.lastName}
        onChangeText={(e) => handleChange(e, "lastName")}
      />
      <TouchableOpacity
        style={{
          ...SignStyles.submitbutton,
          ...(loading ? SignStyles.disableButton : SignStyles.enableButton),
        }}
        onPress={handleSaveProfile}
        disabled={loading}
      >
        <Text style={SignStyles.buttonText}>SAVE</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" style={UserSettingsStyles.indicator} />}
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({});
