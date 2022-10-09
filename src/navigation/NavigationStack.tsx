import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';
import { LoginScreen, LoadingScreen } from '../screens';
import { useAppDispatch, useAppSelector } from '../hooks';
import { checkToken } from '../store/auth';
import { startAskingPermission, startCheckingPermission } from '../store/permissions';



const Stack = createNativeStackNavigator();
export const NavigationStack = () => {

    const status = useAppSelector(state => state.auth.status)
    const cameraStatus = useAppSelector(state => state.permission.cameraStatus)


    const dispatch = useAppDispatch();

    useEffect(() => {
        AppState.addEventListener("change", state => {
            if (state !== "active") return;
            dispatch(startCheckingPermission());
        });
    }, [])

    
    useEffect(() => {
        if (cameraStatus !== 'granted') {
            dispatch(startAskingPermission());

        }
    }, [cameraStatus])


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
                (status === 'checking' && cameraStatus !== 'granted') &&
                <Stack.Screen name="Loading" component={LoadingScreen} />
            }

            {
                (status === 'authenticated') ?
                    <Stack.Screen name="NavigationTab" component={NavigationTab} />
                    :
                    <Stack.Screen name="Login" component={LoginScreen} />

            }


        </Stack.Navigator>
    );
}
