import { CARS } from '../Constants.js';
import GameUtil from './GameUtil.js';

class Game {
  constructor() {
    this.gameUtil = new GameUtil();
  }

  // 자동차 이름을 초기 전진횟수와 함께 CARS에 저장
  storeCars(carNamesInput) {
    const CAR_NAMES = this.gameUtil.splitInput(carNamesInput);
    CAR_NAMES.forEach((carName) => {
      CARS.push({carName, forwardNumber:0});
    });
  }

  // 각각의 레이스 게임을 실행하는 메소드
  playEachRaceGame() {
    for (let index in CARS) {
      this.gameUtil.storeMovingForward(index);
    }
  }

  // 우승한 차 찾기
  findRaceWinner() { 
    const MAX_FORWARD_NUMBER = this.gameUtil.maxForwardNumber();
    const WINNER_CARS = this.gameUtil.findCarsWithForwardNumber(MAX_FORWARD_NUMBER);
    return WINNER_CARS;
  }

  // 우승한 차의 이름을 반환
  getRaceWinnerCarNames() {
    const WINNER_CARS = this.findRaceWinner();
    if (WINNER_CARS.length>0){
      return this.gameUtil.getSharedVictoryCarNames(WINNER_CARS);
    }
    return `${WINNER_CARS.carName}`;
  }
}
export default Game;
