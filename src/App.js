import rootService from './service/rootService.js';
import { appErrorHandler } from './util/error/errorhandler.js';

class App {
  async play() {
    try {
      const game = await rootService();
      return game;
    } catch (error) {
      const ERROR = appErrorHandler(error);
      return ERROR;
    }
  }
}

export default App;
