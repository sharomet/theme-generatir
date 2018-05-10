import path from 'path';
import fs from 'fs';

exports.getAllThemes = (req, res) => {
    res.send(JSON.parse(fs.readFileSync(path.join('./assets/themes/themes.json'), 'utf8')));
};