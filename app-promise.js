const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true, // required address to fetch weather for
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true // tells yargs to always parse 'a' as a string
        }
    }) // saves final parsed output from yargs
    .help() // help flag
    .alias('help', 'h') // adds alias to previous method
    .argv; // takes config and runs through args, stores in argv variable

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.'); // creates and throws error | e.message
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/43355902245dec955074f25b9f1caebc/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);// return new Promise, chain calls together
}).then((response) => { // runs when weather data comes back successfully
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => { // ERROR HANDLING
    if (e.code === 'ENOTFOUND') { 
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message); // refers to errorMessage we created above
    }
}); 
// http GET request when expecting JSON data, pass in URL | auto-parses
// axios.get() returns a promise
