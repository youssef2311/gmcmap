/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': 'e08fd66686mshd029a4784d0576cp1362a4jsnc41ca54be5f1',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': 'e08fd66686mshd029a4784d0576cp1362a4jsnc41ca54be5f1',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
