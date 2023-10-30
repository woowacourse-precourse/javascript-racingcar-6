import { CARS } from "../Constants.js";
import GameUtil from "./GameUtil.js";

class Game {
  constructor() {
    this.gameUtil = new GameUtil();
  }

  // 자동차 이름을 초기 전진횟수와 함께 CARS에 저장
  storeCars(CAR_NAMES_INPUT) {
    const CAR_NAMES = CAR_NAMES_INPUT.split(",");
    CAR_NAMES.forEach((eachCarName) => {
      CARS.push([eachCarName, 0]);
    });
  }

  //시도할 횟수만큼 레이스 시작
  runRaceGamesWithAttempts(ATTEMPT_COUNT) {
    for (let index = 0; index < ATTEMPT_COUNT; index++) {
      this.eachRaceGame();
    }
    console.log(CARS);
  }

  //각각의 레이스 게임을 실행하는 메소드
  eachRaceGame() {
    for (let index in CARS) {
      this.gameUtil.MovingForwardCar(index);
    }
  }
}
export default Game;
