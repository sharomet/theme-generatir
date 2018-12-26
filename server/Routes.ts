import { Request, Response } from 'express'

import { HomeController, EditController } from './controllers'

export class Router {

    public homeController: HomeController = new HomeController();
    public editController: EditController = new EditController();
    private apiUrl = '/api/';

    public routes (app: any) {
        app.get(this.apiUrl + 'home', (req: Request, res: Response) => this.homeController.getAllThemes(req, res))
           .post(this.apiUrl + 'build', (req: Request, res: Response) => this.editController.build(req, res))
           .post(this.apiUrl + 'create', (req: Request, res: Response) => this.homeController.createTheme(req, res))
           .get(this.apiUrl + 'theme/:id', (req: Request, res: Response) => this.homeController.getTheme(req, res));
    }
}