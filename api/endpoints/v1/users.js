const router =  require('express').Router();
const usersService = require('../../services/usersService');

router.get('/', (req, res) => {
	usersService.getAll().then((users) => {
		return res.json(users);
	});
});

router.post('/', (req, res) => {
	usersService.create(req.body).then((user) => {
		const user1 = 1;
		return res.json(user);
	});
});

module.exports = router;
