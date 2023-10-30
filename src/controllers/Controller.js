import { Random } from '@woowacourse/mission-utils';
import Cars from '../models/Cars.js';
import View from '../views/View.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import { carsValidationLengthAndChar, TURN_VALIDATE } from '../util/validation.js';

class Controller {
  #cars;

  // 게임 시작
  async startGame() {
    this.#cars = new Cars();

    await this.controlCarOutput();
    await this.controlTurnsOutput();

    this.calculateRacingGame(this.#cars.getTurns());
  }

  // 차량 입력 값 변환 및 validation
  async controlCarOutput() {
    const carString = await View.writeRaingGameCarNames();
    Controller.#checkValidateCar(carString.trim());
    this.#cars.setCars(Controller.#makeCarsArray(carString));
  }

  static #checkValidateCar(cars) {
    const carsNameList = Controller.#makeCarsArray(cars);

    // 쉼표로 시작하는지 확인
    if (cars[0] === ',') throw new Error(ERROR_MESSAGE.CAR_NAME_ERROR);

    // 각 차량 이름의 길이와 문자 확인
    carsNameList.filter(carsValidationLengthAndChar);

    // 차량 중복 여부 확인
    const carSet = new Set(carsNameList);
    if (carSet.size !== carsNameList.length) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATED);

    // 차량 대수 확인
    if (carsNameList.length < 2 || carsNameList.length > 100) throw new Error(ERROR_MESSAGE.CAR_COUNTING);
  }

  static #makeCarsArray(cars) {
    return cars.split(',').map((item) => item.trim());
  }

  // 레이싱 게임 턴 입력 및 validation
  async controlTurnsOutput() {
    const output = await View.writeRacingGameCounts();
    Controller.#checkValidateTurns(output.trim());
    this.#cars.setTurns(Number(output));
  }

  static #checkValidateTurns(turn) {
    const numberTurn = Number(turn);
    if (TURN_VALIDATE.test(turn)) throw new Error(ERROR_MESSAGE.TURN_ERROR);
    if (numberTurn < 1 || numberTurn > 100) throw new Error(ERROR_MESSAGE.TURN_ERROR);
  }

  // 게임 진행
  calculateRacingGame(turns) {
    const carsNameList = this.#cars.getCars();
    View.printRacingGameStart();

    for (let i = 0; i < turns; i += 1) {
      const carsTurnObj = Controller.#calculateMovingsDataset(carsNameList);
      this.#cars.setMovings(carsTurnObj);
      View.printRacingGameRound(carsTurnObj);
    }

    this.#calculateWinner();
  }

  /**
   * 각 자동차 움직인 거리를 구하기 위한 객체 생성
   * @param {string[]} carsNameList
   * @returns {{[carName:string] : number}} movings dataFrame
   */
  static #calculateMovingsDataset(carsNameList) {
    const data = {};
    carsNameList.forEach((name) => {
      data[name] = Controller.#pickEachCarMoving();
    });
    return data;
  }

  static #pickEachCarMoving() {
    const moving = Random.pickNumberInRange(0, 9);
    if (moving < 4) return 0;
    return moving - 3;
  }

  // 승자 계산하기
  #calculateWinner() {
    const movings = this.#cars.getMovings();
    const totalMovingObj = {};

    movings.forEach((moving) => {
      const movinList = Object.entries(moving);
      Controller.#sumCarMoving(movinList, totalMovingObj);
    });

    const maxScore = Math.max(...Object.values(totalMovingObj));
    const winners = Object.keys(totalMovingObj).filter((key) => totalMovingObj[key] === maxScore);
    View.printRacingGameWinners(winners.join(', '));
  }

  static #sumCarMoving(movinList, totalMovingObj) {
    const obj = totalMovingObj;
    movinList.forEach(([name, number]) => {
      if (totalMovingObj[name]) obj[name] += number;
      else obj[name] = number;
    });
  }
}

export default Controller;
