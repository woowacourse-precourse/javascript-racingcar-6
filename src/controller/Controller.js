import InputView from '../view/inputView';
import checkValidation from '../utils/validation';
import Car from '../model/car';

class Controller {
  #cars = [];

  async start() {
    await this.getCarName();
  }

  async getCarName() {
    const playerInput = await InputView.readCarName();
    checkValidation.nameInput(playerInput);
    playerInput.forEach((name) => {
      const carModel = new Car(name);
      this.#cars.push(carModel);
    });
    await this.getAttemptNumber();
  }

  async getAttemptNumber() {
    const playerInput = await InputView.readAttemptNumber();
    checkValidation.attemptInput(playerInput);
  }
}

export default Controller;
