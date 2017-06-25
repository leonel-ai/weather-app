const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
        console.log(JSON.stringify(results, undefined, 2)); // pretty print format
    }
});