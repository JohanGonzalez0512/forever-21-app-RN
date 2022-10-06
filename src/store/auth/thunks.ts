import { Dispatch } from 'redux';
import { login, logout } from './authSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';


type DataUser = {
    email: string;
    password: string;
}

export const startLogin = (dataUser: DataUser) => {
    return async (dispatch: Dispatch) => {
        try {

            dispatch(login({
                name: 'Johan',
                email: dataUser.email,
            }));

        } catch (error: any) {
            console.log("Response API", error)
            console.log(error.response.detail);
        }
    };
};

// export const checkToken = () => {
//     return async (dispatch: Dispatch) => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//            
//
//             if (!token ) return dispatch(logout());

//             const resp = await remaxApi.post('/auth/login/refresh/', {
//                 refresh: tokenRefresh,
//                 email
//             });
//             if (resp.status !== 200) {
//                 return dispatch(logout());
//             }
//             dispatch(login(resp.data));

//             await AsyncStorage.setItem('token', resp.data.token.access);
//         

//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export const startLogout = () => {
    return async (dispatch: Dispatch) => {
        try {
            // await AsyncStorage.removeItem('token');
           
            dispatch(logout());
        } catch (error) {
            console.log(error);
        }
    }
}