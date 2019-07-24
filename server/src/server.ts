import App from './App'
import { serverPort } from './config/config.json'

App.listen(serverPort, () => console.log(`Server is starting on port ${serverPort}!`));