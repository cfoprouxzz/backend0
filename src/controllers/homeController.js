const getHomepage = (req, res) => {
    // process data
    // call model
    res.send('Hello World')
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