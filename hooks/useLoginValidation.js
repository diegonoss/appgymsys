import { useState } from 'react';

const useLoginValidation = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [usuarioValido, setUsuarioValido] = useState(true);
  const [passwordValida, setPasswordValida] = useState(true);

  const usuarioRegex = /^\d{7,9}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  const handleChangeUsuario = (text) => {
    if (/^\d*$/.test(text)) {
      setUsuario(text);
    }
    setUsuarioValido(usuarioRegex.test(text));
  };

  const handleChangePassword = (text) => {
    if (/^[A-Za-z\d$@$!%*?&]*$/.test(text)) {
      setPassword(text);
    }
    setPasswordValida(passwordRegex.test(text));
  };

  const validateInputs = () => {
    if (
      !usuarioValido ||
      usuario === '' ||
      !passwordValida ||
      password === ''
    ) {
      if (usuarioRegex.test(usuario)) {
        setUsuarioValido(true);
      } else {
        setUsuarioValido(false);
      }
      if (passwordRegex.test(password)) {
        setPasswordValida(true);
      } else {
        setPasswordValida(false);
      }
      return false;
    }
    return true;
  };

  return {
    usuario,
    password,
    usuarioValido,
    passwordValida,
    handleChangeUsuario,
    handleChangePassword,
    validateInputs,
  };
};

export default useLoginValidation;
