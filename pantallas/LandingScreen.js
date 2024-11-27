import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Hr from '../components/Hr';
const Landing = ({ setScreen, sesion, setSesion }) => (
  <View style={styles.container}>
    <Navbar
      title="Gimnasio 'Eddie Suarez'"
      onNavigateToLogin={() => setScreen('Login')}
      sesion={sesion}
      setSesion={setSesion}
    />
    <View style={styles.content}>
      <Text style={styles.title}>¡Bienvenido al Gimnasio 'Eddie Suarez'!</Text>
      <Text style={styles.slogan}>
        Fortaleciendo cuerpo y mente, un día a la vez.
      </Text>
      <Hr />
      <Text>Te invitamos a formar parte de nuestra comunidad.</Text>
      {!sesion ? (
        <View style={styles.buttonContainer}>
          <Button
            title="Iniciar Sesión"
            onPress={() => setScreen('Login')}></Button>
          <Button title="Registrarse"></Button>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title="Ver perfil"
            onPress={() => setScreen('Perfil')}></Button>
          <Button title="Cambiar contraseña"></Button>
        </View>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    color: '#346cb0',
    fontSize: 32,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '80%',
  },
  slogan: {
    color: '#868e96',
    marginVertical: 15,
  },
});

export default Landing;
