import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw,ne) => {
    try {
            const { data: { data }}= await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': '589b518a04mshdfccfdada8612dcp1c56b7jsn40c3e3a598ef',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              });
              
            return data;
          } catch (error) {
              console.log(error)
          }
}