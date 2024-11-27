import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Navbar from '../components/Navbar';
const ConfirmReestablecer = ({ setScreen, sesion, screen }) => {
  return (
    <View style={styles.container}>
      <Navbar
        title="Reestablecer Contraseña"
        onNavigateBack={() => setScreen('Landing')}
        screen={screen}
      />
      <View style={styles.form}>
        <View>
          <Text style={styles.texto}>El correo para reestablecer la contraseña fue enviado exitosamente.</Text>
        </View>
        {/* Botón de envío */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => setScreen('ReestablecerConfirm')}>Ir a reestablecer</Text>
        </TouchableOpacity>
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
  texto: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center'
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
});

export default ConfirmReestablecer;
