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


const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email =", email, ", name =", name, ", city =", city);

    // let { email, name, city } = req.body;



    // connection.query(
    //     `INSERT INTO Users(email, name, city) 
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);

    //         res.send('Created user successfully!');
    //     }
    // );


    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) 
        VALUES(?, ?, ?)`,
        [email, name, city]
    );

    console.log(">>> Check results:", results);
    res.send('Created user succeed');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage, getAbc, getAihoi, postCreateUser, getCreatePage
}