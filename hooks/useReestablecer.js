import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
const useResetPassword = (usuario, email, setScreen, validateInputs) => {
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!validateInputs()) {
      Alert.alert('Error', 'Valores incorrectos.');
      return false;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users', // URL de ejemplo
        {
          usuario,
          email,
        }
      );
      // Simulación de una respuesta exitosa
      if (response.status === 201) {
        setScreen('ReestablecerExitoso'); // Cambia a una pantalla de confirmación
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  return { handleResetPassword, loading };
};

export default useResetPassword;
