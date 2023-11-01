import { Random } from "@woowacourse/mission-utils";

import InputView from "../View/InputView.js";
import GameView from "../View/GameView.js";

import Car from "../Model/Car.js";
import { generateRandomNumber } from "../utils/index.js";

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.car = new Car();

    this.tryCount = 0;
  }

  // 1. 사용자의 입력을 받는다
  async init() {
    const carNames = await this.inputView.getCarNames();
    this.tryCount = await this.inputView.getTryCount();

    // 2. 입력된 자동차 이름을 바탕으로 자동차를 생성한다
    this.createCar(carNames);

    return this.startGame();
  }

  createCar(carNames) {
    const cars = carNames.map(name => ({ name, position: 0 }));
    this.car.init(cars);
  }

  // 3. 자동차 경주 게임을 진행한다
  startGame() {
    const { cars } = this.car;
    const gameView = new GameView();
    
    // 3-1. 시도 횟수마다 자동차 대수만큼 무작위 값을 생성한다
    for (let i = 0; i < this.tryCount; i += 1) {
      const randomNumbers = generateRandomNumber(cars.length);
      const currnetCarStatus = this.car.move(randomNumbers);

      gameView.printEachResult(currnetCarStatus);
    }

    gameView.printFinalResult(cars);
  }
}

export default GameController;
