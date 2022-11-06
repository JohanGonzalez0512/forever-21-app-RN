import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { permissionSlice } from './permissions';
import { productSlice } from './products';
import { statisticSlice } from './statistics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const productsPersistedReducer = persistReducer(persistConfig, productSlice.reducer)




export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        permission: permissionSlice.reducer,
        product: productsPersistedReducer,
        statistic: statisticSlice.reducer,

    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;