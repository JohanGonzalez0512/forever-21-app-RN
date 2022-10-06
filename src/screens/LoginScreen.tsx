import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TitleLogin, FormLogin } from '../components/login';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TitleLogin />
      <FormLogin />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

}
)
