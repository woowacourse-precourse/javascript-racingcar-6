import Input from "./Racingcar/views/InputView";
import Car from "./Racingcar/car/index";
import Race from "./Racingcar/race/index";
import Output from "./Racingcar/views/OutputView";

class App {
  async play() {
    try {
      const carNames = await Input.getCarNames();
      const numAttempts = await Input.getNumAttempts();

      const carData = Car.initializeCarData(carNames);

      for (let attempt = 0; attempt < numAttempts; attempt++) {
        Car.performSingleRace(carData);
        Output.printCurrentPositions(carData);
      }

      const winners = Race.getWinners(carData);
      Output.printWinners(winners);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }
}

export default App;
