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
      var far = (kelvin - 273.25) * 1.800 + 32.00
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
    },
  });
});


// change background picture based on weather
$.ajax({
  url: 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=4ecdea272c9fed692c944e941da9ed73&user_id=137982621@N05&format=json',
  method: "GET",
  success: function(data) {
    console.log(data);
    var headerImg = document.getElementsByClassName('.headerImg');
    headerImg.style.display=data;
  },
  error: function(errorObject, textStatus) {
      console.log(errorObject);
      console.log(textStatus);
  }
});




























// entry(input);
