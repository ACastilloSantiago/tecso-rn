import React, { useRef, useState } from "react";
import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { RegisterPet, SendEmail } from "../../api/setupAxios";
import Icon from "react-native-vector-icons/Ionicons";

const FormPetOwner = ({ navigation }) => {
  const refForm = useRef(null);
  const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });
  const [borderDanger, setBorderDanger] = useState({ name: {}, lastname: {}, email: {}, password: {}, confirm_password: {} });

  const valueManagement = (values) => {
    const errors = {};
    let classDanger = { borderWidth: 1, borderColor: "red", color: "red" };
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!values.name) {
      errors.name = "Campo requerido";
      setBorderDanger({ ...borderDanger, name: classDanger });
    } else if (!values.lastname) {
      errors.lastname = "Campo requerido";
      setBorderDanger({ ...borderDanger, lastname: classDanger });
    } else if (!values.email) {
      errors.email = "Campo requerido";
      setBorderDanger({ ...borderDanger, email: classDanger });
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Ingresá un correo válido";
      setBorderDanger({ ...borderDanger, email: classDanger });
    } else if (!values.password) {
      errors.password = "Campo requerido";
      setBorderDanger({ ...borderDanger, password: classDanger });
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "La contraseña debe contener una longitud de 8 caracteres, una letra minúscula, mayúscula, un número y un carácter especial.";
      setBorderDanger({ ...borderDanger, password: classDanger });
    } else if (!values.confirm_password) {
      errors.confirm_password = "Campo requerido";
      setBorderDanger({ ...borderDanger, confirm_password: classDanger });
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Las contraseñas no coinciden";
      setBorderDanger({ ...borderDanger, confirm_password: classDanger });
    }
    return errors;
  };

  const submitForm = async (values, setSubmitting) => {
    setSubmitting(true);
    try {
      let sendBody = {
        nombre: values.name,
        apellido: values.lastname,
        email: values.email,
        password: values.password,
      };
      console.log("BODY", sendBody);
      await RegisterPet("Mascoteros/registro", sendBody);
      console.log("PASE");
      await SendEmail(refForm.current);
      console.log("PASE1");

      navigation.navigate("validation_email");
      setSubmitting(false);
    } catch (error) {
      console.log("ERROR", error);
      if (error?.includes("Ya existe un usuario registrado con esa dirección de email")) {
        navigation.navigate("email_registered");
      }
      setSubmitting(false);
      throw new Error(error);
    }
  };

  const togglePasswordVisibility = (inputName) => {
    setShowPassword({
      ...showPassword,
      [inputName]: !showPassword[inputName],
    });
  };

  const removeDangerClass = (name) => {
    setBorderDanger((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const styles = StyleSheet.create({
    passwordContainer: {
      position: "relative",
    },
    input_muma: {
      backgroundColor: "#f6f6f6",
      borderWidth: 1,
      borderColor: "#f6f6f6",
      color: "#f08318",
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
    text_danger: {
      color: "red",
      fontSize: 12,
      marginLeft: 10,
    },
    btn_muma: {
      backgroundColor: "#f08318",
      padding: 10,
      borderRadius: 20,
      alignItems: "center",
      marginTop: 10,
    },
    btn_text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
    passwordContainer: {
      position: "relative",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 16,
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: 50,
    },
    logo: {
      width: 100,
      height: 100,
    },
    formGroup: {
      marginBottom: 0,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      borderRadius: 5,
    },
    passwordContainer: {
      position: "relative",
    },
    toggle: {
      position: "absolute",
      right: 10,
      bottom: 10,
    },
    errorText: {
      color: "red",
      marginTop: 5,
    },
    errorInput: {
      borderColor: "red",
    },
    rememberMeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    forgotPassword: {
      color: "blue",
      textDecorationLine: "underline",
    },
    showPass: {
      fontSize: 30,
      position: "absolute",
      top: 10,
      right: 10,
    },
    buttons: {
      alignItems: "center",
      gap: 10,
    },
  });

  return (
    <Formik initialValues={{ lastname: "", email: "", name: "", password: "", confirm_password: "" }} validate={valueManagement} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        const handleInputChange = (name, value) => {
          handleChange(name)(value);
          removeDangerClass(name);
        };

        return (
          <SafeAreaView ref={refForm}>
            <View>
              <TextInput style={{ ...styles.input_muma, ...borderDanger.name }} placeholder="Nombre*" onChangeText={(value) => handleInputChange("name", value)} onBlur={handleBlur("name")} value={values.name} />
              {errors.name && touched.name && <Text style={styles.text_danger}>{errors.name}</Text>}
            </View>
            <View>
              <TextInput style={{ ...styles.input_muma, ...borderDanger.lastname }} placeholder="Apellido*" onChangeText={(value) => handleInputChange("lastname", value)} onBlur={handleBlur("lastname")} value={values.lastname} />
              {errors.lastname && touched.lastname && <Text style={styles.text_danger}>{errors.lastname}</Text>}
            </View>
            <View>
              <TextInput style={{ ...styles.input_muma, ...borderDanger.email }} placeholder="Email*" onChangeText={(value) => handleInputChange("email", value)} onBlur={handleBlur("email")} value={values.email} />
              {errors.email && touched.email && <Text style={styles.text_danger}>{errors.email}</Text>}
            </View>
            <View style={styles.formGroup}>
              <View style={styles.passwordContainer}>
                <TextInput style={{ ...styles.input_muma, ...borderDanger.password }} placeholder="Contraseña*" secureTextEntry={!showPassword.password} onChangeText={(value) => handleInputChange("password", value)} onBlur={handleBlur("password")} value={values.password} />
                <TouchableOpacity style={styles.toggle} onPress={() => togglePasswordVisibility("password")}>
                  <Icon name={showPassword.password ? "eye-off" : "eye"} size={30} color="#000" />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password && <Text style={styles.text_danger}>{errors.password}</Text>}
            </View>
            <View style={styles.formGroup}>
              <View style={styles.passwordContainer}>
                <TextInput style={{ ...styles.input_muma, ...borderDanger.confirm_password }} placeholder="Confirmar Contraseña*" secureTextEntry={!showPassword.confirm_password} onChangeText={(value) => handleInputChange("confirm_password", value)} onBlur={handleBlur("confirm_password")} value={values.confirm_password} />
                <TouchableOpacity style={styles.toggle} onPress={() => togglePasswordVisibility("confirm_password")}>
                  <Icon name={showPassword.confirm_password ? "eye-off" : "eye"} size={30} color="#000" />
                </TouchableOpacity>
              </View>
              {errors.confirm_password && touched.confirm_password && <Text style={styles.text_danger}>{errors.confirm_password}</Text>}
            </View>
            <TouchableOpacity style={styles.btn_muma} onPress={handleSubmit} disabled={isSubmitting}>
              <Text style={styles.btn_text}>Registrarse</Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
    </Formik>
  );
};

export default FormPetOwner;
