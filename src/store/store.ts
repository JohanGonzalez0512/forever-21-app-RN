import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { permissionSlice } from './permissions';
import { productSlice } from './products/productSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        permission: permissionSlice.reducer,
        product: productSlice.reducer,
       
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;