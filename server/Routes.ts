import { Request, Response } from 'express'

import { HomeController } from './controllers'

export class Router {

    public homeController: HomeController = new HomeController();

    public routes (app: any) {
        app.get('/api/home', (res: Response) => this.homeController.getAllThemes(res));
        //app.route('/api/home').get((req: Request, res: Response) => res.send(this.homeController.getAllThemes));
    }
}