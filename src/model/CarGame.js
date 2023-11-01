import Car from './car';
import makeRandomNumber from '../utils/makeRandomNumber';
import { GAME_INT } from '../constants/constants';
class CarGame {
  #carList = [];
  #attempt;

  setCarList(list) {
    list.forEach((name) => {
      this.#carList.push(new Car(name));
    });
  }

  setAttemptNumber(attemptNumber) {
    this.#attempt = Number(attemptNumber);
  }

  getCarList() {
    return this.#carList;
  }

  getAttemptNumber() {
    return this.#attempt;
  }

  moveCars() {
    this.#carList.map((car) => {
      const randomNumber = makeRandomNumber();
      if (randomNumber >= GAME_INT.MOVE_NUMBER) car.move();
    });
  }

  getCurrentDistance() {
    return this.#carList.map((car) => [car.getName(), car.getDistance()]);
  }

  getWinner() {
    let maxDistance = 0;
    let winners = [];
    this.#carList.forEach((car) => {
      if (car.getDistance() === maxDistance) {
        winners.push(car.getName());
      }
      if (car.getDistance() > maxDistance) {
        winners = [car.getName()];
        maxDistance = car.getDistance();
      }
    });
    return winners;
  }
}

export default CarGame;
