import React from "react";
import { Text, Button } from "react-native";
import { appStyles } from "../styles/Styles";

const LoginScreen = ({ onLogin, request }) => (
  <>
    <Text style={appStyles.title}>Expo + Descope Sample App</Text>
    <Button
      disabled={!request}
      title="Login"
      onPress={() => onLogin()}
      color="#841584"
    />
  </>
);

export default LoginScreen;
