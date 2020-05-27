export const GET_WEATHER = 'GET_WEATHER';

export const getWeather = (city) => ({
    type: GET_WEATHER,
    city
})

export const getWeatherSuccess = () => ({
    type: 'GET_WEATHER_SUCCESS',
})

export const getWeatherError = () => ({
    type: 'GET_WEATHER_ERROR',
})