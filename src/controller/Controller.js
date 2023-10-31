import InputView from '../view/inputView';
import checkValidation from '../utils/validation';
import Car from '../model/car';
import makeRandomNumber from '../utils/makeRandomNumber';

class Controller {
  #cars = [];
  #attempt;

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
    this.#attempt = playerInput;
  }

  startRace() {
    for (let count = 0; count < this.#attempt; count++) {
      const randomNumber = makeRandomNumber();
      this.#cars.forEach((car) => {
        car.move(randomNumber);
      });
    }
  }
}

export default Controller;
