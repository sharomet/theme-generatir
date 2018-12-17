import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Router } from './routes/Router'

class App {

    constructor() {
        this.app = express();
        this.pathToClient = '../client/';
        this.config();
        this.route = new Router();
        this.route.routes(this.app);
        this.app.use('*', (req, res) => {
            res.sendFile(__dirname, path.join(this.pathToClient + 'index.html'));
        });
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, this.pathToClient)));
    }
}

export default new App().app;