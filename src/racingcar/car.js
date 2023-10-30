import { GameRule } from '../models/const.js';

export default class Car {
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
}
