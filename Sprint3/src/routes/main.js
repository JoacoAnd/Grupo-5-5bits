let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(__dirname + '/views/home.html')
    // res.render('home', {titulo: 'HOME'});
})

module.exports = router;