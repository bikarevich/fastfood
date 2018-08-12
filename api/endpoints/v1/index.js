const router = require('express').Router();

router.use('/dishes', require('./dishes'));
router.use('/users', require('./users'));

module.exports = router;
