const request = require('request');
const yargs = require('yargs');

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

    var encodedAddress = encodeURIComponent(argv.address);

request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true // convert json data to js obj
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`); // found with json view in chrome
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`); // print latitude
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`); // print longitude
});