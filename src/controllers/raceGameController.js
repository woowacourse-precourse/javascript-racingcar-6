import { Random } from "@woowacourse/mission-utils";

import Car from '../models/Car.js';
import Race from '../models/Race.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import MESSAGES from '../constants/Messages.js';
import CONDITIONS from "../constants/Conditions.js";

/**
 * 경주 게임 컨트롤러
 */
class RaceGameController {
  /**
   * 경주 게임 생성
   */
  static async run() {
    const carNames = await InputView.askCarNames()
    RaceGameController.isValidCarNames(carNames);

    const totalRound = await InputView.askTotalRound();
    RaceGameController.isValidTotalRound(totalRound);

    const racingCars = carNames.split(',').map(carName => new Car(carName));
    const race = new Race(racingCars, Number(totalRound));

    OutputView.printResultTitle();
    for (let i = 0; i < race.getTotalRound(); i += 1) {
      RaceGameController.updateNumberOfAdvance(racingCars);
      OutputView.printProcedureOfRace(racingCars);
    }

    const winners = RaceGameController.calculateWinners(racingCars);
    OutputView.printWinners(winners);
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
    const carNamesArray = carNames.split(',')
    if (carNamesArray.some(carName => carName.length < CONDITIONS.MIN_CAR_NAME_LENGTH)) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_LENGTH);
    }
    if (carNamesArray.some(carName => carName.length > CONDITIONS.MAX_CAR_NAME_LENGTH)) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_LENGTH);
    }
    if (carNamesArray.some(carName => carName.includes(' '))) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_BLANK);
    }
    if (carNamesArray.some((carName, index) => carNamesArray.indexOf(carName) !== index)) {
      throw new Error(MESSAGES.CAR_NAME_INPUT_ERROR_DUPLICATION);
    }
  }

  /**
   * 시도 횟수 유효성 검사
   * 1. 공백 에러: 공백 포함 시도 횟수
   * 2. 자연수 type 에러: 1이상의 자연수가 아닌 경우
   * @param {string} totalRound
   */
  static isValidTotalRound(totalRound) {
    if (totalRound.includes(' ')) {
      throw new Error(MESSAGES.TOTAL_ROUND_INPUT_ERROR_BLANK);
    }
    if (!CONDITIONS.TOTAL_ROUND_REGEX.test(totalRound)) {
      throw new Error(MESSAGES.TOTAL_ROUND_INPUT_ERROR_NATURAL_NUMBER);
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

  /**
   * 자동차 전진 횟수 업데이트
   * @param {object} racingCars - 경주에 참가한 자동차들
   */
  static updateNumberOfAdvance(racingCars) {
    racingCars.forEach(racingCar => {
      const randomNumber = RaceGameController.selectRandomNumber();
      racingCar.advance(RaceGameController.canCarAdvance(randomNumber));
    });
  }

  /**
   * 우승자 목록 연산
   * @param {object} racingCars - 경주에 참가한 자동차들
   */
  static calculateWinners(racingCars) {
    const maxNumberOfAdvance = Math.max(...racingCars.map(racingCar => racingCar.getNumberOfAdvance()));
    return racingCars.filter(racingCar => racingCar.getNumberOfAdvance() === maxNumberOfAdvance);
  }
}

export default RaceGameController;