import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const useLogin = (usuario, password, setSesion, setScreen, validateInputs) => {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (!validateInputs()) {
      Alert.alert('Error', 'Credenciales incorrectas.');
      return false;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users', // URL de ejemplo
        {
          usuario,
          password,
        }
      );
      if (response.status === 201) {
        setSesion(true);
        setScreen('Landing'); // Cambiar a la pantalla 'Landing' si el login es exitoso
      }
    } catch (error) {
      Alert.alert('Error', 'Credenciales incorrectas o problema de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export default useLogin;
