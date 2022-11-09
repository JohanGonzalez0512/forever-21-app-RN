import { Dispatch } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
import { forever21Api } from '../../api';
import { incrementQuantity, setOrders, updateOrder } from "./orderSlice";
import { Order, OrderResp } from '../../interfaces/order.resp.interface';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamListOrders } from "../../navigation/OrdersStack";
import { RootState } from "../store";

interface DatesValuesExistence {
    SKU: string,
    navigation: NativeStackNavigationProp<RootStackParamListOrders, "CaptureScreenOrders">
}
interface DatesValuesUpdate {
    id: string,
}

export const startGettingOrders = () => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await forever21Api.get<OrderResp>(`/orders`);
            dispatch(setOrders(data.results));

        } catch (error: any) {
            console.log(error.response.data.message);

            Alert.alert(
                "Error",
                "Hubo un error al traer las ordenes",
                [

                    { text: "OK" }
                ],
            )

        }
    };
};

export const startUpdatingOrder = ({ id }: DatesValuesUpdate) => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await forever21Api.patch<Order>(`/orders/${id}`);
            dispatch(updateOrder(data));

        } catch (error: any) {
            console.log(error.response.data.message);
            Alert.alert(
                "Error",
                "Hubo un error al actualizar la orden",
                [

                    { text: "OK" }
                ],
            )

        }
    };
}

export const startCheckingExistenceOrder = ({ SKU, navigation }: DatesValuesExistence) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {


            if (SKU.length > 12) {
                navigation.navigate('CheckProductsScreen', {
                    products: getState().order.activeOrder!.products
                });
                Alert.alert(
                    "Error",
                    "El código de barras o QR es demasiado largo",
                    [

                        { text: "OK" }
                    ],
                )
                return;
            }

            const { activeOrder } = getState().order

            const { data } = await forever21Api.post(`/orders/existence`, {
                SKU,
                id: activeOrder?.id
            });

            if (data.existence) {
                dispatch(incrementQuantity(data.productId));
                navigation.navigate('CheckProductsScreen', {
                    products: getState().order.activeOrder!.products
                });
            } else {
                Alert.alert(
                    "Error",
                    "Hubo un error al encontrar el producto",
                    [

                        { text: "OK" }
                    ],
                )
                navigation.navigate('CheckProductsScreen', {
                    products: getState().order.activeOrder!.products
                });
            }


        } catch (error: any) {
            console.log(error.response.data.message);
            Alert.alert(
                "Error",
                "Hubo un error al encontrar el producto",
                [

                    { text: "OK" }
                ],
            )

        }
    };
}
