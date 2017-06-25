const request = require('request');

request({
    url: 'https://maps.google.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
    json: true // data from json to js obj
}, (error, response, body) => {
    console.log(body);
});