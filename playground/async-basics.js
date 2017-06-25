console.log('Starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000); // registering an async callback that will fire off in 2 seconds

setTimeout(() => {
    console.log('Second setTimeOut works');
}, 0); // no delay

console.log('Finishing up');