import { CARS } from "../Constants.js";
class Game {
  constructor() {}

  // 자동차 이름을 초기 전진횟수와 함께 CARS에 저장
  storeCars(CAR_NAMES_INPUT) {
    const CAR_NAMES = CAR_NAMES_INPUT.split(",");
    CAR_NAMES.forEach((eachCarName) => {
      CARS.push([eachCarName,0]);
    });
  }

  //시도할 횟수만큼 레이스 시작
  runRaceGamesWithAttempts(ATTEMPT_COUNT){
    for(let i=0; i<ATTEMPT_COUNT; i++) {
      this.eachRaceGame();
    } 
  }
  
  //각각의 레이스 게임을 실행하는 메소드
  eachRaceGame(){
    //TODO: 레이스게임 구현
  }
}
export default Game;
