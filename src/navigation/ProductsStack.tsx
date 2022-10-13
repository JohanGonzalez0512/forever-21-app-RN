import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaptureScreen, ProductScreen } from '../screens/products';

const Stack = createNativeStackNavigator();
export const ProductsStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="ProductsScreen" component={ProductScreen} />
            <Stack.Screen name="CaptureScreen" component={CaptureScreen} />

        </Stack.Navigator>
    );
}