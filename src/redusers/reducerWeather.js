import { SET_WEATHER, SET_WEATHER_ERROR } from '../actions/actionWeather.js';



export const weatherReducer = (state , action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload,
                message: '',
            };
        case SET_WEATHER_ERROR:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
};

