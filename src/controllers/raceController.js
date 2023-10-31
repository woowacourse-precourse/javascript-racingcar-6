import { GameOutputMsg } from "../constants/gameConstants";
import { ResultHandler } from "../handler/resultHandler";
import { RaceUtils } from "../utils/raceUtils.js";
import { Prompt } from "../prompt/prompt.js";

export class Controller {
  static playRaceGame(CARS, RACE_ROUND) {
    Prompt.print(GameOutputMsg.raceStartMessage); // 레이스 시작 메세지 출력

    for (let i = 0; i < RACE_ROUND; i++) {
      const RACE_RESULTS = RaceUtils.generateRaceResults(CARS.length); // 각 자동차의 라운드별 결과 생성
      RaceUtils.addRaceStep(RACE_RESULTS, CARS); // 자동차들의 진행 상태 업데이트
      RaceUtils.outputRaceResults(CARS); // 라운드별 결과 출력
    }
    return CARS;
  }

  static showWinner(RACED_CARS) {
    const TOP_DISTANCE = ResultHandler.topRacerDistance(RACED_CARS); // 최대 진행 거리 계산
    const TOP_RACER = ResultHandler.findTopRacer(RACED_CARS, TOP_DISTANCE); // 우승자 찾기
    const WINNER = ResultHandler.formatRaceWinner(TOP_RACER); // 우승자 이름 포맷팅
    Prompt.print(GameOutputMsg.winnerPrefix + WINNER); // 우승자 출력
  }
}
