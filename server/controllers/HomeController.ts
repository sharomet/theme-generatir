import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';
import guid from 'guid';
import ncp from 'ncp';

export class HomeController {

    public pathToThemes: any = path.join(__dirname, '../assets/themes/');

    public getAllThemes(req: Request, res: Response) {
        res.status(200).send(this.getThemes());
    }

    public getThemes() {
        return JSON.parse(fs.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
    }

}