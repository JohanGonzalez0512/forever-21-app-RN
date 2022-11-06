import { Dispatch } from "@reduxjs/toolkit";
import { Alert } from 'react-native';
import { forever21Api } from '../../api';
import { Statistic } from "../../interfaces";
import { setStatistics } from "./statisticSlice";

interface DatesValues {
    initialDate: string,
    finalDate: string,
}

export const startGettingStatistics = ({ initialDate, finalDate }: DatesValues) => {
    return async (dispatch: Dispatch) => {
        try {


            const { data } = await forever21Api.get<Statistic>(`/statistics/${initialDate}/${finalDate}`);
            dispatch(setStatistics(data));

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
