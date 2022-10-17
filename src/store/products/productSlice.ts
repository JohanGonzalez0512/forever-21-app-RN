import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Product {
    SKU: string;
    name: string;
    quantity: number;
}

interface AuthState {
    status: 'checking' | 'uploaded' | 'not-uploaded';
    errorMessage: string | null;
    products: Product[];
}
const initialState: AuthState = {
    status: 'uploaded',
    products: [],
    errorMessage: null,
};


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state: AuthState, { payload }: PayloadAction<Product>) => {
            console.log(payload);
            state.products =
                //check if the product is already in the array
                state.products.find(product => product.SKU === payload.SKU) ?
                    //if it is, return add the quantity
                    state.products.map(product => product.SKU === payload.SKU ?
                        { ...product, quantity: product.quantity + 1 } : product)
                    //if it is not, return the array with the new product
                    : [...state.products, {
                        ...payload,
                        quantity: 1
                    }];

        },

        increment  : (state: AuthState, { payload }: PayloadAction<Product>) => {
            state.products = state.products?.map((product) => {
                if (product.SKU === payload.SKU) {
                    product.quantity += 1;
                }
                return product;
            });
        },
        decrement: (state: AuthState, { payload }: PayloadAction<Product>) => {
            state.products = state.products?.map((product) => {
                if (product.SKU === payload.SKU) {
                    if (product.quantity > 1) {
                        product.quantity -= 1;
                    }
                   


                }
                return product;
            });
        }




    }
});



export const { increment, decrement, addProduct } = productSlice.actions;