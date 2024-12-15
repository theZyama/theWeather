import {putMessage} from "../slices/messageSlice.js";
import {putWeatherInfo} from "../slices/weatherSlice.js";
import {api_key, base_url} from "../../utils/constants.js";

export const fetchWeather = city => {
    return async dispatch => {
        dispatch(putMessage('Pending...'))
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            dispatch(putWeatherInfo({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset * 1000
            }));
            dispatch(putMessage(''));
        } catch (e) {
            console.log(e);
            dispatch(putMessage(e.message));
        }
    }
}