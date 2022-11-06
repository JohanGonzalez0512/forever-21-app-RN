import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Statistic } from '../../interfaces';

interface StatisticState {
    statistics: Statistic | null;
}
const initialState: StatisticState = {
    statistics: null,
};


export const statisticSlice = createSlice({
    name: 'statistic',
    initialState,
    reducers: {

        setStatistics: (state: StatisticState, { payload }: PayloadAction<Statistic>) => {
            state.statistics = payload;
        },
        cleanStatistics: (state: StatisticState) => {
            state.statistics = null;
        }
    }
});



export const { setStatistics } = statisticSlice.actions;