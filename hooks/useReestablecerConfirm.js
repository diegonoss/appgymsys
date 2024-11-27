import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const useReestablecerConfirm = (
  password,
  confirmarPassword,
  validateInputs,
) => {
  const [loading, setLoading] = useState(false);
  const [reestablecerSuccess, setReestablecerSuccess] = useState(false);

  const handleResetPassword = async () => {
    if (!validateInputs()) {
      Alert.alert('Error', 'Las contraseñas no son válidas o no coinciden.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users', // URL de ejemplo
        {
          password,
          confirmarPassword,
        }
      );
      if (response.status === 201) {
        setReestablecerSuccess(true); // Pantalla de confirmación después de un reestablecer exitoso
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema con la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  return { handleResetPassword, loading, reestablecerSuccess };
};

export default useReestablecerConfirm;
