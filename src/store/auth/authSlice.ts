import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    status: 'checking' | 'not-authenticated' | 'authenticated';
    errorMessage: string | null;
    user: {
        name: string;
        email: string;
    } | null;
}
const initialState: AuthState = {
    status: 'checking',
    user: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state: AuthState, { payload }: PayloadAction<{
            name: string;
            email: string;
        }>) => {
            state.status = 'authenticated';
            state.user = payload;

            console.log(state)
        },

        logout: (state: AuthState) => {
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = null;
        },
        checkingCredentials: (state: AuthState) => {
            state.status = 'checking';
        },
    },
});

export const { login, checkingCredentials, logout } = authSlice.actions;