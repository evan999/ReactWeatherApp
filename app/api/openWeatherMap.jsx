const axios= require('axios');

const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?&appid=2af7fde6dfca5396429eff49a7257b7e&units=imperial';
// 2af7fde6dfca5396429eff49a7257b7e

module.exports= {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    if (res.data.cod && res.data.message){
      throw new Error(res.data.message);
    }
    else{
      return res.data.main.temp;
    }
    axios.get(requestUrl).then(function (res){

    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
