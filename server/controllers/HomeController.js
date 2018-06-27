import path from 'path';
import fs from 'fs';
import guid from 'guid';
import ncp from 'ncp';

ncp.limit = 16;

const pathToJson = path.join('./assets/themes/themes.json');
const jsonFile = JSON.parse(fs.readFileSync(pathToJson, 'utf8'));

exports.getAllThemes = (req, res) => {
    res.send(jsonFile);
};

exports.createTheme = (req, res) => {
    let pathFolder = path.join('./assets/themes/');
    let copyTheme = 'defaultTheme';
    let id = guid.create().value;
    let name = req.body.name.trim();
    let copy = false;

    if(req.body.id) {
        copyTheme = req.body.id;
        copy = true;
    }

    const theme = {
        id: id,
        name: name,
        copy: copy
    };

    jsonFile.push(theme);

    fs.writeFile(pathToJson, JSON.stringify(jsonFile), (err) => {
        if(err){
            res.send({
                'message': 'error'
            });
        } else {
            ncp(pathFolder + copyTheme, pathFolder + id, (err) => {
                if (err) {
                    res.send({'message': 'error'});
                } else {
                    res.send({
                        message: 'success',
                        id: id,
                        name: name,
                        copy: copy
                    });
                }
            });
        }
    });

}