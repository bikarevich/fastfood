const router =  require('express').Router();

router.get('/:id', (req, res) => {
	return res.status(200).json({ test: 1 });
});

module.exports = router;
