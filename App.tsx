import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/NavigationStack';
import { Provider } from 'react-redux';
import { store } from './src/store';


export const App = () => {
  return (

    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider >
  );
};