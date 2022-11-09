import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../interfaces';

interface OrderState {
    orders: Order[] | [];
    activeOrder: Order | null;
    quantityProducts: { id: string, quantity: number; }[] | undefined;
}
const initialState: OrderState = {
    orders: [],
    activeOrder: null,
    quantityProducts: undefined

};


export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

        setOrders: (state: OrderState, { payload }: PayloadAction<Order[]>) => {
            state.orders = payload;
        },
        cleanOrders: (state: OrderState) => {
            state.orders = [];
        },
        updateOrder: (state: OrderState, { payload }: PayloadAction<string>) => {
            state.orders = state.orders.map(order => order.id === payload ? {
                ...order,
                status: true
            } : order);
        },
        setActiveOrder: (state: OrderState, { payload }: PayloadAction<Order>) => {
            state.activeOrder = payload;
            state.quantityProducts = payload.products.map(product => {
                return {
                    id: product.id,
                    quantity: 0
                }
            });
        },
        incrementQuantity: (state: OrderState, { payload }: PayloadAction<string>) => {
            state.quantityProducts = state.quantityProducts?.map(product => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            });
        }


    },
});



export const { setOrders, cleanOrders, updateOrder, setActiveOrder, incrementQuantity } = orderSlice.actions;