import Race from "./model/Race";
import InputView from "./View/InputView";
import OutputView from "./View/OutputView";

class App {
  async play() {
    const carNames = await InputView.getCarNames();
    const raceTrial = await InputView.getRaceTrial();

    const racingGame = new Race(carNames);
    racingGame.setTrial(raceTrial);
    racingGame.start();

    OutputView.printCarsPosition(racingGame.getCars());
    OutputView.printWinner(racingGame.getWinners());
  }
}

export default App;
