import Car from '../model/Car.js';
import InputView from '../view/InputView.js';

class CarGameController {
  async start() {
    const carNames = await InputView.readCarNames();
    const carMap = new Car().convertStringToMap(carNames);
    console.log(carMap);
  }
}

export default CarGameController;
