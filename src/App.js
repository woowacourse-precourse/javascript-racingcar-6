import { GameOutputMsg } from './constants/gameConstants.js';
import { InputValidator } from "./validators/inputValidator.js"
import { ResultUtils } from "./utils/resultUtils.js"
import { RaceUtils } from "./utils/raceUtils.js"
import { InputProcessor } from "./utils/inputProcessor.js"
import { Prompt } from "./prompt/prompt.js"

class App {
  async play() {
    const USER_INPUT = await Prompt.getUserInputString(GameOutputMsg.gameStartMessage) //사용자로부터 자동차 이름 입력 받기
    const CAR_LIST = InputProcessor.splitUserInput(USER_INPUT) // 사용자 입력 문자열 분리
    InputValidator.validateString(CAR_LIST); // 문자열 유효성 검증
    const CARS = InputProcessor.createCarsFromNames(CAR_LIST) // 사용자 입력을 기반으로 자동차 객체 생성

    const RACE_ROUND = await Prompt.getUserInputNumber(GameOutputMsg.roundsInputMessage) // 사용자로부터 레이스 라운드 횟수 입력 받기
    InputValidator.validateNumber(RACE_ROUND) // 라운드 횟수 유효성 검증

    Prompt.displayMessage(GameOutputMsg.raceStartMessage) // 레이스 시작 메시지 출력
    for (let i = 0; i < RACE_ROUND; i++){  // 지정된 라운드만큼 레이스 진행
      const RACE_RESULTS = RaceUtils.generateRaceResults(CARS.length); // 각 자동차의 레이스 결과 생성
      RaceUtils.addRaceStep(RACE_RESULTS, CARS) // 레이스 결과를 기반으로 자동차들의 진행 상태 업데이트
      Prompt.outputRaceResults(CARS) // 현재 라운드의 레이스 결과 출력
    }
    const TOP_DISTANCE = ResultUtils.topRacerDistance(CARS) // 최대 진행 거리 확인
    const TOP_RACER = ResultUtils.findTopRacer(CARS, TOP_DISTANCE) // 최대 진행 거리를 가진 우승자 찾기
    const WINNER = ResultUtils.formatRaceWinner(TOP_RACER) // 우승자 이름 형식에 맞게 가공
    Prompt.displayMessage(GameOutputMsg.winnerPrefix + WINNER) // 우승자 출력
  }
}

export default App