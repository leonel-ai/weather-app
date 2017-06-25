const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

// 1301 lombard street user input
// set up url to be dynamic
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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});


// lat, lng, callback
