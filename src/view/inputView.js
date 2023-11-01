// @ts-check
import { Random, Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants";
import { InputValidator } from "./inputValidator";
import { InputConverter } from "./inputConverter";
import { Cars } from "../domain/cars";
class InputView {
  /**
   * @type {InputValidator}
   */
  #inputValidator;
  /**
   *
   * @type {InputConverter}
   */
  #inputConverter;
  /**
   *
   * @param {InputValidator} inputValidator
   * @param {InputConverter} inputConverter
   */

  // constructor는 첫번째 this인자가 숨어있어서 리턴이 없다
  constructor(inputValidator, inputConverter) {
    this.#inputValidator = inputValidator;
    this.#inputConverter = inputConverter;
  }

  /**
   *
   * @returns {Promise<Cars>} -  async달린거라 프로미스를 달기
   */

  // 1. 자동차 이름 입력
  async inputCars() {
    const input = await Console.readLineAsync(MESSAGE.START_CAR_NAME);

    // TODO: 주석처리테스트
    // 검증 보내기
    // this.#inputValidator.validateCarNamesInput(input);

    //반환해서 리턴
    // Cars[]
    // -> Cars에 넣어서 주기
    return this.#inputConverter.convertToCars(input);
  }

  /**
   *
   * @returns {Promise<number>}
   */
  // 2. 시도 횟수 입력
  async inputAttemptCount() {
    const input = await Console.readLineAsync(MESSAGE.START_NUMBER_OF_ATTEMPT);
    // TODO 검증 보내기
    this.#inputValidator.validateAttemptCountInput(input);
    //반환해서 리턴
    return this.#inputConverter.convertToAttemptCount(input);
  }
}
export default InputView;
