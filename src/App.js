import InputController from "./Controller/InputController.js";
import RacingView from "./View/RacingView.js";

class App {
  constructor() {
    this.InputController = new InputController();
  }

  async play() {
    // 1. 사용자의 입력을 받는다
    const car = await this.InputController.init();

    // 3. 자동차 경주 게임을 진행한다
    const racing = new RacingView(car);

    // 3-4. 최종 우승자를 출력한다
    racing.printFinalResult(car.cars);
  }
}

export default App;
