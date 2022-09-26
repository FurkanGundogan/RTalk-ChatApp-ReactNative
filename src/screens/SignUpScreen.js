import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import SignStyles from "../styles/SignStyles";
const SignUpScreen = ({ navigation }) => {
  const initialState = {
    email: "furkangundogan14@outlook.com",
    password: "123123",
    confirmPassword: "123123",
    firstName: "Furkan",
    lastName: "Gundogan",
  };
  const [userInfo, setuserInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e, name) => {
    setuserInfo((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  const submitUser = async () => {
    handleSignUp(userInfo);
    //const jsonValue = JSON.stringify(userInfo);
    //await AsyncStorage.setItem('@user', jsonValue);
    //getUser();
  };

  const handleSignUp = (data) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      async (response) => {
        await setDoc(doc(db, `users`, response.user.uid), {
          email: response.user.email,
          photoURL: "",
          id: response.user.uid,
          firstName: data.firstName,
          lastName: data.lastName,
        });
        setLoading(false);
        alert("Account Created");
        navigation.navigate("SignIn");
      }
    );
  };

  return (
    <View style={Signstyles.container}>
      {loading && <ActivityIndicator size="large" style={Signstyles.loading} />}
      <Text style={Signstyles.APPtitle}>R-TALKS</Text>
      <Text style={Signstyles.title}>SIGN UP</Text>
      <TextInput
        style={Signstyles.textInput}
        placeholder="Firstname"
        value={userInfo?.firstName}
        onChangeText={(e) => handleChange(e, "firstname")}
      />
      <TextInput
        style={Signstyles.textInput}
        placeholder="Lastname"
        value={userInfo?.lastName}
        onChangeText={(e) => handleChange(e, "lastname")}
      />
      <TextInput
        style={Signstyles.textInput}
        placeholder="Email"
        value={userInfo?.email}
        onChangeText={(e) => handleChange(e, "email")}
      />
      <TextInput
        style={Signstyles.textInput}
        placeholder="Password"
        secureTextEntry
        value={userInfo?.password}
        onChangeText={(e) => handleChange(e, "password")}
      />
      <TextInput
        style={Signstyles.textInput}
        placeholder="Confirm Password"
        secureTextEntry
        value={userInfo?.confirmPassword}
        onChangeText={(e) => handleChange(e, "confirmPassword")}
      />
      <TouchableOpacity
        style={{
          ...Signstyles.submitbutton,
          ...(loading ? Signstyles.disableButton : Signstyles.enableButton),
        }}
        onPress={submitUser}
        disabled={loading}
      >
        <Text style={Signstyles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={Signstyles.askText}>Already have an account?</Text>
      <TouchableOpacity
        disabled={loading}
        style={{
          ...Signstyles.submitbutton,
          ...(loading ? Signstyles.disableButton : Signstyles.enableButton),
        }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={Signstyles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

