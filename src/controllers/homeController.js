const connection = require('../config/database');

const getHomepage = (req, res) => {
    // process data
    // call model
    // let users = [];

    // connection.query(
    //     'SELECT * FROM `Users`',
    //     function (err, results, fields) {
    //         if (err) {
    //             console.log(err);
    //             return res.status(500).send(err.message);
    //         }

    //         console.log(">>> results:", results);
    //         users = results;
    //         // console.log(">>>fields:", fields);

    //         console.log(">> Check Users: ", users);
    //         res.send(users);
    //     }
    // );
    return res.render('home.ejs');

}

const getAbc = (req, res) => {
    res.send('check Abc');
}

const getAihoi = (req, res) => {
    res.render('sample.ejs');
}


const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email =", email, ", name =", name, ", city =", city);

    // let { email, name, city } = req.body;


    res.send('create a new user');

    connection.query(
        `INSERT INTO Users(email, name, city) 
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
        }
    );
}

module.exports = {
    getHomepage, getAbc, getAihoi, postCreateUser
}