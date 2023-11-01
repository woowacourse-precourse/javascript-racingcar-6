import { inputRacingCars, inputAttempts } from './inputs';
import CarRace from './CarRace';

class App {
  async play() {
    const racingCarsInput = await inputRacingCars();
    const attemptsInput = await inputAttempts();

    const carRace = new CarRace(racingCarsInput, attemptsInput);
    carRace.race();
    carRace.printWinners();
  }
}

export default App;
