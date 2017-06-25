var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    }; // comes from db queries, dummy user object currently

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObj) => {
    console.log(userObj);
});