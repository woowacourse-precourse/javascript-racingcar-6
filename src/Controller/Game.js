import { Console } from '@woowacourse/mission-utils';
import Car from '../Model/car';
import InputView from '../View/inputView';
import OutputView from '../View/outputView';
import generateRandomNum from '../utils/randomNum';

class Game {
  constructor() {
    this.carList = [];
    this.winnerList = [];
    this.maxCount = 0;
  }

  // 게임시작
  async start() {
    await this.inputCarName();
  }

  // 자동차 이름 입력
  async inputCarName() {
    const nameList = await InputView.inputName();
    this.carList = nameList.map((name) => {
      const car = new Car();
      car.setName(name);
      return car;
    });
    await this.inputTryNum();
  }

  // 시도 횟수 입력
  async inputTryNum() {
    const tryNum = await InputView.inputTry();
    await this.startGame(tryNum);
  }

  // 게임 시작
  async startGame(tryNum) {
    await OutputView.outputResult();
    for (let i = 0; i < tryNum; i++) {
      await this.getBoard();
    }
    await this.findWinner();
  }

  // 게임 진행
  async getBoard() {
    for (let car of this.carList) {
      const randomNum = await generateRandomNum.getRandomNum();
      car.checkCount(randomNum);
      const nowCount = await car.getCount();
      OutputView.outputBoard(car.name, nowCount);
    }
  }

  // 우승자 찾기
  async findWinner() {
    for (let car of this.carList) {
      await this.checkWinner(car);
    }
    await this.winner();
  }

  // 우승자 체크
  async checkWinner(car) {
    const nowCount = await car.getCount();
    if (nowCount > this.maxCount) {
      this.maxCount = nowCount;
      this.winnerList = [];
      this.winnerList.push(car.name);
    } else if (nowCount === this.maxCount) {
      this.winnerList.push(car.name);
    }
  }
  // 우승자 출력
  async winner() {
    OutputView.outputWinner(this.winnerList);
  }
}

export default Game;
