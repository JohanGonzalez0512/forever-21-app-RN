import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';
import { LoginScreen, LoadingScreen } from '../screens';
import { useAppDispatch, useAppSelector } from '../hooks';
import { checkToken } from '../store/auth';
import { startAskingPermission, startCheckingPermission } from '../store/permissions';
import realm from '../db';



const Stack = createNativeStackNavigator();
export const NavigationStack = () => {

    const status = useAppSelector(state => state.auth.status)
    const permissionStatus = useAppSelector(state => state.permission.permissionStatus)


    const dispatch = useAppDispatch();

    useEffect(() => {
        AppState.addEventListener("change", state => {
            if (state !== "active") return;
            dispatch(startCheckingPermission());
        });
    }, [])


    useEffect(() => {
        if ((permissionStatus['android.permission.CAMERA'] !== 'granted')
            && (permissionStatus['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted')) {
            dispatch(startAskingPermission());

        }
    }, [permissionStatus])


    useEffect(() => {
        if (status === 'checking') {
            dispatch(checkToken())
        }
    }, [])

    const startDB = async () => {
        const db = await realm();
        db.write(() => {
            db.create('Cat', {
                name: 'Mittens',
                type: 'Tabby',
            });
        });
    }

    useEffect(() => {
        startDB();
    }, [])











    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >

            {
                (status === 'checking' || (permissionStatus['android.permission.CAMERA'] !== 'granted')
                    && (permissionStatus['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted'))
                &&
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
