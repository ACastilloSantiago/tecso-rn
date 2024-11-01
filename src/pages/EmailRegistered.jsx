import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import email_registrado from "../../assets/images/process_email/image_email_registrado.jpg";

import Button from "../components/Button";
import { colors } from "../../assets/styles/styles";

const EmailRegistered = () => {
  const navigation = useNavigation();

  return (
    <ScreenPostCreate image={email_registrado} title="Este e-mail ya se encuentra registrado">
      <View style={styles.textContainer}>
        <Text style={styles.text}>Si no recordás tu contraseña, podés cambiarla desde el login ingresando en el enlace “Olvidé mi contraseña”.</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate("Login")}>Ir al login</Button>
        </View>
      </View>
    </ScreenPostCreate>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: colors.brandNeutro01,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default EmailRegistered;
