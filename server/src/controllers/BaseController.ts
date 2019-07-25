import fs from 'fs';
import path from 'path';

export class BaseController {

  public pathToThemes: any = path.join(__dirname, '../assets/themes/');

  public getThemes() {
    return JSON.parse(fs.readFileSync(this.pathToThemes + 'themes.json', 'utf8'));
  }

}