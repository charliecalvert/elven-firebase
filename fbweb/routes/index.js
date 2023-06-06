import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', { title: 'ExpressSignin' });
});

export default router;
