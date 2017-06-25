const request = require('request');

var getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/43355902245dec955074f25b9f1caebc/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        // ERROR HANDLING
        if (!error && response.statusCode === 200) {
            callback(undefined, { // first arg undefined bc no errorMessage
                temperature: body.currently.temperature, 
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.')
        }
    });
};

module.exports.getWeather = getWeather;
