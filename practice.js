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

var cityInput = document.querySelector('#cityInput');
var stateInput = document.querySelector('#stateInput');
var button = document.querySelector('#button');

button.addEventListener('click', function(event){
  event.preventDefault();

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
        var dayOneKelvin = weatherObject['list']['0']['main']['temp'];
        var dayTwoKelvin = weatherObject['list']['8']['main']['temp'];
        var dayThreeKelvin = weatherObject['list']['16']['main']['temp'];
          function dayOne (input) {
            var far = (input - 273.25) * 1.800 + 32.00;
              if(far >= 30){
                  $('#clothingRecDayOne').text('1 top, 1 bottom. long sleeve + tights');
                  $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
                  }
                else if (far >= 20 && far < 30){
                   $('#clothingRecDayOne').text('2 tops, 1 bottom. long sleeve + vest + tights');
                   $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
                  }
                else if(far >= 10 && far < 20){
                  $('#clothingRecDayOne').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
                  $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
                  }
                else if(far >= 0 && far < 10){
                  $('#clothingRecDayOne').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
                  $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
                  }
                 else if(far <= -1 && far >= -20){
                   $('#clothingRecDayOne').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                   $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
                  }
                 else if(far <=-21){
                    $('#clothingRecDayOne').text('do not run');
                    $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
                  }
                }
              dayOne(dayOneKelvin);


          function dayTwo (input) {
            var far = (input - 273.25) * 1.800 + 32.00;
                if(far >= 30){
                  $('#clothingRecDayTwo').text('1 top, 1 bottom. long sleeve + tights');
                  $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
                  }
                else if (far >= 20 && far < 30){
                  $('#clothingRecDayTwo').text('2 tops, 1 bottom. long sleeve + vest + tights');
                  $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
                  }
                else if(far >= 10 && far < 20){
                  $('#clothingRecDayTwo').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
                  $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
                  }
                else if(far >= 0 && far < 10){
                  $('#clothingRecDayTwo').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
                  $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
                  }
                 else if(far <= -1 && far >= -20){
                   $('#clothingRecDayTwo').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                   $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
                  }
                 else if(far <=-21){
                   $('#clothingRecDayTwo').text('do not run');
                  $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
                  }
                }
                dayTwo(dayTwoKelvin);

                function dayThree (input) {
                  var far = (input - 273.25) * 1.800 + 32.00;
                  if(far >= 30){
                    $('#clothingRecDayThree').text('1 top, 1 bottom. long sleeve + tights');
                    $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
                    }
                  else if (far >= 20 && far < 30){
                    $('#clothingRecDayThree').text('2 top, 1 bottom. long sleeve + vest + tights');
                    $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
                    }
                  else if(far >= 10 && far < 20){
                    $('#clothingRecDayThree').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
                    $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
                    }
                  else if(far >= 0 && far < 10){
                    $('#clothingRecDayThree').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
                    $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
                    }
                   else if(far <= -1 && far >= -20){
                     $('#clothingRecDayThree').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
                     $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
                    }
                   else if(far <=-21){
                     $('#clothingRecDayThree').text('do not run');
                     $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
                    }
                  }
                  dayThree(dayThreeKelvin);

          var weatherObjectCurrent=weatherObject['list']['0']['weather']['0']['id'];
              function picSelector (x) {
                if(x<=232 && x>=200 || x===960){
                  $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/thunderstorm-images-1500x500.jpg")');
                }
                else if(x<=321 && x>=300){
                  $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-drops-water-1500x500.jpg")');
                }
                else if(x<=531 && x>=500){
                  $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-pictures-1500x500.jpg")');
                }
                else if(x<=622 && x>=600){
                  $('.weatherImgSection').css('background', 'url("http://christoscommunity.org/wordpress/wp-content/uploads/2014/12/snow-1400x450.jpg")');
                  }
                else if(x<=781 && x>=700){
                  $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/winter-fog-1500x500.jpg")');
                }
                else if(x<=804 && x>=800){
                  $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/clouds-wallpaper-1500x500.jpg")');
                }
                else if(x<=906 && x>=900 || x<=962 && x>=957){
                  $('.weatherImgSection').css('background', 'url("http://intellaclaim.com/wp-content/uploads/2015/02/intellaclaim-public-adjusters-miami-tornado-and-lighting.jpg")');
                }
                else if(x<=956 && x>=950){
                  $('.weatherImgSection').css('background', 'url("http://cdn.twitrcovers.com/wp-content/uploads/2014/05/One-Sunny-Spring-Day-l.jpg")');
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
//             $('#clothingRecDayOne').text('1 top, 1 bottom. long sleeve + tights');
//             $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
//             $('#clothingRecDayTwo').text('1 top, 1 bottom. long sleeve + tights');
//             $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
//             $('#clothingRecDayThree').text('1 top, 1 bottom. long sleeve + tights');
//             $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/BzeqXbK.jpg")');
//             }
//         else if(input === dataObject.CityTwo){
//           $('#clothingRecDayOne').text('2 top, 1 bottom. long sleeve + vest + tights');
//           $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
//           $('#clothingRecDayTwo').text('2 top, 1 bottom. long sleeve + vest + tights');
//           $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
//           $('#clothingRecDayThree').text('2 top, 1 bottom. long sleeve + vest + tights');
//           $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/Aunu7Bo.jpg")');
//           }
//         else if(input === dataObject.CityThree){
//           $('#clothingRecDayOne').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
//           $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
//           $('#clothingRecDayTwo').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
//           $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
//           $('#clothingRecDayThree').text('2 tops, 2 bottoms. base layer + jacket + tights + pants');
//           $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/ukdsMkS.jpg")');
//           }
//         else if(input === dataObject.CityFour){
//           $('#clothingRecDayOne').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//           $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
//           $('#clothingRecDayTwo').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//           $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
//           $('#clothingRecDayThree').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//           $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/kXyPsex.jpg")');
//           }
//         else if(input === dataObject.CityFive){
//           $('#clothingRecDayOne').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//           $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
//           $('#clothingRecDayTwo').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//           $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
//           $('#clothingRecDayThree').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//           $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/SLEVJHE.jpg")');
//           }
//         else if(input === dataObject.CitySix){
//           $('#clothingRecDayOne').text('do not run');
//           $('#clothingRecDayOne').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
//           $('#clothingRecDayTwo').text('do not run');
//           $('#clothingRecDayTwo').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
//           $('#clothingRecDayThree').text('do not run');
//           $('#clothingRecDayThree').css('background', 'url("http://i.imgur.com/0xCPN66.png")');
//       }
//         }
//         testClothing(35);
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
//             $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/thunderstorm-images-1500x500.jpg")');
//           }
//           else if(input === dataObject.weather300){
//             $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-drops-water-1500x500.jpg")');
//           }
//           else if(input === dataObject.weather500){
//             $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-pictures-1500x500.jpg")');
//           }
//           else if(input === dataObject.weather600){
//             $('.weatherImgSection').css('background', 'url("http://christoscommunity.org/wordpress/wp-content/uploads/2014/12/snow-1400x450.jpg")');
//           }
//           else if(input === dataObject.weather700){
//             $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/winter-fog-1500x500.jpg")');
//           }
//           else if(input === dataObject.weather800){
//             $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/clouds-wallpaper-1500x500.jpg")');
//           }
//           else if(input === dataObject.weather900){
//             $('.weatherImgSection').css('background', 'url("http://intellaclaim.com/wp-content/uploads/2015/02/intellaclaim-public-adjusters-miami-tornado-and-lighting.jpg")');
//           }
//           else if(input === dataObject.weather950){
//             $('.weatherImgSection').css('background', 'url("http://cdn.twitrcovers.com/wp-content/uploads/2014/05/One-Sunny-Spring-Day-l.jpg")')
//           }
//         }
//         testWeather(950);
// }
// });
