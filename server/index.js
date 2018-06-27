import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './routes/router.js'

/**
* Express Init
*/
const app = express();

/**
 * Set static folder
 */
app.use(express.static(path.join(__dirname, '../client/')));

/**
* Body Parser init
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
* Routing
*/
app.use('/api', router);

/**
 * View Engine
 */
app.use('*', (req, res) => {
    res.sendFile(__dirname, path.join('../client/index.html'));
});

/**
* Started server
*/
app.listen(3000, () => {
	console.log('Server is starting on port 3000!');
});