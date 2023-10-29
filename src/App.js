import Print from './Print';
import Validate from './Validate';
import { ERROR } from './constants/constants';

class App {
  async play() {
    const participateCars = await Print.getCarsName();

    if (!Validate.isCarNameLengthValid(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  }
}

export default App;
