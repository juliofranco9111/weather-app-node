const axios = require('axios');


const getPlaceLatLng = async (dir) => {

   const encodedUrl = encodeURI(dir);


   const instance = axios.create({
      baseURL: `https://geohub3.p.rapidapi.com/cities/search/${encodedUrl}`,
      headers: { 'x-rapidapi-key': '74721b1760msh64dc299f65ef406p1d50a5jsn5de7e345b5f2' }
   });

   const respuesta = await instance.get();

   if (respuesta.data.data.cities.length === 0) {
      throw new Error(`No hay resultados para ${dir}`);

   }
   const city = respuesta.data.data.cities[0];
   const direction = city.name;
   const lat = city.latitude;
   const lng = city.longitude;


   return {

      direction,
      lat,
      lng
   }


}


module.exports = {
   getPlaceLatLng
}



