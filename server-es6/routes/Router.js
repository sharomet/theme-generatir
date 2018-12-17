import { HomeController } from '../controllers/';
import { EditController } from '../controllers/';

// router.get('/home', HomeController.getAllThemes);
/*router.get('/home', (req, res) => {
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

router.post('/build', EditController.buildTheme);*/
/*router.post('/create', HomeController.createTheme);
router.post('/delete', HomeController.createTheme);*/

export class Router {

    constructor(){
        this.homeController = new HomeController();
        this.editController = new EditController();
    }

    routes(app) {
        app.get('/api/home', (req, res) => res.send(this.homeController.getAllThemes()));
        app.post('/api/build', (req, res) => this.editController.buildTheme(req, res));
        //app.route('/api/user/:id').get(this.userController.getUserById);
    }
}