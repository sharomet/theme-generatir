import { Request, Response } from 'express'

import { HomeController, EditController } from './controllers'

export class Router {

    public homeController: HomeController = new HomeController();
    public editController: EditController = new EditController();

    public routes (app: any) {
        app.get('/api/home', (res: Response) => this.homeController.getAllThemes(res));
        app.post('/api/build', (req: Request, res: Response) => this.editController.build(req, res));
    }
}