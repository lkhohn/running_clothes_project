// zipcodeAPI key
// js-Q7YvTzD1xCqPIsNTh4QTV4lKHk8NHoyxww3p6HqDjRt2jgVBlLvhQQ2xaalSyUq4

// google maps API SERVER
// AIzaSyBwKaJeGg_n8IB1jeaGnvrQNEqe2d94iVQ
// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBwKaJeGg_n8IB1jeaGnvrQNEqe2d94iVQ


var dayOne = new Date();
var day = dayOne.getDate();
var month = dayOne.getMonth() + 1;
var year = dayOne.getFullYear();
var dayTwo = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var dayThree = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
document.querySelector('#dayOne').innerText = dayOne;
document.querySelector('#dayTwo').innerText = dayTwo;
document.querySelector('#dayThree').innerText = dayThree;

$('#howItWorksButton').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
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

  // $('.container').empty();
  // //create a function that will clear anything that was appended
  // // save the appended data into the history
  // function resetform() {
  // document.getElementsByTagName("body").reset();
  //
  // }


  $.ajax({
    url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBwKaJeGg_n8IB1jeaGnvrQNEqe2d94iVQ',
    method: "POST",
    success: function(data) {
      var locationData = JSON.stringify(data);
      var locationObject = JSON.parse(locationData);
      var locationLat = locationObject.location.lat;
      var locationLng= locationObject.location.lng;
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?lat='+locationLat+'&lon='+locationLng+'&APPID=d6cf401d582e33e634bca26a32b22f60',
      method: "GET",
      success: function(data) {
        var weatherData = JSON.stringify(data);
        var weatherObject = JSON.parse(weatherData);
        console.log(weatherObject);
        var dayOneKelvin = weatherObject['list']['0']['main']['temp'];
        var dayTwoKelvin = weatherObject['list']['8']['main']['temp'];
        var dayThreeKelvin = weatherObject['list']['16']['main']['temp'];
          function dayOne (input) {
            var far = (input - 273.25) * 1.800 + 32.00;
              if(far >= 30){
                  $('#clothingRecDayOne').append('<br>1 top, 1 bottom.<br> long sleeve + tights');
                  $('#clothingRecDayOne').append("<img class='clothingRecImage' src='http://www.galjaja.com/wp-content/uploads/2014/05/30/2/955-Nike-Dri-FIT-Knit-Long-Sleeve-Half-Zip-Running-Shirt-for-Women-4.jpg'/>");
                  }
                else if (far >= 20 && far < 30){
                   $('#clothingRecDayOne').append('<br>2 top, 1 bottom.<br> long sleeve + vest + tights');
                   $('#clothingRecDayOne').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/b7/c4/67/b7c467d50b86a2bf5bf910f02170897a.jpg'/>");
                  }
                else if(far >= 10 && far < 20){
                  $('#clothingRecDayOne').append('<br>2 tops, 2 bottoms.<br> base layer + jacket + tights + pants');
                  $('#clothingRecDayOne').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/29/a4/d0/29a4d0c9c193879327b22ff341382743.jpg'/>");
                  }
                else if(far >= 0 && far < 10){
                  $('#clothingRecDayOne').append('<br>3 tops, 2 bottoms.<br> base layer + fleece + jacket + tights + pants');
                  $('#clothingRecDayOne').append("<img class='clothingRecImage' src='http://www.nycrunningmama.com/wp-content/uploads/2015/02/photo-99.jpg'/>");
                  }
                 else if(far <= -1 && far >= -20){
                   $('#clothingRecDayOne').append('<br>3 tops, 3 bottoms.<br> base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                   $('#clothingRecDayOne').append("<img class='clothingRecImage' src='http://cdn.gearpatrol.com/wp-content/uploads/2015/11/layers-to-run-gear-patrol-6.jpg'/>");
                  }
                 else if(far <=-21){
                    $('#clothingRecDayOne').append('<br>do not run');
                    $('#clothingRecDayOne').append("<img class='clothingRecImage' src='http://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme51.png'/>");
                  }
                }
              dayOne(dayOneKelvin);


          function dayTwo (input) {
            var far = (input - 273.25) * 1.800 + 32.00;
                if(far >= 30){
                  $('#clothingRecDayTwo').append('<br>1 top, 1 bottom.<br> long sleeve + tights');
                  $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='http://www.galjaja.com/wp-content/uploads/2014/05/30/2/955-Nike-Dri-FIT-Knit-Long-Sleeve-Half-Zip-Running-Shirt-for-Women-4.jpg'/>");
                  }
                else if (far >= 20 && far < 30){
                  $('#clothingRecDayTwo').append('<br>2 top, 1 bottom.<br> long sleeve + vest + tights');
                  $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/b7/c4/67/b7c467d50b86a2bf5bf910f02170897a.jpg'/>");
                  }
                else if(far >= 10 && far < 20){
                  $('#clothingRecDayTwo').append('<br>2 tops, 2 bottoms.<br> base layer + jacket + tights + pants');
                  $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/29/a4/d0/29a4d0c9c193879327b22ff341382743.jpg'/>");
                  }
                else if(far >= 0 && far < 10){
                  $('#clothingRecDayTwo').append('<br>3 tops, 2 bottoms.<br> base layer + fleece + jacket + tights + pants');
                  $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='http://www.nycrunningmama.com/wp-content/uploads/2015/02/photo-99.jpg'/>");
                  }
                 else if(far <= -1 && far >= -20){
                   $('#clothingRecDayTwo').append('<br>3 tops, 3 bottoms.<br> base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                   $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='http://cdn.gearpatrol.com/wp-content/uploads/2015/11/layers-to-run-gear-patrol-6.jpg'/>");
                  }
                 else if(far <=-21){
                   $('#clothingRecDayTwo').append('<br>do not run');
                    $('#clothingRecDayTwo').append("<img class='clothingRecImage' src='http://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme51.png'/>");
                  }
                }
                dayTwo(dayTwoKelvin);

                function dayThree (input) {
                  var far = (input - 273.25) * 1.800 + 32.00;
                  if(far >= 30){
                    $('#clothingRecDayThree').append('<br>1 top, 1 bottom.<br> long sleeve + tights');
                    $('#clothingRecDayThree').append("<img class='clothingRecImage' src='http://www.galjaja.com/wp-content/uploads/2014/05/30/2/955-Nike-Dri-FIT-Knit-Long-Sleeve-Half-Zip-Running-Shirt-for-Women-4.jpg'/>");
                    }
                  else if (far >= 20 && far < 30){
                    $('#clothingRecDayThree').append('<br>2 top, 1 bottom.<br> long sleeve + vest + tights');
                    $('#clothingRecDayThree').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/b7/c4/67/b7c467d50b86a2bf5bf910f02170897a.jpg'/>");
                    }
                  else if(far >= 10 && far < 20){
                    $('#clothingRecDayThree').append('<br>2 tops, 2 bottoms.<br> base layer + jacket + tights + pants');
                    $('#clothingRecDayThree').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/29/a4/d0/29a4d0c9c193879327b22ff341382743.jpg'/>");
                    }
                  else if(far >= 0 && far < 10){
                    $('#clothingRecDayThree').append('<br>3 tops, 2 bottoms.<br> base layer + fleece + jacket + tights + pants');
                    $('#clothingRecDayThree').append("<img class='clothingRecImage' src='http://www.nycrunningmama.com/wp-content/uploads/2015/02/photo-99.jpg'/>");
                    }
                   else if(far <= -1 && far >= -20){
                     $('#clothingRecDayThree').append('<br>3 tops, 3 bottoms.<br> base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                     $('#clothingRecDayThree').append("<img class='clothingRecImage' src='http://cdn.gearpatrol.com/wp-content/uploads/2015/11/layers-to-run-gear-patrol-6.jpg'/>");
                    }
                   else if(far <=-21){
                     $('#clothingRecDayThree').append('<br>do not run');
                     $('#clothingRecDayThree').append("<img class='clothingRecImage' src='http://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme51.png'/>");
                    }
                  }
                  dayThree(dayThreeKelvin);



          var weatherObjectCurrent=weatherObject['list']['0']['weather']['0']['id'];
              function picSelector (x) {
                if(x<=232 && x>=200 || x===960){
                $('.weatherImgSection').append("<img class='weatherImg' src='https://i.ytimg.com/vi/XDYChO5FMd4/hqdefault.jpg'/>");
                }
                else if(x<=321 && x>=300){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://rustikmagazine.com/wordpress/wp-content/uploads/2013/05/rain_GollyGForce-631x354.jpg'/>");
                }
                else if(x<=531 && x>=500){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://www.indigofragrance.com/images/lgrs0.gif'/>");
                }
                else if(x<=622 && x>=600){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://moovein.com/wp-content/uploads/2014/01/UnitAccessWhenSnowingFeature.jpg'/>");
                }
                else if(x<=781 && x>=700){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://globe-views.com/dcim/dreams/fog/fog-03.jpg'/>");
                }
                else if(x<=804 && x>=800){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://coclouds.com/wp-content/uploads/2011/05/variety-clouds-2011-05-21.jpg'/>");
                }
                else if(x<=906 && x>=900 || x<=962 && x>=957){
                $('.weatherImgSection').append("<img class='weatherImg' src='http://www.nature.com/news/2011/110907/images/weathers450.jpg'/>");
                }
                else if(x<=956 && x>=950){
                $('.weatherImgSection').append("<img class='weatherImg' src='https://c2.staticflickr.com/4/3033/2702962650_597b16eaa9_b.jpg'/>");
                }
              }
              picSelector(weatherObjectCurrent);
        }
      });
      $('h1').css('color', 'white');
    }
  });
});












// TESTING SECTION
//     $.ajax({
//       url: '/temp.json',
//       method: "GET",
//       success: function(data) {
//         var cityData = JSON.stringify(data);
//         var dataObject = JSON.parse(cityData);
//         function testClothing(input){
//         if(input === dataObject.CityOne){
//           above30.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='http://www.galjaja.com/wp-content/uploads/2014/05/30/2/955-Nike-Dri-FIT-Knit-Long-Sleeve-Half-Zip-Running-Shirt-for-Women-4.jpg'/>");
//         }
//         else if(input === dataObject.CityTwo){
//           between20and30.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/b7/c4/67/b7c467d50b86a2bf5bf910f02170897a.jpg'/>");
//         }
//         else if(input === dataObject.CityThree){
//           between10and20.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='https://s-media-cache-ak0.pinimg.com/236x/29/a4/d0/29a4d0c9c193879327b22ff341382743.jpg'/>");
//         }
//         else if(input === dataObject.CityFour){
//           between0and10.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='http://www.nycrunningmama.com/wp-content/uploads/2015/02/photo-99.jpg'/>");
//         }
//         else if(input === dataObject.CityFive){
//           between0andneg20.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='http://cdn.gearpatrol.com/wp-content/uploads/2015/11/layers-to-run-gear-patrol-6.jpg'/>");
//         }
//         else if(input === dataObject.CitySix){
//           below20.style.display = 'block';
//           $('#clothingRec').append("<img class='clothingRecImage' src='http://static.vibe.com/uploads/2014/01/VIBE-Vixen-Cold-Weather-Meme51.png'/>");
//         }
//         }
//         testClothing(-5);
//       }
// });
// TESTING SECTION
//     $.ajax({
//       url: '/test.json',
//       method: "GET",
//       success: function(data) {
//         var weatherData = JSON.stringify(data);
//         var dataObject = JSON.parse(weatherData);
//         function testWeather(input){
//           if(input === dataObject.weather200){
//             $('.weatherImgSection').append("<img class='weatherImg' src='https://i.ytimg.com/vi/XDYChO5FMd4/hqdefault.jpg'/>");
//           }
//           else if(input === dataObject.weather300){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://rustikmagazine.com/wordpress/wp-content/uploads/2013/05/rain_GollyGForce-631x354.jpg'/>");
//           }
//           else if(input === dataObject.weather500){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://www.indigofragrance.com/images/lgrs0.gif'/>");
//           }
//           else if(input === dataObject.weather600){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://moovein.com/wp-content/uploads/2014/01/UnitAccessWhenSnowingFeature.jpg'/>");
//           }
//           else if(input === dataObject.weather700){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://globe-views.com/dcim/dreams/fog/fog-03.jpg'/>");
//           }
//           else if(input === dataObject.weather800){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://coclouds.com/wp-content/uploads/2011/05/variety-clouds-2011-05-21.jpg'/>");
//           }
//           else if(input === dataObject.weather900){
//             $('.weatherImgSection').append("<img class='weatherImg' src='http://www.nature.com/news/2011/110907/images/weathers450.jpg'/>");
//           }
//           else if(input === dataObject.weather950){
//             $('.weatherImgSection').append("<img class='weatherImg' src='https://c2.staticflickr.com/4/3033/2702962650_597b16eaa9_b.jpg'/>");
//           }
//         }
//         testWeather(950);
// }
// });
