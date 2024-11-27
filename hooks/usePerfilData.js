import { useState, useEffect } from 'react';
import axios from 'axios';
const usePerfilData = () => {
  const [perfil, setPerfil] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setPerfil(response.data[0]);
        console.log(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return { perfil, loading };
};

export default usePerfilData;
