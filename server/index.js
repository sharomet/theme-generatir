import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes/router.js'
import EditController from './controllers/EditController.js';

import guid from 'guid';
import fs from 'fs';

/**
* Express Init
*/
const app = express();

/**
 * Set static folder
 */
app.use(express.static(path.join(__dirname, '../client/')));
//console.log(guid.create().value);

/**
* Body Parser init
*/
app.use(bodyParser.json());

/**
* Include Edit controler
*/
/*const edit = new EditController();
edit.createTheme();*/

/**
* Routing
*/
app.use('/api', router);

/**
 * View Engine
 */
app.use('*', (req, res) => {
    res.sendFile(path.join('../client/index.html'));
});

/**
* Started server
*/
app.listen(3000, () => {
	console.log('Server is starting on port 3000!');
});