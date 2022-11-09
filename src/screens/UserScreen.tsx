import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react'
import { useAppDispatch } from '../hooks';
import { startLogout } from '../store/auth/thunks';
import { Header } from '../components/ui';
import { ButtonSubmit } from '../components/ui/ButtonSubmit';
import { UserInfo } from '../components/user';

export const UserScreen = () => {

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(startLogout())
  }



  return (
    <View style={styles.container}>
      <Header
        title="Usuario"
      />

      <UserInfo />

      <ButtonSubmit
        title="Cerrar sesión"
        onPress={handleLogout}
        disabled={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
