// zipcodeAPI key
// js-Q7YvTzD1xCqPIsNTh4QTV4lKHk8NHoyxww3p6HqDjRt2jgVBlLvhQQ2xaalSyUq4


// scroll automatically to the how it works section
//select the button and when you click on it --do this function
$('.howItWorksButton').on('click', function(event) {
  // prevent it from automatically doing this
   event.preventDefault();
   // scroll through the page
   $('html, body').animate({
     // scroll to the howItWorks sections
        scrollTop: $('#howItWorks').offset().top
     }, 300);
});


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

  //  weather based on city and state input
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+',840&APPID=d6cf401d582e33e634bca26a32b22f60',
    method: "GET",
    success: function(data) {
      var weatherData = JSON.stringify(data);
      var weatherObject = JSON.parse(weatherData);
      var kelvin = weatherObject.main.temp;
      // round the outputted kelvin temperature
      function roundTemperature(kelvin){
        kelvin = kelvin.toFixed(1);
        return kelvin;
        }
      var far = (kelvin - 273.25) * 1.800 + 32.00;

      if(far >= 30){
        above30.style.display = 'block';
        $('#clothingRec').append("<img class='clothingRecImage' src='http://www.galjaja.com/wp-content/uploads/2014/05/30/2/955-Nike-Dri-FIT-Knit-Long-Sleeve-Half-Zip-Running-Shirt-for-Women-4.jpg'/>");
        }
      else if (far >= 20 && far <= 29){
         between20and30.style.display = 'block';
         $('#clothingRec').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/b7/c4/67/b7c467d50b86a2bf5bf910f02170897a.jpg'/>");
        }
      else if(far >= 10 && far <= 19){
          between10and20.style.display = 'block';
          $('#clothingRec').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/29/a4/d0/29a4d0c9c193879327b22ff341382743.jpg'/>");
        }
      else if(far >= 0 && far <= 9){
        between0and10.style.display = 'block';
        $('#clothingRec').append("<img class='clothingRecImage' src='http://www.nycrunningmama.com/wp-content/uploads/2015/02/photo-99.jpg'/>");
        }
       else if(far <= -1 && far >= -20){
         between0andneg20.style.display = 'block';
         $('#clothingRec').append("<img class='clothingRecImage' src='http://cdn.gearpatrol.com/wp-content/uploads/2015/11/layers-to-run-gear-patrol-6.jpg'/>");
        }
       else if(far <=-21){
          below20.style.display = 'block';
          $('#clothingRec').append("<img class='clothingRecImage' src='http://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme51.png'/>");

        }
        var weatherObjectCurrent=weatherObject.weather[0].id;
            function picSelector (x) {
              if(x<=232 && x>=200 || x===960){
              $('#header').append("<img class='weatherImg' src='https://i.ytimg.com/vi/XDYChO5FMd4/hqdefault.jpg'/>");
              }
              else if(x<=321 && x>=300){
              $('#header').append("<img class='weatherImg' src='http://rustikmagazine.com/wordpress/wp-content/uploads/2013/05/rain_GollyGForce-631x354.jpg'/>");
              }
              else if(x<=531 && x>=500){
              $('#header').append("<img class='weatherImg' src='http://www.indigofragrance.com/images/lgrs0.gif'/>");
              }
              else if(x<=622 && x>=600){
              $('#header').append("<img class='weatherImg' src='http://moovein.com/wp-content/uploads/2014/01/UnitAccessWhenSnowingFeature.jpg'/>");
              }
              else if(x<=781 && x>=700){
              $('#header').append("<img class='weatherImg' src='http://globe-views.com/dcim/dreams/fog/fog-03.jpg'/>");
              }
              else if(x<=804 && x>=800){
              $('#header').append("<img class='weatherImg' src='http://coclouds.com/wp-content/uploads/2011/05/variety-clouds-2011-05-21.jpg'/>");
              }
              else if(x<=906 && x>=900 || x<=962 && x>=957){
              $('#header').append("<img class='weatherImg' src='http://www.nature.com/news/2011/110907/images/weathers450.jpg'/>");
              }
              else if(x<=956 && x>=950){
              $('#header').append("<img class='weatherImg' src='https://c2.staticflickr.com/4/3033/2702962650_597b16eaa9_b.jpg'/>");
              }
            }
            picSelector(weatherObjectCurrent);
      }
    });
});
