import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeatherInfo: (state, action) => action.payload
    }
})

export const {putWeatherInfo} = weatherSlice.actions
export default weatherSlice.reducer