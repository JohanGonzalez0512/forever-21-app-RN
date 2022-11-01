import { Dispatch } from 'redux';
import { forever21Api } from '../../api';
import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ProductsStack';
import { addProduct } from './productSlice';
import { existenceResp } from '../../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface DataChecking {
    navigation: NativeStackNavigationProp<RootStackParamList, "CaptureScreen", undefined>
    code: string
}

export const startCheckingExistence = ({ navigation, code }: DataChecking) => {
    return async (dispatch: Dispatch) => {
        try {

            if (code.length > 12) {
                navigation.navigate('ProductsScreen');
                Alert.alert(
                    "Error",
                    "El código de barras o QR es demasiado largo",
                    [

                        { text: "OK" }
                    ],
                )
                return;
            }

            const { data } = await forever21Api.get<existenceResp>(`products/existence/${code}`);

            if (data.existance) {

                dispatch(addProduct(data.product));
                navigation.navigate('ProductsScreen');
            } else {
                navigation.navigate('CreateProductScreen', { code });
            }




        } catch (error: any) {
            console.log(error.response.data.message);
            navigation.navigate('ProductsScreen');
            Alert.alert(
                "Error",
                "Hubo un error al verificar el producto",
                [

                    { text: "OK" }
                ],
            )

        }
    };
};


export const startUpdatingProducts = () => {
    return async (dispatch: Dispatch) => {


        // TODO: update products and clean the redux state

        await AsyncStorage.removeItem('persist:root');




    }
}


export const startCreatingProduct = ({ navigation, code }: DataChecking) => {
    return async (dispatch: Dispatch) => {
        try {


            console.log(code)


            // const { data } = await forever21Api.post<User>('/auth/login', dataUser);


            // dispatch();




        } catch (error: any) {
            console.log(error.response.data.message);

        }
    };
};

