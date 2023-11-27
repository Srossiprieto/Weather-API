
const APIKEY = 'c6d20e1c9d6c8079913d2207c5daa95b';

//  const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKEY}`

const baseUrl =  'https://api.openweathermap.org/data/2.5/weather';
// const queryParams = '?q={city}&units=metric&lang=es&appid={APIKEY}';



const getWeather = async (city) => {
    const response = await fetch(`${baseUrl}?q=${city}&units=metric&lang=es&appid=${APIKEY}`)
    const data = await response.json();
    console.log('data ===>', data);
    return data;
}