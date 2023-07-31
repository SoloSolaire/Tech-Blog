const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.render('homepage');
        return;
    }

    res.render('login', { logged_in: false});
});

module.exports = router;