import React, { useState, useEffect } from 'react';
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
import useReestablecerValidation from '../hooks/useReestablecerValidation'; // Importamos el hook de validación
import useReestablecer from '../hooks/useReestablecer';
import axios from 'axios';
const Reestablecer = ({ setScreen, screen }) => {
  const {
    usuario,
    email,
    usuarioValido,
    emailValido,
    handleChangeUsuario,
    handleChangeEmail,
    validateInputs,
  } = useReestablecerValidation(); // Custom hook valiadcion

  const { handleResetPassword, loading } = useReestablecer(
    usuario,
    email,
    setScreen,
    validateInputs
  ); // Custom hook reestablecer

  return (
    <View style={styles.container}>
      <Navbar
        title="Reestablecer contraseña"
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
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={[styles.input, emailValido ? null : styles.invalid]}
            placeholder="Ingresa tu correo electrónico"
            value={email}
            maxLength={50}
            onChangeText={handleChangeEmail}
          />
          {emailValido ? null : (
            <Text style={styles.errorText}>Correo inválido</Text>
          )}
        </View>
        {/* Botón de envío */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleResetPassword}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Reestablecer contraseña</Text>
          )}
        </TouchableOpacity>
        <View style={styles.volver}>
          <Text style={styles.link} onPress={() => setScreen('Login')}>
            Volver
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
  inputContainer: {
    marginBottom: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  volver: {
    marginTop: 15,
    marginHorizontal: 'auto',
  },
});

export default Reestablecer;
