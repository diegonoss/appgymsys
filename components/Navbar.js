import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useCerrarSesion from '../hooks/useCerrarSesion';
const Navbar = ({
  title,
  screen,
  onNavigateBack,
  onNavigateToLogin,
  sesion,
  setSesion,
  setScreen,
}) => {
  const handleCerrarSesion = useCerrarSesion(setSesion, setScreen);
  return (
    <View style={styles.navbar}>
      {/* Botón de retroceso */}
      {onNavigateBack && (
        <TouchableOpacity style={styles.button} onPress={onNavigateBack}>
          <Text style={styles.buttonText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {onNavigateToLogin && !sesion ? (
        <TouchableOpacity style={styles.button} onPress={onNavigateToLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      ) : (
        screen !== 'Login' &&
        screen !== 'Reestablecer' &&
        screen !== 'ReestablecerConfirm' &&
        screen !== 'ReestablecerExitoso' && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleCerrarSesion}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#346cb0',
    paddingHorizontal: 15,
    width: '100%',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Navbar;
