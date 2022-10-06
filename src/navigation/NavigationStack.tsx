import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTab } from './NavigationTab';
import { LoginScreen } from '../screens';



const Stack = createNativeStackNavigator();
export const NavigationStack = () => {


    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="NavigationTab" component={NavigationTab} />

        </Stack.Navigator>
    );
}
