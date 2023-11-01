import { ERROR_MESSAGES } from '../constants/messages.js';
import OPTIONS from '../constants/options.js';
import InputError from '../errors/InputError.js';

class CarNamesValidator {
  #carNames;

  /**
   * @param {string[]} carNames
   */
  constructor(carNames) {
    this.#carNames = carNames;
  }

  /**
   * 자동차 이름이 5자를 초과했는 지 판별
   * @returns {boolean}
   */
  #hasExceedingLength() {
    return this.#carNames.some(carName => carName.length > OPTIONS.maxNaming);
  }

  /**
   * 자동차 이름 입력을 하지 않았는 지 판별
   * @returns {boolean}
   */
  #hasEmptyName() {
    return this.#carNames.some(carName => !carName.length);
  }

  /**
   * 중복된 자동차 이름을 입력했는 지 판별
   * @returns {boolean}
   */
  #hasDuplicateName() {
    return new Set(this.#carNames).size !== this.#carNames.length;
  }

  /**
   * 2개 미만의 이름을 입력했는 지 판별
   * @returns {boolean}
   */
  #isInvalidNameCount() {
    return this.#carNames.length < OPTIONS.minNameCount;
  }

  /**
   * 입력받은 자동차 이름 배열의 유효성 판별
   * @param {string[]} carName
   */
  isValid(carName) {
    this.#carNames = carName;

    if (this.#hasExceedingLength())
      throw new InputError(ERROR_MESSAGES.exceedName);

    if (this.#hasEmptyName()) throw new InputError(ERROR_MESSAGES.emptyName);

    if (this.#hasDuplicateName())
      throw new InputError(ERROR_MESSAGES.duplicateName);

    if (this.#isInvalidNameCount())
      throw new InputError(ERROR_MESSAGES.minNameCount);
  }
}

export default CarNamesValidator;
