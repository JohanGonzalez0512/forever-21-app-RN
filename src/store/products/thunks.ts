import { Dispatch } from 'redux';
import { forever21Api } from '../../api';
import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/ProductsStack';
import { addProduct, cleanProducts } from './productSlice';
import { existenceResp, ProductResp } from '../../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../store';


interface DataChecking {
    navigation: NativeStackNavigationProp<RootStackParamList, "CaptureScreen", undefined>
    code: string
}

interface DataCreating {
    navigation: NativeStackNavigationProp<RootStackParamList, "CreateProductScreen", undefined>
    SKU: string
    image: {
        uri: string
        type: string
        fileName: string
    }
    name: string
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

            console.log(code)

            const { data } = await forever21Api.get<existenceResp>(`/products/existence/${code}`);

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
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { products } = getState().product
        console.log(products)

        try {

            if (products.length === 0){
                Alert.alert(
                    "Error",
                    "No hay productos para actualizar",
                    [
    
                        { text: "OK" }
                    ],
                )
                return;
            }

            const { data } = await forever21Api.post(`/products/quantity`, {
                products: products.map(product => {
                    return {
                        SKU: product.SKU,
                        quantity: product.quantity
                    }
                })
            });

            Alert.alert(
                "Genial",
                "Se actualizaron los productos",
                [

                    { text: "OK" }
                ],
            )

            // await AsyncStorage.removeItem('persist:root');

            dispatch(cleanProducts());
            
        } catch (error: any) {
            console.log(error.response.data.message);
            Alert.alert(
                "Error",
                "Hubo un error al actualizar los productos",
                [

                    { text: "OK" }
                ],
            )
        }





    }
}


export const startCreatingProduct = ({ navigation, SKU, name, image }: DataCreating) => {
    return async (dispatch: Dispatch) => {
        try {

            const { data } = await forever21Api.post<ProductResp>('/products', {
                name,
                SKU,
            });

            const fileToUpload = {
                uri: image.uri,
                type: image.type,
                name: image.fileName
            }



            const formData = new FormData();
            formData.append('file', fileToUpload);

            const resp = await forever21Api.post<ProductResp>(`/files/product/${data.product.id}`, formData,
                { headers: { 'Content-Type': 'multipart/form-data' } });



            navigation.navigate('ProductsScreen');
            Alert.alert(
                "Genial",
                "El producto se guardó correctamente",
                [

                    { text: "OK" }
                ],
            )

        } catch (error: any) {
            console.log(error);
            navigation.navigate('ProductsScreen');
            Alert.alert(
                "Error",
                "Hubo un error al crear el producto",
                [

                    { text: "OK" }
                ],
            )

        }
    };
};

