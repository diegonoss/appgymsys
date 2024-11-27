import React from 'react';
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
import useReestablecerConfirmValidation from '../hooks/useReestablecerConfirmValidation';
import useReestablecerConfirm from '../hooks/useReestablecerConfirm';

const ReestablecerConfirm = ({ setScreen, screen }) => {
  const {
    password,
    confirmarPassword,
    passwordValida,
    confirmarPasswordValida,
    handleChangePassword,
    handleChangeConfirmarPassword,
    validateInputs,
  } = useReestablecerConfirmValidation(); // Custom hook de validación

  const { handleResetPassword, loading, reestablecerSuccess } =
    useReestablecerConfirm(password, confirmarPassword, validateInputs); // Custom hook de restablecimiento
  return (
    <View style={styles.container}>
      <Navbar
        title="Reestablecer Contraseña"
        onNavigateBack={() => setScreen('Landing')}
        screen={screen}
      />
      <View style={styles.form}>
        {!reestablecerSuccess ? (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nueva Contraseña</Text>
              <TextInput
                style={[styles.input, passwordValida ? null : styles.invalid]}
                placeholder="Ingresa nueva contraseña"
                value={password}
                secureTextEntry
                maxLength={15}
                onChangeText={handleChangePassword}
              />
              {passwordValida ? null : (
                <Text style={styles.errorText}>
                  La contraseña debe tener entre 8 y 15 caracteres: al menos una
                  mayúscula, una minúscula, un número y un símbolo ($@$!%*?&)
                </Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirmar Contraseña</Text>
              <TextInput
                style={[
                  styles.input,
                  confirmarPasswordValida ? null : styles.invalid,
                ]}
                placeholder="Confirma tu nueva contraseña"
                value={confirmarPassword}
                secureTextEntry
                maxLength={15}
                onChangeText={handleChangeConfirmarPassword}
              />
              {confirmarPasswordValida ? null : (
                <Text style={styles.errorText}>
                  Las contraseñas no coinciden.
                </Text>
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
                <Text style={styles.buttonText}>Reestablecer Contraseña</Text>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.texto}>
            Su contraseña fué cambiada exitosamente.
          </Text>
        )}
        <View style={styles.volver}>
          <Text style={styles.link} onPress={() => setScreen('Login')}>
            Volver al inicio de sesión
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
  texto: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
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

export default ReestablecerConfirm;
