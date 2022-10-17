import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/NavigationStack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (

    <Provider store={store}>
      <PaperProvider settings={{
        icon: props => <Icon {...props} />,
      }}> 

        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </PaperProvider>
    </Provider >
  );
};