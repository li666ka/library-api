const { Router } = require('express');

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('home');
});

module.exports = router;
