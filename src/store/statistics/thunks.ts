import { Dispatch } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
import { forever21Api } from "../../api";

export const startGettingStatistics = () => {
    return async (dispatch: Dispatch) => {
        try {

            

            const { data } = await forever21Api.post(`/statistics/2022-10-02/2022-11-7`, {
               
            });


        } catch (error: any) {
            console.log(error.response.data.message);
         
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
