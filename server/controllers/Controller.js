import path from 'path';

class Controller {
    constructor(pathToThems) {
        this.pathToThems = path.join(__dirname, '../assets/themes/');
    }
}