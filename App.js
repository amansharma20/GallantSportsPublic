import React from 'react';
import SplashScreen from "react-native-splash-screen";
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import { StatusBar, Text, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import CommonLoading from './src/components/CommonLoading';
import { Provider } from 'react-redux';
import RootStore from './src/persistence/stores/RootStore';

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;

  TextInput.defaultProps = Text.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  return (
    <Provider store={RootStore}>
      <SafeAreaProvider>
        <StatusBar
          hidden={false}
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        <NavigationContainer>
          <ApplicationNavigator />
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
        <CommonLoading ref={ref => CommonLoading.setRef(ref)} />
      </SafeAreaProvider>
    </Provider>
    );
};

