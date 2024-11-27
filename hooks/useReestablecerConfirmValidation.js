// hooks/useReestablecerValidation.js
import { useState } from 'react';

const useReestablecerConfirmValidation = () => {
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [passwordValida, setPasswordValida] = useState(true);
  const [confirmarPasswordValida, setConfirmarPasswordValida] = useState(true);

  // Expresión regular para la nueva contraseña: 8 a 15 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  const handleChangePassword = (text) => {
    if (/^[A-Za-z\d$@$!%*?&]*$/.test(text)) {
      setPassword(text);
    }
    setPasswordValida(passwordRegex.test(text));
  };

  const handleChangeConfirmarPassword = (text) => {
    if (/^[A-Za-z\d$@$!%*?&]*$/.test(text)) {
      setConfirmarPassword(text);
    }
    if (text === password) {
      setConfirmarPasswordValida(true);
    } else {
      setConfirmarPasswordValida(false);
    }
  };

  const validateInputs = () => {
    if (!passwordValida || !confirmarPasswordValida) {
      return false;
    }
    return true;
  };

  return {
    password,
    confirmarPassword,
    passwordValida,
    confirmarPasswordValida,
    handleChangePassword,
    handleChangeConfirmarPassword,
    validateInputs,
  };
};

export default useReestablecerConfirmValidation;
