import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const SignInScreen = ({ navigation }) => {
  /*
  const SignInToApp = () => {
    signInWithEmailAndPassword(auth, email, password).then((response) => {
      dispatch(
        signIn({
          email: email,
          password: password,
        })
      );
      setloading(false);
    });
  };*/

  return (
    <View>
      <Text>SignInScreen</Text>
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
