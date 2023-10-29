import Print from './Print';
import Validate from './Validate';
import { COMMAS, ERROR } from './constants/constants';

class App {
  async play() {
    const participateCars = await Print.getCarsName();
  }
}

export default App;
