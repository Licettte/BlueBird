import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface initialTimerStateProps {
    totalSeconds?: number;
}

const initialTimerState: initialTimerStateProps = {
    totalSeconds: 10,
};

export const timerSlice = createSlice({
        name: 'timerSlice',
        initialState: {
            ...initialTimerState,
        },
        reducers: {
            setSeconds(state, action: PayloadAction<number>) {
                state.totalSeconds = action.payload;
            },
        },
    })
;

export const timerActions = timerSlice.actions;
export const timerReducer = timerSlice.reducer;
