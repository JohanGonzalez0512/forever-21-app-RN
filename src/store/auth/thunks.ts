import { Alert } from 'react-native';
import { Dispatch } from 'redux';
import { login, logout } from './authSlice';
import { User } from '../../interfaces';
import { forever21Api } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';


type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await forever21Api.post<User>('/auth/login', dataUser);


            dispatch(login(data));

            await AsyncStorage.setItem('token', data.token);



        } catch (error: any) {
            console.log(error.response.data.message);
            Alert.alert(
                "Error",
                "Hubo un error al iniciar sesión con las credenciales proporcionadas",
                [
                    
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
            )
            // console.log(error.response);
        }
    };
};



export const checkToken = () => {
    return async (dispatch: Dispatch) => {
        try {
            const token = await AsyncStorage.getItem('token');


            if (!token) return dispatch(logout());

            const { data } = await forever21Api.get('/auth/check-status',);

            dispatch(login(data));

            await AsyncStorage.setItem('token', data.token);
        } catch (error) {
            dispatch(logout());
        }
    }
}

export const startLogout = () => {
    return async (dispatch: Dispatch) => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    }
}