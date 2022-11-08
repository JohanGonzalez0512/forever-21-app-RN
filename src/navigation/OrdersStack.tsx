import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckProductsScreen, OrderScreen } from '../screens/orders';


export type RootStackParamListOrders = {
    OrdersScreen: undefined;
    CheckProductsScreen: {
        products: {
            id: string;
            SKU: string;
            name: string;
            imageURL: string;
            quantity: number;
        }[];
    };
};

const Stack = createNativeStackNavigator<RootStackParamListOrders>();


export const OrdersStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Stack.Screen name="OrdersScreen" component={OrderScreen} />
            <Stack.Screen name="CheckProductsScreen" component={CheckProductsScreen} />


        </Stack.Navigator>
    );
}