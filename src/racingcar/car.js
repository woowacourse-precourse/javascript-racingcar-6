import { GameRule, MoveForwardJudgment } from '../models/const.js';
import Util from '../utils/util.js';

export default class Car {
  #racingState;
  #carNames;

  constructor(racingState) {
    this.#racingState = racingState;
  }

  isValidValue(value) {
    const names = value.split(',').map(name => name.trim());

    if (this.#isInvalidNumberOfCars(names)) {
      return false;
    }

    if (this.#isInvalidNameLength(names)) {
      return false;
    }

    if (this.#isDuplicate(names)) {
      return false;
    }

    this.#racingState.cars = names;
    this.#carNames = names;
    return true;
  }

  #isInvalidNumberOfCars(names) {
    return GameRule.MinNumberOfCar > names.length;
  }

  #isInvalidNameLength(names) {
    return names.some(name => {
      const { length } = name;
      return GameRule.MinLengthOfCarName > length || GameRule.MaxLengthOfCarName < length;
    });
  }

  #isDuplicate(names) {
    const set = new Set();

    names.forEach(name => {
      set.add(name);
    });

    return set.size !== names.length;
  }

  moveForwardOrStop() {
    const carState = Util.DeepCopy(this.#racingState.currentState.cars);

    carState.forEach(({ name }) => {
      if (!this.isMoveForward()) {
        return;
      }

      const findCar = carState.find(car => car.name === name);
      findCar.progress += 1;
    });

    this.#racingState.setState({ cars: carState });
  }

  isMoveForward() {
    const randomNumber = Util.RandomNumber(MoveForwardJudgment.MinNumber, MoveForwardJudgment.MaxNumber);
    return MoveForwardJudgment.Condition <= randomNumber;
  }
}
