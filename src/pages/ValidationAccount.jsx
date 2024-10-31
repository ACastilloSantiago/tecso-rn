import { View, Text, StyleSheet } from "react-native";
import validation_email from "../../assets/images/process_email/image_validation_email.jpg";
import ScreenPostCreate from "../components/ScreenPostCreate/ScreenPostCreate";
import { Button } from "../components";
import { colors } from "../../assets/styles/styles";

const ValidationAccount = () => {
  return (
    <ScreenPostCreate image={validation_email} title="Te enviamos un correo!" classImg="mb4">
      <View style={styles.textContainer}>
        <Text style={styles.text}>Revisa tu correo, te va a llegar un mensaje de validación y deberás confirmar tu cuenta para finalizar con el registro.</Text>
        <Text style={styles.text}>*Recordá revisar en tu casilla de Spam o de Correo no deseado, a veces llega ahí.</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log()}>Abrir correo</Button>
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
    // textAlign: "center",
    marginBottom: 8,
    color: colors.brandNeutro01,
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default ValidationAccount;
