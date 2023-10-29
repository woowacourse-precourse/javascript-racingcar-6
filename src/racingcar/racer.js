import { GameRule } from '../models/const.js';

export default class Racer {
  isValidValue(value) {
    const names = value.split(',').map(name => name.trim());

    if (this.#isInvalidNumberOfRacers(names)) {
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

  #isInvalidNumberOfRacers(names) {
    return GameRule.MinNumberOfRacer > names.length;
  }

  #isInvalidNameLength(names) {
    return names.some(name => {
      const { length } = name;
      return GameRule.MinLengthOfRacerName > length || GameRule.MaxLengthOfRacerName < length;
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
