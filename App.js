import React, { useState } from 'react';
import Landing from './pantallas/LandingScreen';
import Login from './pantallas/LoginScreen';
import Reestablecer from './pantallas/ReestablecerScreen';
import ReestablecerExitoso from './pantallas/ReestablecerExitosoScreen';
import ReestablecerConfirm from './pantallas/ReestablecerConfirmScreen';

export default function App() {
  const [screen, setScreen] = useState('Landing');
  const [sesion, setSesion] = useState(false);

  const renderScreen = () => {
    switch (screen) {
      case 'Landing':
        return <Landing setScreen={setScreen} sesion={sesion} setSesion={setSesion}/>;
      case 'Login':
        return <Login setScreen={setScreen} setSesion={setSesion} sesion={sesion} screen={screen}/>;
      case 'Reestablecer':
        return <Reestablecer setScreen={setScreen} sesion={sesion} screen={screen}/>;
      case 'ReestablecerExitoso':
        return <ReestablecerExitoso setScreen={setScreen} sesion={sesion} screen={screen}/>;
      case 'ReestablecerConfirm':
        return <ReestablecerConfirm setScreen={setScreen} sesion={sesion} screen={screen}/>;
      default:
        return <Landing setScreen={setScreen} sesion={sesion} setSesion={setSesion}/>;
    }
  };

  return renderScreen();
}
