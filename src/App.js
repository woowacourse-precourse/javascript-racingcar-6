import { DataFetcher } from "./controllers/gameDataFetcher.js"
import { Controller } from "./controllers/raceController.js"

class App {
  async play() {
    const CARS = await DataFetcher.getCars() // 자동차 객체 생성
    const RACE_ROUND = await DataFetcher.getRounds() // 레이싱 라운드 생성
    const RACED_CARS = Controller.playRaceGame(CARS, RACE_ROUND) // 레이싱 라운드 진행
    Controller.showWinner(RACED_CARS) // 레이싱 승리자 출력
  }
}

export default App;
