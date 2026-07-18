const connection = require('../config/database');

const getHomepage = (req, res) => {
    // process data
    // call model
    let users = [];

    connection.query(
        'SELECT * FROM `Users`',
        function (err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err.message);
            }

            console.log(">>> results:", results);
            users = results;
            // console.log(">>>fields:", fields);

            console.log(">> Check Users: ", users);
            res.send(users);
        }
    );


}

const getAbc = (req, res) => {
    res.send('check Abc');
}

const getAihoi = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getAbc, getAihoi
}