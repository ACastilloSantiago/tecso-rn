import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import success_register from "../../assets/images/process_email/image_succes_register.jpg";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../assets/styles/styles";
import { Button } from "../components";

const SuccesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenPostCreate image={success_register} title="¡Que bueno que estés acá!">
      <View style={styles.textContainer}>
        <Text style={styles.text}>¡Listo ya! Ya puedes empezar a usar tu cuenta.</Text>
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

export default SuccesScreen;
