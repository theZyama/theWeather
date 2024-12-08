export const SET_WEATHER = 'SET_WEATHER';
export const SET_WEATHER_ERROR = 'SET_WEATHER_ERROR';

import { api_key, base_url } from '../utils/constants.js';

export const setWeatherData = (data) => ({
    type: SET_WEATHER,
    payload: data,
});

export const setWeatherError = (message) => ({
    type: SET_WEATHER_ERROR,
    payload: message,
});

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then((result) => result.json())
            .then((data) => {
                dispatch(
                    setWeatherData({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: new Date(data.sys.sunset * 1000),
                    })
                );
            })
            .catch((e) => {
                console.log(e);
                dispatch(setWeatherError('Enter correct city name'));
            });
    };
};