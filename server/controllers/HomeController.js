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

//     let pathToThemes = path.join('./assets/themes/');
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
//             ncp(pathToThemes + copyTheme, pathToThemes + id, (err) => {
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
        //this.jsonFile = JSON.parse(fs.readFileSync(this.pathToJson, 'utf8'));
        this.pathToThemes = path.join('./assets/themes/');
    }

    getAllThemes() {
        return this.getThemes();
    }

    createTheme(name, callback) {
        let copyTheme = 'defaultTheme';
        let id = guid.create().value;
        let copy = false;
        let jsonData = this.getThemes();

        let theme = {
            id: id,
            name: name,
            copy: copy
        };

        jsonData.push(theme);

        this.saveJsonFile(jsonData, (result) => {
            if(!result) {
                callback({'message': 'error'});
            } else {
                ncp(this.pathToThemes + copyTheme, this.pathToThemes + id, (err) => {
                    if(err) {
                        callback({'message': 'error'});
                    }
                    callback(theme);
                });
            }
        });
    }

    deleteTheme(id, callback) {
        let data = this.getThemes();
        let filtered = data.filter(function(item) { 
            return item.id !== id; 
        });

        this.saveJsonFile(filtered, (result) => {
            if(result) {
                callback(filtered);
            } else {
                callback({'message': 'error'});
            }
        })
    }

    saveJsonFile(data, callback) {
        fs.writeFile(this.pathToJson, JSON.stringify(data), (err) => {
            if(err) {
                callback(false);
            } else {
                callback(true);
            }
        });
    }

    getThemes() {
        return JSON.parse(fs.readFileSync(this.pathToJson, 'utf8'))
    }

}