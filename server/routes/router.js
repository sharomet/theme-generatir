import express from 'express';
import HomeController from '../controllers/HomeController.js';
import EditController from '../controllers/EditController.js';

const router = express.Router();

router.post('/build', EditController.buildTheme);

router.get('/home', HomeController.getAllThemes);

module.exports = router;