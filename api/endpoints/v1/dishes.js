const router =  require('express').Router();
const dishesService = require('../../services/dishesService');

router.get('/', (req, res) => {
	dishesService.getAll().then((dishes) => {
		return res.json(dishes);
	});
});

module.exports = router;
