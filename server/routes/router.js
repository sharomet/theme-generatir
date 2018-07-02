import express from 'express';
import HomeController from '../controllers/HomeController.js';
import EditController from '../controllers/EditController.js';

const router = express.Router();

let themes = new HomeController();

// router.get('/home', HomeController.getAllThemes);
router.get('/home', (req, res) => {
    res.send(themes.getAllThemes());
});

router.post('/create', (req, res) => {
    themes.createTheme(req.body.name, (result) => {
        res.send(result);
    });
});

router.post('/delete/:id', (req, res) => {
    themes.deleteTheme(req.params.id, (result) => {
        res.send(result);
    });
});

/*router.post('/build', EditController.buildTheme);
router.post('/create', HomeController.createTheme);
router.post('/delete', HomeController.createTheme);*/

export default router;