import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../features/slices/weatherSlice"
import message from "../features/slices/messageSlice"

export const store = configureStore({
    reducer: {
        weatherInfo, message
    }
})