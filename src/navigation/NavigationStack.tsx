import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';
import { LoginScreen } from '../screens';
import { useAppDispatch, useAppSelector } from '../hooks';
import { checkToken } from '../store/auth';



const Stack = createNativeStackNavigator();
export const NavigationStack = () => {

    const status = useAppSelector(state => state.auth.status)


    const dispatch = useAppDispatch();


    useEffect(() => {
        if (status === 'checking') {
            dispatch(checkToken())
        }
    }, [])



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
