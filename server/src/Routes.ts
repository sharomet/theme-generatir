import { Request, Response } from 'express';
import { apiUrl } from './config/config.json';
import { HomeController, EditController } from './controllers';

export class Router {

    public homeController: HomeController = new HomeController();
    public editController: EditController = new EditController();

    public routes(app: any) {
        app.get(apiUrl + 'home', (req: Request, res: Response) => this.homeController.getAllThemes(req, res))
           .post(apiUrl + 'refresh', (req: Request, res: Response) => this.editController.refreshTheme(req, res))
           .post(apiUrl + 'build', (req: Request, res: Response) => this.editController.buildTheme(req, res))
           .post(apiUrl + 'create', (req: Request, res: Response) => this.homeController.createTheme(req, res))
           .get(apiUrl + 'theme/:id', (req: Request, res: Response) => this.homeController.getTheme(req, res));
    }
}