import express from 'express';
import HomeController from '../controllers/HomeController.js';
import EditController from '../controllers/EditController.js';

const router = express.Router();

router.get('/create', (req, res) => {
	let create = new EditController();
	res.send(create.createTheme());
});

router.get('/home', HomeController.getAllThemes);

module.exports = router;