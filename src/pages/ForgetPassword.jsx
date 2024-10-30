import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import forget from '../../assets/images/forget.png';

const ForgetPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const forgetLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            Alert.alert('Advertencia', 'Por favor ingrese su correo electrónico');
        } else if (!emailRegex.test(email)) {
            Alert.alert('Advertencia', 'Por favor ingrese un correo electrónico válido');
        } else {
            Alert.alert('Éxito', 'Correo electrónico válido. Procediendo...');
            navigation.navigate('/'); 
        }
    };

    return (
        <View style={styles.container}>
            <Image source={forget} style={styles.image} />
            <View style={styles.formContainer}>
                <Text style={styles.label}>Dirección de correo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese su correo"
                    placeholderTextColor="#888"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.textMuted}>
                    Si existe un mail relacionado a una cuenta le llegará un correo.
                </Text>
                <TouchableOpacity style={styles.button} onPress={forgetLogin}>
                    <Text style={styles.buttonText}>Recuperar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 280,
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        padding: 10,
        backgroundColor: '#DCDCDC',
        borderRadius: 5,
        marginBottom: 8,
    },
    textMuted: {
        fontSize: 12,
        color: '#888',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#ff6600', // Cambia al color deseado
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ForgetPassword;
