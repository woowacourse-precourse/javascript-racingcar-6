const START_LOCATION = 0;
const MOVE_THRESHOLD = 4;
const MIN_NAME_LENGTH = 1;
const MAX_NAME_LENGTH = 5;

const message = {
  nameEmptyError: "[ERROR] 이름이 존재하지 않습니다.",
  nameLengthError: "[ERROR] 자동차 이름은 최소 1글자에서 최대 5글자까지만 입력할 수 있습니다.",
};

class Car {
  /**
   * 
   * @param {string} name 자동차의 이름
   */
  constructor(name) {
    if (this.#checkIsNameEmpty(name)) {
      throw new Error(message.nameEmptyError);
    }

    const trimmedName = this.#trimName(name);
    if(!this.#checkNameLengthValid(trimmedName)) {
      throw new Error(message.nameLengthError);
    }

    this.name = name;
    this.location = START_LOCATION;
  }

  #checkIsNameEmpty(name) {
    return name == null;
  }

  /**
   * name의 처음과 끝의 연속 공백을 제거
   * @param {string} name 
   * @returns {string}
   */
  #trimName(name) {
    return name.trim();
  }

  #checkNameLengthValid(name) {
    return MIN_NAME_LENGTH <= name.length && name.length <= MAX_NAME_LENGTH;
  }

  #canMove(randomNumber) {
    return randomNumber >= MOVE_THRESHOLD;
  }

  move(randomNumber) {
    if (!this.#canMove(randomNumber)) return;

    this.location += 1;
  }

  getName() {
    return this.name;
  }

  getLocation() {
    return this.location;
  }

  compareLocation(location) {
    if (this.location > location) {
      return 1;
    } else if (this.location === location) {
      return 0;
    }

    return -1;
  }
}

export default Car;