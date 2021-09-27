import React from 'react';
import SplashScreen from "react-native-splash-screen";
import { Provider } from 'react-redux';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
      <ApplicationNavigator />
  );
};

