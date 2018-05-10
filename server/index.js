import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router.js'
import EditController from './controllers/EditController.js'

/**
* Express Init
*/
const app = express();

/**
* Body Parser init
*/
app.use(bodyParser.json());

/**
* Include Edit controler
*/
const edit = new EditController();
edit.createTheme();

/**
* Routing
*/
app.use('/api', router);

/**
* Started server
*/
app.listen(3000, () => {
	console.log('Server is starting on port 3000!');
});