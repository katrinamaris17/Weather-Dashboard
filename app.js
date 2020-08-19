$(document).ready(function (){

    // Setting Current Date for Main City
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // Setting Dates for 5-Day Forecast
    $("#dayOne").text(moment().add(1, 'days').calendar());

    $("#dayTwo").text(moment().add(2, 'days').calendar());

    $("#dayThree").text(moment().add(3, 'days').calendar());

    $("#dayFour").text(moment().add(4, 'days').calendar());

    $("#dayFive").text(moment().add(5, 'days').calendar());

    //Create an event listener for the "search bar"
    $(".listSearch").on("click", function() {
        let 


    });
var APIkey = 'fd37870e3efc4ef4cbd12f30d7ae76f2';
var defaultCity = "San Francisco";
var honolulu = "Honolulu"; 
var newYork = "New York";
var denver = "Denver";
var tokyo = "Tokyo";
var london = "London";
var userInput = "";


// UPDATE FOR DEFAULT CITY
$.ajax({
url: `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${APIkey}`,
method: "GET"
}).then(function(response) {
    var defaultCity = response.name;
    var weather = response.weather.icon;
    var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.main.humidity;
    var windSpeed = response.wind.speed;
 
 
    $('.currentCity').append('<h1>').text(`City: ${defaultCity}`)
    $('.weather').append('<p>').text(`Weather: ${weather}`)
    $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
    $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
    $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)

})

// 5day forecast

$.ajax ({
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${APIkey}`,
    method: "GET"
}).then(function(response){
    console.log(response);
    // Next day forecast
    var date = response.list[0].dt_txt;
    var temperature = (Math.floor(parseInt(response.list[0].main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.list[0].main.humidity;

    $('.dayOnedate').append('<h1>').text(`Date: ${date}`)
    $('.dayOnetemp').append('<h2>').text(`Temperature: ${temperature} F`)
    $('.dayOnehumidity').append('<p>').text(`Humidity: ${humidity}`)

    // Day Two Forecast
    var date = response.list[8].dt_txt;
    var temperature = (Math.floor(parseInt(response.list[8].main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.list[8].main.humidity;

    $('.dayTwodate').append('<h1>').text(`Date: ${date}`)
    $('.dayTwotemp').append('<h2>').text(`Temperature: ${temperature} F`)
    $('.dayTwohumidity').append('<p>').text(`Humidity: ${humidity}`)

    // Day Three Forecast
    var date = response.list[16].dt_txt;
    var temperature = (Math.floor(parseInt(response.list[16].main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.list[16].main.humidity;

    $('.dayThreedate').append('<h1>').text(`Date: ${date}`)
    $('.dayThreetemp').append('<h2>').text(`Temperature: ${temperature} F`)
    $('.dayThreehumidity').append('<p>').text(`Humidity: ${humidity}`)

    // Day Four Forecast
    var date = response.list[24].dt_txt;
    var temperature = (Math.floor(parseInt(response.list[24].main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.list[24].main.humidity;

    $('.dayFourdate').append('<h1>').text(`Date: ${date}`)
    $('.dayFourtemp').append('<h2>').text(`Temperature: ${temperature} F`)
    $('.dayFourhumidity').append('<p>').text(`Humidity: ${humidity}`)

    // Day Five Forecast
    var date = response.list[32].dt_txt;
    var temperature = (Math.floor(parseInt(response.list[32].main.temp) - 273.15) * 1.80 + 32);
    var humidity = response.list[32].main.humidity;
    
    $('.dayFivedate').append('<h1>').text(`Date: ${date}`)
    $('.dayFivetemp').append('<h2>').text(`Temperature: ${temperature} F`)
    $('.dayFivehumidity').append('<p>').text(`Humidity: ${humidity}`)
    


})
// USER SEARCH
$(".searchBtn").on("click", function () {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var userInput = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
         
            $('.currentCity').append('<h1>').text(`City: ${userInput}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })  
});


//OTHER CITIES:
$(".honolulu").on("click", function() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${honolulu}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var honolulu = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
         
            $('.currentCity').append('<h1>').text(`City: ${honolulu}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })
});

$(".newYork").on("click", function() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${newYork}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var newYork = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
         
            $('.currentCity').append('<h1>').text(`City: ${newYork}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })
    });

$(".denver").on("click", function() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${denver}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var denver = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
         
            $('.currentCity').append('<h1>').text(`City: ${denver}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })

});

$(".tokyo").on("click", function() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${tokyo}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var tokyo = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
         
            $('.currentCity').append('<h1>').text(`City: ${tokyo}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })

});

$(".london").on("click", function() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${APIkey}`,
        method: "GET"
        }).then(function(response) {
            var london = response.name;
            var weather = response.weather.icon;
            var temperature = (Math.floor(parseInt(response.main.temp) - 273.15) * 1.80 + 32);
            var humidity = response.main.humidity;
            var windSpeed = response.wind.speed;
            console.log(response);
         
            $('.currentCity').append('<h1>').text(`City: ${london}`)
            $('.weather').append('<p>').text(`Weather: ${weather}`)
            $('.temperature').append('<p>').text(`Temperature: ${temperature} F`)
            $('.humidity').append('<p>').text(`Humidity: ${humidity}`)
            $('.windSpeed').append('<p>').text(`Wind Speed: ${windSpeed}`)
        })

});  


// 5-DAY FORECAST
// $.ajax({
//     url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`,
//     method: "GET"
// }).then(function(response) {
//     var city = response.name;
//     console.log(response); 
   

// })
});