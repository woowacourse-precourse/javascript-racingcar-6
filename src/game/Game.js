import { CARS } from "../Constants.js";
class Game {
  constructor() {}

  // 자동차 이름을 초기 전진횟수와 함께 CARS에 저장
  storeCarNames(CAR_NAMES_INPUT) {
    const CAR_NAMES = CAR_NAMES_INPUT.split(",");
    CAR_NAMES.forEach((EACH_CAR_NAMES) => {
      CARS[EACH_CAR_NAMES] = 0;
    });
  }
}
export default Game;
