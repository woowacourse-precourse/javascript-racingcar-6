import { Console, Random } from '@woowacourse/mission-utils';
import { CarNameValidator } from './validator.js';
import { Car } from './car.js';
import { Race } from './race.js';
import { Winner } from './winner.js';
import { InputHandler } from './inputHandler.js';

class App {
  async play() {
    try {
      const carNamesString = await InputHandler.getUserInputCarNames();
      const validationErrorMessage = CarNameValidator.validate(carNamesString);
      if (validationErrorMessage) {
        throw new Error(validationErrorMessage);
      }

      const carNameArray = carNamesString.split(',');
      const cars = carNameArray.map((name) => new Car(name));
      const attemptForwardCount = await InputHandler.getUsetInputForwardCount();

      const race = new Race(cars, attemptForwardCount);
      const raceResult = race.start();

      const winner = new Winner(raceResult);
      const finalWinner = winner.getWinners();

      winner.printFinalWinner(finalWinner);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default App;
