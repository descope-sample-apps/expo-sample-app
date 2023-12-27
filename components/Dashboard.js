import React from "react";
import { Text, Button } from "react-native";
import { appStyles } from "../styles/Styles";

const Dashboard = ({ userInfo, onLogout }) => (
  <>
    <Text style={appStyles.userInfo}>
      Welcome, {userInfo ? userInfo.email : "User"}!
    </Text>
    <Button title="Logout" onPress={() => onLogout()} color="#841584" />
  </>
);

export default Dashboard;
