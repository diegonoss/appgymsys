import { useCallback } from 'react';
const useCerrarSesion = (setSesion, setScreen) => {
  const handleCerrarSesion = useCallback(() => {
    setSesion(false);
    setScreen('Landing');
  }, [setSesion, setScreen]);
  return handleCerrarSesion;
};
export default useCerrarSesion;
