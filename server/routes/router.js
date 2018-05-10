import express from 'express';
import HomeController from '../controllers/HomeController.js';
import EditController from '../controllers/EditController.js';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('test');
});
router.get('/home', HomeController.getAllThemes);

module.exports = router;