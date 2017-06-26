const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => { // set up Promise
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true // convert json data to js obj
        }, (error, response, body) => {
            // ERROR HANDLING
            if (error) { // if error obj exists, will run
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') { //check status property
                reject('Unable to find that address.');
            } else if (body.status === 'OK') { // if good data
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});