import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Navbar from '../components/Navbar';
import axios from 'axios';
import useLoginValidation from '../hooks/useLoginValidation';
import useLogin from '../hooks/useLogin';
const Login = ({ setScreen, setSesion, screen }) => {
  const {
    usuario,
    password,
    usuarioValido,
    passwordValida,
    handleChangeUsuario,
    handleChangePassword,
    validateInputs,
  } = useLoginValidation(); // Custom hook validaciones
  const { handleLogin, loading } = useLogin(
    usuario,
    password,
    setSesion,
    setScreen,
    validateInputs
  ); // Custom hook handle login

  return (
    <View style={styles.container}>
      <Navbar
        title="Iniciar Sesión"
        onNavigateBack={() => setScreen('Landing')}
        screen={screen}
      />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            style={[styles.input, usuarioValido ? null : styles.invalid]}
            placeholder="Ingresa tu usuario"
            value={usuario}
            keyboardType="numeric"
            maxLength={9}
            onChangeText={handleChangeUsuario}
          />
          {usuarioValido ? null : (
            <Text style={styles.errorText}>
              El usuario debe ser la cédula (7 a 9 digitos)
            </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={[styles.input, passwordValida ? null : styles.invalid]}
            placeholder="Ingresa tu contraseña"
            secureTextEntry
            value={password}
            maxLength={15}
            onChangeText={handleChangePassword}
          />
          {passwordValida ? null : (
            <Text style={styles.errorText}>
              La contraseña debe tener entre 8 y 15 caracteres: 1 mayuscula, 1
              minuscula, 1 numero y 1 simbolo ($@$!%*?&)
            </Text>
          )}
        </View>
        {/* Botón de envío */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          )}
        </TouchableOpacity>
        <View style={styles.forgotPassword}>
          <Text style={styles.link} onPress={() => setScreen('Reestablecer')}>
            Olvidé mi contraseña
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#346cb0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  invalid: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  inputContainer: {
    marginBottom: 15,
  },
  forgotPassword: {
    marginTop: 15,
    marginHorizontal: 'auto',
  },
});

export default Login;
