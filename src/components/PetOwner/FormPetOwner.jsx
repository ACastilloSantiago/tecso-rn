import React, { useRef } from "react";
import { SafeAreaView, TextInput, View, Text, StyleSheet, TouchableOpacity } from "react-native";
/* import { SendEmail, RegisterPet } from "../../api/setupAxios"; */
import { useState } from "react";
import { Formik } from "formik";
const FormPetOwner = ({ navigation }) => {
  const refForm = useRef(null);
  const [showPassword, setshowPassword] = useState({ password: false, confirm_password: false });
  const [borderDanger, setborderDanger] = useState({ name: "", lastname: "", email: "", password: "", confirm_password: "" });
  const valueManagement = (values) => {
    const errors = {};
    let classDanger = "border border-danger text-danger placeholder-danger";
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!values.name) {
      errors.name = "Campo requerido";
      setborderDanger({ ...borderDanger, name: classDanger });
    } else if (!values.lastname) {
      errors.lastname = "Campo requerido";
      setborderDanger({ ...borderDanger, lastname: classDanger });
    } else if (!values.email) {
      errors.email = "Campo requerido";
      setborderDanger({ ...borderDanger, email: classDanger });
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Ingresá un correo válido";
      setborderDanger({ ...borderDanger, email: classDanger });
    } else if (!values.password) {
      errors.password = "Campo requerido";
      setborderDanger({ ...borderDanger, password: classDanger });
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "La contraseña debe contener una longitud de 8 caracteres, una letra minúscula, mayuscula, un número, un caracter especial.";
      setborderDanger({ ...borderDanger, password: classDanger });
    } else if (!values.confirm_password) {
      errors.confirm_password = "Campo requerido";
      setborderDanger({ ...borderDanger, confirm_password: classDanger });
    } else if (values.password.length && values.confirm_password.length && values.password !== values.confirm_password) {
      errors.confirm_password = "Las contraseñas no coinciden";
      errors.password = "Las contraseñas no coinciden";
      setborderDanger({ ...borderDanger, password: classDanger });
      setborderDanger({ ...borderDanger, confirm_password: classDanger });
    }
    return errors;
  };
  const submitForm = async (values, setSubmitting) => {
    setSubmitting(true);
    try {
      let sendBody = { nombre: values.name, apellido: values.lastname, email: values.email, password: values.password };
      /*       await RegisterPet("Mascoteros/registro", sendBody);
      await SendEmail(refForm.current); */
      navigation.navigate("validation_email");
      setSubmitting(false);
    } catch (error) {
      if (error.includes("Ya existe un usuario registrado con esa dirección de email")) navigation.navigate("email_registered");
      setSubmitting(false);
      throw new Error(error);
    }
  };
  const togglePasswordVisibility = (e) => {
    const inputName = e.target.getAttribute("data-input");
    setshowPassword({
      ...showPassword,
      [inputName]: !showPassword[inputName],
    });
  };
  const removeDangerClass = (name) => {
    setborderDanger((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };
  const styles = StyleSheet.create({
    input_muma: {
      backgroundColor: "#f6f6f6",
      borderWidth: 1,
      borderColor: "#f6f6f6",
      color: "#f08318",
      padding: 3,
    },
    btn_muma: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 22,
      backgroundColor: "#f08318",
      borderWidth: 1,
      borderBlockColor: "#f08318",
    },
  });
  return (
    <Formik initialValues={{ lastname: "", email: "", name: "", password: "", confirm_password: "" }} validate={(values) => valueManagement(values)} onSubmit={(values, { setSubmitting }) => submitForm(values, setSubmitting)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        const handleInputChange = (e) => {
          handleChange(e);
          removeDangerClass(e.target.name);
        };
        return (
          <SafeAreaView ref={refForm} onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <View className="gap-2 justify-content-center">
              <View>
                <TextInput style={styles.input_muma} placeholder="Nombre*" type="text" name="name" onChangeText={handleInputChange} onBlur={handleBlur} value={values.name} />
                <Text className="text-danger m-0 p-0 fs-12 ms-2">{errors.name && touched.name && errors.name}</Text>
              </View>
              <View>
                <TextInput style={styles.input_muma} placeholder="Apellido*" type="text" name="lastname" onChangeText={handleInputChange} onBlur={handleBlur} value={values.lastname} />
                <Text className="text-danger m-0 p-0 fs-12 ms-2">{errors.lastname && touched.lastname && errors.lastname}</Text>
              </View>
              <View>
                <TextInput style={styles.input_muma} placeholder="Email*" type="text" name="email" onChangeText={handleInputChange} onBlur={handleBlur} value={values.email} />
                <Text className="text-danger m-0 p-0 fs-12 ms-2">{errors.email && touched.email && errors.email}</Text>
              </View>
              <View>
                {/*                 <InputGroup className={`${borderDanger.password} rounded`}> */}
                <TextInput style={styles.input_muma} placeholder="Contraseña*" secureTextEntry={!showPassword.password ? "password" : "text"} name="password" onChangeText={handleInputChange} onBlur={handleBlur} value={values.password} />
                {/*               <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="password">
                    <i className={`bi ${!showPassword.password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="password"></i>
                  </InputGroup.Text>
                </InputGroup> */}
                <Text className="text-danger m-0 p-0 fs-12 ms-2">{errors.password && touched.password && errors.password}</Text>
              </View>
              <View>
                {/*                 <InputGroup className={`${borderDanger.confirm_password} rounded`}> */}
                <TextInput style={styles.input_muma} placeholder="Confirmar contraseña*" secureTextEntry={!showPassword.confirm_password ? "password" : "text"} name="confirm_password" onChangeText={handleInputChange} onBlur={handleBlur} value={values.confirm_password} />
                {/*                   <InputGroup.Text className="pointer input-muma" onClick={togglePasswordVisibility} data-input="confirm_password">
                    <i className={`bi ${!showPassword.confirm_password ? "bi-eye-slash" : "bi-eye"} color-orange-muma`} data-input="confirm_password"></i>
                  </InputGroup.Text>
                </InputGroup> */}
                <Text className="text-danger m-0 p-0 fs-12 ms-2">{errors.confirm_password && touched.confirm_password && errors.confirm_password}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: "#f08318",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled={isSubmitting}
            >
              <Text style={{ color: "white" }}>Registrarme</Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
    </Formik>
  );
};

export default FormPetOwner;
