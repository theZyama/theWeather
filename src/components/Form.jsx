import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";
import {putMessage, putWeatherInfo} from "../actions/weatherAction.js";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(putWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(putMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;