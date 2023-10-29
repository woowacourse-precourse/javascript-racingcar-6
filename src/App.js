import rootService from './service/rootService.js';
import { appErrorHandler } from './util/error/errorhandler.js';

class App {
  async play() {
    try {
      await rootService();
    } catch (error) {
      appErrorHandler(error);
    }
  }
}
export default App;
