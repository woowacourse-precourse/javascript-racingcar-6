import Car from '../model/Car.js';
import CarGame from '../model/CarGame.js';
import GameResult from '../model/GameResult.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class CarGameController {
  async start() {
    const carNames = await InputView.readCarNames();
    const carMap = new Car().convertStringToMap(carNames);
    this.playGameStage(carMap);
  }

  async playGameStage(carMap) {
    const attempts = await InputView.readAttempts();
    const carPosition = new CarGame().checkPosition(carMap, attempts);
    this.checkResultStage(carPosition, Number(attempts));
  }

  checkResultStage(carPosition, attempts) {
    OutputView.printResultMessage();
    const prevLog = new Map();
    const carLog = new GameResult().getForwardResult(carPosition, prevLog);
  }
}

export default CarGameController;
