import { View, Text, Button} from 'react-native'
import React from 'react'
import { useAppDispatch } from '../hooks';
import { startLogout } from '../store/auth/thunks';

export const UserScreen = () => {

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(startLogout())
    }



  return (
    <View>
      <Text>UserScreen</Text>
      <Button
        title="Logout"
        onPress={handleLogout}
       /> 
    </View>
  )
}
