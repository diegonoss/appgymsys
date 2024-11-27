import { useState } from 'react';

const useReestablecerValidation = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [usuarioValido, setUsuarioValido] = useState(true);
  const [emailValido, setEmailValido] = useState(true);

  const usuarioRegex = /^\d{7,9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChangeUsuario = (text) => {
    if (/^\d*$/.test(text)) {
      setUsuario(text);
    }
    setUsuarioValido(usuarioRegex.test(text));
  };

  const handleChangeEmail = (text) => {
    if (/^[a-zA-Z0-9._%+-@]*$/.test(text)) {
      setEmail(text);
    }
    setEmailValido(emailRegex.test(text));
  };

  const validateInputs = () => {
    if (!usuarioValido || usuario === '' || !emailValido || email === '') {
      if (usuarioRegex.test(usuario)) {
        setUsuarioValido(true);
      } else {
        setUsuarioValido(false);
      }
      if (emailRegex.test(email)) {
        setEmailValido(true);
      } else {
        setEmailValido(false);
      }
      return false;
    }
    return true;
  };

  return {
    usuario,
    setUsuario,
    email,
    setEmail,
    usuarioValido,
    emailValido,
    handleChangeUsuario,
    handleChangeEmail,
    validateInputs,
  };
};

export default useReestablecerValidation;
