import { useDispatch, useSelector } from 'react-redux';
import Form from './Form.jsx';
import Weather from './Weather.jsx';
import { fetchWeather } from '../actions/actionWeather';

const Data = () => {
    const dispatch = useDispatch();
    const { weather, message } = useSelector((state) => state);  // Извлекаем данные из Redux store

    const getWeather = (city) => {
        dispatch(fetchWeather(city));
    };

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weather={weather} />
        </div>
    );
};

export default Data;