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

var $cityInput = $('#cityInput');
var $stateInput = $('#stateInput');
var $button = $('#button');

button.addEventListener('click', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBwKaJeGg_n8IB1jeaGnvrQNEqe2d94iVQ',
    method: "POST",
    success: function(data) {
      var locationData = JSON.stringify(data);
      var locationObject = JSON.parse(locationData);
      var locationLat = locationObject.location.lat;
      var locationLng = locationObject.location.lng;
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/forecast?lat=' + locationLat + '&lon=' + locationLng + '&APPID=d6cf401d582e33e634bca26a32b22f60',
        method: "GET",
        success: function(data) {
          var weatherData = JSON.stringify(data);
          var weatherObject = JSON.parse(weatherData);
          var dayOneKelvin = weatherObject['list']['0']['main']['temp'];
          var dayTwoKelvin = weatherObject['list']['8']['main']['temp'];
          var dayThreeKelvin = weatherObject['list']['16']['main']['temp'];

          function dayOne(input) {
            var far = (input - 273.25) * 1.800 + 32.00;
            if (far >= 30) {
              $('#clothingRecDayOne').text('1 top, 1 bottom. long sleeve + tights');
              $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            } else if (far >= 20 && far < 30) {
              $('#clothingRecDayOne').text('2 tops, 1 bottom. long sleeve + vest + tights');
              $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            } else if (far >= 10 && far < 20) {
              $('#clothingRecDayOne').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
              $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            } else if (far >= 0 && far < 10) {
              $('#clothingRecDayOne').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
              $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            } else if (far <= -1 && far >= -20) {
              $('#clothingRecDayOne').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
              $('#clothingRecPicDayOne').css('background', 'url("ttp://i.imgur.com/gV2PjoJm.jpg")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            } else if (far <= -21) {
              $('#clothingRecDayOne').text('do not run');
              $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
              $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
            }
          }
          dayOne(dayOneKelvin);


          function dayTwo(input) {
            var far = (input - 273.25) * 1.800 + 32.00;
            if (far >= 30) {
              $('#clothingRecDayTwo').text('1 top, 1 bottom. long sleeve + tights');
              $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            } else if (far >= 20 && far < 30) {
              $('#clothingRecDayTwo').text('2 tops, 1 bottom. long sleeve + vest + tights');
              $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            } else if (far >= 10 && far < 20) {
              $('#clothingRecDayTwo').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
              $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            } else if (far >= 0 && far < 10) {
              $('#clothingRecDayTwo').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
              $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            } else if (far <= -1 && far >= -20) {
              $('#clothingRecDayTwo').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
              $('#clothingRecPicDayTwo').css('background', 'url("ttp://i.imgur.com/gV2PjoJm.jpg")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            } else if (far <= -21) {
              $('#clothingRecDayTwo').text('do not run');
              $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
              $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
            }
          }
          dayTwo(dayTwoKelvin);

          function dayThree(input) {
            var far = (input - 273.25) * 1.800 + 32.00;
            if (far >= 30) {
              $('#clothingRecDayThree').text('1 top, 1 bottom. long sleeve + tights');
              $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            } else if (far >= 20 && far < 30) {
              $('#clothingRecDayThree').text('2 top, 1 bottom. long sleeve + vest + tights');
              $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            } else if (far >= 10 && far < 20) {
              $('#clothingRecDayThree').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
              $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            } else if (far >= 0 && far < 10) {
              $('#clothingRecDayThree').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
              $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            } else if (far <= -1 && far >= -20) {
              $('#clothingRecDayThree').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
              $('#clothingRecPicDayThree').css('background', 'url("ttp://i.imgur.com/gV2PjoJm.jpg")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            } else if (far <= -21) {
              $('#clothingRecDayThree').text('do not run');
              $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
              $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
            }
          }
          dayThree(dayThreeKelvin);

          var weatherObjectCurrent = weatherObject['list']['0']['weather']['0']['id'];

          function picSelector(x) {
            if (x <= 232 && x >= 200 || x === 960) {
              $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/thunderstorm-images-1500x500.jpg")');
            } else if (x <= 321 && x >= 300) {
              $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-drops-water-1500x500.jpg")');
            } else if (x <= 531 && x >= 500) {
              $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-pictures-1500x500.jpg")');
            } else if (x <= 622 && x >= 600) {
              $('.weatherImgSection').css('background', 'url("http://christoscommunity.org/wordpress/wp-content/uploads/2014/12/snow-1400x450.jpg")');
            } else if (x <= 781 && x >= 700) {
              $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/winter-fog-1500x500.jpg")');
            } else if (x <= 804 && x >= 800) {
              $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/clouds-wallpaper-1500x500.jpg")');
            } else if (x <= 906 && x >= 900 || x <= 962 && x >= 957) {
              $('.weatherImgSection').css('background', 'url("http://intellaclaim.com/wp-content/uploads/2015/02/intellaclaim-public-adjusters-miami-tornado-and-lighting.jpg")');
            } else if (x <= 956 && x >= 950) {
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
// $.ajax({
//   url: '/temp.json',
//   method: "GET",
//   success: function(data) {
//     var cityData = JSON.stringify(data);
//     var dataObject = JSON.parse(cityData);
//
//     function testClothing(input) {
//       if (input === dataObject.CityOne) {
//         $('#clothingRecDayOne').text('1 top, 1 bottom. long sleeve + tights');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('1 top, 1 bottom. long sleeve + tights');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('1 top, 1 bottom. long sleeve + tights');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/psuSURUm.jpg")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       } else if (input === dataObject.CityTwo) {
//         $('#clothingRecDayOne').text('2 top, 1 bottom. long sleeve + vest + tights');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('2 top, 1 bottom. long sleeve + vest + tights');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('2 top, 1 bottom. long sleeve + vest + tights');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/HsrxgbCm.jpg")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       } else if (input === dataObject.CityThree) {
//         $('#clothingRecDayOne').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('3 tops, 1 bottom. base layer + long sleeve + jacket + tights');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/Q9zXjHKm.jpg")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       } else if (input === dataObject.CityFour) {
//         $('#clothingRecDayOne').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/2huQDgPm.jpg")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       } else if (input === dataObject.CityFive) {
//         $('#clothingRecDayOne').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/gV2PjoJm.jpg")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/gV2PjoJm.jpg")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/gV2PjoJm.jpg")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       } else if (input === dataObject.CitySix) {
//         $('#clothingRecDayOne').text('do not run');
//         $('#clothingRecPicDayOne').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
//         $('#clothingRecPicDayOne').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayTwo').text('do not run');
//         $('#clothingRecPicDayTwo').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
//         $('#clothingRecPicDayTwo').css('background-repeat', 'no-repeat');
//         $('#clothingRecDayThree').text('do not run');
//         $('#clothingRecPicDayThree').css('background', 'url("http://i.imgur.com/5lP8bdIm.png")');
//         $('#clothingRecPicDayThree').css('background-repeat', 'no-repeat');
//       }
//     }
//     testClothing(15);
//   }
// });
// TESTING SECTION
// $.ajax({
//   url: '/test.json',
//   method: "GET",
//   success: function(data) {
//     var weatherData = JSON.stringify(data);
//     var dataObject = JSON.parse(weatherData);
//
//     function testWeather(input) {
//       if (input === dataObject.weather200) { // thunderstorm
//         $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/thunderstorm-images-1500x500.jpg")');
//       } else if (input === dataObject.weather300) { // drizzle
//         $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-drops-water-1500x500.jpg")');
//       } else if (input === dataObject.weather500) { // rain
//         $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/rain-pictures-1500x500.jpg")');
//       } else if (input === dataObject.weather600) { // snow
//         $('.weatherImgSection').css('background', 'url("http://christoscommunity.org/wordpress/wp-content/uploads/2014/12/snow-1400x450.jpg")');
//       } else if (input === dataObject.weather700) { // atmosphere -- mist,haze,fog
//         $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/winter-fog-1500x500.jpg")');
//       } else if (input === dataObject.weather800) { // cloudy
//         $('.weatherImgSection').css('background', 'url("http://hddesktopwallpapers.in/wp-content/uploads/2015/09/clouds-wallpaper-1500x500.jpg")');
//       } else if (input === dataObject.weather900) { // extreme hurricanes
//         $('.weatherImgSection').css('background', 'url("http://intellaclaim.com/wp-content/uploads/2015/02/intellaclaim-public-adjusters-miami-tornado-and-lighting.jpg")');
//       } else if (input === dataObject.weather950) { // pleasant
//         $('.weatherImgSection').css('background', 'url("http://cdn.twitrcovers.com/wp-content/uploads/2014/05/One-Sunny-Spring-Day-l.jpg")');
//       }
//     }
//     testWeather(800);
//   }
// });
