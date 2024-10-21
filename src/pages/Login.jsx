import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../components/Button.jsx";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button size="large" onPress={() => navigation.navigate("register_pet_owner", { name: "Registro mascotero" })}>
        Comenzar
      </Button>
    </View>
  );
};

export default Login;
