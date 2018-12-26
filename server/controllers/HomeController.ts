import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';
import guid from 'guid';
const ncp = require('ncp');

import { Themes } from '../models/Theme'

export class HomeController  {

    constructor(){}

    public pathToThemes: any = path.join(__dirname, '../assets/themes/');

    public getAllThemes(req: Request, res: Response) {
        res.status(200).send(this.getThemes());
    }

    public getTheme(req: Request, res: Response) {
        const themes = <Themes[]>this.getThemes();
        themes.filter(theme => {
            theme.id == req.body.id
            res.status(200).send(theme);
        });
    }

    public createTheme(req: Request, res: Response) {
        let copyTheme = 'defaultTheme';
        let id = guid.create();
        let copy = false;
        let jsonData = this.getThemes();

        let theme = {
            id: id,
            name: req.body.name,
            copy: copy
        };

        jsonData.push(theme);

        this.saveJsonFile(jsonData, (result: any) => {
            if(!result) {
                res.send({'message': 'error'});
            } 
            ncp(this.pathToThemes + copyTheme, this.pathToThemes + id, (err:any) => {
                if(err) {
                    res.send({'message': 'error'});
                }
                res.send(theme);
            });
        });
    }

    public saveJsonFile(data: any, response: any) {
        fs.writeFile(this.pathToThemes + 'themes.json', JSON.stringify(data), (err) => {
            if(err) {
                response(false);
            } else {
                response(true);
            }
        });
    }

    public getThemes() {
        return JSON.parse(fs.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
    }

}