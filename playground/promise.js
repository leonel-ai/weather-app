var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers!');
            }
        }, 1500);
    })
};

asyncAdd(5, '7').then((res) => {  // could also make var and add .then, but tack on end is better
    console.log('Result: ', res);
    return asyncAdd(res, 33); // returning a new promise, add chaining onto it by calling .then again
}).then((res) => { // success handler fn
    console.log('Should be 45', res);
}).catch((errorMessage) => { // catch promise method similar to .then, takes 1 arg - error handler
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     // anything involved in asyn action
//     setTimeout(() => { // artificial delay
//         // if fulfilled, resolved state
//         // resolve('Hey. It worked!'); 
//         // if fails, rejected state
//         reject('Unable to fulfill promise.');
//     }, 2500);
// });

// somePromise.then((message) => {    // func only called if promise gets fulfilled, with value passed to resolve
// // in this case message, but could be user obj in the case of a db call
//     console.log('Success.', message);
// }, (errorMessage) => { // 2nd arg allows error handling, with value passed to reject
//     console.log('Error: ', errorMessage);
// });