import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice.js';
import { Image } from 'react-native'; 
import { Button as CustomButton } from "../components/Button.jsx";
import logo from "../../assets/images/logo.png";
import { TextInput, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user) {
      const tipoRegistro = Number(user.idTipoRegistro);
      // Redireccionar según el tipo de usuario
      if (tipoRegistro === 2) {
        navigation.navigate('register_pet_owner'); // Ruta para usuarios de tipo 2
      } else if (tipoRegistro === 1) {
        navigation.navigate('register_pet_owner'); // Ruta para usuarios de tipo 1
      } else {
        navigation.navigate('/'); // Ruta por defecto si no hay coincidencias
      }
    }
  }, [isAuthenticated, user, navigation]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('El email no es válido')
      .required('Required'),
    password: Yup.string().required('Ingrese una contraseña'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo}  style={styles.logo} />
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values));
          if (rememberMe) {
            AsyncStorage.setItem('savedEmail', values.email);
          } else {
            AsyncStorage.removeItem('savedEmail');
          }
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <View>
            <View style={styles.formGroup}>
              <TextInput
                style={[styles.input, touched.email && errors.email ? styles.errorInput : null]}
                placeholder="Email*"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            <View style={styles.formGroup}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.input, touched.password && errors.password ? styles.errorInput : null]}
                  placeholder="Contraseña*"
                  secureTextEntry={!showPassword}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity style={styles.toggle} onPress={togglePasswordVisibility}>
                  <Text style={styles.showPass}>{showPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            <View style={styles.rememberMeContainer}>
              <Checkbox
                status={rememberMe ? 'checked' : 'unchecked'}
                onPress={() => setRememberMe(!rememberMe)}
              />
              <Text>Recordarme</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <CustomButton size='large' onPress={handleSubmit} disabled={isSubmitting || loading}> {loading ? 'Cargando...' : 'Ingresar'}  </CustomButton>
              <CustomButton size='large'  onPress={() => navigation.navigate('UserSelect')} >Crear cuenta</CustomButton>
            </View>
            
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    position: 'relative',
  },
  toggle: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  showPass:{
    fontSize: 30,
    position: 'absolute',
    top:10,
    right:10,
  },
  buttons:{
    alignItems: 'center',
    gap:10,
  }
});

export default Login;