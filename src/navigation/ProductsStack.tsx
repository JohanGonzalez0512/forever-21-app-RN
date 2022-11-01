import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CaptureScreen, ProductScreen, CreateProductScreen } from '../screens/products';


export type RootStackParamList = {
    ProductsScreen: undefined;
    CaptureScreen: undefined;
    CreateProductScreen: {
        code: string
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export const ProductsStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Stack.Screen name="CreateProductScreen" component={CreateProductScreen} />
            <Stack.Screen name="ProductsScreen" component={ProductScreen} />
            <Stack.Screen name="CaptureScreen" component={CaptureScreen} />

        </Stack.Navigator>
    );
}