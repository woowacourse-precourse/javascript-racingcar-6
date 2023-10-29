import Print from './Print';
import Validate from './Validate';
import { COMMAS, ERROR } from './constants/constants';

class App {
  async play() {
    const participateCars = await Print.getCarsName();

    const cars = participateCars.split(COMMAS.SYMBOL);

    if (!Validate.isCarNameLengthValid(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }
  }
}

export default App;
