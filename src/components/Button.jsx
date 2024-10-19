import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import { colors } from "../../assets/styles/styles";

export const Button = ({ children = "", onPress = () => {}, size = "small", variant = "default" }) => {
  const buttonStyles = [styles.button];
  const buttonTextStyles = [styles.buttonText];
  const activeOpacity = variant === "default" ? 0.6 : 1;

  // Definir tamaño
  if (size === "large") {
    buttonStyles.push(styles.large);
  } else if (size === "small") {
    buttonStyles.push(styles.small);
  }

  // Definir variante
  if (variant === "lineal") {
    buttonStyles.push(styles.lineal);
    buttonTextStyles.push(styles.buttonTextLineal);
  } else {
    buttonStyles.push(styles.default);
    buttonTextStyles.push(styles.buttonTextDefault);
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} activeOpacity={activeOpacity}>
      <View style={styles.buttonContent}>
        <Text style={buttonTextStyles}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Define PropTypes
Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  variant: PropTypes.oneOf(["default", "lineal"]),
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  large: {
    width: 328,
    height: 50,
  },
  small: {
    width: 198,
    height: 50,
  },
  lineal: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.brandPrimary01,
  },
  default: {
    backgroundColor: colors.brandPrimary01,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextLineal: {
    color: colors.brandPrimary01,
    fontSize: 16,
  },
  buttonTextDefault: {
    color: colors.backgroundLightmodePrimary,
    fontSize: 16,
  },
});
