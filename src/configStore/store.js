import { legacy_createStore as createStore } from 'redux';
import {weatherReducer} from "../redusers/reducerWeather.js";



const initialState = {
    weather: {},
    message: 'Enter city name',
};
export const store = createStore(weatherReducer, initialState);
