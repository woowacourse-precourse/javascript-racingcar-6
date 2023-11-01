import { Random } from "@woowacourse/mission-utils";

import Car from '../models/Car.js';
import Race from '../models/Race.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import MESSAGES from '../constants/Messages.js';
import CONDITIONS from "../constants/Conditions.js";

/**
 * 경주 게임 컨트롤러
 * @property {object} race - 경주 관련 정보
 */
class raceGameController {
  /** @type {object} */
  #race;

  /**
   * 경주 게임 생성
   */
  async run() {
    const carNames = await InputView.askCarNames().split(',')
    this.isValidCarNames(carNames);
    const racingCars = carNames.map(carName => new Car(carName));

    const totalRound = await InputView.askTotalRound();
    this.isValidTotalRound(totalRound);
  }

  /**
   * 자동차 이름 유효성 검사
   * 1. Length 에러: 1자 미만
   * 2. Length 에러: 5자 초과
   * 3. 공백 에러: 공백 포함 이름
   * 4. 중복 에러: 중복 이름
   * @param {object} carNames 
   */
  static isValidCarNames(carNames) {
    if (carNames.length < CONDITIONS.MIN_CAR_NAME_LENGTH) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_LENGTH);
    }
    if (carNames.some(carName => carName.length > CONDITIONS.MAX_CAR_NAME_LENGTH)) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_LENGTH);
    }
    if (carNames.some(carName => carName.includes(' '))) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_BLANK);
    }
    if (carNames.some((carName, index) => carNames.indexOf(carName) !== index)) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_DUPLICATION);
    }
  }

  /**
   * 시도 횟수 유효성 검사
   * 1. 자연수 type 에러: 1이상의 자연수가 아닌 경우
   * 2. 공백 에러: 공백 포함 시도 횟수
   * @param {object} totalRound
   */
  static isValidTotalRound(totalRound) {
    if (!CONDITIONS.TOTAL_ROUND_REGEX.test(totalRound)) {
      throw new Error(MESSAGES.TOTAL_ROUND_INPUT_ERROR_NATURAL_NUMBER);
    }
    if (totalRound.includes(' ')) {
      throw new Error(MESSAGES.TOTAL_ROUND_INPUT_ERROR_BLANK);
    }
  }

  /**
   * 0 이상 9 이하의 무작위 값 선택
   * @returns {object} - 무작위 값
   */
  static selectRandomNumber() {
    try {
      return Random.pickNumberInRange(CONDITIONS.RANDOM_NUMBER_MIN, CONDITIONS.RANDOM_NUMBER_MAX);
    } catch {
      throw new Error(MESSAGES.GENERAL_ERROR);
    }
  }

  /**
   * 자동차 전진 가능 여부 결정
   * @param {number} randomNumber - 무작위 값
   * @returns {boolean} - 자동차 전진 여부
   */
  static canCarAdvance(randomNumber) {
    return randomNumber >= CONDITIONS.ADVANCE_CONDITION;
  }
}

export default raceGameController;