import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";
import {
  getCarNameMessage,
  getRoundNumberMessage,
  lineBreakMessage,
  winnerMessage,
} from "./Messages/Message";
import {
  carNameLengthError,
  carNameDuplicateError,
  roundNumberTypeError,
  roundNumberRangeError,
} from "./Messages/Error";

/**
 * App클래스
 * @this {Array} cars 자동차 객체를 저장할 배열
 * @this {Array} carNames 자동자 이름 중복을 파악하기 위해 이름을 저장할 배열
 * @this {roundNumber} roundNumber 라운드 횟수를 입력받아 저장할 변수
 */
class App {
  constructor() {
    this.cars = [];
    this.carNames = [];
    this.roundNumber = 0;
  }

  /**
   * 자동차 이름 유효성 검사
   * @param {String} name 사용자에게 입력받은 자동차 이름
   */
  checkValidName(name) {
    // 이름의 길이가 없거나 5보다 클 때
    if (name.length === 0 || name.length > 5) {
      carNameLengthError();
    }
    // 중복된 이름이 존재할 때
    if (this.carNames.includes(name)) {
      carNameDuplicateError();
    }
  }

  /**
   * 자동차 이름을 사용자에게 입력받는 메소드
   */
  async getCar() {
    getCarNameMessage();
    const inputCarName = await Console.readLineAsync().then((res) =>
      res.split(",")
    );
    inputCarName.forEach((name) => {
      this.checkValidName(name);
      const newCar = new Car(name);
      this.carNames.push(name);
      this.cars.push(newCar);
    });
  }

  /**
   * 라운드 수 유효성 검사
   * @param {String} inputNumber 사용자에게 입력받은 라운드 수
   */
  checkValidType(inputNumber) {
    // 입력받은 변수의 타입이 숫자가 아닐 때
    if (Number.isNaN(+inputNumber)) {
      roundNumberTypeError();
    }
    // 입력받은 숫자가 0보다 작을 때
    if (+inputNumber < 0) {
      roundNumberRangeError();
    }
  }

  /**
   * 라운드 수를 사용자에게 입력받는 메소드
   */
  async getRoundNumber() {
    getRoundNumberMessage();
    const inputNumber = await Console.readLineAsync();
    this.checkValidType(inputNumber);
    this.roundNumber = inputNumber;
  }

  /**
   * 한 라운드의 진행 메소드
   */
  processRound() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  /**
   * 우승자를 찾는 메소드
   */
  printWinner() {
    const maxCount = Math.max(...this.cars.map((car) => car.countMove));
    const winnerArray = this.cars
      .filter((car) => car.countMove === maxCount)
      .map((car) => car.name);
    winnerMessage(winnerArray.join(", "));
  }

  /**
   * 게임 시작 main 메소드
   */
  async play() {
    await this.getCar();
    await this.getRoundNumber();
    lineBreakMessage();
    for (let round = 0; round < this.roundNumber; round += 1) {
      this.processRound();
      lineBreakMessage();
    }
    this.printWinner();
  }
}

export default App;
