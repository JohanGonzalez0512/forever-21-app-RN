import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { permissionSlice } from './permissions';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        permission: permissionSlice.reducer,
       
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;