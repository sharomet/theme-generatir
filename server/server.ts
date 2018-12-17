import App from './App'
import config from './config/config'

const port = config.serverPort;

App.listen(port, () => console.log(`Server is starting on port ${port}!`));