import Car from '../model/Car.js';
import InputView from '../view/InputView.js';

class CarGameController {
  async start() {
    const carNames = await InputView.readCarNames();
    const carMap = new Car().convertStringToMap(carNames);
    this.playGameStage(carMap);
  }

  async playGameStage(carMap) {
    const attempts = await InputView.readAttempts();
    console.log(attempts);
  }
}

export default CarGameController;
