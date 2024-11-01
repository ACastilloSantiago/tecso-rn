import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { ErrorMessage, useField } from "formik";
import { EyeIcon } from "../elements/EyeIcon";
import { colors } from "../../../assets/styles/styles";

export const Input = (props) => {
  const [field, meta, helpers] = useField(props);
  const errorStyle = meta.error && meta.touched ? styles.errorInput : {};
  const [showPassword, setShowPassword] = useState(false);

  const returnInput = () => {
    if (props.type === "password") {
      return (
        <View style={{ position: "relative", marginBottom: 12 }}>
          <View style={[{ position: "relative" }, errorStyle]}>
            <TextInput placeholderTextColor={meta.touched && !!meta.error ? colors.systemError : colors.brandNeutro01} style={[styles.input, errorStyle]} value={field.value || ""} {...props} secureTextEntry={!showPassword} onChangeText={helpers.setValue} onBlur={() => helpers.setTouched(true)} />
            <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)} style={styles.eyeButton}>
              <EyeIcon show={showPassword} error={!!errorStyle.borderColor} />
            </TouchableOpacity>
          </View>
          <ErrorMessage name={props.name} component={Text} style={styles.errorMessage} />
        </View>
      );
    } else if (props.type === "number") {
      return (
        <View style={{ position: "relative", marginBottom: 12 }}>
          <View style={[{ position: "relative" }, errorStyle]}>
            <TextInput
              placeholderTextColor={meta.touched && !!meta.error ? colors.systemError : colors.brandNeutro01}
              style={[styles.input, errorStyle]}
              value={field.value || ""}
              {...props}
              keyboardType="numeric"
              onChangeText={(e) => {
                console.log(e);

                   const numericValue = e.replace(/[^0-9]/g, "");
                   helpers.setValue(numericValue);
              }}
              onBlur={() => helpers.setTouched(true)}
            />
          </View>
          <ErrorMessage name={props.name} component={Text} style={styles.errorMessage} />
        </View>
      );
    } else {
      return (
        <View style={[styles.inputContainer, errorStyle]}>
          <TextInput placeholderTextColor={meta.touched && !!meta.error ? colors.systemError : colors.brandNeutro01} style={[props.type === "textarea" ? styles.textarea : styles.input, errorStyle]} value={field.value || ""} onChangeText={helpers.setValue} onBlur={() => helpers.setTouched(true)} multiline={props.type === "textarea"} {...props} />
          <ErrorMessage name={props.name} component={Text} style={styles.errorMessage} />
        </View>
      );
    }
  };
  return returnInput();
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
    position: "relative",
  },
  input: {
    fontSize: 16,
    height: 50,
    color: colors.brandPrimary01,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundLightmodeSecondary,
  },
  textarea: {
    height: 70,
    color: colors.brandPrimary01,
    borderWidth: 1,
    fontSize: 16,
    borderColor: "transparent",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundLightmodeSecondary,
    textAlignVertical: "top",
  },
  eyeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorInput: {
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    paddingLeft: 16,
  },
});
