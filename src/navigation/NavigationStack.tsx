import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';
import { LoginScreen } from '../screens';
import { useAppSelector } from '../hooks';



const Stack = createNativeStackNavigator();
export const NavigationStack = () => {

    const status = useAppSelector(state => state.auth.status)



    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >

            {
                (status === 'authenticated') ?
                    <Stack.Screen name="NavigationTab" component={NavigationTab} />
                    :
                    <Stack.Screen name="Login" component={LoginScreen} />

            }

        </Stack.Navigator>
    );
}
