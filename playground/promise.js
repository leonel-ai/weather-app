var somePromise = new Promise((resolve, reject) => {
    // anything involved in asyn action
    setTimeout(() => { // artificial delay
        // if fulfilled, resolved state
        // resolve('Hey. It worked!'); 
        // if fails, rejected state
        reject('Unable to fulfill promise.');
    }, 2500);
});

somePromise.then((message) => {    // func only called if promise gets fulfilled, with value passed to resolve
// in this case message, but could be user obj in the case of a db call
    console.log('Success.', message);
}, (errorMessage) => { // 2nd arg allows error handling, with value passed to reject
    console.log('Error: ', errorMessage);
});