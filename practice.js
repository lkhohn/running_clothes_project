// zipcodeAPI key
// js-Q7YvTzD1xCqPIsNTh4QTV4lKHk8NHoyxww3p6HqDjRt2jgVBlLvhQQ2xaalSyUq4

//flickr API key
// 4ecdea272c9fed692c944e941da9ed73



var above30 = document.getElementsByClassName('above30')[0];
above30.style.display = 'none';

var between20and30 = document.getElementsByClassName('between20and30')[0];
between20and30.style.display = 'none';

var between10and20 = document.getElementsByClassName('between10and20')[0];
between10and20.style.display = 'none';

var between0and10 = document.getElementsByClassName('between0and10')[0];
between0and10.style.display = 'none';

var between0andneg20 = document.getElementsByClassName('between0andneg20')[0];
between0andneg20.style.display = 'none';

var below20 = document.getElementsByClassName('below20')[0];
below20.style.display = 'none';


var cityInput = document.querySelector('#cityInput');
var stateInput = document.querySelector('#stateInput');
var button = document.querySelector('#button');

button.addEventListener('click', function(event){
  event.preventDefault();

  // city name to zip
  // $.ajax({
  //   url: 'https://www.zipcodeapi.com/rest/js-Q7YvTzD1xCqPIsNTh4QTV4lKHk8NHoyxww3p6HqDjRt2jgVBlLvhQQ2xaalSyUq4/city-zips.json/'+cityInput.value+'/'+stateInput.value,
  //   method: "GET",
  //   success: function(data) {
  //     var allZip = JSON.stringify(data);
  //     var zipObject = JSON.parse(allZip);
  //     firstZip = zipObject['zip_codes'][0];
  //     console.log(firstZip);
  //   }
  // });

  //  weather based on zip
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+',840&APPID=d6cf401d582e33e634bca26a32b22f60',
    method: "GET",
    success: function(data) {
      var weatherData = JSON.stringify(data);
      var weatherObject = JSON.parse(weatherData);
      //convert temperature to Fahrenheit
      var kelvin = weatherObject.main.temp;
      function roundTemperature(kelvin){
      kelvin = kelvin.toFixed(1);
      return kelvin;
      }
      var far = (kelvin - 273.25) * 1.800 + 32.00;

      if(far >= 30){
        above30.style.display = 'block';
        }
      else if (far >= 20 && far <= 29){
         between20and30.style.display = 'block';
        }
      else if(far >= 10 && far <= 19){
          between10and20.style.display = 'block';
        }
      else if(far >= 0 && far <= 9){
        between0and10.style.display = 'block';
        }
       else if(far <= -1 && far >= -20){
         between0andneg20.style.display = 'block';
        }
       else if(far <=-21){
          below20.style.display = 'block';
        }

      var weatherDescription = weatherObject.weather[0].description;
        //  console.log(weatherDescription);
        for(var key in weatherID){
          if(weatherDescription === weatherID[key]){
            console.log('it worked');
             $('#header').append("<img src='http://frugivoremag.com/cms/wp-content/uploads/2012/10/Screen-Shot-2012-10-17-at-1.29.08-AM.png' />");
          }
        }
    }
  });
});












var weatherID ={
  // thunderstorm
  200: 'thunderstorm with light rain',
  201: 'thunderstorm with rain',
  202: 'thunderstorm with heavy rain',
  210:	'light thunderstorm',
  211:	'thunderstorm',
  212:	'heavy thunderstorm',
  221:	'ragged thunderstorm',
  230:	'thunderstorm with light drizzle',
  231:	'thunderstorm with drizzle',
  232:	'thunderstorm with heavy drizzle',
  // drizzle
  300:	'light intensity drizzle',
  301:	'drizzle',
  302:	'heavy intensity drizzle',
  310:	'light intensity drizzle rain',
  311:	'drizzle rain',
  312:	'heavy intensity drizzle rain',
  313:	'shower rain and drizzle',
  314:	'heavy shower rain and drizzle',
  321:	'shower drizzle',
  // rain
  500:	'light rain',
  501:	'moderate rain',
  502:	'heavy intensity rain',
  503:	'very heavy rain',
  504:	'extreme rain',
  511:	'freezing rain',
  520:	'light intensity shower rain',
  521:	'shower rain',
  522:	'heavy intensity shower rain',
  531:	'ragged shower rain',
  // snow
  600:	'light snow',
  601:	'snow',
  602:	'heavy snow',
  611:	'sleet',
  612:	'shower sleet',
  615:	'light rain and snow',
  616:	'rain and snow',
  620:	'light shower snow',
  621:	'shower snow',
  622:	'heavy shower snow',
// atmosphere
  701:	'mist',
  711:	'smoke',
  721:	'haze',
  731:	'Sand/Dust Whirls',
  741:	'Fog',
  751:	'sand',
  761:	'dust',
  762:	'VOLCANIC ASH',
  771:	'SQUALLS',
  781:	'TORNADO',
// clouds
  800:	'sky is clear',
  801:	'few clouds',
  802:	'scattered clouds',
  803:	'broken clouds',
  804:	'overcast clouds',
// extreme
  900:	'tornado',
  901:	'tropical storm',
  902:	'hurricane',
  903:	'cold',
  904:	'hot',
  905:	'windy',
  906:	'hail',
// additional
  950:	'Setting',
  951:	'Calm',
  952:	'Light breeze',
  953:	'Gentle Breeze',
  954:	'Moderate breeze',
  955:	'Fresh Breeze',
  956:	'Strong breeze',
  957:	'High wind, near gale',
  958:	'Gale',
  959:	'Severe Gale',
  960:	'Storm',
  961:	'Violent Storm',
  962:	'Hurricane'
  };
