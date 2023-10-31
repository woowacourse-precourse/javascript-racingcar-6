import { DataFetcher } from "./controllers/gameDataFetcher.js"
import { Controller } from "./controllers/raceController.js"

class App {
  async play() {
    const CARS = await DataFetcher.getCars() // 사용자로부터 자동차 이름들을 입력받음
    const RACE_ROUND = await DataFetcher.getRounds() // 사용자로부터 레이싱 라운드를 입력받음
    const RACED_CARS = Controller.playRaceGame(CARS, RACE_ROUND) // 지정된 라운드만큼 레이스를 진행
    Controller.showWinner(RACED_CARS) // 레이스의 승리자를 출력
  }
}

export default App;
