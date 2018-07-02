import path from 'path';
import fs from 'fs';
import guid from 'guid';
import ncp from 'ncp';

ncp.limit = 16;

// exports.getAllThemes = (req, res) => {
//     jsonFile = JSON.parse(fs.readFileSync(pathToJson, 'utf8'));
//     res.send(jsonFile);
// };

// exports.createTheme = (req, res) => {

//     let pathFolder = path.join('./assets/themes/');
//     let copyTheme = 'defaultTheme';
//     let id = guid.create().value;
//     let name = req.body.name.trim();
//     let copy = false;
//     let theme = [];

//     if(req.body.id) {
//         copyTheme = req.body.id;
//         copy = true;
//     }

//     theme = {
//         id: id,
//         name: name,
//         copy: copy
//     };

//     jsonFile.push(theme);

//     fs.writeFile(pathToJson, JSON.stringify(jsonFile), (err) => {
//         if(err){
//             res.send({
//                 'message': 'error'
//             });
//         } else {
//             ncp(pathFolder + copyTheme, pathFolder + id, (err) => {
//                 if (err) {
//                     res.send({'message': 'error'});
//                 } else {
//                     res.send({
//                         message: 'success',
//                         id: id,
//                         name: name,
//                         copy: copy
//                     });
//                 }
//             });
//         }
//     });
// }

// exports.deleteTheme = (req, res) => {
//     delete jsonFile[req.body.id];
//     res.send(jsonFile);
// }

export default class Home {
    
    constructor() {
        this.pathToJson = path.join('./assets/themes/themes.json');
        this.jsonFile = JSON.parse(fs.readFileSync(this.pathToJson, 'utf8'));
    }

    getAllThemes() {
        return JSON.parse(fs.readFileSync(this.pathToJson, 'utf8'));
    }

    createTheme(req, res) {
        let pathFolder = path.join('./assets/themes/');
        let copyTheme = 'defaultTheme';
        let id = guid.create().value;
        let copy = false;
        let theme = [];
        let jsonData = JSON.parse(fs.readFileSync(this.pathToJson, 'utf8'));

        theme = {
            id: id,
            name: req.body.name,
            copy: copy
        };

        jsonData.push(theme);

        fs.writeFile(this.pathToJson, JSON.stringify(jsonData), (err) => {
            if(err) {
                res.send({'message': 'error'});
            } else {
                ncp(pathFolder + copyTheme, pathFolder + id, (err) => {
                    if(err) {
                        res.send({'message': 'error'});
                    }
                    res.send(theme);
                });
            }
        });
    }

    /*deleteTheme(id) {

    }*/

}