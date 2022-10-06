import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/NavigationStack';


export const App = () => {
  return (

    // <Provider store={store}>
    <NavigationContainer>


      <NavigationStack />
      {/* <SplashScreen /> */}
    </NavigationContainer>
    // </Provider >
  );
};